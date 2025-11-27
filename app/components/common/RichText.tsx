import React from "react";

type Props = {
  MDText: string;
};

const parseMarkdownText = (text: string) => {
  const parts = [];
  let currentIndex = 0;
  const regex = /\*\*(.*?)\*\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > currentIndex) {
      parts.push({
        text: text.slice(currentIndex, match.index),
        bold: false,
      });
    }
    // Add the bold part
    parts.push({
      text: match[1],
      bold: true,
    });
    currentIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push({
      text: text.slice(currentIndex),
      bold: false,
    });
  }

  return parts.length > 0 ? parts : [{ text, bold: false }];
};

function RichText({ MDText }: Props) {
  return (
    <p className="">
      {parseMarkdownText(MDText).map((part, index) => (
        <span
          key={index}
          className={part.bold ? "font-bold text-gray-900" : "text-gray-600"}
        >
          {part.text}
        </span>
      ))}
    </p>
  );
}

export default RichText;
