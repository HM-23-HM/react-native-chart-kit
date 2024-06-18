import React from "react";
import { useWindowDimensions } from "react-native";
import { Svg, G, Text } from "react-native-svg";

export type LegendValueProps = {
  maxWidth?: number;
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: string;
};

const WrappedText = ({
  text,
  x,
  y,
  fill,
  legendValueProps
}: {
  text: string;
  x: number;
  y: number;
  fill: string;
  legendValueProps: LegendValueProps;
}) => {
  const lineHeight = legendValueProps.fontSize * 1.5;

  // Helper function to split text into lines
  const wrapText = (text, fontSize) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const testLine = `${currentLine} ${word}`;
      const testWidth = fontSize * 0.6 * testLine.length; // Approximate text width calculation

      if (testWidth < legendValueProps.maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    lines.push(currentLine);
    return lines;
  };

  const lines = wrapText(text, legendValueProps.fontSize);

  return (
    <G>
      {lines.map((line, index) => (
        <Text
          key={index}
          fill={fill}
          fontSize={legendValueProps.fontSize}
          fontFamily={legendValueProps.fontFamily}
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
