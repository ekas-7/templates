"use client";

import Image from "next/image";
import React from "react";

type PageItem = {
  id: number;
  title: string;
  text: string;
  image: string;
  alt?: string;
};

export default function PageCard({ item }: { item: PageItem }) {
  return (
    <article className="max-w-3xl rounded-lg border p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
          <Image
            src={item.image}
            alt={item.alt ?? item.title}
            fill
            sizes="(max-width: 768px) 100px, 80px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.text}</p>
        </div>
      </div>
    </article>
  );
}
