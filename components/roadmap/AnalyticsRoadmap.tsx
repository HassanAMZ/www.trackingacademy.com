"use client";

import { Card } from "@/components/ui/card";
import roadmapData from "@/data/roadmap";
import { X } from "lucide-react";
import React, { JSX, useState } from "react";
import ReactFlow, { Edge, Handle, Node, Position } from "reactflow";
import "reactflow/dist/style.css";

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
    <Card className="bg-primary text-primary-foreground min-w-[200px] p-4">
      <div className="text-lg font-semibold">{data.title}</div>
    </Card>
    <Handle
      id="top"
      type="target"
      position={Position.Top}
      className="bg-primary! h-2 w-2"
    />
    <Handle
      id="bottom"
      type="source"
      position={Position.Bottom}
      className="bg-primary! h-2 w-2"
    />
    <Handle
      id="left"
      type="source"
      position={Position.Left}
      className="bg-primary! h-2 w-2"
    />
    <Handle
      id="right"
      type="source"
      position={Position.Right}
      className="bg-primary! h-2 w-2"
    />
  </div>
);

const SubNode: React.FC<{ data: NodeData & SubItem }> = ({ data }) => (
  <div>
    <Card
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80 min-w-[180px] cursor-pointer p-2"
      onClick={() => data.onClick?.(data)}
    >
      <div className="text-sm">{data.title}</div>
    </Card>
    <Handle
      id={data.isEven ? "left" : "right"}
      type="target"
      position={data.isEven ? Position.Left : Position.Right}
      className="bg-secondary! h-2 w-2"
    />
  </div>
);

const Sidebar: React.FC<SidebarProps> = ({ data, onClose }) =>
  !data ? null : (
    <div className="bg-card text-card-foreground fixed top-0 right-0 h-full w-96 overflow-y-auto border-l p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <button onClick={onClose} className="hover:bg-secondary rounded p-1">
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground">{data.description}</p>
        {data.keyPoints && (
          <>
            <h3 className="mt-4 font-semibold">Key Learning Points:</h3>
            <ul className="list-disc space-y-2 pl-4">
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
    const isEven = mainIndex % 2 === 0; // Main node
    const mainNodeEl: Node = {
      id: mainNode.id,
      type: "main",
      position: { x: 400, y: mainIndex * nodeVerticalSpacing + 5 },
      data: { title: mainNode.title },
    }; // Sub nodes alternating between left and right
    const subNodes: Node[] = mainNode.subItems.map((subItem, subIndex) => ({
      id: subItem.id,
      type: "sub",
      position: {
        x: isEven ? 400 + sideOffset : 400 - sideOffset,
        y:
          mainIndex * nodeVerticalSpacing +
          subIndex * subNodeVerticalSpacing +
          5,
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
      type: "smoothstep",
      animated: true,
      sourceHandle: "bottom",
      targetHandle: "top",
    })),
    // Subnode edges (horizontal connections)
    ...mainNodes.flatMap((mainNode) =>
      mainNode.subItems.map((subItem) => {
        const mainNodeIndex = mainNodes.findIndex(
          (node) => node.id === mainNode.id,
        );
        const isEven = mainNodeIndex % 2 === 0;
        return {
          id: `e-${mainNode.id}-${subItem.id}`,
          source: mainNode.id,
          target: subItem.id,
          type: "smoothstep",
          sourceHandle: isEven ? "right" : "left",
          targetHandle: isEven ? "left" : "right",
          style: {
            strokeWidth: 1,
            strokeDasharray: "5 5",
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
    <div className="relative h-screen w-full">
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
