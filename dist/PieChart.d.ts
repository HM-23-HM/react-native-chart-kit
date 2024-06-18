/// <reference types="react" />
import { ViewStyle } from "react-native";
import AbstractChart, { AbstractChartProps } from "./AbstractChart";
import { LegendValueProps } from "./custom/WrappedText";
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
declare type PieChartState = {};
declare class PieChart extends AbstractChart<PieChartProps, PieChartState> {
  render(): JSX.Element;
}
export default PieChart;
//# sourceMappingURL=PieChart.d.ts.map
