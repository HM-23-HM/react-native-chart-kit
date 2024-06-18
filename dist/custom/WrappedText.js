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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JhcHBlZFRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3VzdG9tL1dyYXBwZWRUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUzNDLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFZcEI7UUFYQyxJQUFJLFVBQUEsRUFDSixDQUFDLE9BQUEsRUFDRCxDQUFDLE9BQUEsRUFDRCxJQUFJLFVBQUEsRUFDSixnQkFBZ0Isc0JBQUE7SUFRZCxJQUFHLENBQUMsSUFBSSxFQUFDO1FBQ0wsT0FBTyxDQUFDLEdBQUcsWUFBRyxJQUFJLE1BQUEsSUFBSyxnQkFBZ0IsRUFBRyxDQUFDO1FBQzNDLE9BQU07S0FDVDtJQUNILElBQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFFbkQsMkNBQTJDO0lBQzNDLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLFFBQVE7UUFDOUIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBTSxRQUFRLEdBQU0sV0FBVyxTQUFJLElBQU0sQ0FBQztZQUMxQyxJQUFNLFNBQVMsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQ0FBcUM7WUFFekYsSUFBSSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO2dCQUN6QyxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3hCLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjtRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7SUFFRixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXhELE9BQU8sQ0FDTCxDQUFDLENBQUMsQ0FDQTtNQUFBLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxDQUMxQixDQUFDLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FDWCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDWCxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FDcEMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQ3hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBRTFCO1VBQUEsQ0FBQyxJQUFJLENBQ1A7UUFBQSxFQUFFLElBQUksQ0FBQyxDQUNSLEVBWDJCLENBVzNCLENBQUMsQ0FDSjtJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQ0wsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRywgVGV4dCB9IGZyb20gXCJyZWFjdC1uYXRpdmUtc3ZnXCI7XG5cbmV4cG9ydCB0eXBlIExlZ2VuZFZhbHVlUHJvcHMgPSB7XG4gIG1heFdpZHRoOiBudW1iZXI7XG4gIGZvbnRTaXplPzogbnVtYmVyO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0Pzogc3RyaW5nO1xufTtcblxuY29uc3QgV3JhcHBlZFRleHQgPSAoe1xuICB0ZXh0LFxuICB4LFxuICB5LFxuICBmaWxsLFxuICBsZWdlbmRWYWx1ZVByb3BzXG59OiB7XG4gIHRleHQ6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGZpbGw6IHN0cmluZztcbiAgbGVnZW5kVmFsdWVQcm9wczogTGVnZW5kVmFsdWVQcm9wcztcbn0pID0+IHtcbiAgICBpZighdGV4dCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgdGV4dCwgLi4ubGVnZW5kVmFsdWVQcm9wcyB9KTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICBjb25zdCBsaW5lSGVpZ2h0ID0gbGVnZW5kVmFsdWVQcm9wcy5mb250U2l6ZSAqIDEuNTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3BsaXQgdGV4dCBpbnRvIGxpbmVzXG4gIGNvbnN0IHdyYXBUZXh0ID0gKHRleHQsIGZvbnRTaXplKSA9PiB7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm47XG4gICAgY29uc3Qgd29yZHMgPSB0ZXh0Py5zcGxpdChcIiBcIik7XG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudExpbmUgPSB3b3Jkc1swXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgIGNvbnN0IHRlc3RMaW5lID0gYCR7Y3VycmVudExpbmV9ICR7d29yZH1gO1xuICAgICAgY29uc3QgdGVzdFdpZHRoID0gZm9udFNpemUgKiAwLjYgKiB0ZXN0TGluZS5sZW5ndGg7IC8vIEFwcHJveGltYXRlIHRleHQgd2lkdGggY2FsY3VsYXRpb25cblxuICAgICAgaWYgKHRlc3RXaWR0aCA8IGxlZ2VuZFZhbHVlUHJvcHMubWF4V2lkdGgpIHtcbiAgICAgICAgY3VycmVudExpbmUgPSB0ZXN0TGluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmVzLnB1c2goY3VycmVudExpbmUpO1xuICAgICAgICBjdXJyZW50TGluZSA9IHdvcmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGluZXMucHVzaChjdXJyZW50TGluZSk7XG4gICAgcmV0dXJuIGxpbmVzO1xuICB9O1xuXG4gIGNvbnN0IGxpbmVzID0gd3JhcFRleHQodGV4dCwgbGVnZW5kVmFsdWVQcm9wcy5mb250U2l6ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rz5cbiAgICAgIHtsaW5lcy5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxUZXh0XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBmaWxsPXtmaWxsfVxuICAgICAgICAgIGZvbnRTaXplPXtsZWdlbmRWYWx1ZVByb3BzLmZvbnRTaXplfVxuICAgICAgICAgIGZvbnRGYW1pbHk9e2xlZ2VuZFZhbHVlUHJvcHMuZm9udEZhbWlseX1cbiAgICAgICAgICB4PXt4fVxuICAgICAgICAgIHk9e3kgKyBpbmRleCAqIGxpbmVIZWlnaHR9XG4gICAgICAgID5cbiAgICAgICAgICB7bGluZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSl9XG4gICAgPC9HPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlZFRleHQ7XG4iXX0=
