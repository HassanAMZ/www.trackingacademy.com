'use client';

import { Card } from '@/components/ui/card';
import roadmapData from '@/data/roadmap';
import { X } from 'lucide-react';
import React, { JSX, useState } from 'react';
import ReactFlow, { Edge, Handle, Node, Position } from 'reactflow';
import 'reactflow/dist/style.css';

interface SubItem {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
}

interface MainNode {
  id: string;
  title: string;
  subItems: SubItem[];
}

interface NodeData {
  title: string;
  isEven?: boolean;
  onClick?: (item: SubItem) => void;
}

interface SidebarProps {
  data: SubItem | null;
  onClose: () => void;
}

const MainNode: React.FC<{ data: NodeData }> = ({ data }) => (
  <div>
    <Card className="p-4 bg-primary text-primary-foreground min-w-[200px]">
      <div className="font-semibold text-lg">{data.title}</div>
    </Card>
    <Handle id="top" type="target" position={Position.Top} className="w-2 h-2 !bg-primary" />
    <Handle id="bottom" type="source" position={Position.Bottom} className="w-2 h-2 !bg-primary" />
    <Handle id="left" type="source" position={Position.Left} className="w-2 h-2 !bg-primary" />
    <Handle id="right" type="source" position={Position.Right} className="w-2 h-2 !bg-primary" />
  </div>
);

const SubNode: React.FC<{ data: NodeData & SubItem }> = ({ data }) => (
  <div>
    <Card
      className="p-2 bg-secondary hover:bg-secondary/80 cursor-pointer text-secondary-foreground min-w-[180px]"
      onClick={() => data.onClick?.(data)}
    >
      <div className="text-sm">{data.title}</div>
    </Card>
    <Handle
      id={data.isEven ? 'left' : 'right'}
      type="target"
      position={data.isEven ? Position.Left : Position.Right}
      className="w-2 h-2 !bg-secondary"
    />
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ data, onClose }) =>
  !data ? null : (
    <div className="fixed right-0 top-0 w-96 h-full bg-card text-card-foreground shadow-lg p-6 overflow-y-auto border-l">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <button onClick={onClose} className="p-1 hover:bg-secondary rounded">
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground">{data.description}</p>
        {data.keyPoints && (
          <>
            <h3 className="font-semibold mt-4">Key Learning Points:</h3>
            <ul className="list-disc pl-4 space-y-2">
              {data.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );

const mainNodes: MainNode[] = roadmapData;

export default function LearningRoadmap(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<SubItem | null>(null);

  const nodeVerticalSpacing = 300;
  const subNodeVerticalSpacing = 60;
  const sideOffset = 375;

  const nodes: Node[] = mainNodes.flatMap((mainNode, mainIndex) => {
    const isEven = mainIndex % 2 === 0;

    // Main node
    const mainNodeEl: Node = {
      id: mainNode.id,
      type: 'main',
      position: { x: 400, y: mainIndex * nodeVerticalSpacing + 5 },
      data: { title: mainNode.title },
    };

    // Sub nodes alternating between left and right
    const subNodes: Node[] = mainNode.subItems.map((subItem, subIndex) => ({
      id: subItem.id,
      type: 'sub',
      position: {
        x: isEven ? 400 + sideOffset : 400 - sideOffset,
        y: mainIndex * nodeVerticalSpacing + subIndex * subNodeVerticalSpacing + 5,
      },
      data: {
        ...subItem,
        onClick: setSelectedItem,
        isEven,
      },
    }));

    return [mainNodeEl, ...subNodes];
  });

  const edges: Edge[] = [
    // Main path edges (vertical connections)
    ...mainNodes.slice(0, -1).map((node, index) => ({
      id: `e-${node.id}-${mainNodes[index + 1].id}`,
      source: node.id,
      target: mainNodes[index + 1].id,
      type: 'smoothstep',
      animated: true,
      sourceHandle: 'bottom',
      targetHandle: 'top',
    })),
    // Subnode edges (horizontal connections)
    ...mainNodes.flatMap((mainNode) =>
      mainNode.subItems.map((subItem) => {
        const mainNodeIndex = mainNodes.findIndex((node) => node.id === mainNode.id);
        const isEven = mainNodeIndex % 2 === 0;

        return {
          id: `e-${mainNode.id}-${subItem.id}`,
          source: mainNode.id,
          target: subItem.id,
          type: 'smoothstep',
          sourceHandle: isEven ? 'right' : 'left',
          targetHandle: isEven ? 'left' : 'right',
          style: {
            strokeWidth: 1,
            strokeDasharray: '5 5',
          },
        };
      }),
    ),
  ];

  const nodeTypes = {
    main: MainNode,
    sub: SubNode,
  };

  return (
    <div className="w-full h-screen relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView={false}
        className="bg-background"
      >
        {/* <Background /> */}
        {/* <Controls className="bg-card border" /> */}
      </ReactFlow>
      <Sidebar data={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}