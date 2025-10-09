import rawData from "./data-v4.json";
import rawDataBox from "./databox-V3.json";

export const chartColors = rawData["colors"];

export const chartData = rawData;

export const dataBox = {
    common: {
        defaultSource: 'auto',
        segmentedControl: true,
        screenshot: true,
        download: true,
        fullscreen: true,
        actions: [],
    },
    ...rawDataBox,
}