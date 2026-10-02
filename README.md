# Cherche-cailloux


**Bêta 1.5.8 — équilibre d’après-jeu et correctif de la Boutique**


> ça fait crac.


Cherche-cailloux est un jeu incrémental fini, axé sur la collection et l’exploitation minière dans le navigateur. Mine une paroi fixe de 10×10, suis des indices géologiques, utilise des outils de prospection, traite tes trouvailles à l’Établi, remplis un musée, améliore ton équipement et progresse à travers six profondeurs distinctes.


## Jeu principal


La boucle principale est **creuser → découvrir → traiter, donner ou vendre → améliorer le musée et l’équipement → descendre plus profond → trouver des roches plus étranges**. Les spécimens communs restent utiles, plus profond ne veut pas automatiquement dire meilleur, et la collection repose sur de vraies relations minéralogiques plutôt que sur des niveaux de rareté génériques.


Le jeu complet contient **44 sujets principaux** répartis sur six profondeurs et quatre ailes du musée : 24 minéraux, gemmes et minéraloïdes, 8 sujets minerai/métal, 6 fossiles et 6 objets historiques. Compléter le musée est la vraie fin du jeu. Rien ne se réinitialise et rien ne t’est retiré.


## Après-jeu : Collection personnelle


Compléter le musée débloque l’onglet **Collection personnelle** et prolonge la boucle minière existante au lieu de la remplacer.


- Les **Spécimens exceptionnels** peuvent commencer à apparaître sur les parois d’après-jeu. Ce sont des variantes nommées et choisies de matériaux familiers, conçues pour montrer que chaque minéral peut être intéressant pour des raisons géologiques différentes.
- La **Réserve de spécimens** est pratiquement illimitée. Les trouvailles exceptionnelles peuvent y être gardées indéfiniment, qu’elles soient exposées ou non.
- La **Vitrine** comporte 21 emplacements libres, affichés trois par rangée sur mobile. Les spécimens exposés sont protégés contre la vente.
- Les spécimens exceptionnels peuvent aussi être vendus individuellement contre la monnaie normale du jeu. Il n’y a ni liste de variantes à compléter ni pourcentage de complétion.


## Fournitures de prospection d’après-jeu


Trois consommables optionnels donnent aux joueurs ayant terminé le jeu des façons utiles de dépenser leur argent pendant la chasse aux spécimens exceptionnels. Ils s’achètent dans la **Boutique** et s’arment depuis la **Mine** pour la prochaine nouvelle paroi. On peut changer de profondeur ou générer une autre paroi sans les dépenser. Les fournitures armées ne sont consommées qu’au moment où la première case de la paroi préparée est minée.


- **Trousse de prospecteur — 40,00 $ :** fait passer la chance de spécimen exceptionnel de 5 % à 50 % sur la paroi préparée.
- **Trousse de maître prospecteur — 100,00 $ :** fait passer cette chance de 5 % à 80 %.
- **Cible du collectionneur — 40,00 $ :** choisis un matériau admissible avant de préparer la paroi; si un spécimen exceptionnel apparaît et que ce matériau est présent, la cible reçoit une pondération de 60 %.


Une seule trousse peut être armée à la fois. L’une ou l’autre peut se combiner avec la Cible du collectionneur. Les spécimens exceptionnels peuvent toujours apparaître naturellement sans fournitures, et il ne peut y en avoir qu’un par paroi. La Craie d’arpentage a été retirée en Bêta 1.5.6; toute craie inutilisée provenant d’une ancienne sauvegarde est automatiquement remboursée au plein prix.


## Fin et succès


La fin du musée accorde toujours la Plaque de complétion permanente et la Pioche d’acier doré pratiquement incassable. Continuer à miner est optionnel : le jeu est terminé lorsque le musée est terminé.


Cherche-cailloux contient **50 succès**. Les succès non obtenus restent secrets jusqu’à leur déblocage. **VRAI CHERCHE-CAILLOUX** marque la complétion du musée, tandis que **CAILLOUXHOLIQUE** est le défi de complétion totale : tous les autres succès, toutes les améliorations permanentes au maximum et tous les sujets principaux découverts. La Collection personnelle n’a pas de liste de complétion.


## Changements de la Bêta 1.5.8


- Une fois le musée complété, toutes les nouvelles parois d’après-jeu contiennent **50 % plus de cases de spécimens ordinaires de minéraux et de minerais**.
- Le bonus conserve exactement les mêmes poids de matériaux propres à chaque profondeur; il ne change ni la rareté relative des matériaux ni les chances de Spécimens exceptionnels.
- La récompense permanente **Prospecteur d’expérience** explique ce bonus dans l’écran de complétion.
- Corrige la **Boutique** pour que les cartes, boutons, quantités et états d’achat se rafraîchissent immédiatement après une transaction, sans devoir changer d’onglet puis revenir.
- Les sauvegardes déjà complétées profitent automatiquement du bonus dès la prochaine nouvelle paroi.
- Conserve la clé de sauvegarde française existante `rock-go-crunch-v2` et toute la progression antérieure.


## Changements de la Bêta 1.5.7


- Mémorise la position de défilement de chaque onglet pendant la partie afin de revenir exactement où tu étais dans le Musée ou un autre panneau.
- Ajoute l’accès direct **Inspecter** aux spécimens exceptionnels déjà placés dans la Vitrine; plus besoin de les remettre dans la Réserve d’abord.
- Réorganise les Succès en une grille de badges plus dense sur deux colonnes, sans grandes cartes ordinaires ni trous gênants.
- Rend tous les succès non obtenus secrets en affichant uniquement **???** pour leur nom et leur description jusqu’à leur déblocage.
- Réserve le format pleine largeur à **VRAI CHERCHE-CAILLOUX** et **CAILLOUXHOLIQUE**.
- Donne aux icônes de succès un traitement compact de type médaille tout en gardant les symboles simples faciles à lire.
- Conserve la clé de sauvegarde française existante `rock-go-crunch-v2` pour éviter d’écraser la progression de la version anglaise.


## Changements de la Bêta 1.5.6


- Corrige le texte de récompense de fin pour indiquer que la Collection personnelle possède **21 emplacements d’exposition**.
- Réécrit le fait bonus de l’Or natif afin qu’il ne contredise plus la récompense de la Pioche d’acier doré.
- Transforme les fossiles et objets historiques non découverts en véritables entrées mystère : noms et images restent cachés jusqu’à la première découverte, tandis que les indices compacts de profondeur restent visibles.
- Retire les étiquettes redondantes « Spécimen fossile » et « Objet historique » des cartes à une seule étape du musée.
- Remplace le sous-titre générique « Exceptionnel [matériau] » dans la Vitrine par une courte explication géologique ou minéralogique de ce qui rend chaque spécimen inhabituel.
- Retire la **Craie d’arpentage** et rembourse automatiquement toute craie inutilisée des anciennes sauvegardes au plein prix.
- Fait passer la chance de la **Trousse de prospecteur** de 30 % à **50 %**.
- Ajoute la **Trousse de maître prospecteur** à 100,00 $ avec une chance de **80 %**. Une seule trousse peut être armée à la fois; chacune peut se combiner avec la Cible du collectionneur.
- Met à jour le succès **Bien préparé** pour exiger une trousse et la Cible du collectionneur sur la même paroi.
- Conserve la clé de sauvegarde française existante et la progression antérieure.


## Changements de la Bêta 1.5.5


- Corrige le Scanner de terrain qui cessait de fonctionner après avoir touché une case cible.
- Rétablit le chemin simple et délégué de clic/toucher; les solutions tactiles précédentes n’étaient pas la vraie cause.
- Ajoute les fonctions d’analyse manquantes pour l’intensité du signal et les motifs de dépôt, qui faisaient planter le scan avant sa fin.


## Changements de la Bêta 1.5.4


- Corrige le ciblage du scanner sur iPhone/iPad et dans les navigateurs intégrés basés sur WebKit en déclenchant le scan au premier contact plutôt qu’en attendant un événement ultérieur.
- Ajoute un repli `touchstart` pour certains environnements WebKit.
- Empêche le clic synthétique suivant de miner accidentellement la case sélectionnée.


## Changements de la Bêta 1.5.2


- Corrige le ciblage du scanner afin qu’un toucher sur une case lance correctement le scan 3×3 sélectionné, y compris sur les appareils tactiles.
- Déplace l’entrée des cases minières vers un seul gestionnaire au niveau de la grille plutôt que d’attacher de nouveaux écouteurs à chaque case après chaque rafraîchissement.


## Changements de la Bêta 1.5.1


- Garde les fenêtres d’images du Musée compactes et presque carrées dans les affichages à une, deux ou trois étapes afin d’éviter de rogner maladroitement les illustrations finales.
- Réduit la Vitrine de la Collection personnelle de 30 à 21 emplacements tout en gardant la Réserve de spécimens illimitée.
- Renforce la lueur des spécimens réactifs aux UV et assombrit légèrement le reste du musée pour mieux les faire ressortir.


## Changements de la Bêta 1.5.0


- Remplace les formes temporaires par le jeu d’illustrations final de Cherche-cailloux.
- Ajoute des **mini-sprites miniers** dédiés à chaque minéral et minerai brut, plus des icônes communes pour les fossiles et les objets historiques.
- Ajoute **95 sprites détaillés propres aux étapes** dans le Musée et l’Établi, y compris les chaînes particulières Diamant brut → Clivé → Taillé, Olivine brute → Olivine roulée → Péridot taillé et Malachite brute → Roulée → Polie.
- Ajoute les illustrations détaillées de tous les **Spécimens exceptionnels** de la Réserve de spécimens et de la Collection personnelle.
- Les trouvailles exceptionnelles dans la mine gardent leur mini-sprite propre et reçoivent un petit effet d’étincelles; le spécimen détaillé est révélé dans la collection.
- Conserve l’interaction de la lampe UV du musée et ses effets de fluorescence sur les illustrations finales.


Le jeu est maintenant dans sa phase de polissage et de test final. La passe artistique change la présentation, pas la progression centrale ni la fin.