# glyphs

> generer / heberger les glyphs pour les couches vecteurs tuilés IGN

## specification

cf. https://docs.mapbox.com/mapbox-gl-js/style-spec/glyphs/

## forme du template

Ex. d'URL de templates

`mapbox://fonts/openmaptiles/{fontstack}/{range}.pbf` ou `http://fonts.openmaptiles.org/{fontstack}/{range}.pbf`

## generation des fonts.pbf

> cf. **GENERATE.md** pour l'utilisation de l'outil

depot github pour generer des fonts.pbf :
https://github.com/openmaptiles/genfontgl

## fonts.pbf

> cf. **TEST.md** pour tester le resultat des glyphs sur une carte

depot de fonts au format PBF :
https://github.com/bravecow/fonts.pbf


## portail

### liste de fonts

Pour la couche PLAN.IGN :
`[Source Sans Pro Italic]`

### hebergement des fonts

L'hebergement est à faire sur le referenciel statique du Portail : `https://wxs.ign.fr/static/vectorTiles/`

### template

Le template à mettre en place sur les fichiers de styles IGN :
`https://wxs.ign.fr/static/vectorTiles/fonts/{fontstack}/{range}.pbf`
