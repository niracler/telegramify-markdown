// lib/convert.d.ts

declare function convert(markdown: string, unsupportedTagsStrategy?: "escape" | "remove" | "keep"): string;

export = convert;
