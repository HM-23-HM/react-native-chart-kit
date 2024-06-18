import React from "react";
import { useWindowDimensions } from "react-native";
import { Svg, G, Text } from "react-native-svg";

const WrappedText = ({ text, x, y, fill, fontSize, fontFamily }) => {
  const { width: screenWidth } = useWindowDimensions();
  const width = screenWidth * 0.2;
  const lineHeight = fontSize * 1.5;

  // Helper function to split text into lines
  const wrapText = (text, fontSize) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const testLine = `${currentLine} ${word}`;
      const testWidth = fontSize * 0.6 * testLine.length; // Approximate text width calculation

      if (testWidth < width) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    lines.push(currentLine);
    return lines;
  };

  const lines = wrapText(text, fontSize);

  return (
    <G>
      {lines.map((line, index) => (
        <Text
          key={index}
          fill={fill}
          fontSize={fontSize}
          fontFamily={fontFamily}
          x={x}
          y={y + index * lineHeight}
        >
          {line}
        </Text>
      ))}
    </G>
  );
};

export default WrappedText;
