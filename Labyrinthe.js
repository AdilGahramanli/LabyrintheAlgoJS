console.log(data);

/* On va ici construire la classe Labyrinthe qui n'imite pas les données mais va
créer la version html */

class Labyrinthe {

    constructor( labyData ) {
        this.cells = this.initCells( labyData );
    }

        //display va apporter détermienrr la taille des cellules, du container et ajouter le tout au DOM
    display() {

        let container = document.getElementById('container');

        let nbre_cells_largeur = Math.sqrt( this.cells.length );

        let computed_width = nbre_cells_largeur * this.cells[0].width;
        container.style.width = computed_width + 'px';

        container.classList.add('main-container');

        for (let cell of this.cells) {
            let cellDOM = cell.getDOM();
            container.appendChild( cellDOM );
        }

    }

    initCells( labyData ) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell( cellData );
            cells.push( cell );
        }
        return cells;
    }
}