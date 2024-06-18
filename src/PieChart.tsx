import Pie from "paths-js/pie";
import React from "react";
import { View, ViewStyle } from "react-native";
import { G, Path, Rect, Svg, Text } from "react-native-svg";

import AbstractChart, { AbstractChartProps } from "./AbstractChart";
import WrappedText, { LegendValueProps } from "./custom/WrappedText";

export interface PieChartProps extends AbstractChartProps {
  absolute?: boolean;
  accessor: string;
  avoidFalseZero?: boolean;
  backgroundColor: string;
  center?: Array<number>;
  data: Array<any>;
  hasLegend?: boolean;
  height: number;
  legendValueProps: LegendValueProps;
  paddingLeft: string;
  style?: Partial<ViewStyle>;
  width: number;
}

type PieChartState = {};

class PieChart extends AbstractChart<PieChartProps, PieChartState> {
  render() {
    const {
      absolute = false,
      avoidFalseZero = false,
      backgroundColor,
      hasLegend = true,
      legendValueProps,
      style = {}
    } = this.props;

    const { borderRadius = 0 } = style;

    const chart = Pie({
      center: this.props.center || [0, 0],
      r: 0,
      R: this.props.height / 2.5,
      data: this.props.data,
      accessor: x => {
        return x[this.props.accessor];
      }
    });

    const total = this.props.data.reduce((sum, item) => {
      return sum + item[this.props.accessor];
    }, 0);

    const slices = chart.curves.map((c, i) => {
      let value: string;

      if (absolute) {
        value = c.item[this.props.accessor];
      } else {
        if (total === 0) {
          value = 0 + "%";
        } else {
          const percentage = Math.round(
            (100 / total) * c.item[this.props.accessor]
          );
          value = Math.round((100 / total) * c.item[this.props.accessor]) + "%";
          if (avoidFalseZero && percentage === 0) {
            value = "<1%";
          } else {
            value = percentage + "%";
          }
        }
      }

      return (
        <G key={Math.random()}>
          <Path d={c.sector.path.print()} fill={c.item.color} />
          {hasLegend ? (
            <Rect
              width="16px"
              height="16px"
              fill={c.item.color}
              rx={8}
              ry={8}
              x={this.props.width / 2.5 - 24}
              y={
                -(this.props.height / 2.5) +
                ((this.props.height * 0.8) / this.props.data.length) * i +
                12
              }
            />
          ) : null}
          {hasLegend ? (
            <G>
              <Text
                fill={c.item.legendFontColor}
                fontSize={c.item.legendFontSize * 1.2}
                fontFamily={c.item.legendFontFamily}
                fontWeight={"600"}
                x={this.props.width / 2.5}
                y={
                  -(this.props.height / 2.5) +
                  ((this.props.height * 0.8) / this.props.data.length) * i +
                  12 * 2
                }
              >
                {value}
              </Text>
              <WrappedText
                fill={c.item.legendFontColor}
                legendValueProps={{
                  maxWidth: legendValueProps.maxWidth,
                  fontSize: c.item.legendFontSize,
                  fontFamily: c.item.legendFontFamily
                }}
                x={this.props.width / 2.5}
                y={
                  -(this.props.height / 2.5) +
                  ((this.props.height * 0.8) / this.props.data.length) * i +
                  12 * 2 +
                  8 +
                  c.item.legendFontSize
                }
                text={c.item.name}
              />
            </G>
          ) : null}
        </G>
      );
    });

    return (
      <View
        style={{
          width: this.props.width,
          height: this.props.height,
          padding: 0,
          ...style
        }}
      >
        <Svg width={this.props.width} height={this.props.height}>
          <G>
            {this.renderDefs({
              width: this.props.height,
              height: this.props.height,
              ...this.props.chartConfig
            })}
          </G>
          <Rect
            width="100%"
            height={this.props.height}
            rx={borderRadius}
            ry={borderRadius}
            fill={backgroundColor}
          />
          <G
            x={
              this.props.width / 2 / 2 +
              Number(this.props.paddingLeft ? this.props.paddingLeft : 0)
            }
            y={this.props.height / 2}
          >
            {slices}
          </G>
        </Svg>
      </View>
    );
  }
}

export default PieChart;
