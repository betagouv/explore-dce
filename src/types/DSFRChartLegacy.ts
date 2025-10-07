/**
 * 
 * La librairie dsfr-chart est écrite en JavaScript vanilla, par conséquent il
 * n'existe aucune définition de types ni de modules {@link https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html DST} pour les props des composants.
 * Ce fichier a pour but de définir les types des props pour les composants
 * de la librairie dsfr-chart.
 * 
 * NOTE:
 * La majorité des props sont indiqué comme supportant les `string`, ce comportement
 * est déprécié et n'est présent que pour des raisons de rétro-compatibilité.
 * Il est conseillé d'utiliser les types natifs (boolean, number, Array, etc.)
 * lors de l'utilisation des composants.
 * 
 */

/**
 * Type représentant les données pouvant être passées aux graphiques.
 */
type Data = (number|string)[];

/**
 * Définition des props du composant BarChart
 */
export interface BarChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: Data|Data[];
  y: Data[];
  xMin?: number | string;
  xMax?: number | string;
  yMin?: number | string;
  yMax?: number | string;
  name?: string;
  stacked?: boolean | string;
  horizontal?: boolean | string;
  barSize?: number | string;
  maxBarSize?: number | string;
  date?: string;
  aspectRatio?: number | string;
  selectedPalette?: string;
  colors?: Array<any>;
  highlightIndex?: Array<number>;
  unitTooltip?: string;
}

/**
 * Définition des props du composant LineChart
 */
export interface LineChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: Data|Data[];
  y: Data[];
  xMin?: number | string;
  xMax?: number | string;
  yMin?: number | string;
  yMax?: number | string;
  name?: string;
  vline?: string;
  vlinecolor?: string;
  vlinename?: string;
  hline?: string;
  hlinecolor?: string;
  hlinename?: string;
  date?: string;
  aspectRatio?: number | string;
  formatDate?: boolean | string;
  selectedPalette?: string;
  colors?: Array<any>;
  unitTooltip?: string;
}

/**
 * Définition des props du composant AreaLineChart
 */
export interface AreaLineChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: Data|Data[];
  yAreas: Data[];
  yLines: Data[];
  xMin?: number | string;
  xMax?: number | string;
  yAreaMin?: number | string;
  yAreaMax?: number | string;
  yLineMin?: number | string;
  yLineMax?: number | string;
  nameAreas?: Array<any>;
  nameLines?: Array<any>;
  aspectRatio?: number | string;
  selectedPalette?: string;
  areasColors?: Array<any>;
  linesColors?: Array<any>;
  unitTooltipArea?: string;
  unitTooltipLine?: string;
  date?: string;
}

/**
 * Définition des props du composant barLineChart
 */
export interface BarLineChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: Data|Data[];
  yBars: Data[];
  yLines: Data[];
  xMin?: number | string;
  xMax?: number | string;
  yBarMin?: number | string;
  yBarMax?: number | string;
  yLineMin?: number | string;
  yLineMax?: number | string;
  stacked?: boolean | string;
  nameBars?: string[];
  nameLines?: string[];
  barSize?: number | string;
  maxBarSize?: number | string;
  vline?: string;
  vlinecolor?: string;
  vlinename?: string;
  hline?: string;
  hlinecolor?: string;
  hlinename?: string;
  date?: string;
  aspectRatio?: number | string;
  selectedPalette?: string;
  barsColors?: Array<any>;
  linesColors?: Array<any>;
  unitTooltipBar?: string;
  unitTooltipLine?: string;
}

/**
 * Définition des props du composant PieChart
 */
export interface PieChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: string;
  y: string;
  name?: string;
  fill?: boolean | string;
  date?: string;
  aspectRatio?: number | string;
  selectedPalette?: string;
  colors?: Array<any>;
  unitTooltip?: string;
}

/**
 * Définition des props du composant GaugeChart
 */
export interface GaugeChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  value?: number | string;
  percent?: number | string;
  init: number | string;
  target: number | string;
  initDate?: string;
  targetDate?: string;
  height?: string;
  legend?: boolean | string;
  date?: string;
}

/**
 * Définition des props du composant TreemapChart
 */
export interface TreemapChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  tree: Array<any>;
  name?: string;
  value?: string;
  label?: string;
  date?: string;
  aspectRatio?: number | string;
  selectedPalette?: string;
  colors?: Array<any>;
  highlightIndex?: Array<number>;
  unitTooltip?: string;
  borderWidth?: number | string;
  borderColor?: string;
}

/**
 * Définition des props du composant RadarChart
 */
export interface RadarChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: string;
  y: string;
  name?: string;
  date?: string;
  aspectRatio?: number | string;
  selectedPalette?: string;
  colors?: Array<any>;
  unitTooltip?: string;
}

/**
 * Définition des props du composant ScatterChart
 */
export interface ScatterChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  x: string;
  y: string;
  xMin?: number | string;
  xMax?: number | string;
  yMin?: number | string;
  yMax?: number | string;
  name?: string;
  vline?: string;
  vlinecolor?: string;
  vlinename?: string;
  hline?: string;
  hlinecolor?: string;
  hlinename?: string;
  showLine?: boolean | string;
  date?: string;
  aspectRatio?: number | string;
  formatDate?: boolean | string;
  selectedPalette?: string;
  colors?: Array<any>;
  unitTooltip?: string;
}

// MapChart
export interface MapChartProps {
  databoxId?: string;
  databoxType?: string;
  databoxSource?: string;
  data: string;
  value?: number | string;
  date: string;
  level?: string;
  name?: string;
  selectedPalette?: string;
  colors?: Array<any>;
}

// DataBox
export interface DataBoxProps {
  id: string;
  title: string;
  tooltipTitle?: string;
  tooltipContent?: string;
  modalTitle?: string;
  modalContent?: string;
  source: string;
  date: string;
  defaultSource?: string;
  trend?: string;
  segmentedControl?: boolean | string;
  fullscreen?: boolean | string;
  screenshot?: boolean | string;
  download?: boolean | string;
  actions?: Array<string> | string;
}