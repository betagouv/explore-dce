# Documentation des composants DSFR Chart

## Composants disponibles

### LineChart

**Props :**
- `x` (Array, requis) : Données de l'axe X
- `y` (Array, requis) : Données de l'axe Y  
- `name` (Array) : Noms des séries de données
- `colors` (Array) : Couleurs personnalisées
- `showLabels` (String/Array) : Affichage des étiquettes sur les points ('all', 'edges', 'minmax' ou liste d'indices)
- `unitTooltip` (String) : Unité affichée dans le tooltip
- `vline` (Array) : Lignes verticales
- `vlinecolor` (Array) : Couleurs des lignes verticales
- `vlinename` (Array) : Noms des lignes verticales
- `hline` (Array) : Lignes horizontales
- `hlinecolor` (Array) : Couleurs des lignes horizontales
- `hlinename` (Array) : Noms des lignes horizontales
- `selectedPalette` (String) : Palette de couleurs prédéfinie
- `xMin/xMax/yMin/yMax` (Number/String) : Limites des axes
- `aspectRatio` (Number) : Ratio d'aspect
- `date` (String) : Date de mise à jour
- `highlightStart` (String/Number) : Début de la zone à mettre en évidence
- `highlightEnd` (String/Number) : Fin de la zone à mettre en évidence
- `highlightLabel` (String) : Libellé de la zone mise en évidence
- `highlightLabelColor` (String) : Couleur du libellé de la zone (défaut : 'rgba(100, 100, 100, 1)')
- `highlightLabelSize` (Number) : Taille du libellé (défaut : 14)
- `highlightLabelPosition` (String) : Position du libellé ('top' | 'middle' | 'bottom', défaut : 'top')

**Exemple :**
```json
{
    "x": [[2020, 2021, 2022, 2023]],
    "y": [[10, 15, 12, 18]],
    "colors": ["#007bff"],
    "name": ["Évolution"],
    "unitTooltip": "millions",
    "highlightStart": 2021,
    "highlightEnd": 2022,
    "highlightLabel": "Période clé",
    "highlightLabelColor": "rgba(100, 100, 100, 1)",
    "highlightLabelSize": 14,
    "highlightLabelPosition": "top",
    "showLabels": [[2, 3]], // Affiche les étiquettes pour la 2ème et 3ème valeur
}
```

### BarChart

**Props :**
- `x` (Array, requis) : Données de l'axe X
- `y` (Array, requis) : Données de l'axe Y
- `name` (Array) : Noms des séries
- `stacked` (Boolean) : Empilement des barres
- `horizontal` (Boolean) : Orientation horizontale
- `barSize` (Number/String) : Taille des barres (défaut: 'flex')
- `maxBarSize` (Number) : Taille maximale des barres (défaut: 32)
- `colors` (Array) : Couleurs personnalisées
- `selectedPalette` (String) : Palette de couleurs
- `highlightIndex` (Array) : Indices à mettre en évidence par la couleur
- `unitTooltip` (String) : Unité dans le tooltip
- `xMin/xMax/yMin/yMax` (Number/String) : Limites des axes
- `aspectRatio` (Number) : Ratio d'aspect
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "x": [[2020, 2021, 2022, 2023]],
  "y": [[10, 15, 12, 18], [8, 12, 14, 20]],
  "name": ["Évolution", "Prévision"],
  "colors": ["#007bff", "#28a745"],
  "unitTooltip": "millions"
}
```

### PieChart

**Props :**
- `x` (Array, requis) : Libellés
- `y` (Array, requis) : Valeurs
- `name` (Array) : Noms des segments
- `fill` (Boolean) : True pour camembert plein, false pour anneau
- `colors` (Array) : Couleurs personnalisées
- `selectedPalette` (String) : Palette de couleurs
- `unitTooltip` (String) : Unité dans le tooltip
- `aspectRatio` (Number) : Ratio d'aspect
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "x": [["Catégorie A", "Catégorie B", "Catégorie C"]],
  "y": [[30, 50, 20]],
  "colors": ["#007bff", "#28a745", "#ffc107"],
  "name": ["Répartition"],
  "unitTooltip": "%"
}
```

### ScatterChart

**Props :**
- `x` (Array, requis) : Données de l'axe X
- `y` (Array, requis) : Données de l'axe Y
- `name` (Array) : Noms des séries
- `showLine` (Boolean) : Relier les points par des lignes
- `pointRadius` (Number) : Taille des points
- `colors` (Array) : Couleurs personnalisées
- `selectedPalette` (String) : Palette de couleurs
- `unitTooltip` (String) : Unité dans le tooltip
- `xMin/xMax/yMin/yMax` (Number/String) : Limites des axes
- `aspectRatio` (Number) : Ratio d'aspect
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "x": [[1, 2, 3, 4, 5]],
  "y": [[10, 15, 12, 18, 20]],
  "colors": ["#17a2b8"],
  "name": ["Données"],
  "unitTooltip": "unités"
}
```

### RadarChart

**Props :**
- `x` (Array, requis) : Dimensions du radar
- `y` (Array, requis) : Valeurs pour chaque dimension
- `name` (Array) : Noms des séries
- `colors` (Array) : Couleurs personnalisées
- `selectedPalette` (String) : Palette de couleurs
- `unitTooltip` (String) : Unité dans le tooltip
- `aspectRatio` (Number) : Ratio d'aspect
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "x": [["Dimension 1", "Dimension 2", "Dimension 3", "Dimension 4"]],
  "y": [[5, 3, 4, 2], [4, 4, 3, 5]],
  "name": ["Série A", "Série B"],
  "unitTooltip": "points"
}
```

### GaugeChart

**Props :**
- `value` (Number, requis) : Valeur actuelle
- `init` (Number) : Valeur initiale
- `target` (Number) : Valeur cible
- `initDate` (String) : Date de la valeur initiale
- `targetDate` (String) : Date de la valeur cible
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "value": 75,
  "init": 50,
  "target": 100,
  "initDate": "2020",
  "targetDate": "2025"
}
```

### BarLineChart

**Props :**
- `x` (Array, requis) : Données de l'axe X
- `yBars` (Array, requis) : Données pour les barres
- `yLines` (Array, requis) : Données pour les lignes
- `nameBars` (Array) : Noms des séries de barres
- `nameLines` (Array) : Noms des séries de lignes
- `unitTooltipBar` (String) : Unité pour les barres
- `unitTooltipLine` (String) : Unité pour les lignes
- `barsColors` (Array) : Couleurs des barres
- `linesColors` (Array) : Couleurs des lignes
- `stacked` (Boolean) : Empilement des barres
- `xMin/xMax/yMin/yMax` (Number/String) : Limites des axes
- `aspectRatio` (Number) : Ratio d'aspect
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "x": [[2020, 2021, 2022, 2023]],
  "yBars": [[10, 15, 12, 18], [8, 12, 14, 20]],
  "yLines": [[5, 7, 6, 9]],
  "nameBars": ["Évolution", "Prévision"],
  "nameLines": ["Moyenne"],
  "barsColors": ["#007bff", "#28a745"],
  "linesColors": ["#6c757d"],
  "unitTooltipBar": "millions",
  "unitTooltipLine": "millions"
}
```

### AreaLineChart

**Props similaires à BarLineChart :**
- `x` (Array, requis) : Données de l'axe X
- `yAreas` (Array, requis) : Données pour les zones
- `yLines` (Array, requis) : Données pour les lignes
- `nameAreas` (Array) : Noms des séries de zones
- `nameLines` (Array) : Noms des séries de lignes
- `unitTooltipArea` (String) : Unité pour les zones
- `unitTooltipLine` (String) : Unité pour les lignes
- `areasColors` (Array) : Couleurs des zones
- `linesColors` (Array) : Couleurs des lignes
- `stacked` (Boolean) : Empilement des zones
- `showAreasLabels` (Array) : Affichage des étiquettes sur les points sur les aires ('all', 'edges', 'minmax', null ou liste d'indices)
- `showLinesLabels` (Array) : Affichage des étiquettes sur les points sur les lignes ('all', 'edges', 'minmax', null ou liste d'indices)

**Exemple :**
```json
{
  "x": [[2020, 2021, 2022, 2023]],
  "yAreas": [[10, 15, 12, 18], [8, 12, 14, 20]],
  "yLines": [[5, 7, 6, 9]],
  "nameAreas": ["Évolution", "Prévision"],
  "nameLines": ["Moyenne"],
  "areasColors": ["#007bff", "#28a745"],
  "linesColors": ["#6c757d"],
  "unitTooltipArea": "millions",
  "unitTooltipLine": "millions",
  "showAreasLabels": ["all"],
  "showLinesLabels": [[2, 4], "minmax"] // Affiche les étiquettes pour la 2ème et 4ème valeur de la première ligne et les valeurs min/max de la deuxième ligne
}
```

### MapChart

**Props :**
- `data` (Object, requis) : Données avec codes géographiques
- `level` (String, requis) : 'dep' pour départements, 'reg' pour régions
- `value` (String) : Valeur affichée
- `name` (String) : Nom de l'indicateur
- `date` (String) : Date des données
- `colors` (Array) : Couleurs personnalisées
- `selectedPalette` (String) : Palette de couleurs

**Exemple :**
```json
{
  "data": {
    "01": 12.5,
    "02": 15.0,
    "03": 9.8,
  },
  "level": "dep",
  "value": "Taux de chômage",
  "name": "Chômage",
  "date": "2023"
}
```

### MapChartReg

**Props supplémentaires à MapChart :**
- `region` (String, requis) : Code de la région à afficher

### TableChart

**Props :**
- `x` (Array, requis) : En-têtes de colonnes
- `y` (Array, requis) : Données du tableau
- `tableName` (String) : Nom du tableau
- `date` (String) : Date de mise à jour

**Exemple :**
```json
{
  "x": [["Année", "Population", "PIB"]],
  "y": [
    ["2020", "67.4M", "2.6T€"],
    ["2021", "67.6M", "2.7T€"],
    ["2022", "67.8M", "2.8T€"]
  ],
  "tableName": "Données économiques",
  "date": "2024"
}
```

### TreemapChart

**Props :**
- `databoxId` (String) : Identifiant du databox (défaut : null)
- `databoxType` (String) : Type du databox (défaut : null)
- `databoxSource` (String) : Source du databox (défaut : 'default')
- `tree` (Array, requis) : Données hiérarchiques pour le treemap
- `names` (String) : Nom du treemap (défaut : '')
- `date` (String) : Date de mise à jour (défaut : '')
- `aspectRatio` (Number/String) : Ratio d'aspect (défaut : 2)
- `selectedPalette` (String) : Palette de couleurs (défaut : '')
- `colors` (Array) : Couleurs personnalisées
- `highlightIndex` (Array) : Indices à mettre en évidence par la couleur (défaut : [3, 4])
- `unitTooltip` (String) : Unité dans le tooltip (défaut : '')
- `borderWidth` (Number/String) : Largeur de la bordure (défaut : 2)
- `borderColor` (String) : Couleur de la bordure (défaut : '#ffffff')

**Exemple :**
```json
{
    "tree": [
        40,
        30,
        20,
        10,
    ],
    "names": ["Paris", "Lyon", "Marseille", "Toulouse"],
    "value": "value",
    "label": "label",
    "date": "2024",
    "aspectRatio": 2,
    "selectedPalette": "default",
    "colors": ["#007bff", "#28a745", "#ffc107", "#dc3545"],
    "highlightIndex": [3, 4],
    "unitTooltip": "%",
    "borderWidth": 2,
    "borderColor": "#ffffff"
}
```
