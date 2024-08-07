"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Text from "@/components/ui/text";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const tableVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionDiv = motion.div;
const MotionAvatar = motion(Avatar);
const MotionTableRow = motion.tr;
const MotionCard = motion(Card);
const MotionCardHeader = motion(CardHeader);
const MotionCardContent = motion(CardContent);
const MotionContainer = motion(Container);
const MotionSeparator = motion(Separator);

export {
  itemVariants,
  tableVariants,
  rowVariants,
  containerVariants,
  MotionContainer,
  MotionSeparator,
  MotionAvatar,
  MotionButton,
  MotionDiv,
  MotionCard,
  MotionCardHeader,
  MotionCardContent,
  MotionText,
  MotionTableRow,
};
