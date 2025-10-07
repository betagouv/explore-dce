import { createElement } from "react";
import { Typography, Box } from "@mui/material";
import { toKebabCaseProps } from "@src/utils/camelToKebabCase";

const Graph1 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({}))}
    </Box>
}

const Graph2 = () => {
    return <Box my={4}>
        {createElement("data-box", toKebabCaseProps({}))}
    </Box>
}

export const Section4 = () => {
    return (
        <Box className="part_container">
            <Box className="fr-my-2w">
                <Typography variant="body1"  gutterBottom>
                    Après le covid, les exportations (ou recettes) françaises ont progressé plus vite que les dépenses (importations), permettant à la France d’améliorer son excédent dans les services, qui retrouve un niveau très élevé.
                </Typography>

                <Graph1 />

                <Typography variant="body1"  gutterBottom>
                    Comme la Banque de France le précise dans diverses études, ces chiffres ne reflètent pas la totalité des recettes, car la majorité des services fournis par les entreprises françaises le sont via des filiales à l’étranger, et ne sont donc pas considérées comme des exportations. On peut songer par exemple aux assurances et autres services financiers.
                </Typography>

                <Graph2 />

                <Typography variant="body1" gutterBottom>
                    Les exportations de services de voyage atteignent un record de 70 Md€ en 2024, portées par le tourisme international (Belgique, Royaume-Uni, Allemagne, États-Unis) et l’effet des Jeux olympiques à Paris.
                    <br/>
                    <br/>
                    Les services financiers bénéficient d’un effet Brexit qui a renforcé l’attractivité de la place de Paris aux dépens de celle de Londres.
                    <br/>
                    <br/>
                    Après des excédents inédits en 2021 et en 2022, dus en particulier à la reprise du trafic maritime mondial après le Covid, et la réorganisation des routes mondiales du fait des tensions en mer Rouge, le solde des services de transports reste excédentaire, toujours grâce aux performances des services de transport maritime.
                    <br/>
                    <br/>
                    Enfin, l’excédent des autres services aux entreprises se redresse de façon importante, après une année 2023 moins favorable. Il se rapproche à nouveau des niveaux élevés de 2021 et 2022.
                </Typography>
            </Box>
        </Box>
    );
};
