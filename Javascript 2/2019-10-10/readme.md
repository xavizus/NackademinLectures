# Repitation av JavaScript och CSS

## Data strukturer
Vad är ett object:
Vad är klasser:
Vad är arrayer:
Vad är en datastruktur: (Data som är organiserat på ett viss sätt)
Hur relaterar en datastruktur till JSON? (Json beskriver en datastruktur)

### Diskution
Diskutera i era grupper hur en lämplig datastruktur för spelet "Sänka skepp" skulle kunna se ut inkl. klasser.

## Funktioner
Vad gör följande funktion?
````javascript
document.addEvenetListener("DOMContenetLoaded",function(event){
    var headline = document.getElementById("headline");
    headline.innerHTML = "Lorem";
});
````

## Event-typer
- keypress 
- keydown
- keyup
- click
- mousedown 
- mouseup 
- change 
- submit

## HTMLCollection

### getelementbyid
Vad händer när du använder dig av getElementById

### getelementsbyClassName
Vad händer när du använder dig av getElementsByClassName.

### getElementsByTagName
Vad händer när du använder dig av getElementsByTagName

### querySelector
Vad gör querySelector(".myclass").
Vad är för skillnad mellan querySelectorAll och querySelector ?

### getAttribute / setAttribute


### parent / child


### Lambda funktionen
Lambda är ett uttryck för att skapa en funktion

````javascript
//Pre ES-6

var anon = function (a, b) { return a + b }; 

//Es-6
// Ovanstående exempel: 
var anon = (a, b) => a + b; 
// Eller 
var anon = (a, b) => { return a + b }; 

// Om vi bara har en parameter kan vi skippa 
// parenteserna 
var anon = a => a;
````

#### Filter
Filter funktionen sparar de värden som som returnerar "true"
````javascript
// Jämför 
[1,2,3,4].filter(function (value) {   
    return value % 2 === 0 }
    ); 
    // med: 
    [1,2,3,4].filter(value => value % 2 === 0);
````

### Map
Vad gör map funktionen?
````javascript
const myArray = [1,2,3,4];

const myArrayTimesTwo = myArray.map((value,index,array) => {
    return value * 2;
});

console.log(myArray);
console.log(myArrayTimesTwo);
````
### Reduce
Vad gör reduce funktionen?

````javascript
const myArray = [1,2,3,4];

const sum = myArray.reduce((accumlate,currentValue,CurrentIndex,array) => {
    return accumlate += currentValue;
}, 0);

const avg = sum / myArray.length;

console.log(avg);
````
reduce tar en array och reducerar den till ett enda värde. Du kan t ex använda det för att räkna ut medelvärdet av alla värden i arrayen

## Spara data i klient

## Ajax
Asyncron (= Starta en händelse och vänta inte på att den är klar innan vi startar nästa hämtning) datahämtning, utför instruktioner i bakgrunden, t.ex. spara information, hämtar information.

Vi kan t.ex. hämta data i bakgrunden och uppdatera bara delar av webbsidan. \
HTML:

````html
<button>
Click me
</button>
````
Javascript:
````javascript
$("button").click(function() {
  $.ajax({
    url: 'https://randomuser.me/api/?results=5',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
});
````

## CSS
Läsa mer om CSS på:
- https://learnlayout.com
- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction


### CSS: Display
The methods that can change how elements are laid out in CSS are as follows:

- The displayproperty — Standard values such asblock,inlineorinline-blockcan change how elements behave in normal flow (seeTypes of CSS boxesfor more information). We then have entire layout methods that are switched on via a value ofdisplay, for exampleCSS GridandFlexbox.
- Floats — Applying afloatvalue such asleftcan cause block level elements to wrap alongside one side of an element, like the way images sometimes have text floating around them in magazine layouts
- The positionproperty — Allows you to precisely control the placement of boxes inside other boxes.staticpositioning is the default in normal flow, but you can cause elements to be laid out differently using other values, for example always fixed to the top left of the browser viewport
- Table layout — features designed for styling the parts of an HTML table can be used on non-table elements usingdisplay: tableand associated properties
- Multi-column layout — TheMulti-column layoutproperties can cause the content of a block to layout in columns, as you might see in a newspaper.

### CSS: Flexbox
- The three items now arrange themselves into columns. This is due to them becomingflex items.
- Displayed as a row, because the initial value offlex-directionisrow.
- Appear to stretch to the height of the tallest item, because the initial value of thealign-itemsproperty isstretch.
- All line up at the start of the container, leaving any extra space at the end of the row.
````css
.wrapper {
    display: flex;
}
````

````html
<div>
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box2">Three</div>
    </div>
````

Annat exempel:

- This will cause all of the items to grow and fill the container, rather than leaving space at the end.
- If there is more space the items will become wider; if there is less space they will become narrower.
- If you add another element to the markup the items will all become smaller to make space for it \
CSS: 
````css
.wrapper {
    display: flex;
}
/*
 * > tecknet innebär att den bara ska gälla för de div:ar som ligger under en wrapper class.
*/
.wrapper > div {

    /*
    * Innebär att vi tar bort all whitespace och fördelar så varje element tar en viss del av raden.
    */
    flex: 1
}
````
HTML:
````html
<div>
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box2">Three</div>
</div>
````

### CSS: grid

- Example uses similar markup to the flex example, with a container and some child elements.
- We are also defining some row and column tracks on the parent using thegrid-template-rowsandgrid-template-columnsproperties respectively.
- We've defined three columns each of1frand two rows of100px.
- We don’t need to put any rules on the child elements; they are automatically placed into the cells our grid has created.
````css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}
````

````html
<div>
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box2">Three</div>
    <div class="box2">Four</div>
    <div class="box2">Five</div>
    <div class="box2">Six</div>
</div>
````

- In a grid, you can explicitly place your items on it, rather than relying on the auto-placement behavior seen above.
- In this example we have defined the same grid, but this time with three child items.
- We've set the start and end line of each item using thegrid-columnandgrid-rowproperties.
- This causes the items to span multiple tracks

````css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}
.box1 {
    grid-column: 2 / 4;
    grid-row: 1;
}

.box2 {
    grid-column: 1;
    grid-row: 1 / 3;
}
.box3 {
    grid-row: 2;
    grid-column: 3;
}
````

````html
<div>
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box3">Three</div>
</div>
````

### CSS: Float
- Thefloatproperty has four possible values:
- left— Floats the element to the left.
- right— Floats the element to the right.
- none— Specifies no floating at all. This is the default value.
- inherit— Specifies that the value of thefloatproperty should be inherited from the element's parent element.

````css
.box {
    float: left;
    width: 150px;
    height: 150px;
    margin-right: 30px;
}
````

````html
<h1> Simple Float example </h1>
<div class="box">Float</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo corrupti nesciunt est, natus unde, dignissimos cum illo reprehenderit reiciendis ipsa molestiae sunt quidem eligendi? Non dolorem neque exercitationem temporibus.</p>
````

### Viewport
- Refers to the part of the document you're viewing which is currently visible in its window. Content outside the viewport is not visible onscreen until scrolled into view.
- The portion of the viewport that is currently visible is called thevisual viewport. This can be smaller than the layout viewport, such as when the user has pinched-zoomed

https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts

### CSS: Positioning:
- Static positioningis the default that every element gets — it just means "put the element into its normal position in the document layout flow — nothing special to see here".
- Relative positioningallows you to modify an element's position on the page, moving it relative to its position in normal flow.
- Absolute positioningmoves an element completely out of the page's normal layout flow, like it is sitting on its own separate layer. From there, you can fix it in a position relative to the edges of the page's \<html>element (or its nearest positioned ancestor element).
  - Useful for creating complex layout effects such as tabbed boxes where different content panels sit on top of one another and are shown and hidden as desired, or information panels that sit off screen by default, but can be made to slide on screen using a control button.
- Fixed positioningis very similar to absolute positioning, except that it fixes an element relative to the browser viewport, not another element. This is useful for creating effects such as a persistent navigation menu that always stays in the same place on the screen as the rest of the content scrolls.
- Sticky positioningis a newer positioning method which makes an element act likeposition: staticuntil it hits a defined offset from the viewport, at which point it acts likeposition: fixed.

### CSS: table layout

````html
<form>
    <p>First of all, tell us your name and age.</p>
    <div>
        <label for="fname">Firs tname</label>
        <input type="text" id="fname">
    </div>
    <div>
        <label for="lname">Last name</label>
        <input type="text" id="lname">
    </div>
     <div>
        <label for="age">Age</label>
        <input type="text" id="age">
    </div>
</form>
````

````css

````