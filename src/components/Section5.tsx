import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    Link,
} from '@mui/material';

export const Section5 = () => {

    interface SourceLink {
        label: string;
        href: string;
    }

    interface Source {
        name: string;
        contenu: string;
        couverture: string;
        liens: SourceLink[];
        notes: string[];
    }

    const data: Source[] = [
        {
        name: 'Douanes données brutes (DSECE)',
        contenu: "Échanges de biens entre la France et le reste du monde.",
        couverture: '2004 à 2025',
        liens: [
            {
            label: 'Liens',
            href: 'https://lekiosque.finances.gouv.fr/site_fr/telechargement/telechargement_SGBD.asp',
            },
            {
            label: 'Documentation (nomenclatures)',
            href: 'https://lekiosque.finances.gouv.fr/site_fr/etudes/methode/nomenclature.asp',
            },
            {
            label: 'Documentation (zones économiques)',
            href: 'https://lekiosque.finances.gouv.fr/fichiers/guide/Table_accord.pdf',
            },
        ],
        notes: [
            'Biens référencés avec les nomenclatures NC8, CPF6 et A129.',
            'Valeurs exprimées en euros (€).',
            'Non compris le matériel militaire.',
        ],
        },
        {
        name: 'Douanes données trimestrielles (DGDDI/DSECE)',
        contenu: "Échanges de biens entre la France et le reste du monde.",
        couverture: 'T1 2009 à T2 2025',
        liens: [
            {
            label: 'Lien',
            href: 'https://lekiosque.finances.gouv.fr/site_fr/etudes/bilans_periodiques.asp',
            },
        ],
        notes: [
            'Valeurs exprimées en milliards d’euros (€).',
            'Correction des variations saisonnières et effets de jours ouvrables (CVS-CJO).',
            'Contient le matériel militaire et les données sous le seuil déclaratif.',
        ],
        },
        {
        name: 'BACI - HS22 (CEPII)',
        contenu: 'Échanges de biens entre les pays du monde.',
        couverture: '2022 à 2023',
        liens: [
            {
            label: 'Lien',
            href: 'https://www.cepii.fr/CEPII/fr/bdd_modele/bdd_modele_item.asp?id=37',
            },
            {
            label: 'Documentation courte',
            href: 'https://www.cepii.fr/DATA_DOWNLOAD/baci/doc/DescriptionBACI.html',
            },
            {
            label: 'Documentation technique',
            href: 'https://www.cepii.fr/PDF_PUB/wp/2010/wp2010-23.pdf',
            },
        ],
        notes: [
            'Biens référencés avec la nomenclature HS22 (Harmonized System).',
            'Valeurs exprimées en milliers de dollars ($).',
        ],
        },
        {
        name: 'Balance des paiements (Banque de France)',
        contenu: 'Échanges de services entre la France et le reste du monde.',
        couverture: '2013 à 2024',
        liens: [
            {
            label: 'Dépenses',
            href: 'https://webstat.banque-france.fr/fr/catalogue/bpm6/BPM6.A.N.FR.W1.S1.S1.T.D.S._Z._Z._Z.EUR._T._X.N.ALL',
            },
            {
            label: 'Recettes',
            href: 'https://webstat.banque-france.fr/fr/catalogue/bpm6/BPM6.A.N.FR.W1.S1.S1.T.C.S._Z._Z._Z.EUR._T._X.N.ALL',
            },
            {
            label: 'Solde',
            href: 'https://webstat.banque-france.fr/fr/catalogue/bpm6/BPM6.A.N.FR.W1.S1.S1.T.B.S._Z._Z._Z.EUR._T._X.N.ALL',
            },
        ],
        notes: [
            'Services catégorisés en ~40 catégories.',
            'Valeurs exprimées en millions d’euros (€).',
        ],
        },
        {
        name: 'WDI (Banque mondiale)',
        contenu: 'Échanges de biens et services et PIB par pays.',
        couverture: '1960 à 2024',
        liens: [
            {
            label: 'PIB',
            href: 'https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?most_recent_value_desc=true',
            },
            {
            label: 'Exports',
            href: 'https://data.worldbank.org/indicator/NE.EXP.GNFS.CD?most_recent_value_desc=true',
            },
            {
            label: 'Imports',
            href: 'https://data.worldbank.org/indicator/NE.IMP.GNFS.CD?most_recent_value_desc=true',
            },
        ],
        notes: [
            'Valeurs exprimées en dollars ($).',
            'Méthode d’agrégation : "Gap-filling total".',
        ],
        },
        {
        name: 'OMC - Insee',
        contenu: 'Parts de marché des pays dans les exportations de marchandises.',
        couverture: '2000 à 2024',
        liens: [
            {
            label: 'Lien',
            href: 'https://www.insee.fr/fr/statistiques/2413545#tableau-figure1',
            },
            {
            label: 'Documentation technique',
            href: 'https://stats.wto.org/assets/UserGuide/TechnicalNotes_en.pdf',
            },
        ],
        notes: [
            'Pourcentage de parts de marché.',
            'Réexportations et réimportations incluses dans le commerce total.',
        ],
        },
        {
        name: 'Les comptes de la Nation en 2024 (Insee)',
        contenu: 'Soldes des échanges extérieurs de la France (biens dont énergie et services).',
        couverture: '2014 à 2024',
        liens: [
            {
            label: 'Lien',
            href: 'https://www.insee.fr/fr/statistiques/8574058#tableau-figure3',
            },
        ],
        notes: [
            'Valeurs exprimées en milliards d’euros (€).',
            'Base 2020.',
        ],
        },
    ];

    const rows: { label: string; render: (d: Source) => React.ReactNode }[] = [
        { label: 'Contenu', render: (d) => d.contenu },
        { label: 'Couverture temporelle', render: (d) => d.couverture },
        {
        label: 'Liens',
        render: (d) =>
            d.liens.map((l, i) => (
            <Typography variant="body2" key={i}>
                <Link href={l.href} target="_blank" rel="noopener">
                {l.label}
                </Link>
            </Typography>
            )),
        },
        {
        label: 'Notes',
        render: (d) => (
            <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
            {d.notes.map((n, i) => (
                <li key={i}>
                <Typography variant="body2">{n}</Typography>
                </li>
            ))}
            </ul>
        ),
        },
    ];

    return (
        <Box className="part_container">
        <Stack spacing={2} className="fr-my-2w">
            <Typography variant="body1">
            Cette section s’adresse aux <strong>journalistes ou toute personne qui souhaitent exploiter de la donnée liée au commerce extérieur</strong>, en garantissant la transparence de nos méthodes de calcul et la reproductibilité des graphiques.
            </Typography>

            <Typography variant="body1">
            Elle vise aussi <strong>tous ceux qui veulent découvrir ou trouver des informations sur le commerce extérieur</strong> (grand public, sphère économique etc.), en rendant l’analyse des données claire et pédagogique dans le cadre de notre démarche d'ouverture et de circulation des données publiques.
            </Typography>

            <Typography variant="h3" gutterBottom>
            Le B.A.-BA en analyse du commerce extérieur
            </Typography>

            <Typography variant="h4" gutterBottom>
            Comprendre les concepts autour du commerce extérieur
            </Typography>

            <Typography variant="body1">
            L’analyse du commerce extérieur s’inscrit dans la <strong>macroéconomie</strong>, qui étudie le fonctionnement global d’un pays ou du monde à travers des phénomènes comme la croissance, le chômage, l’inflation ou les échanges internationaux. Elle permet de comprendre comment les relations économiques entre pays influencent la santé et le développement des économies.
            </Typography>

            <Typography variant="body1">
            Le <strong>commerce extérieur</strong> désigne <strong>l’échange de biens et de services entre un pays et le reste du monde</strong>.
            </Typography>

            <Stack spacing={0.5}>
            <Typography variant="body1">
                • Lorsqu’un pays <strong>vend à l’étranger</strong>, on parle d’<strong>exportations</strong>.
            </Typography>
            <Typography variant="body1">
                • Lorsqu’il <strong>achète à l’étranger</strong>, ce sont des <strong>importations</strong>.
            </Typography>
            </Stack>

            <Typography variant="body1">
            Ce système permet aux pays de se procurer des produits qu’ils ne fabriquent pas et de vendre ceux dans lesquels ils sont spécialisés, renforçant ainsi leur richesse et leurs liens internationaux. En cinquante ans, les économies sont devenues de plus en plus interdépendantes, ce qui s’est traduit par une hausse de la part des échanges extérieurs dans l’activité économique de la France.
            </Typography>

            <Typography variant="body1">
            Dans ces échanges, on distingue principalement les <strong>biens</strong> et les <strong>services</strong> :
            </Typography>

            <Stack spacing={0.5}>
            <Typography variant="body1">
                • Un <strong>bien</strong> est un objet matériel que l’on peut toucher et utiliser (ex. : nourriture, vêtements, voitures).
            </Typography>
            <Typography variant="body1">
                • Un <strong>service</strong> est une prestation immatérielle (ex. : une coupe chez le coiffeur, une consultation médicale, une course en taxi).
            </Typography>
            </Stack>

            <Typography variant="body1">
            À l’échelle internationale, cela peut correspondre par exemple à une entreprise française qui exporte des logiciels, à une société qui importe des services de cloud étrangers, ou à une compagnie maritime française qui transporte des marchandises pour des clients étrangers.
            </Typography>

            <Typography variant="body1">
            Enfin, le <strong>solde commercial</strong> correspond à la différence entre la valeur des exportations et celle des importations d’un pays :
            </Typography>

            <Stack spacing={0.5}>
            <Typography variant="body1">
                • Si le <strong>solde est positif</strong>, le pays exporte plus qu’il n’importe, il est en <strong>excédent commercial</strong>.
            </Typography>
            <Typography variant="body1">
                • Si le <strong>solde est négatif</strong>, il importe plus qu’il n’exporte, il est en <strong>déficit commercial</strong>.
            </Typography>
            </Stack>

            <Typography variant="h4" gutterBottom>
            Acronymes et nomenclatures utilisés
            </Typography>

            <Typography variant="body1">
            Pour comprendre le commerce extérieur, il est utile de connaître deux façons de mesurer la valeur des échanges de <strong>biens</strong> : <strong>CAF/FAB</strong> et <strong>FAB/FAB</strong>.
            </Typography>

            <Stack spacing={0.5}>
            <Typography variant="body1">
                • La valeur <strong>FAB</strong> (<em>Free on Board</em>) correspond au prix d’un produit au départ du pays exportateur, sans tenir compte des frais de transport ou d’assurance liés à l’exportation.
            </Typography>
            <Typography variant="body1">
                • La valeur <strong>CAF</strong> (<em>Coût, Assurance, Fret</em>) inclut, en plus du prix du produit, les coûts de transport et d’assurance pour l’acheminer jusqu’au pays importateur.
            </Typography>
            </Stack>

            <Typography variant="body1">
            Plusieurs systèmes de classification (<strong>nomenclatures</strong>) permettent d’organiser les biens selon leur nature et leur usage :
            </Typography>

            <Stack spacing={0.5}>
            <Typography variant="body1">
                • <strong>HS</strong> : Système harmonisé international, composé de 6 chiffres, utilisé pour comparer les échanges entre pays.
            </Typography>
            <Typography variant="body1">
                • <strong>NC8</strong> : Nomenclature combinée à 8 chiffres, utilisée principalement pour le commerce au sein de l’Union européenne. Les six premiers chiffres correspondent au code HS, tandis que les deux derniers apportent des précisions tarifaires et statistiques supplémentaires sur le bien. Les codes CPF NC8 sont revus annuellement pour correspondre à la réalité du marché. Ce{" "}
                <Link href="https://lekiosque.finances.gouv.fr/site_fr/telechargement/transfert_file.asp?id=7&f=Table_correspondances.zip" target="_blank" rel="noopener">
                fichier
                </Link>{" "}
                répertorie les années de validité des codes.
            </Typography>
            <Typography variant="body1">
                • <strong>CPF6</strong> : Classification française des produits à 6 chiffres basée sur le code NC8.{" "}
                <Link href="https://www.insee.fr/fr/information/2579545" target="_blank" rel="noopener">
                Détails des révisions 1 (avant 2008), 2 (de 2008 à 2015) et 2.1 (à partir de 2015)
                </Link>
            </Typography>
            <Typography variant="body1">
                • <strong>A129</strong> : Une autre classification française, qui comporte moins de catégories que la CPF6, pour des usages statistiques.
            </Typography>
            </Stack>

            <Typography variant="body1">
            <strong>Pour les services</strong>, la base de données Balance des paiements (Banque de France) répertorie les échanges en grandes catégories selon leur type : Services d’entretien et de réparation n.i.a., Transports, Voyages, Autres services aux entreprises, Services de recherche et développement, etc. La liste exhaustive des catégories des services se trouve à la page 24 du document{" "}
            <em>
                <Link
                href="https://www.banque-france.fr/fr/system/files?file=2023-06/bdp-methodologie_072015.pdf"
                target="_blank"
                rel="noopener"
                >
                Méthodologie – La balance des paiements et la position extérieure de la France
                </Link>
            </em>.
            </Typography>

            <Typography variant="h3" gutterBottom>
            Sources de données
            </Typography>

            <Typography variant="body1">
            Pour réaliser les graphiques présentés, nous avons utilisé plusieurs sources de données, dont trois bases de données principales : Douanes (DSECE), BACI - CEPII (Comtrade) et la Balance des paiements (Banque de France).
            </Typography>

            <Stack spacing={0.5}>
            <Typography variant="body1">
                • Le <strong>Département des Statistiques et Études du Commerce Extérieur (DSECE)</strong> est le service en charge de suivre et analyser les évolutions des échanges extérieurs de biens de la France.
            </Typography>
            <Typography variant="body1">
                • Le <strong>CEPII</strong> est un centre français de recherche en économie internationale qui réalise des études, produit des bases de données et fournit des analyses sur divers aspects de l’économie mondiale.
            </Typography>
            <Typography variant="body1">
                • La <strong>Banque de France</strong> est chargée d’établir la balance des paiements, un document statistique qui retrace l’ensemble des transactions économiques et financières de la France avec le reste du monde.
            </Typography>
            </Stack>

            <Typography variant="body1">
            Le tableau ci-dessous présente l'ensemble des sources de données mobilisées dans le cadre de notre analyse :
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 4, overflowX: 'auto' }}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>
                        <Typography fontWeight="bold">Catégorie</Typography>
                        </TableCell>
                        {data.map((d) => (
                        <TableCell key={d.name}>
                            <Typography fontWeight="bold">{d.name}</Typography>
                        </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.label}>
                        <TableCell sx={{ fontWeight: 'bold' }}>{row.label}</TableCell>
                        {data.map((d) => (
                            <TableCell key={`${d.name}-${row.label}`}>
                            {row.render(d)}
                            </TableCell>
                        ))}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant="h5" gutterBottom mt={4}>
                Aide à l'interprétation et limites des données
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Il est important de rappeler que les statistiques d’importations et d’exportations présentent certaines limites, qui peuvent rendre leur interprétation sensible à certains biais.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Certains pays servent de <b>hubs de transit</b> : ils accueillent des biens produits à l’étranger qui sont stockés dans leurs entrepôts avant d’être réexportés. Même si ces produits ne sont pas fabriqués localement, ils sont comptabilisés comme des exportations du pays qui les abrite, ce qui peut donner une impression exagérée du volume réel des exportations nationales.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Un autre facteur à considérer est l’<b>internationalisation de la production</b>. De nombreuses entreprises délocalisent une partie de leur fabrication à l’étranger. Les produits finis peuvent alors être comptabilisés comme des importations ou des exportations, même s’ils proviennent de la même entreprise.
            </Typography>

        </Stack>
        </Box>
    );
};
