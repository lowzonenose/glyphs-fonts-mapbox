# Generation des glyphs

> test de l'utilitaire pour generer les **fonts.pbf** à partir des **fonts** (.ttf)

## Le code source

Le depots de code est dans le répertoire `repo` :

    https://github.com/openmaptiles/genfontgl

Autres utilitaires possibles :

    https://github.com/mapbox/fontnik
    https://github.com/mapbox/node-fontnik

## Les fonts

Les fonts sont dans le répertoire `data` :

* fonts : format .ttf | .woff | .eot | svg
* fonts.pbf : glyphs déjà generés dans le depot https://github.com/bravecow/fonts.pbf.git

## Usage de l'utilitaires 'genfontgl'

**UTILISATION DE NODE : v6.10.0**

* installation avec l'utilitaire 'n'

```sh
$> sudo n v6.10.0
```

* compilation

```sh
$bin/genfontgl> npm install
```

* generer les glyphs

```sh
$bin/genfontgl> node index.js ./../../data/fonts/OpenSans-Light.ttf ../../test/fonts.pbf/genfontgl/

$bin/genfontgl> node index.js ./../../data/fonts/AkayaTelivigala-Regular.ttf ../../test/fonts.pbf/genfontgl/
```

> cf. **TEST.md** pour tester le resultat des glyphs sur une carte