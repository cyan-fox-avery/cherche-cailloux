# Cherche-cailloux

**Bêta 1.2.2 — Mise à jour du carnet de découvertes**

> ça fait crac.

Cherche-cailloux est un jeu de minage incrémental pour navigateur, fini et axé sur la collection. Mine une paroi rocheuse de 10×10, suis de petits indices géologiques, utilise des outils de prospection, traite tes trouvailles à l’établi, remplis un musée et automatise progressivement les matériaux que tu maîtrises complètement.

Le jeu mise sur la découverte active plutôt que sur les minuteries ou les frustrations monétisées. Il n’y a qu’une seule monnaie en jeu, le traitement est gratuit, les charges des outils se réinitialisent avec une nouvelle paroi, et il n’y a ni monnaie premium, ni minuterie d’énergie, ni paiement pour sauter une étape, ni progression achetée avec de l’argent réel.

## Boucle principale

**Creuser → découvrir → traiter, donner ou vendre → améliorer le musée et l’équipement → descendre plus profond → trouver des cailloux de plus en plus étranges.**

Un spécimen commun peut rester utile pendant toute la partie. Plus profond ne veut pas automatiquement dire « meilleur », et les minéraux ne suivent pas une échelle de rareté générique.

## Minage

Chaque paroi rocheuse est une grille fixe de **10×10** contenant des trouvailles isolées, de petits filons connectés, de gros filons occasionnels, des fossiles et des objets historiques. De subtils indices dans la roche peuvent suggérer des endroits prometteurs sans révéler les cibles exactes.

Les outils de prospection donnent de l’information sans résoudre la grille à ta place :

- **Scanner de zone :** choisis une case pour sonder son voisinage 3×3. Les cases scannées restent marquées sur cette paroi. Les premiers niveaux indiquent surtout la chimie; un meilleur scanner ajoute des renseignements sur la forme du dépôt et peut finir par identifier précisément les minéraux. Scanner deux fois une zone occupée peut révéler une très faible ombre de densité générique sans montrer ce qui s’y cache.
- **Détecteur de métaux :** un seul balayage de toute la paroi. Il marque de grandes zones volontairement imprécises pouvant contenir des cibles métalliques ou conductrices, y compris certains objets historiques.

Les deux outils utilisent des charges par paroi plutôt que des minuteries de recharge en temps réel.

## Établi

Les minéraux peuvent passer par des formes comme **Brut → Roulé → Taillé**. Les minerais peuvent être raffinés en leurs métaux associés. Le traitement lui-même ne coûte rien, même si les matériaux plus avancés exigent un meilleur équipement d’atelier.

Compléter toutes les formes d’un matériau transformable au musée débloque le **traitement automatique pour ce matériau précis**. Le bouton global Tout vendre est lui aussi lié à la maîtrise et ne vend que le stock provenant d’ensembles complets de minéraux et de minerais.

## Musée

Le musée montre ses emplacements vides à l’avance et donne à chaque forme collectionnée sa propre fiche de géologie ou de gemmologie. Compléter un ensemble ajoute une découverte bonus et débloque l’automatisation du matériau lorsque c’est pertinent.

La Bêta 1.2 ajoute une **lampe UV de fluorescence**. Une fois installée, le musée obtient un contrôle d’éclairage **Normal / UV**. La plupart des spécimens restent sombres sous UV, tandis que certains matériaux fluorescents révèlent des couleurs lumineuses distinctives.

Ailes actuelles du musée :

- Salle des minéraux
- Minerais et métaux
- Aile des fossiles
- Aile historique

## Profondeurs actuelles de la mine

### Profondeur 1 — Filon supérieur
Quartz, améthyste, hématite, chalcopyrite et premières trouvailles secondaires.

### Profondeur 2 — Galeries basses
Ajoute grenat, topaze, pyrite, trilobites, fragments de crinoïdes et davantage d’options de prospection.

### Profondeur 3 — Galerie profonde
Ajoute citrine, calcite, fluorite, aigue-marine, saphir, cassitérite, ammonites et des traces historiques plus profondes.

### Profondeur 4 — Filons cristallins
Ajoute quartz rose, malachite, rubis, émeraude, galène, sphalérite, brachiopodes et d’autres objets liés à l’histoire minière.

### Profondeur 5 — Zone lumineuse
Ajoute scheelite et tungstène, willemite, hackmanite, apatite, opale, bélemnites et de vieilles pièces de rails miniers. Cette profondeur introduit le premier système consacré à une propriété des minéraux : la fluorescence UV.

## Changements de la Bêta 1.2.2

- L’Établi agit maintenant comme un carnet de terrain : seuls les spécimens que tu as réellement découverts y apparaissent.
- Chaque fiche découverte indique la ou les profondeurs où tu as rencontré ce spécimen.
- Les minéraux, minerais/métaux et objets historiques encore inconnus sont masqués au Musée jusqu’à ce que tu en trouves au moins un. Les emplacements vides restent visibles sans révéler leur identité.
- Le niveau le plus avancé du scanner ne révèle plus le nom exact d’un minéral encore inconnu avant que tu ne l’aies trouvé physiquement.
- Les descriptions des améliorations révèlent moins de contenu à l’avance afin que les futures trouvailles restent des surprises.
- Les sauvegardes existantes de la Bêta 1.2.x sont migrées automatiquement. Les spécimens déjà découverts restent découverts; comme les anciennes versions ne conservaient pas l’historique des profondeurs, des emplacements connus utiles sont ajoutés aux anciennes découvertes.
- Inclut le correctif Bêta 1.2.1 qui rétablit l’affichage des sprites sur la paroi rocheuse.

## Changements de la Bêta 1.2

- Ajout de la **Profondeur 5 : Zone lumineuse**.
- Ajout de **Scheelite → Tungstène**, **Willemite**, **Hackmanite**, **Apatite** et **Opale**.
- Ajout du fossile **Bélemnite** et de l’objet historique **Vieux crampon de rail**.
- Ajout d’un nouvel **Atelier lapidaire spécialisé** pour les matériaux de la profondeur 5.
- Ajout de la **lampe UV de fluorescence** et d’un mode d’éclairage Normal / UV pour tout le musée.
- Ajout d’un comportement sous UV à certains anciens spécimens, notamment la fluorite, la calcite, le rubis et la sphalérite.
- Réorganisation de l’écran de mine : toutes les profondeurs sont visibles dans un sélecteur dédié, la liste complète « Trouvé sur cette paroi » reste visible, et le scanner et le détecteur de métaux deviennent deux commandes compactes côte à côte sous la paroi.
- Les explications du scanner et du détecteur ont été déplacées vers l’écran Améliorations.
- Les états d’amélioration terminés sont simplifiés en **MAX** ou **MAX (d’autres arrivent bientôt... 👀)**.
- Ajout de petits reflets occasionnels et subtils sur les illustrations de gemmes et de minéraux.
- Conservation de la présentation compacte des succès façon étagère à trophées, avec ajout de **Coup d’éclat** et **Le spectacle fluorescent** pour le nouveau système UV.

## État du projet

Cherche-cailloux est encore en bêta. La mine, le musée, l’établi, les améliorations, les systèmes de prospection, les succès et la migration des sauvegardes sont fonctionnels. Les profondeurs suivantes, la véritable fin du jeu, la Collection personnelle, les spécimens exceptionnels, les géodes et la Pioche en acier doré restent du contenu futur.
