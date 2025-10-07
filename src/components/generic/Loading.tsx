/*
DCE - Front
==================================
Page générique pour l'affichage d'un écran de chargement.
*/

import { CircularProgress, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Loading = ({ withPrivateBar =  false }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: `calc(100vh - ${
            isMobile
                ? 258
                : withPrivateBar
                    ? 218
                    : 162
        }px)`,
    }}>
        <CircularProgress size={80} />
    </div>
};
