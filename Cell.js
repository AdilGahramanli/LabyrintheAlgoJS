/*On va recréer une sorte de patron de nos données pour une cellule,
en sachant que la data concernant un labyrinthe a été récupérée grâce à la class Labyrinthe qui 
elle aussi recréait le patron(ou structure de caractéristiques) d'un labyrinthe.*/
//Remarquons que la class Cell contient un conteneur mais aussi 2 fonctions !

class Cell {
    constructor(cellData) {
        this.entrance = cellData.entrance;
        this.rowX = cellData.posX;
        this.columnY = cellData.posY;
        this.walls = cellData.walls;
        this.width = 50;
    }


    //Fabrication de la div pour la cellule. Tous les this correspondent à la classe Cell.

    getDOM() {
        let cellDOM = document.createElement("div");
        cellDOM.id = ['cell', this.rowX, this.columnY].join('-'); //ajout d'id formée d'un texte fabriqué par join et un tableau
        cellDOM.style.width = this.width + 'px';
        cellDOM.style.height = this.width + 'px'; //height et widht ont la même valeur(c'est un carré)
        cellDOM.style.backgroundColor = '#1d4e89';
         //Bordure de la div
         cellDOM.style.border = 'solid 1px #BFFFFF';
        cellDOM.style.borderWidth = this.computeBorders(); /*borderWidth peut recevoir 4 valeurs et nous avons ces 4 valeurs
                                                         mais sous forme booléen dans walls, on doit donc le transformer avec la fonction
                                                         computeBordders dont on récupère la valeur ici*/
         cellDOM.innerHTML = "X" + this.rowX + " </br> " + "Y "+ this.columnY;
         
        return cellDOM;

    }

    computeBorders() {

        return this.walls.map(wall => wall ? '2px' : '0').join(' ');
        //traduction : on parcourt walls et pour chaque donnée, on crée wall et on regarde si wall est vrai
        //si wall est vrai on le remplace dans le nouveau tableau par 2px, si non on met 0;
        //on join les résultats de ce tableau mappé pour avoir une valeur compréhensible par borderWidth
    }

}
