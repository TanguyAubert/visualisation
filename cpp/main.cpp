#include <iostream>
#include "code/example.h"
#include "code/documentation.h"

auto main() -> int
{
    Example::create("output/cpp-example-1.html");
    Documentation::create("output/cpp-lisez-moi.html");

    return 0;
}

// TO DO
// Pourquoi faut-il forcément préciser la variable By ?

// TO DO OR NOT TO DO ???
// Ajouter une classe Multiple_Selector ???
// Permettre de tracer des cartes de la zone euro avec des pie charts empilés
// Permettre de tracer des cartes de la zone euro avec des histogrammes empilés
// Mettre à jour automatiquement ce qui est affiché lorsque le graphique est modifié ???
// Permettre d'enregistrer une fonction qui se déclenche lors d'un changement sur un filtre (afin de modifier le titre par exemple).
// Dans les tableaux, permettre la fusion de cellules (pour les entêtes seulement ou pour toutes les lignes ?)
// Pourquoi changer la valeur d'une liste déroulante prend beaucoup plus de temps avec la souris qu'avec le clavier ?
// Dans les tableaux, ajouter un système de pagination

// NOT TO DO
// Faire en sorte d'ajouter automatiquement les librairies Javascript et uniquement celles qui sont nécessaires ???
// Générer l'identifiant du graphique directement en Typescript !
// Revoir la fonction de copie
// Empêcher l'utilisateur de modifier la table (et les autres attributs d'un graphique ???) après le tracé ? ou stocker une copie de la table dans la structure ??? ou carrément une deep copie de l'objet de classe Chart ?
// Remplacer les options des graphiques par des objets de type Field (comme dans le programme C++) pour gérer les valeurs manquantes ???
// Ajouter des tests unitaires ?
// Permettre à l'utilisateur de choisir l'encoding du document
// Dans les tableaux, ajouter un paramètre permettant de mettre la largeur de la table à 100% (avec width:100%;) => non, du css suffit
// Dans les tableaux, ajouter un paramètre permettant de mettre la même largeur pour toutes les colonnes (avec table-layout : fixed;) => non, du css suffit
// Optimiser la fonction grey_unavailable_options => non, suffisamment performant
// Dans les tableaux, colorer une cellule sur deux ? => non, peut être obtenu avec .table .even {}
// Redimensionner la taille de la légende et des titres lorsque l'écran est petit => non, peut être obtenu en CSS avec body { font-size: 60%; }
// Créer un document sur un vrai sujet sur des comparaisons entre langages de programmation ?
// Supprimer tous les @ts-ignore
// Remplacer tous les {} qui sont des implicit any
// Découper le programme R en plusieurs fichiers => NON

// Dans la classe Data du programme C++ :
// Ajouter la possibilité de créer des colonnes pour définir le type notamment s'il n'existe pas dans le fichier !
// Permettre de filtrer les données !
// Permettre d'appliquer des opérations de base : abs, cos, addition, soustraction, ...
// Attention aux séparateurs de lignes !!! => Gérer automatiquement \r\n et \n

// COMPLETE
// Créer une classe Field (template) contenant un booléen indiquant si la variable a été initialisée et l'utiliser pour chaque attribut des graphiques ??? OU utiliser une map qui ne contiendrait que les valeurs des champs initialisés !!! => mais comment gérer les types multiples ??? => NON utiliser une classe Field !
// Essayer de supprimer les valeurs par défaut dans le programme C++ pour éviter d'avoir des doublons ???
// Supprimer le plus de tags "communs" possibles !!!
// Supprimer les fonctions a, body, head, html, title, br et mettre les fonctions meta_1 à 3 et les fonctions offline_script, online_script, offline_style, online_style dans la classe Document
// Permettre de tracer des scatter plot en n'affichant que les points et pas les droites les reliant
// Écrire des fonctions set_x_order et set_by_order dans la classe Combo_Chart prenant un vecteur en paramètre et un booléen pour indiquer si les variables non spécifiées sont au début ou à la fin.
// Rectangulariser les données de manière à ce que les dates soient toujours ordonnées en abscisse !!!!
// Renommer la classe Data en Table et la fonction set_table en set_data
// Permettre l'ajout direct de données dans un graphique
// Permettre de tracer des pie charts
// Continuer la classe Data et la renommer Table
// Dans les tableaux, ajouter la possibilités de choisir les colonnes à afficher (et dans quel ordre ?) ou à masquer
// Dans les tableaux, ajouter la possibilité d'ajouter des entêtes, en plus ou en remplacement de celui par défaut
// Résoudre le problème d'encoding dans le programme R
// Dans les tableaux, ajouter la possibilité de colorer les cellules colonne par colonne ou ligne par ligne
// Rendre set_by_variable optionnel dans les combo chart !!!
// Résoudre le bug sur set_columns_order
// Permettre de fixer la hauteur des graphiques
// Permettre de choisir le ratio height / width des graphiques
// Retirer les maximums et minimums sur la largeur et la hauteur des graphiques ???
// Permettre l'ajout de tableaux HTML (avec DataTable ?)
// Griser les options non disponibles dans les filtres !
// Supprimer les libellés des cartes
// Changer la couleur des contours des zones sur les cartes
// Remplacer les anciens codes sur les cartes par département et récupérer la dernière version de la librairie Highcharts
// Remplacer les numéros des départements par les codes Highcharts automatiquement
// Tester d'autres types de cartes
// Vérifier correctement que la table est non nulle et différente de undefined et conforme au type attendu !
// Vérifier les attributs des graphiques avant de les tracer (ne pas oublier de vérifier les cartes comme par exemple countries/fr/custom/fr-all-all-mainland)
// Permettre l'ajout de combobox pour filtrer les données
// Pour les graphiques et surtout les cartes, utiliser la largeur et la hauteur de l'écran comme maximums
// Permettre de masquer les warnings
// Renommer la classe Chart en Graphics ou extraire le socle commun à Chart et Table dans une nouvelle classe
// Gérer les valeurs infinies dans R et leur transposition en Javascript
// Renommer Table en Data et Tableau en Table
// Renommer la classe Chart en Graphics ou extraire le socle commun à Chart et Table dans une nouvelle classe dans les programmes R et C++
// Résoudre le bug lorsque set_by_order("...")
// Permettre de mettre un minimum et un maximum sur les échelles ?
// Gérer les valeurs manquantes correctement dans le cas des cartes
// Permettre de changer la couleur des pays sans valeur et de l'eau sur les cartes ?
// Permettre de télécharger les graphiques au format CSV
// Enregistrer le type de la variable dans un Selector ? pour ensuite récupérer la valeur au bon type lors d'un appel à get_selected_value() ?
// Permettre à l'utilisateur de choisir la valeur (ou les valeurs) sélectionnée par défaut dans les filtres
// Arrondir les chiffres à l'affichage dans les graphiques
// Vérifier qu'il est possible d'insérer plusieurs graphiques sur une même ligne (en les mettant dans un tableau)
// Ne pas placer la légende automatiquement en bas si l'écran est petit ? => supprimer l'attribut is_small_screen et ne pas masquer les libellés sur les ordonnées ???
// Résoudre le problème des accents sur les cartes avec le programme R
// Permettre d'ordonner les tranches d'un Pie chart par valeur croissante ou décroissante ?
// Permettre d'ordonner les abscisses d'un combo chart par valeur croissante ou décroissante d'une variable
// Permettre d'insérer des formules (avec MathJax)
// Faire en sorte de pouvoir trier les abscisses par ordre alphabétique
// Revoir le tri --DECREASING-- lorsqu'il y a plusieurs courbes
// Ajouter la possibilité de créer des onglets
// Pourquoi les couleurs ne s'affichent pas correctement sur un Pie Chart avec set_color_variable
// Arrondir le libellé des Pie charts
// Ajouter la possibilité de tracer les colonnes en pourcentage !!! avec stacking: 'percent'
// Permettre l'ajout d'une espace entre les histogrammes d'un combo chart non empilé
// Permettre la modification de groupPadding et mettre une valeur par défaut en fonction de si le graphique est empilé ou non ???
// Gérer le cas où une valeur de la variable By vaut ""
// Corriger la fonction get_x_order_alphabetically
// Dans le libellé des graphiques avec stacked = "percent", ajouter le montant et le poucentage
// Gérer les valeurs booléennes dans les filtres !
// Utiliser davantage les templates pour passer un nombre variable de paramètres dans les fonctions qui acceptent du texte
// Voir pourquoi le graphique d'un onglet disparaît si on redimensionne la page !!!
// Contrôler le format d'une couleur dans les combo-charts et autres graphiques et pareil pour les autres champs
// Ajouter une vérification pour s'assurer qu'il n'y a pas de doublons dans les tables
// Écrire une documentation
// Nettoyer les exemples du programme R
// Gérer les cas particuliers de la documentation R