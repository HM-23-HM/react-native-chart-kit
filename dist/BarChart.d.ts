import { ViewStyle } from "react-native";
import AbstractChart, {
  AbstractChartConfig,
  AbstractChartProps
} from "./AbstractChart";
import { ChartData } from "./HelperTypes";
export interface BarChartProps extends AbstractChartProps {
  data: ChartData;
  width: number;
  height: number;
  fromZero?: boolean;
  withInnerLines?: boolean;
  yAxisLabel: string;
  yAxisSuffix: string;
  chartConfig: AbstractChartConfig;
  style?: Partial<ViewStyle>;
  horizontalLabelRotation?: number;
  verticalLabelRotation?: number;
  /**
   * Show vertical labels - default: True.
   */
  withVerticalLabels?: boolean;
  /**
   * Show horizontal labels - default: True.
   */
  withHorizontalLabels?: boolean;
  /**
   * The number of horizontal lines
   */
  segments?: number;
  showBarTops?: boolean;
  showValuesOnTopOfBars?: boolean;
  withCustomBarColorFromData?: boolean;
  flatColor?: boolean;
}
declare type BarChartState = {};
declare class BarChart extends AbstractChart<BarChartProps, BarChartState> {
  getBarPercentage: () => any;
  renderBars: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight,
    barRadius,
    withCustomBarColorFromData
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "height"
      | "style"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "color"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "width"
      | "paddingTop"
      | "paddingRight"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundColor"
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
    >,
    "height" | "width" | "paddingTop" | "paddingRight" | "barRadius"
  > & {
    data: number[];
    withCustomBarColorFromData: boolean;
  }) => any[];
  renderBarTops: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "height"
      | "style"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "color"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "width"
      | "paddingTop"
      | "paddingRight"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundColor"
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
    >,
    "height" | "width" | "paddingTop" | "paddingRight"
  > & {
    data: number[];
  }) => any[];
  renderColors: ({
    data,
    flatColor
  }: Pick<AbstractChartConfig, "data"> & {
    flatColor: boolean;
  }) => any[];
  renderValuesOnTopOfBars: ({
    data,
    width,
    height,
    paddingTop,
    paddingRight
  }: Pick<
    Pick<
      AbstractChartConfig,
      | "height"
      | "style"
      | "strokeWidth"
      | "propsForBackgroundLines"
      | "propsForLabels"
      | "color"
      | "labelColor"
      | "propsForVerticalLabels"
      | "propsForHorizontalLabels"
      | "count"
      | "width"
      | "paddingTop"
      | "paddingRight"
      | "horizontalLabelRotation"
      | "formatYLabel"
      | "labels"
      | "horizontalOffset"
      | "stackedBar"
      | "verticalLabelRotation"
      | "formatXLabel"
      | "verticalLabelsHeightPercentage"
      | "formatTopBarValue"
      | "backgroundColor"
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
    >,
    "height" | "width" | "paddingTop" | "paddingRight"
  > & {
    data: number[];
  }) => any[];
  render(): any;
}
export default BarChart;
//# sourceMappingURL=BarChart.d.ts.map
