import React from "react";
import { G, Text } from "react-native-svg";
var WrappedText = function(_a) {
  var text = _a.text,
    x = _a.x,
    y = _a.y,
    fill = _a.fill,
    fontSize = _a.fontSize,
    fontFamily = _a.fontFamily,
    maxLegendWidth = _a.maxLegendWidth;
  var lineHeight = fontSize * 1.5;
  // Helper function to split text into lines
  var wrapText = function(text, fontSize) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var testLine = currentLine + " " + word;
      var testWidth = fontSize * 0.6 * testLine.length; // Approximate text width calculation
      if (testWidth < maxLegendWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };
  var lines = wrapText(text, fontSize);
  return (
    <G>
      {lines.map(function(line, index) {
        return (
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
        );
      })}
    </G>
  );
};
export default WrappedText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JhcHBlZFRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3VzdG9tL1dyYXBwZWRUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFMUIsT0FBTyxFQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVoRCxJQUFNLFdBQVcsR0FBRyxVQUFDLEVBZ0JwQjtRQWZDLElBQUksVUFBQSxFQUNKLENBQUMsT0FBQSxFQUNELENBQUMsT0FBQSxFQUNELElBQUksVUFBQSxFQUNKLFFBQVEsY0FBQSxFQUNSLFVBQVUsZ0JBQUEsRUFDVixjQUFjLG9CQUFBO0lBVWQsSUFBTSxVQUFVLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUVsQywyQ0FBMkM7SUFDM0MsSUFBTSxRQUFRLEdBQUcsVUFBQyxJQUFJLEVBQUUsUUFBUTtRQUM5QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQU0sUUFBUSxHQUFNLFdBQVcsU0FBSSxJQUFNLENBQUM7WUFDMUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMscUNBQXFDO1lBRXpGLElBQUksU0FBUyxHQUFHLGNBQWMsRUFBRTtnQkFDOUIsV0FBVyxHQUFHLFFBQVEsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4QixXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV2QyxPQUFPLENBQ0wsQ0FBQyxDQUFDLENBQ0E7TUFBQSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FDMUIsQ0FBQyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1gsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQ25CLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUUxQjtVQUFBLENBQUMsSUFBSSxDQUNQO1FBQUEsRUFBRSxJQUFJLENBQUMsQ0FDUixFQVgyQixDQVczQixDQUFDLENBQ0o7SUFBQSxFQUFFLENBQUMsQ0FBQyxDQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVdpbmRvd0RpbWVuc2lvbnMgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5pbXBvcnQgeyBTdmcsIEcsIFRleHQgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXN2Z1wiO1xuXG5jb25zdCBXcmFwcGVkVGV4dCA9ICh7XG4gIHRleHQsXG4gIHgsXG4gIHksXG4gIGZpbGwsXG4gIGZvbnRTaXplLFxuICBmb250RmFtaWx5LFxuICBtYXhMZWdlbmRXaWR0aFxufToge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBmaWxsOiBzdHJpbmc7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgbWF4TGVnZW5kV2lkdGg6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3QgbGluZUhlaWdodCA9IGZvbnRTaXplICogMS41O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBzcGxpdCB0ZXh0IGludG8gbGluZXNcbiAgY29uc3Qgd3JhcFRleHQgPSAodGV4dCwgZm9udFNpemUpID0+IHtcbiAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgbGV0IGN1cnJlbnRMaW5lID0gd29yZHNbMF07XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBjb25zdCB0ZXN0TGluZSA9IGAke2N1cnJlbnRMaW5lfSAke3dvcmR9YDtcbiAgICAgIGNvbnN0IHRlc3RXaWR0aCA9IGZvbnRTaXplICogMC42ICogdGVzdExpbmUubGVuZ3RoOyAvLyBBcHByb3hpbWF0ZSB0ZXh0IHdpZHRoIGNhbGN1bGF0aW9uXG5cbiAgICAgIGlmICh0ZXN0V2lkdGggPCBtYXhMZWdlbmRXaWR0aCkge1xuICAgICAgICBjdXJyZW50TGluZSA9IHRlc3RMaW5lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZXMucHVzaChjdXJyZW50TGluZSk7XG4gICAgICAgIGN1cnJlbnRMaW5lID0gd29yZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lcy5wdXNoKGN1cnJlbnRMaW5lKTtcbiAgICByZXR1cm4gbGluZXM7XG4gIH07XG5cbiAgY29uc3QgbGluZXMgPSB3cmFwVGV4dCh0ZXh0LCBmb250U2l6ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rz5cbiAgICAgIHtsaW5lcy5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBmaWxsPXtmaWxsfVxuICAgICAgICAgIGZvbnRTaXplPXtmb250U2l6ZX1cbiAgICAgICAgICBmb250RmFtaWx5PXtmb250RmFtaWx5fVxuICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgeT17eSArIGluZGV4ICogbGluZUhlaWdodH1cbiAgICAgICAgPlxuICAgICAgICAgIHtsaW5lfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApKX1cbiAgICA8L0c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkVGV4dDtcbiJdfQ==
