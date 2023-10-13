console.log(data);

/* On va ici construire la classe Labyrinthe qui n'imite pas les données mais va
créer la version html */

class Labyrinthe {

    constructor(labyData) {
        this.cells = this.initCells(labyData);
        this.startCase = this.find_Start_Case();
        this.visited_Cases = [this.find_Start_Case()];
    }

    //display va apporter détermienrr la taille des cellules, du container et ajouter le tout au DOM
    display() {

        let container = document.getElementById('container');

        let nbre_cells_largeur = Math.sqrt(this.cells.length);

        let computed_width = nbre_cells_largeur * this.cells[0].width;
        container.style.width = computed_width + 'px';

        container.classList.add('main-container');

        for (let cell of this.cells) {
            let cellDOM = cell.getDOM();
            container.appendChild(cellDOM);
        }
    
    }

    initCells(labyData) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell(cellData);
            cells.push(cell);
        }
        return cells;
    }
    
    //Début de DFS (création de fonctions find_Start_Case, find actual_Case, 
    //find_Adjacentes_Cases, find_Next_Case )
    //Fonctions find_Start_Case pour trouver la case d'entrée.
    find_Start_Case() {
        let possible_Start_Case = [];
        for (let cell of this.cells) {
            if (cell.entrance) {
                possible_Start_Case.push(cell);
                return possible_Start_Case;
            }
        }
        let case_Choice_Index = Math.floor(Math.random() * possible_Start_Case.length);
        let case_Choice = possible_Start_Case[case_Choice_Index];
        return case_Choice;
    }


    
    

    
}