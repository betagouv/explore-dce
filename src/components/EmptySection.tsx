import { Typography, Box } from "@mui/material";

export const EmptySection = () => {

    return (
        <Box className="part_container">
            {/* Partie 1 - Général */}
            <Box className="fr-my-2w">
                <Typography variant="body1" gutterBottom>
                    Aucun contenu disponible pour cette section actuellement.
                </Typography>
            </Box>
        </Box>
    );
};
