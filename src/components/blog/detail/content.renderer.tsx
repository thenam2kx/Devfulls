"use client";
import DOMPurify from "isomorphic-dompurify";
import Box from "@mui/material/Box";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HighlightJsSetup from "./highlightjs.setup";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CodeHighlight from "./code.highlight";

// This component safely renders blog content with code highlighting
const ContentRenderer = ({ content }: { content: string }) => {
  // Process content to wrap code blocks with our CodeHighlight component
  const processContent = (htmlContent: string) => {
    // First sanitize the HTML to prevent XSS attacks
    const sanitizedContent = DOMPurify.sanitize(htmlContent);

    // Create a temporary DOM element to manipulate the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = sanitizedContent;

    // Find all code blocks and add the appropriate classes
    const codeBlocks = tempDiv.querySelectorAll("pre code");
    codeBlocks.forEach((codeBlock) => {
      // Check for language class (e.g., language-javascript)
      const languageClass = Array.from(codeBlock.classList).find((cls) =>
        cls.startsWith("language-")
      );

      if (languageClass) {
        const language = languageClass.replace("language-", "");
        codeBlock.setAttribute("data-language", language);
      }
    });

    return tempDiv.innerHTML;
  };

  return (
    <Box
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: processContent(content) }}
      sx={{
        "& pre": {
          borderRadius: 2,
          p: 3,
          my: 4,
          overflow: "auto",
          position: "relative",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        },
        "& code": {
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          lineHeight: 1.5,
        },
        // Add a language label to code blocks
        "& pre code[data-language]::before": {
          content: "attr(data-language)",
          position: "absolute",
          top: "0.5rem",
          right: "1rem",
          fontSize: "0.75rem",
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          background: "rgba(0,0,0,0.3)",
          color: "white",
          textTransform: "uppercase",
        },
      }}
    />
  );
}

export default ContentRenderer;