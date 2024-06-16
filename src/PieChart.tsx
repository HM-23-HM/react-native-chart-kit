import Pie from "paths-js/pie";
import React from "react";
import { View, ViewStyle } from "react-native";
import { G, Path, Rect, Svg, Text } from "react-native-svg";
import AbstractChart, { AbstractChartProps } from "./AbstractChart";

export interface PieChartProps extends AbstractChartProps {
  data: Array<any>;
  width: number;
  height: number;
  accessor: string;
  backgroundColor: string;
  paddingLeft: string;
  center?: Array<number>;
  absolute?: boolean;
  hasLegend?: boolean;
  style?: Partial<ViewStyle>;
  avoidFalseZero?: boolean;
}

const PieChart = ({ props }: { props: PieChartProps }) => {
  const {
    style = {},
    backgroundColor,
    absolute = false,
    hasLegend = true,
    avoidFalseZero = false
  } = props;

  const { borderRadius = 0 } = style;

  const chart = Pie({
    center: props.center || [0, 0],
    r: 0,
    R: props.height / 2.5,
    data: props.data,
    accessor: x => x[props.accessor]
  });

  const total = props.data.reduce((sum, item) => sum + item[props.accessor], 0);

  const slices = chart.curves.map((c, i) => {
    let value: string;

    if (absolute) {
      value = c.item[props.accessor];
    } else {
      if (total === 0) {
        value = "0%";
      } else {
        const percentage = Math.round((100 / total) * c.item[props.accessor]);
        if (avoidFalseZero && percentage === 0) {
          value = "<1%";
        } else {
          value = percentage + "%";
        }
      }
    }

    return (
      <G key={i}>
        <Path d={c.sector.path.print()} fill={c.item.color} />
        {hasLegend && (
          <>
            <Rect
              width="16px"
              height="16px"
              fill={c.item.color}
              rx={8}
              ry={8}
              x={props.width / 2.5 - 24}
              y={
                -(props.height / 2.5) +
                ((props.height * 0.8) / props.data.length) * i +
                12
              }
            />
            <Text
              fill={c.item.legendFontColor}
              fontSize={c.item.legendFontSize}
              fontFamily={c.item.legendFontFamily}
              x={props.width / 2.5}
              y={
                -(props.height / 2.5) +
                ((props.height * 0.8) / props.data.length) * i +
                12 * 2
              }
            >
              {value}
            </Text>
            <Text
              fill={c.item.legendFontColor}
              fontSize={c.item.legendFontSize}
              fontFamily={c.item.legendFontFamily}
              x={props.width / 2.5}
              y={
                -(props.height / 2.5) +
                ((props.height * 0.8) / props.data.length) * i +
                12 * 2
              }
            >
              {c.item.name}
            </Text>
          </>
        )}
      </G>
    );
  });

  const abstractChart = new AbstractChart<AbstractChartProps, {}>();

  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        padding: 0,
        ...style
      }}
    >
      <Svg width={props.width} height={props.height}>
        <G>
          {abstractChart.renderDefs({
            width: props.height,
            height: props.height,
            ...props.chartConfig
          })}
        </G>
        <Rect
          width="100%"
          height={props.height}
          rx={borderRadius as number}
          ry={borderRadius as number}
          fill={backgroundColor}
        />
        <G
          x={
            props.width / 2 / 2 +
            Number(props.paddingLeft ? props.paddingLeft : 0)
          }
          y={props.height / 2}
        >
          {slices}
        </G>
      </Svg>
    </View>
  );
};

export default PieChart;
