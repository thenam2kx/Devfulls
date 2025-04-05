"use client";

import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // You can choose different styles

// This component can be used to wrap code blocks in your blog content
export default function CodeHighlight({
  children,
  language = "",
  className = "",
}: {
  children: string;
  language?: string;
  className?: string;
}) {
  useEffect(() => {
    // Register any languages you want to support
    // For example, to support TypeScript:
    // hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

    // Highlight all code blocks
    hljs.highlightAll();
  }, []);

  return (
    <pre className={`hljs ${className}`}>
      <code className={language ? `language-${language}` : ""}>{children}</code>
    </pre>
  );
}
