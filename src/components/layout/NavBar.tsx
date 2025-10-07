/*
DCE - Front
==================================
Composant générique pour la barre de navigation (du haut).
*/

import {
  FunctionComponent,
} from 'react';
import { Badge }                 from "@codegouvfr/react-dsfr/Badge"
import { cx }                    from '@codegouvfr/react-dsfr/tools/cx';
import { Header }                from "@codegouvfr/react-dsfr/Header"
import { useNavigate }           from 'react-router';
import {
  Box,
  useTheme,
} from '@mui/material';

// Composant NavBar pour afficher la barre de navigation en haut de la page
export const NavBar: FunctionComponent = () => {

    const navigate = useNavigate();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const getBrandTop = () => {
        return (
            <span>République<br />Française</span>
        )
    }

    return (
        <Box>
            <Header
                brandTop={getBrandTop()}
                className={cx({"elysee": false})}
                homeLinkProps={{
                    href: "/",
                    title: "DCE - explore.data.gouv.fr",
                    onClick: (e) => { e.preventDefault(); navigate('/');},
                }}
                serviceTitle={
                    <>DCE
                        <Badge
                        as="span"
                        noIcon
                        severity="success"
                        >
                            Beta
                        </Badge>
                    </>
                }
                serviceTagline={
                    "Données du Commerce Extérieur"
                }
                operatorLogo={{
                    alt: "Logo Explore",
                    imgUrl: isDarkMode ? "explore-dark.svg" : "explore-light.svg",
                    orientation: "horizontal",
                }}
            />
        </Box>
    );
};
