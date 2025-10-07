import rawData from "./data-v4.json";

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
        source: 'Ceci est une source',
        date: 'Dernière mise à jour : 2024',
        tooltipTitle: 'Évolution des échanges de services sur les dix dernières années (Md€)',
        tooltipContent: 'Évolution des échanges de services sur les dix dernières années (Md€)',
        modalTitle: 'Titre de la modale',
        modalContent: 'Contenu de la modale',
    },
}