import { createElement } from "react";
import { Typography, Box } from "@mui/material";
import { toKebabCaseProps } from "@src/utils/camelToKebabCase";
import { PTitle } from "@src/components/generic/PTitle";
import { chartData, dataBox } from "@src/constants/data";
import { convertArealineToTable, convertBarToTable, convertLineToTable, convertTreeToTable } from "@src/utils/convert";

const Graph1 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-top-produits-exportes"],
            id: 'section3-graph1',
            "databox-title": 'Moyenne annuelle 2022-2024 en Md€',
        }))}

        {createElement("treemap-chart", {
            ...toKebabCaseProps(chartData.section3["treemapchart-exportations"]),
            "databox-id": "section3-graph1",
            "databox-type": "chart",
            "databox-source": "treemapchart-exportations",
        })}

        {createElement("table-chart", {
            ...convertTreeToTable(chartData.section3["treemapchart-exportations"]),
            "table-name": "Secteur",
            "databox-id": "section3-graph1",
            "databox-type": "table",
            "databox-source": "treemapchart-exportations",
        })}
    </Box>
}

const Graph2 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-top-produits-importes"],
            id: 'section3-graph2',
            "databox-title": 'Moyenne annuelle 2022-2024 en Md€',
        }))}

        {createElement("treemap-chart", {
            ...toKebabCaseProps(chartData.section3["treemapchart-importations"]),
            "databox-id": "section3-graph2",
            "databox-type": "chart",
            "databox-source": "treemapchart-importations",
        })}

        {createElement("table-chart", {
            ...convertTreeToTable(chartData.section3["treemapchart-importations"]),
            "table-name": "Secteur",
            "databox-id": "section3-graph2",
            "databox-type": "table",
            "databox-source": "treemapchart-importations",
        })}
    </Box>
}

const Graph3 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-top-deficits-commerciaux"],
            id: 'section3-graph3',
            "databox-title": 'Les 10 principaux déficits commerciaux, moyenne 2022-2024, en Md€',
        }))}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section3["barchart-10-principaux-deficits-commerciaux"]),
            "databox-id": "section3-graph3",
            "databox-type": "chart",
            "databox-source": "barchart-10-principaux-deficits-commerciaux",
        })}

        {createElement("table-chart", {
            ...convertBarToTable(chartData.section3["barchart-10-principaux-deficits-commerciaux"]),
            "table-name": "Secteur",
            "databox-id": "section3-graph3",
            "databox-type": "table",
            "databox-source": "barchart-10-principaux-deficits-commerciaux",
        })}
    </Box>
}

const Graph4 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-top-excedents-commerciaux"],
            id: 'section3-graph4',
            "databox-title": 'Les 10 principaux excédents commerciaux, moyenne 2022-2024, en Md€',
        }))}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section3["barchart-10-principaux-execdents-commerciaux"]),
            "databox-id": "section3-graph4",
            "databox-type": "chart",
            "databox-source": "barchart-10-principaux-execdents-commerciaux",
        })}

        {createElement("table-chart", {
            ...convertBarToTable(chartData.section3["barchart-10-principaux-execdents-commerciaux"]),
            "table-name": "Secteur",
            "databox-id": "section3-graph4",
            "databox-type": "table",
            "databox-source": "barchart-10-principaux-execdents-commerciaux",
        })}
    </Box>
}

const Graph5 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-secteurs-excedentaires"],
            id: 'section3-graph5',
            "databox-title": 'Solde commercial des principaux secteurs excédentaires, par année, en Md€',
        }))}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section3["linechart-solde-commercial-principaux-secteurs-excedentaires"]),
            "databox-id": "section3-graph5",
            "databox-type": "chart",
            "databox-source": "linechart-solde-commercial-principaux-secteurs-excedentaires",
        })}

        {createElement("table-chart", {
            ...convertLineToTable(chartData.section3["linechart-solde-commercial-principaux-secteurs-excedentaires"]),
            "table-name": "Année",
            "databox-id": "section3-graph5",
            "databox-type": "table",
            "databox-source": "linechart-solde-commercial-principaux-secteurs-excedentaires",
        })}
    </Box>
}

const Graph6 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-solde-agriculture-agroalimentaire"],
            id: 'section3-graph6',
            "databox-title": 'Solde commercial agriculture et agroalimentaire, par année, en Md€',
        }))}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section3["linechart-solde-commercial-agriculture-agroalimentaire"]),
            "databox-id": "section3-graph6",
            "databox-type": "chart",
            "databox-source": "linechart-solde-commercial-agriculture-agroalimentaire",
        })}

        {createElement("table-chart", {
            ...convertLineToTable(chartData.section3["linechart-solde-commercial-agriculture-agroalimentaire"]),
            "table-name": "Année",
            "databox-id": "section3-graph6",
            "databox-type": "table",
            "databox-source": "linechart-solde-commercial-agriculture-agroalimentaire",
        })}
    </Box>
}

const Graph7 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-echanges-electricite"],
            id: 'section3-graph7',
            "databox-title": 'Élétricité : échanges de biens de la France, par année, en Md€',
        }))}

        {createElement("area-line-chart", {
            ...toKebabCaseProps(chartData.section3["arealinechart-electricite-echanges-de-biens-france"]),
            "databox-id": "section3-graph7",
            "databox-type": "chart",
            "databox-source": "arealinechart-electricite-echanges-de-biens-france",
        })}

        {createElement("table-chart", {
            ...convertArealineToTable(chartData.section3["arealinechart-electricite-echanges-de-biens-france"]),
            "table-name": "Année",
            "databox-id": "section3-graph7",
            "databox-type": "table",
            "databox-source": "arealinechart-electricite-echanges-de-biens-france",
        })}
    </Box>
}

const Graph8 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-secteur-automobile"],
            id: 'section3-graph8',
            "databox-title": 'Automobile (construction et équipements) : Échanges de biens de la France, par année, en Md€',
        }))}

        {createElement("area-line-chart", {
            ...toKebabCaseProps(chartData.section3["arealinechart-export-import-solde"]),
            "databox-id": "section3-graph8",
            "databox-type": "chart",
            "databox-source": "arealinechart-export-import-solde",
        })}

        {createElement("table-chart", {
            ...convertArealineToTable(chartData.section3["arealinechart-export-import-solde"]),
            "table-name": "Année",
            "databox-id": "section3-graph8",
            "databox-type": "table",
            "databox-source": "arealinechart-export-import-solde",
        })}
    </Box>
}

const Graph9 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-importations-voitures"],
            id: 'section3-graph9',
            "databox-title": 'Importations de voitures de tourisme et autres véhicules automobiles (moins de 10 personnes), par année, en Md€',
        }))}

        {createElement("area-line-chart", {
            ...toKebabCaseProps(chartData.section3["arealinechart-importations-voitures"]),
            "databox-id": "section3-graph9",
            "databox-type": "chart",
            "databox-source": "arealinechart-importations-voitures",
        })}

        {createElement("table-chart", {
            ...convertArealineToTable(chartData.section3["arealinechart-importations-voitures"]),
            "table-name": "Véhicules",
            "databox-id": "section3-graph9",
            "databox-type": "table",
            "databox-source": "arealinechart-importations-voitures",
        })}
    </Box>
}

const Graph10 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-exportations-voitures"],
            id: 'section3-graph10',
            "databox-title": 'Exportations de voitures de tourisme et autres véhicules automobiles (moins de 10 personnes), par année, en Md€',
        }))}

        {createElement("area-line-chart", {
            ...toKebabCaseProps(chartData.section3["arealinechart-exportations-voitures"]),
            "databox-id": "section3-graph10",
            "databox-type": "chart",
            "databox-source": "arealinechart-exportations-voitures",
        })}

        {createElement("table-chart", {
            ...convertArealineToTable(chartData.section3["arealinechart-exportations-voitures"]),
            "table-name": "Véhicules",
            "databox-id": "section3-graph10",
            "databox-type": "table",
            "databox-source": "arealinechart-exportations-voitures",
        })}
    </Box>
}

const Graph11 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section3["databox-exportations-vehicules-electriques"],
            id: 'section3-graph11',
            "databox-title": '12 premiers pays exportateurs de véhicules 100 % électriques, en 2023, en millions d\'€',
        }))}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section3["barchart-exportations-vehicules-electriques-pays"]),
            "databox-id": "section3-graph11",
            "databox-type": "chart",
            "databox-source": "barchart-exportations-vehicules-electriques-pays",
        })}

        {createElement("table-chart", {
            ...convertBarToTable(chartData.section3["barchart-exportations-vehicules-electriques-pays"]),
            "table-name": "Pays",
            "databox-id": "section3-graph11",
            "databox-type": "table",
            "databox-source": "barchart-exportations-vehicules-electriques-pays",
        })}
    </Box>
}

export const Section3 = () => {
    return (
        <Box className="part_container">
            <Box className="fr-my-2w">
                <PTitle>
                    Les 10 premiers secteurs exportateurs représentent la moitié (51 %) du total.
                </PTitle>

                <Graph1 />

                <Typography variant="body1" gutterBottom>
                    La fiche profil des exportations françaises (moyennée sur trois ans pour lisser les fluctuations conjoncturelles) fait ressortir trois poids lourds : la filière aéronautique et spatiale, la pharmacie et la construction automobile.
                    <br/>
                    <br/>
                    Mais, combinés, les deux postes de produits chimiques de la nomenclature de produits A129 passeraient en tête.
                    <br/>
                    <br/>
                    Les productions de luxe sont également bien représentées au sein des filières de la parfumerie ou des boissons, pour lesquelles la France occupe la 1re place mondiale (15 % des exportations de la planète).
                    <br/>
                    <br/>
                    La France est 2e après la Chine pour le cuir et la bagagerie (15 %) et 2e derrière les USA pour l’aéronautique et le spatial (12 %).
                </Typography>

                <PTitle>
                    Les 10 premiers secteurs importateurs représentent la moitié (49 %) du total.
                </PTitle>

                <Graph2 />

                <Typography variant="body1" gutterBottom>
                    En France, on n'a pas de pétrole. Mais si on sait produire des automobiles, on en importe aussi beaucoup, et même davantage qu'on en exporte.
                    <br/>
                    <br/>
                    La confrontation des exportations et des importations de biens confirme notre déficit majeur en hydrocarbures et produits dérivés et, plus surprenant pour un emblème historique de l’industrie française, en construction automobile. La France est également déficitaire en articles d’habillement.
                </Typography>

                <Graph3 />

                <Typography variant="body1" gutterBottom>
                    Du côté des excédents, après l’aéronautique et le spatial, la filière du luxe ressort, au travers des boissons, des parfums et cosmétiques, mais aussi des cuirs, bagages et chaussures.
                    <br/>
                    <br/>
                    Viennent ensuite la filière agricole et agroalimentaire, et la filière pharmaceutique.
                </Typography>

                <Graph4 />

                <Typography variant="body1" gutterBottom>
                    L’aéronautique et le spatial ont rejoint les niveaux d’avant Covid, sans encore retrouver la belle dynamique qui les animait avant l’épidémie. Les produits de luxe poursuivent en revanche leur croissance, même si les boissons pâtissent d’un ralentissement récent de la demande chinoise – en cognac notamment – et restent très sensibles aux variations de prix, en forte hausse après le Covid, et en baisse en 2024.
                    <br/>
                    <br/>
                    La pharmacie reste excédentaire et reprend des couleurs, après être passée à côté de la production des vaccins anti-Covid.
                </Typography>

                <Graph5 />

                <PTitle>
                    La filière agri-agro reste excédentaire, mais surtout grâce aux boissons
                </PTitle>

                <Typography variant="body1" gutterBottom>
                    Le solde de la production agricole se maintient au-dessus de l'équilibre, mais avec de plus en plus de difficulté, atteignant son point le plus bas depuis au moins 20 ans. La France a pourtant bénéficié d'un effet Brexit inattendu, certes artificiel, servant de hub logistique pour des marchandises (agneaux, saumons, cheddar...) réexportées vers d'autres pays. Mais surtout, les exportations de céréales ont fortement baissé en 2024, le rang mondial de la France passe de la 6e à la 8e place, et le solde commercial de ce secteur, traditionnellement excédentaire, le reste, mais en perdant 10 %.
                    <br/>
                    <br/>
                    De façon plus préoccupante, l'industrie agroalimentaire, si l'on en retire les boissons, voit son déficit se creuser régulièrement depuis 2004, tout particulièrement dans la transformation de la viande.
                </Typography>

                <Graph6 />

                <PTitle>
                    Avec la remontée en charge de son parc nucléaire, la France renoue avec ses excédents de production électrique
                </PTitle>

                <Box>
                    <Typography variant="body1" gutterBottom>
                        La production d’électricité est traditionnellement un secteur excédentaire en France en raison de son grand potentiel de production d’énergie décarbonée (nucléaire et hydraulique en particulier).
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        L'année 2022 marque une exception : la production d’électricité a chuté de 522 TWh à 445 TWh. Jamais ce niveau n’était descendu aussi bas depuis 1992.
                    </Typography>
                    <ul>
                        <li>La corrosion de tuyauteries a provoqué l’arrêt de gros réacteurs, faisant chuter la disponibilité du parc à 54 % en 2022, contre 73 % en moyenne entre 2015 et 2019 ;</li>
                        <li>Le manque d’eau a également eu une incidence sur les barrages hydroélectriques.</li>
                    </ul>
                </Box>

                <Graph7 />

                <PTitle>
                    Inversion du solde commercial de l’automobile depuis 2008
                </PTitle>

                <Typography variant="body1" gutterBottom>
                    Le solde commercial du secteur automobile s’est progressivement dégradé, de façon accélérée depuis 2015.
                    <br/>
                    <br/>
                    Excédentaire jusqu'en 2007, il se creuse depuis sous l’effet d’une forte poussée des importations, qui ont presque doublé entre 2004 et 2023, alors que les exportations sont restées relativement stables.
                    <br/>
                    <br/>
                    Cette évolution d'un secteur clé de l'industrie française reflète l’internationalisation des constructeurs, avec des sites d’assemblage en Europe et des implantations en Chine ou Amérique du Sud destinées aux marchés locaux.
                    <br/>
                    <br/>
                    2024 marque toutefois une petite amélioration, les imports ayant diminué davantage que les exports.
                </Typography>

                <Graph8 />

                <PTitle>
                    Les véhicules électriques et hybrides n’en sont pas les seuls responsables
                </PTitle>

                <Graph9 />

                <Typography variant="body1" gutterBottom>
                    L'inversion du solde commercial automobile peut s'expliquer, pour les seuls véhicules de moins de 10 personnes, par deux facteurs :
                </Typography>
                <ul>
                    <li>L'essor de la propulsion électrique, via des moteurs hybrides ou 100 % sur batterie ; la France est bien présente sur ce marché à l'exportation, mais importe deux fois plus qu'elle n'exporte ;</li>
                    <li>L'envolée des importations de véhicules thermiques classiques, à essence, entre 2014 et 2019. Elle s'explique en bonne part par les décisions de délocalisation prises par les constructeurs nationaux.</li>
                </ul>
                <Typography variant="body1" gutterBottom>
                    En revanche, le déclin du diesel a davantage touché les importations que les exportations, et contribue paradoxalement de façon positive au solde des échanges.
                </Typography>

                <Graph10 />

                <Typography variant="body1" gutterBottom>
                    L'Allemagne est le 1er pays exportateur de véhicules 100 % électriques, devant la Chine (et nettement devant les USA).
                    <br/>
                    <br/>
                    La France ne pointe qu'en 12e position.
                    <br/>
                    <br/>
                    La 4e place de la Belgique s'explique par la présence d'unités de production, mais aussi par un effet de "hub logistique" : elle peut concentrer plusieurs mois des véhicules venus de Chine par ses ports. Au moment de leur vente vers un autre pays, ces véhicules seront parfois, in fine, considérés exportés alors qu'ils ne sont en réalité que réexportés.
                    <br/>
                    <br/>
                    Ce phénomène de hub logistique concerne également les Pays-Bas, du fait de l'activité prédominante du port de Rotterdam.
                </Typography>

                <Graph11 />
            </Box>
        </Box>
    );
};
