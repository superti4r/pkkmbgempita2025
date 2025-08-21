"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
};

export default function LinkCard({ label, href, icon, badge }: Props) {
  const LucideIcon = (icon && (Icons as any)[icon]) || Icons.Link;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between w-full rounded-2xl border border-muted/40 
                   bg-background/70 backdrop-blur-md p-5 shadow-sm 
                   transition-all duration-300 hover:shadow-md hover:border-primary/60"
      >
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-primary/10 text-primary shadow-inner">
            <LucideIcon className="size-5" />
          </span>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight transition-colors group-hover:text-primary">
              {label}
            </span>
            <span className="text-xs text-muted-foreground">
              {new URL(href).hostname}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {badge && (
            <span
              className="text-[10px] font-medium px-2.5 py-1 rounded-full 
                         bg-primary/10 text-primary shadow-sm"
            >
              {badge}
            </span>
          )}
          <ExternalLink
            className="size-4 opacity-50 transition-colors 
                       group-hover:opacity-100 group-hover:text-primary"
          />
        </div>
      </Link>
    </motion.div>
  );
}
