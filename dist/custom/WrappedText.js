var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import React from "react";
import { G, Text } from "react-native-svg";
var WrappedText = function(_a) {
  var text = _a.text,
    x = _a.x,
    y = _a.y,
    fill = _a.fill,
    legendValueProps = _a.legendValueProps;
  if (!text) {
    console.log(__assign({ text: text }, legendValueProps));
    return;
  }
  var lineHeight = legendValueProps.fontSize * 1.5;
  // Helper function to split text into lines
  var wrapText = function(text, fontSize) {
    if (!text) return;
    var words = text === null || text === void 0 ? void 0 : text.split(" ");
    var lines = [];
    var currentLine = words[0];
    for (var i = 1; i < words.length; i++) {
      var word = words[i];
      var testLine = currentLine + " " + word;
      var testWidth = fontSize * 0.6 * testLine.length; // Approximate text width calculation
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
  var lines = wrapText(text, legendValueProps.fontSize);
  return (
    <G>
      {lines.map(function(line, index) {
        return (
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
        );
      })}
    </G>
  );
};
export default WrappedText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JhcHBlZFRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3VzdG9tL1dyYXBwZWRUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUzNDLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFZcEI7UUFYQyxJQUFJLFVBQUEsRUFDSixDQUFDLE9BQUEsRUFDRCxDQUFDLE9BQUEsRUFDRCxJQUFJLFVBQUEsRUFDSixnQkFBZ0Isc0JBQUE7SUFRaEIsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLFlBQUcsSUFBSSxNQUFBLElBQUssZ0JBQWdCLEVBQUcsQ0FBQztRQUMzQyxPQUFPO0tBQ1I7SUFDRCxJQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0lBRW5ELDJDQUEyQztJQUMzQyxJQUFNLFFBQVEsR0FBRyxVQUFDLElBQUksRUFBRSxRQUFRO1FBQzlCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQU0sUUFBUSxHQUFNLFdBQVcsU0FBSSxJQUFNLENBQUM7WUFDMUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMscUNBQXFDO1lBRXpGLElBQUksU0FBUyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtnQkFDekMsV0FBVyxHQUFHLFFBQVEsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN4QixXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV4RCxPQUFPLENBQ0wsQ0FBQyxDQUFDLENBQ0E7TUFBQSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsQ0FDMUIsQ0FBQyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ1gsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ1gsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQ3BDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUN4QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUUxQjtVQUFBLENBQUMsSUFBSSxDQUNQO1FBQUEsRUFBRSxJQUFJLENBQUMsQ0FDUixFQVgyQixDQVczQixDQUFDLENBQ0o7SUFBQSxFQUFFLENBQUMsQ0FBQyxDQUNMLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixlQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEcsIFRleHQgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXN2Z1wiO1xuXG5leHBvcnQgdHlwZSBMZWdlbmRWYWx1ZVByb3BzID0ge1xuICBtYXhXaWR0aDogbnVtYmVyO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgbGluZUhlaWdodD86IHN0cmluZztcbn07XG5cbmNvbnN0IFdyYXBwZWRUZXh0ID0gKHtcbiAgdGV4dCxcbiAgeCxcbiAgeSxcbiAgZmlsbCxcbiAgbGVnZW5kVmFsdWVQcm9wc1xufToge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBmaWxsOiBzdHJpbmc7XG4gIGxlZ2VuZFZhbHVlUHJvcHM6IExlZ2VuZFZhbHVlUHJvcHM7XG59KSA9PiB7XG4gIGlmICghdGV4dCkge1xuICAgIGNvbnNvbGUubG9nKHsgdGV4dCwgLi4ubGVnZW5kVmFsdWVQcm9wcyB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbGluZUhlaWdodCA9IGxlZ2VuZFZhbHVlUHJvcHMuZm9udFNpemUgKiAxLjU7XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHNwbGl0IHRleHQgaW50byBsaW5lc1xuICBjb25zdCB3cmFwVGV4dCA9ICh0ZXh0LCBmb250U2l6ZSkgPT4ge1xuICAgIGlmICghdGV4dCkgcmV0dXJuO1xuICAgIGNvbnN0IHdvcmRzID0gdGV4dD8uc3BsaXQoXCIgXCIpO1xuICAgIGNvbnN0IGxpbmVzID0gW107XG4gICAgbGV0IGN1cnJlbnRMaW5lID0gd29yZHNbMF07XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBjb25zdCB0ZXN0TGluZSA9IGAke2N1cnJlbnRMaW5lfSAke3dvcmR9YDtcbiAgICAgIGNvbnN0IHRlc3RXaWR0aCA9IGZvbnRTaXplICogMC42ICogdGVzdExpbmUubGVuZ3RoOyAvLyBBcHByb3hpbWF0ZSB0ZXh0IHdpZHRoIGNhbGN1bGF0aW9uXG5cbiAgICAgIGlmICh0ZXN0V2lkdGggPCBsZWdlbmRWYWx1ZVByb3BzLm1heFdpZHRoKSB7XG4gICAgICAgIGN1cnJlbnRMaW5lID0gdGVzdExpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lcy5wdXNoKGN1cnJlbnRMaW5lKTtcbiAgICAgICAgY3VycmVudExpbmUgPSB3b3JkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmVzLnB1c2goY3VycmVudExpbmUpO1xuICAgIHJldHVybiBsaW5lcztcbiAgfTtcblxuICBjb25zdCBsaW5lcyA9IHdyYXBUZXh0KHRleHQsIGxlZ2VuZFZhbHVlUHJvcHMuZm9udFNpemUpO1xuXG4gIHJldHVybiAoXG4gICAgPEc+XG4gICAgICB7bGluZXMubWFwKChsaW5lLCBpbmRleCkgPT4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgZmlsbD17ZmlsbH1cbiAgICAgICAgICBmb250U2l6ZT17bGVnZW5kVmFsdWVQcm9wcy5mb250U2l6ZX1cbiAgICAgICAgICBmb250RmFtaWx5PXtsZWdlbmRWYWx1ZVByb3BzLmZvbnRGYW1pbHl9XG4gICAgICAgICAgeD17eH1cbiAgICAgICAgICB5PXt5ICsgaW5kZXggKiBsaW5lSGVpZ2h0fVxuICAgICAgICA+XG4gICAgICAgICAge2xpbmV9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICkpfVxuICAgIDwvRz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWRUZXh0O1xuIl19
