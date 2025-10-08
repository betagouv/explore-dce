/*
DCE - Front
==================================
Page d'acceuil de DCE.
*/

import {
    Typography,
    Container,
    Box
} from "@mui/material";
import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
import { Section1 } from "@src/components/Section1";
import { Section2 } from "@src/components/Section2";
import { Section3 } from "@src/components/Section3";
import { Section4 } from "@src/components/Section4";
import { useScroll } from "@src/hooks/useScroll";
import { SectionTitle } from "@src/components/generic/SectionTitle";
import { Stack } from "@mui/system";

const items = [
    {
        shortText: "Place de la France",
        longText: "Place de la France dans le commerce mondial",
        component: <Section1 />
    },
    {
        shortText: "Évolutions récentes",
        longText: "Évolutions récentes du commerce extérieur",
        component: <Section2 />
    },
    {
        shortText: "Focus sectoriel sur les échanges de marchandises",
        longText: "Focus sectoriel sur les échanges de marchandises",
        component: <Section3 />
    },
    {
        shortText: "Focus sectoriel sur les échanges de services",
        longText: "Focus sectoriel sur les échanges de services",
        component: <Section4 />
    },
];

export const HomePage = () => {
    const activeIndex = useScroll(items);

    return (
        <Container
        maxWidth="xl"
        sx={{
            mb: 10,
            pt: 5,
            display: "flex",
            flexDirection: "column",
        }}
        >
            <Typography variant="h1" gutterBottom>
                Le commerce extérieur de la France en chiffres et visualisations
            </Typography>
            <Typography variant="body1" gutterBottom>
                Explorez les données essentielles <strong>pour comprendre facilement l'évolution et les enjeux actuels du commerce extérieur de la France</strong>.
                <br/>
                <br/>
                Portée par les équipes de la Direction Interministérielle du Numérique, cette initiative vise à simplifier l'accès, l'appropriation, la réutilisation et la circulation des données publiques du commerce extérieur par <strong>toutes et tous</strong>, afin d'enrichir le débat public.
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} mt={4}>
                <Box
                sx={{
                    position: {
                        xs: "relative",
                        md: "sticky"
                    },
                    top: {
                        md: 100
                    },
                    maxHeight: {
                        md: "calc(100vh - 120px)"
                    },
                    overflowY: {
                        md: "auto"
                    },
                    minWidth: {
                        xs: "100%",
                        md: "250px"
                    },
                    maxWidth: {
                        xs: "100%",
                        md: "300px"
                    },
                    pr: {
                        md: 2
                    },
                    pb: {
                        xs: 3,
                        md: 0
                    },
                    flexShrink: 0,
                }}
                >
                    <SideMenu
                    align="left"
                    burgerMenuButtonText="Dans cette section"
                    items={items.map((item, index) => ({
                        text: item.shortText,
                        isActive: activeIndex === index,
                        linkProps: {
                            href: `#section-${index + 1}`,
                        },
                    }))}
                    />
                </Box>

                <Box
                sx={{
                    px: 1,
                    minHeight: "300px",
                    overflowX: "hidden",
                }}
                >
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            id={`section-${index + 1}`}
                            sx={{ mb: 8 }}
                        >
                            <SectionTitle>
                                {item.longText}
                            </SectionTitle>
                            {item.component}
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Container>
    );
};
