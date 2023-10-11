console.log(data);

// for(i=0; i<= 9; i++) {
//     // $("#labyrintheCases").append("<div id=case" + i + "></div>")
//     // Using String literals
//     $(".labyrintheCases").append(`<div id="case-${i}"></div>`);

// }


// const labyrintheVar = $("#labyrintheCases");

// function labyrintheCreation(variable) {
//     for (let i = 0; i <= 8; i++) {
//         variable.append(`<div id= "case-${i}"></div>`);
//     }
// }

// labyrintheCreation(labyrintheVar);

// const labyrinthe = $("#labyrinthe");
// function labyrintheCell(variable) {
//     for (let i = 0; i < data["3"]["ex-0"].length; i++) {
//         // Vanilla
//         // let cell = document.createElement('div'); 
//         // cell.id = i; 
//         // cell.innerText = i; 
//         // cell.style.backgroundColor = 'black'; 
//         // variable.append(cell);

//         // JQuery
//         let cell = $('#labyrinthe')
//         cell.css()
//     }
// }
// labyrintheCell(labyrinthe);

// let cellTrace = $(`cell${i}`);

// function cellTracing(cellId) {
//     data["3"]["ex-0"][0].walls.forEach( cell => {
//         if( cell[0] ) {
//             variable.css("border-left","1px solid red")
//         } 
//     })
// }
// // }

// // data.3.exo-0[0].walls.css("border-top", 1px )

// const labyrintheDiv = $("#labyrinthe");
// // function labyrintheCell (variable) {
// //     for (let i=0; i<=data["3"]["ex-0"].length; i++) {
// //         variable.append(

// //     )
// // }
// console.log(data["3"]["ex-0"].length);


let cellVar= data["3"]["ex-0"];
let labyrintheDiv = $("#labyrinthe");
let labyrintheDivDiv= $("#labyrintheDiv> div");

function borderTransform(b) {
    if(b) {return "3px"}
    else {return "0"}
}

function cellMapping(wallsTab) {
    let borderedWalls = wallsTab.map(borderTransform);
    borderedWalls = borderedWalls.join('');
    return borderedWalls;
}

function divCreating(labyrintheHtml) {
    
        labyrintheHtml.append(`<div></div>`);
        return labyrintheHtml;
    
}

function labyrintheCss (labyrintheCss) {
     // labyrintheHtml.attr("id", labyrintheHtml.posX + '-' + labyrintheHtml.posY) ;
     labyrintheCss = labyrintheCss.css({"backgroundColor": 'black',"width": "100px","height": "100px","border": cellMapping(cellVar.walls)});
     return labyrintheCss;
}

// function initCell( cellDescription ) {
//         let cell = $("#labyrinthe");
//         cell.append(`<div></div>`); 
//         cell.attr("id", cellDescription.posX + '-' + cellDescription.posY) ;
//         cell.css("backgroundColor", 'black'); 
//         let cellMap = cellDescription.walls.map(borderTransform);
//         cell.css("border", cellMap.join(' '));
//         return cell;
// } 

for(let i=0; i<cellVar.length; i++) {
     divCreating(labyrintheDiv);
     

}




// let wall = data["3"]["ex-0"][j];
// for(let i=0; i<cellVar.length; i++) {
//     initCell(cellVar[i]);
//     console.log(cellVar[i])
// }

// initCell(cellVar[0]);
// function transform(b) {if(b) {return "3px"} else {return "0"}}
// console.log(cellVar[0].walls.map(transform));



// function initLabytrinthe {
//     for each cell in 'labyrinthe description'
//         init new cell 
//         append to laby div

// }