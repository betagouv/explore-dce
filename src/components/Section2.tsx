import { createElement } from "react";
import { Typography, Box } from "@mui/material";
import { toKebabCaseProps } from "@src/utils/camelToKebabCase";
import { PTitle } from "@src/components/generic/PTitle";
import { chartData, dataBox } from "@src/constants/data";
import { convertArealineToTable, convertBarToTable, convertLineToTable } from "@src/utils/convert";

const Graph1 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section2["databox-solde-echanges-exterieurs"],
            id: 'section2-graph1',
            title: 'Solde des échanges extérieurs de la France, par année, en Md€',
            disposition: 'grid2'
        }))}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section2["barchart-solde-echanges-exterieurs-principal"]),
            "databox-id": "section2-graph1",
            "databox-type": "chart",
            "databox-source": "barchart-solde-echanges-exterieurs-principal",
        })}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section2["barchart-solde-echanges-exterieurs-dont-energie"]),
            "databox-id": "section2-graph1",
            "databox-type": "chart",
            "databox-source": "barchart-solde-echanges-exterieurs-dont-energie",
        })}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section2["barchart-solde-echanges-exterieurs-dont-biens-hors-energie"]),
            "databox-id": "section2-graph1",
            "databox-type": "chart",
            "databox-source": "barchart-solde-echanges-exterieurs-dont-biens-hors-energie",
        })}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section2["barchart-solde-echanges-exterieurs-dont-services"]),
            "databox-id": "section2-graph1",
            "databox-type": "chart",
            "databox-source": "barchart-solde-echanges-exterieurs-dont-services",
        })}

        {createElement("table-chart", {
            ...convertBarToTable(
                chartData.section2["barchart-solde-echanges-exterieurs-principal"],
                chartData.section2["barchart-solde-echanges-exterieurs-dont-energie"],
                chartData.section2["barchart-solde-echanges-exterieurs-dont-biens-hors-energie"],
                chartData.section2["barchart-solde-echanges-exterieurs-dont-services"]
            ),
            "table-name": "Année",
            "databox-id": "section2-graph1",
            "databox-type": "table",
            "databox-source": "barchart-solde-echanges-exterieurs-principal",
        })}
    </Box>
}

const Graph2 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section2["databox-echanges-biens-trimestriels"],
            id: 'section2-graph2',
            title: 'Échanges de biens de la France par trimestre, en Md€',
        }))}

        {createElement("area-line-chart", {
            ...toKebabCaseProps(chartData.section2["arealinechart-echange-biens-trimestre"]),
            "databox-id": "section2-graph2",
            "databox-type": "chart",
            "databox-source": "arealinechart-echange-biens-trimestre",
        })}

        {createElement("table-chart", {
            ...convertArealineToTable(chartData.section2["arealinechart-echange-biens-trimestre"]),
            "table-name": "Trimestre",
            "databox-id": "section2-graph2",
            "databox-type": "table",
            "databox-source": "arealinechart-echange-biens-trimestre",
        })}
    </Box>
}

const Graph3 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section2["databox-echanges-biens-zones-monde"],
            id: 'section2-graph3',
            title: 'Échange de biens de la France avec divers zones du monde, par année, en Md€',
            disposition: 'grid3'
        }))}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-europe-hors-ue"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-europe-hors-ue",
        })}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-proche-moyen-orient"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-proche-moyen-orient",
        })}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-amerique"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-amerique",
        })}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-afrique"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-afrique",
        })}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-ue"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-ue",
        })}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-asie"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-asie",
        })}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-echange-biens-zones-monde-pays-tiers"]),
            "databox-id": "section2-graph3",
            "databox-type": "chart",
            "databox-source": "linechart-echange-biens-zones-monde-pays-tiers",
        })}

        {createElement("table-chart", {
            ...convertBarToTable(
                chartData.section2["linechart-echange-biens-zones-monde-europe-hors-ue"],
                chartData.section2["linechart-echange-biens-zones-monde-proche-moyen-orient"],
                chartData.section2["linechart-echange-biens-zones-monde-amerique"],
                chartData.section2["linechart-echange-biens-zones-monde-afrique"],
                chartData.section2["linechart-echange-biens-zones-monde-ue"],
                chartData.section2["linechart-echange-biens-zones-monde-asie"],
                chartData.section2["linechart-echange-biens-zones-monde-pays-tiers"]
            ),
            "table-name": "Année",
            "databox-id": "section2-graph3",
            "databox-type": "table",
            "databox-source": "linechart-echange-biens-zones-monde-europe-hors-ue",
        })}
    </Box>
}

const Graph4 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section2["databox-part-marche-pays-monde"],
            id: 'section2-graph4',
            title: 'Part de marché dans les exportations de marchandises des quelques pays du monde',
        }))}

        {createElement("line-chart", {
            ...toKebabCaseProps(chartData.section2["linechart-part-marche-pays-monde"]),
            "databox-id": "section2-graph4",
            "databox-type": "chart",
            "databox-source": "linechart-part-marche-pays-monde",
        })}

        {createElement("table-chart", {
            ...convertLineToTable(chartData.section2["linechart-part-marche-pays-monde"]),
            "table-name": "Année",
            "databox-id": "section2-graph4",
            "databox-type": "table",
            "databox-source": "linechart-part-marche-pays-monde",
        })}
    </Box>
}

export const Section2 = () => {

    return (
        <Box className="part_container">
            {/* Partie 2 - Secteurs */}
            <Box className="fr-my-2w">
                <Typography variant="body1" gutterBottom>
                    Tous biens et services considérés, selon la comptabilité nationale établie par l'Insee, le déficit des échanges extérieurs se réduit fortement, il n'est plus que de -10 Md€ en 2024, soit son niveau le moins élevé depuis 2016.
                    <br/>
                    <br/>
                    La facture énergétique, contributrice majeure aux échanges totaux, redescend progressivement, après l'année noire de 2022, où la flambée des prix due au conflit russo-ukrainien, l'indisponibilité d'une partie du parc nucléaire et la sécheresse estivale ont lourdement pesé.
                    <br/>
                    <br/>
                    Fait remarquable, la balance des biens fabriqués, hors énergie, revient à l'équilibre, grâce aux exportations de produits agroalimentaires, chimiques et pharmaceutiques.
                    <br/>
                    <br/>
                    Et la balance des services, porteuse d'une belle dynamique depuis 2021, reprend du poil de la bête en 2024, tirée par les services aux entreprises.
                </Typography>

                <Graph1 />

                <PTitle>
                    Les chocs extérieurs ont fortement pesé sur les échanges de biens
                </PTitle>

                <Typography variant="body1" gutterBottom>
                    Les statistiques du commerce extérieur traitent souvent séparément les biens (les marchandises) et les services. Les données les plus détaillées concernent les biens, et proviennent des douanes françaises ou de l'organisation mondiale du commerce. Celles sur les services sont calculées par la Banque de France et la Banque mondiale, et sont un peu moins fournies.
                    <br/>
                    <br/>
                    Les échanges de biens concernant la France connaissent deux fortes secousses dans la période récente : ils s'affaissent - comme partout ailleurs - pendant l'épidémie de Covid, et s'envolent les deux années suivantes sous le double effet d'une reprise inflationniste et de l'invasion russe en Ukraine (février 2022).
                </Typography>

                <Graph2 />

                <Typography variant="body1" gutterBottom>
                    En France, les importations croissent plus vite que les exportations et le déficit se creuse jusqu'à atteindre un minimum historique de près de 50 milliards d'€ au 3e trimestre 2022.
                    <br/>
                    <br/>
                    En 2024 et début 2025, le déficit en biens se stabilise autour de -20 milliards d’€ par trimestre, sans toutefois retrouver les niveaux plus faibles d'avant Covid (voisins de -15 milliards).
                    <br/>
                    <br/>
                    Il est à noter que les chiffres de l'Insee, concernant les échanges de biens (graphique précédent), sont plus favorables, car la comptabilité nationale, plus exigeante, reclasse une partie des échanges de marchandises vers les services. Par exemple les coûts de transport et d'assurance sont reventilés, et les échanges non déclarés font l'objet d'estimations.
                </Typography>

                <PTitle>
                    Le profil des échanges varie fortement d’une zone géographique à une autre
                </PTitle>

                <Typography variant="body1" gutterBottom>
                    La France maintient des échanges de marchandises globalement équilibrés avec l'Amérique, le Proche et Moyen-Orient, l'Afrique ou l'Europe non communautaire.
                    <br/>
                    <br/>
                    Ses échanges sont en revanche déficitaires avec l'Union européenne et, de façon plus préoccupante, avec les pays émergents, notamment en Asie.
                </Typography>

                <Graph3 />

                <PTitle>
                    La Chine a fait une entrée fracassante dans le marché mondial des biens, au détriment des pays de l’OCDE
                </PTitle>

                <Typography variant="body1" gutterBottom>
                    La Chine est devenue un acteur majeur du commerce mondial de marchandises, passant de 4 % à 14 % de part de marché en seulement 25 ans
                    <br/>
                    <br/>
                    Parallèlement, la France a vu sa part de marché décliner lentement, perdant 2,5 points de % depuis 2000, moins rapidement que le Japon, au même rythme que le Royaume-Uni, et un peu plus vite que l'Italie, qui vient de lui souffler la 5e place mondiale.
                </Typography>

                <Graph4 />
            </Box>
        </Box>
    );
};
