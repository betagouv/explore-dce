import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link"
import { CallOut } from "@codegouvfr/react-dsfr/CallOut";


export const Accessibilite = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 4 }}>
        <CallOut title="Déclaration d’accessibilité">
            <Box component="header" sx={{ mb: 3 }}>
            <Typography component="p" variant="body2">
                Établie le 29 septembre 2025.
            </Typography>
            </Box>

            <Box component="main" sx={{ mb: 3 }}>
                <Typography variant="body1">
                    Notre organisation s’engage à rendre son service accessible,
                    conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.
                </Typography>

                <Typography variant="body1">
                    Cette déclaration d’accessibilité s’applique à <strong>ce service</strong>.
                </Typography>

                <Typography component="h2" variant="h6" sx={{ mt: 2, mb: 1 }}>
                    État de conformité
                </Typography>

                <Typography variant="body1">
                    <strong>Notre site</strong> est <strong>non conforme</strong> avec le <abbr title="Référentiel général d’amélioration de l’accessibilité">RGAA</abbr>. Le site n’a encore pas été audité.
                </Typography>

                <Typography component="h2" variant="h6" sx={{ mt: 2, mb: 1 }}>
                    Voie de recours
                </Typography>

                <Typography variant="body1">
                    Cette procédure est à utiliser dans le cas suivant&nbsp;: vous avez signalé au
                    responsable du site internet un défaut d’accessibilité qui vous empêche d’accéder
                    à un contenu ou à un des services du portail et vous n’avez pas obtenu de réponse
                    satisfaisante.
                </Typography>

                <Typography variant="body1">Vous pouvez&nbsp;:</Typography>

                <List sx={{ listStyleType: "disc", pl: 2}}>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText
                        primary={
                            <>
                                Écrire un message au{" "}
                                <Link href="https://formulaire.defenseurdesdroits.fr/" target="_blank">
                                    Défenseur des droits
                                </Link>
                            </>
                        }
                        />
                    </ListItem>

                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText
                        primary={
                            <>
                                Contacter{" "}
                                <Link
                                    href="https://www.defenseurdesdroits.fr/saisir/delegues"
                                    target="_blank"
                                >
                                    le délégué du Défenseur des droits dans votre région
                                </Link>
                            </>
                        }
                        />
                    </ListItem>

                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText
                        primary={
                            <>
                                Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :<br/>
                                <strong>Défenseur des droits</strong><br/>Libre réponse 71120 75342 Paris CEDEX 07
                            </>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </CallOut>
    </Container>
  );
}
