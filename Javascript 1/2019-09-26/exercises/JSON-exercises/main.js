document.addEventListener("DOMContentLoaded", runCode);

async function runCode() {

    let response = await fetch("my-recipies.json");
    let recipes = await response.json();

    printData(recipes);
}

function printData(data) {
    for (let key in data) {
        let text = "";
        let elementType = "h1";
        if (Array.isArray(data) && typeof(data[key]) != "string") {
            printIngridents(data[key]);
        } else {
            text = data[key];
        }
        let textNode = createTextNode(text, elementType);
        document.body.appendChild(textNode);

        //Something to note, array is an object.
        if (typeof(data[key]) == "object" && ((!Array.isArray(data) || typeof(data) == "string"))) {
            printData(data[key]);
        }
    }
}

function printIngridents(ingredients) {

    for (let ingredient in ingredients) {
        console.log(ingredients[ingredient]);
        printData(ingredients[ingredient]);
    }
}

function createTextNode(recipe, elementType) {
    let recipeNode = document.createElement(elementType);
    let textNode = document.createTextNode(recipe);
    recipeNode.appendChild(textNode);
    return recipeNode;
}