"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Works", href: "#works" },
    { name: "Involvements", href: "#involvements" },
    { name: "Contact Me", href: "#contact" },
    { name: "About Me", href: "#about" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
            <nav
                className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 ease-in-out border pointer-events-auto",
                    isScrolled
                        ? "bg-background/80 border-border/40 shadow-sm backdrop-blur-md"
                        : "bg-transparent border-transparent shadow-none"
                )}
            >
                <div className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(item.href)?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className={cn(
                                "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                                "text-muted-foreground hover:text-foreground",
                                "hover:bg-muted/50"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}
