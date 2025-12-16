"use client";

import Link from "next/link";
import pages from "../data/pages.json";
import React from "react";

export default function PageNav({ currentId }: { currentId: number }) {
  const index = pages.findIndex((p) => p.id === currentId);
  const prev = pages[(index - 1 + pages.length) % pages.length];
  const next = pages[(index + 1) % pages.length];

  return (
    <nav className="mt-6 flex items-center justify-between gap-4">
      <Link
        href={`/page${prev.id}`}
        className="rounded px-4 py-2 text-sm font-medium ring-offset-1 hover:bg-gray-100"
      >
        ← Prev (Page {prev.id})
      </Link>
      <Link
        href={`/page${next.id}`}
        className="rounded px-4 py-2 text-sm font-medium ring-offset-1 hover:bg-gray-100"
      >
        Next (Page {next.id}) →
      </Link>
    </nav>
  );
}
