import React from "react";
import { cn } from "@/lib/utils";

type StickyNoteColor = "yellow" | "pink" | "blue" | "green" | "purple";

interface StickyNoteBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    color?: StickyNoteColor;
    rotate?: number;
}

const colorStyles: Record<StickyNoteColor, string> = {
    yellow: "bg-[#fff9c4] text-yellow-900 border-yellow-200",
    pink: "bg-[#ffe4e1] text-pink-900 border-pink-200",
    blue: "bg-[#e0f7fa] text-blue-900 border-blue-200",
    green: "bg-[#e8f5e9] text-green-900 border-green-200",
    purple: "bg-[#f3e5f5] text-purple-900 border-purple-200",
};

export function StickyNoteBadge({
    children,
    color = "yellow",
    rotate = -2,
    className,
    style,
    ...props
}: StickyNoteBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center justify-center px-4 py-1.5",
                "font-nanum text-xl tracking-wide leading-none",
                "border rounded-sm shadow-sm",
                "transition-all duration-300 ease-in-out",
                "cursor-default select-none",
                colorStyles[color],
                className
            )}
            style={{
                transform: `rotate(${rotate}deg)`,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
}
