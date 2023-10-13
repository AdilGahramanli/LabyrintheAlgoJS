//<selection du labyrinthe

let size = '6';
let ex = 'ex-1';
let labyData = data[size][ex];

//Création du labyrinthe
let labyrinthe = new Labyrinthe( labyData );

//appel de la fonction d'affichage display de la classe Labyrinthe
labyrinthe.display();
labyrinthe.find_Start_Case();