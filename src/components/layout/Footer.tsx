import { Footer as DSFRFooter }        from "@codegouvfr/react-dsfr/Footer";
import '@src/styles/Footer.scss';
import { useTheme }                   from '@mui/material';
import { useNavigate }                from 'react-router';

export const Footer = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const isDarkMode = theme.palette.mode === 'dark';

    const getBrandTop = (
        <span>République<br />Française</span>
    )

    const descr = <>
        Explorez les données essentielles <b>pour comprendre facilement l'évolution et les enjeux actuels du commerce extérieur de la France</b>.

    </>

    return (
        <DSFRFooter
            accessibility="non compliant"
            accessibilityLinkProps={{ onClick: (e) => { e.preventDefault(); navigate("/accessibilite")}, href: "/accessibilite", title: "Déclaration d'accessibilité" }}
            contentDescription={descr}
            brandTop={getBrandTop}
            operatorLogo={{
                    alt: "Logo Explore",
                    imgUrl: isDarkMode ? "/explore-dark.svg" : "/explore-light.svg",
                    orientation: "horizontal",
            }}
        />
    );
};
