/*
DCE - Front
==================================
Page générique pour l'affichage d'une page non trouvée.
*/

import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router';

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Container maxWidth="xl" sx={{ mb: 10, pt: 5 }}>
            <Typography variant="h1">Page non trouvée</Typography>
            <Typography variant="h4">Désolé, la page demandée n'a pas été trouvée.</Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
                sx={{ mt: 2 }}
            >
                Retour à l'accueil
            </Button>
        </Container>
    );
}

