# 2019-10-29

Skapa ett schack spel.

## Hur skulle du kunna rita upp en plan.

Multidimensionell array (8x8)
ex.

````javascript
let board = [
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""]
];

let board2 = [];
for (let x = 0; x <= 7; x++) {
    board2.push([]);
    for(let y = 0; y <= 7;y++) {
        board2[x].push("");
    }
}
````