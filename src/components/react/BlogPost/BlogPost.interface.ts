import type { CollectionEntry } from "astro:content";

export type BlogPostProps = Partial<HTMLDivElement> &
  CollectionEntry<"blog"> & { index: number };
