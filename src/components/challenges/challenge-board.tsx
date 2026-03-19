"use client";

import { motion, type PanInfo } from "framer-motion";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import { challenges as initialChallenges, connections } from "@/lib/data";

const NODE_WIDTH = 220;
const NODE_HEIGHT = 200;

interface ChallengeNode {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoId: string;
  position: { x: number; y: number };
}

function ConnectionLine({
  from,
  to,
  nodes,
}: {
  from: number;
  to: number;
  nodes: ChallengeNode[];
}) {
  const fromNode = nodes.find((n) => n.id === from);
  const toNode = nodes.find((n) => n.id === to);
  if (!fromNode || !toNode) return null;

  const isVertical = Math.abs(toNode.position.y - fromNode.position.y) > 50;

  let startX: number, startY: number, endX: number, endY: number;

  if (isVertical) {
    startX = fromNode.position.x + NODE_WIDTH / 2;
    startY = fromNode.position.y + NODE_HEIGHT;
    endX = toNode.position.x + NODE_WIDTH / 2;
    endY = toNode.position.y;
  } else {
    startX = fromNode.position.x + NODE_WIDTH;
    startY = fromNode.position.y + NODE_HEIGHT / 2;
    endX = toNode.position.x;
    endY = toNode.position.y + NODE_HEIGHT / 2;
  }

  const cp1X = isVertical ? startX : startX + (endX - startX) * 0.5;
  const cp1Y = isVertical ? startY + (endY - startY) * 0.5 : startY;
  const cp2X = isVertical ? endX : endX - (endX - startX) * 0.5;
  const cp2Y = isVertical ? endY - (endY - startY) * 0.5 : endY;

  const path = `M${startX},${startY} C${cp1X},${cp1Y} ${cp2X},${cp2Y} ${endX},${endY}`;

  return (
    <path
      d={path}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeDasharray="8,6"
      strokeLinecap="round"
      opacity={0.15}
      className="text-foreground"
    />
  );
}

export function ChallengeBoard() {
  const [nodes, setNodes] = useState<ChallengeNode[]>(initialChallenges);
  const canvasRef = useRef<HTMLDivElement>(null);
  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [draggingNodeId, setDraggingNodeId] = useState<number | null>(null);

  const contentWidth = Math.max(...nodes.map((n) => n.position.x + NODE_WIDTH)) + 60;
  const contentHeight = Math.max(...nodes.map((n) => n.position.y + NODE_HEIGHT)) + 60;

  const handleDragStart = (nodeId: number) => {
    setDraggingNodeId(nodeId);
    const node = nodes.find((n) => n.id === nodeId);
    if (node) dragStartPosition.current = { ...node.position };
  };

  const handleDrag = (nodeId: number, { offset }: PanInfo) => {
    if (draggingNodeId !== nodeId || !dragStartPosition.current) return;
    flushSync(() => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId
            ? {
                ...node,
                position: {
                  x: Math.max(0, dragStartPosition.current!.x + offset.x),
                  y: Math.max(0, dragStartPosition.current!.y + offset.y),
                },
              }
            : node
        )
      );
    });
  };

  const handleDragEnd = () => {
    setDraggingNodeId(null);
    dragStartPosition.current = null;
  };

  const handleClick = (videoId: string) => {
    if (videoId.startsWith("PLACEHOLDER")) {
      window.open("https://www.youtube.com/@ALUTHINKSPHERE", "_blank");
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl glass p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Badge
            variant="outline"
            className="rounded-full border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600"
          >
            Active
          </Badge>
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Challenge Board
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Drag cards to explore
        </span>
      </div>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className="relative h-[520px] w-full overflow-auto rounded-2xl border border-white/30 bg-white/20"
        style={{ minHeight: "400px" }}
      >
        <div
          className="relative"
          style={{ minWidth: contentWidth, minHeight: contentHeight }}
        >
          {/* SVG Connections */}
          <svg
            className="absolute top-0 left-0 pointer-events-none"
            width={contentWidth}
            height={contentHeight}
            style={{ overflow: "visible" }}
          >
            {connections.map((c) => (
              <ConnectionLine
                key={`${c.from}-${c.to}`}
                from={c.from}
                to={c.to}
                nodes={nodes}
              />
            ))}
          </svg>

          {/* Challenge Cards */}
          {nodes.map((node) => {
            const isDragging = draggingNodeId === node.id;
            return (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                dragConstraints={{ left: 0, top: 0, right: 100000, bottom: 100000 }}
                onDragStart={() => handleDragStart(node.id)}
                onDrag={(_, info) => handleDrag(node.id, info)}
                onDragEnd={handleDragEnd}
                style={{
                  x: node.position.x,
                  y: node.position.y,
                  width: NODE_WIDTH,
                  transformOrigin: "0 0",
                }}
                className="absolute cursor-grab"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: node.id * 0.08 }}
                whileHover={{ scale: 1.02 }}
                whileDrag={{ scale: 1.05, zIndex: 50, cursor: "grabbing" }}
              >
                <Card
                  className={`group/node relative w-full overflow-hidden rounded-2xl glass transition-all hover:shadow-lg ${isDragging ? "shadow-xl ring-2 ring-foreground/20" : ""}`}
                >
                  {/* Challenge number watermark */}
                  <span className="absolute top-2 right-3 text-3xl font-bold text-foreground/5 leading-none pointer-events-none z-0">
                    {String(node.id).padStart(2, "0")}
                  </span>

                  {/* Thumbnail */}
                  <div
                    className="relative aspect-video overflow-hidden rounded-t-xl cursor-pointer"
                    onClick={() => handleClick(node.videoId)}
                  >
                    <Image
                      src={node.imageUrl}
                      alt={node.title}
                      width={220}
                      height={124}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/node:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/node:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-8 h-8 text-white drop-shadow-lg" fill="white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-3 relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className="rounded-full border-foreground/10 bg-white/60 px-1.5 py-0 text-[9px] uppercase tracking-[0.15em] text-muted-foreground"
                      >
                        challenge
                      </Badge>
                      <h3 className="truncate text-xs font-semibold tracking-tight">
                        {node.title}
                      </h3>
                    </div>
                    <p className="text-[10px] leading-relaxed text-muted-foreground line-clamp-2">
                      {node.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/60 mt-1.5">
                      <ArrowRight className="h-2.5 w-2.5" />
                      <span className="uppercase tracking-[0.1em]">Connected</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/30 bg-white/20 px-4 py-2.5">
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="uppercase tracking-[0.15em]">
              {nodes.length} Challenges
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            <span className="uppercase tracking-[0.15em]">
              {connections.length} Connections
            </span>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          Drag nodes to reposition
        </p>
      </div>
    </div>
  );
}

/* Mobile fallback */
export function ChallengeMobileList() {
  return (
    <div className="flex flex-col gap-4">
      {initialChallenges.map((ch) => (
        <Card key={ch.id} className="glass border-white/70 rounded-2xl overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={ch.imageUrl}
              alt={ch.title}
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3">
              <Badge className="rounded-full bg-white/80 text-foreground text-xs">
                {String(ch.id).padStart(2, "0")}
              </Badge>
            </div>
            <a
              href={ch.videoId.startsWith("PLACEHOLDER") ? "https://www.youtube.com/@ALUTHINKSPHERE" : `https://www.youtube.com/watch?v=${ch.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity"
            >
              <Play className="w-10 h-10 text-white drop-shadow-lg" fill="white" />
            </a>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-sm mb-1">{ch.title}</h3>
            <p className="text-xs text-muted-foreground">{ch.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
