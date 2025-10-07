import { createElement } from "react";
import { Typography, Box } from "@mui/material";
import { toKebabCaseProps } from "@src/utils/camelToKebabCase";
import { chartData, dataBox } from "@src/constants/data";

const Graph1 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section1["databox-top-echanges-mondiaux"],
            id: 'section1-graph1',
            title: 'Exports et imports de biens et services : les 10 premiers pays exportateurs en 2024 en Md$',
        }))}

        {createElement("bar-line-chart", {
            ...toKebabCaseProps(chartData.section1["barline-10-premiers-pays-exportateurs"]),
            "databox-id": "section1-graph1",
            "databox-type": "chart",
            "databox-source": "barline-10-premiers-pays-exportateurs",
        })}
    </Box>
}

const Graph2 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({
            ...dataBox.common,
            ...dataBox.section1["databox-solde-biens-services-pib"],
            id: 'section1-graph2',
            title: 'Exports et imports de biens et services : les 10 premiers pays exportateurs en 2024 en Md$',
        }))}

        {createElement("bar-chart", {
            ...toKebabCaseProps(chartData.section1["barchart-solde-biens-services-pib"]),
            "databox-id": "section1-graph2",
            "databox-type": "chart",
            "databox-source": "barchart-solde-biens-services-pib",
        })}
    </Box>
}

export const Section1 = () => {

    return (
        <Box className="part_container">
            <Box className="fr-my-2w">
                <Typography variant="body1" gutterBottom>
                    La France est 5e pays exportateur mondial de biens et services, mais elle est aussi le 5e importateur mondial
                    <br/>
                    <br/>
                    Sa balance commerciale est déficitaire, ce qui n'est le cas que d'une minorité de pays dans l'Union européenne (6 pays sur 27).
                    <br/>
                    <br/>
                    Mais la France fait mieux que le Royaume-Uni ou les USA, si l'on rapporte le solde des échanges au produit intérieur brut (PIB).
                </Typography>

                <Graph1 />

                <Typography variant="body1" gutterBottom>
                    Au sein de l'Union européenne, avec la France, seules la Belgique, la Lettonie, la Croatie, la Grèce et la Roumanie présentent un déficit en échanges de biens et services.
                    <br/>
                    <br/>
                    La performance européenne moyenne est tirée vers le haut par l'Allemagne et aussi quelques pays à la fiscalité avantageuse : Irlande, Luxembourg, Malte, ou plaque tournante logistique comme les Pays-Bas…
                    <br/>
                    <br/>
                    Toutefois, la France reste proche de la moyenne des pays de l'OCDE
                </Typography>

                <Graph2 />
            </Box>
        </Box>
    );
};
