import { Component } from "react";
import { ChartConfig, Dataset, PartialBy } from "./HelperTypes";
export interface AbstractChartProps {
  fromZero?: boolean;
  fromNumber?: number;
  chartConfig?: AbstractChartConfig;
  yAxisLabel?: string;
  yAxisSuffix?: string;
  yLabelsOffset?: number;
  yAxisInterval?: number;
  xAxisLabel?: string;
  xLabelsOffset?: number;
  hidePointsAtIndex?: number[];
}
export interface AbstractChartConfig extends ChartConfig {
  count?: number;
  data?: Dataset[];
  width?: number;
  height?: number;
  paddingTop?: number;
  paddingRight?: number;
  horizontalLabelRotation?: number;
  formatYLabel?: (yLabel: string) => string;
  labels?: string[];
  horizontalOffset?: number;
  stackedBar?: boolean;
  verticalLabelRotation?: number;
  formatXLabel?: (xLabel: string) => string;
  verticalLabelsHeightPercentage?: number;
  formatTopBarValue?: (topBarValue: number) => string | number;
}
export declare type AbstractChartState = {};
export declare const DEFAULT_X_LABELS_HEIGHT_PERCENTAGE = 0.75;
declare class AbstractChart<
  IProps extends AbstractChartProps,
  IState extends AbstractChartState
> extends Component<AbstractChartProps & IProps, AbstractChartState & IState> {
  calcScaler: (data: number[]) => number;
  calcBaseHeight: (data: number[], height: number) => number;
  calcHeight: (val: number, data: number[], height: number) => number;
  getPropsForBackgroundLines(): any;
  getPropsForLabels(): any;
  getPropsForVerticalLabels(): any;
  getPropsForHorizontalLabels(): any;
  renderHorizontalLines: (config: any) => JSX.Element[];
  renderHorizontalLine: (config: any) => JSX.Element;
  renderHorizontalLabels: (
    config: Pick<
      AbstractChartConfig,
      | "color"
      | "style"
      | "backgroundColor"
      | "height"
      | "paddingRight"
      | "paddingTop"
      | "width"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundGradientFrom"
      | "backgroundGradientFromOpacity"
      | "backgroundGradientTo"
      | "backgroundGradientToOpacity"
      | "fillShadowGradient"
      | "fillShadowGradientOpacity"
      | "fillShadowGradientFrom"
      | "fillShadowGradientFromOpacity"
      | "fillShadowGradientFromOffset"
      | "fillShadowGradientTo"
      | "fillShadowGradientToOpacity"
      | "fillShadowGradientToOffset"
      | "useShadowColorFromDataset"
      | "barPercentage"
      | "barRadius"
      | "propsForDots"
      | "decimalPlaces"
      | "linejoinType"
      | "scrollableDotFill"
      | "scrollableDotStrokeColor"
      | "scrollableDotStrokeWidth"
      | "scrollableDotRadius"
      | "scrollableInfoViewStyle"
      | "scrollableInfoTextStyle"
      | "scrollableInfoTextDecorator"
      | "scrollableInfoOffset"
      | "scrollableInfoSize"
    > & {
      data: number[];
    }
  ) => JSX.Element[];
  renderVerticalLabels: ({
    labels,
    width,
    height,
    paddingRight,
    paddingTop,
    horizontalOffset,
    stackedBar,
    verticalLabelRotation,
    formatXLabel,
    verticalLabelsHeightPercentage
  }: Pick<
    AbstractChartConfig,
    | "labels"
    | "width"
    | "height"
    | "paddingRight"
    | "paddingTop"
    | "horizontalOffset"
    | "stackedBar"
    | "verticalLabelRotation"
    | "formatXLabel"
    | "verticalLabelsHeightPercentage"
  >) => JSX.Element[];
  renderVerticalLines: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight,
    verticalLabelsHeightPercentage
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "height"
      | "paddingRight"
      | "paddingTop"
      | "width"
      | "data"
      | "verticalLabelsHeightPercentage"
    >,
    | "height"
    | "paddingRight"
    | "paddingTop"
    | "width"
    | "verticalLabelsHeightPercentage"
  > & {
    data: number[];
  }) => JSX.Element[];
  renderVerticalLine: ({
    height,
    paddingTop,
    paddingRight,
    verticalLabelsHeightPercentage
  }: Pick<
    AbstractChartConfig,
    "height" | "paddingRight" | "paddingTop" | "verticalLabelsHeightPercentage"
  >) => JSX.Element;
  renderDefs: (
    config: Pick<
      PartialBy<
        AbstractChartConfig,
        | "backgroundGradientFromOpacity"
        | "backgroundGradientToOpacity"
        | "fillShadowGradient"
        | "fillShadowGradientOpacity"
        | "fillShadowGradientFrom"
        | "fillShadowGradientFromOpacity"
        | "fillShadowGradientFromOffset"
        | "fillShadowGradientTo"
        | "fillShadowGradientToOpacity"
        | "fillShadowGradientToOffset"
      >,
      | "width"
      | "height"
      | "backgroundGradientFrom"
      | "backgroundGradientTo"
      | "useShadowColorFromDataset"
      | "data"
      | "backgroundGradientFromOpacity"
      | "backgroundGradientToOpacity"
      | "fillShadowGradient"
      | "fillShadowGradientOpacity"
      | "fillShadowGradientFrom"
      | "fillShadowGradientFromOpacity"
      | "fillShadowGradientFromOffset"
      | "fillShadowGradientTo"
      | "fillShadowGradientToOpacity"
      | "fillShadowGradientToOffset"
    >
  ) => JSX.Element;
}
export default AbstractChart;
//# sourceMappingURL=AbstractChart.d.ts.map
