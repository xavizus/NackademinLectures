# CSS Preprocessors
- A program that lets you generate css from the preprocessor's own unique syntax
- Most CSS preprocessors will add some features that don't exist in pure CSS
  - Mixin
  - Nesting selector
  - Innerheritance
  - Makes the CSS structure more readable and easier to maintain.

# Less
- Leaner Style Sheets
- Dynamic preprocessor style sheet language that can be complied into CSS and run on the client side or server side.

## Installera less
- Alt 1: 
  - `npm install -g less`
  - `lessc style.less style.css` Kompilerar
- Alt 2:
  - Köra genom browsern

## Less
- I less har vi åtkomst till variabler
`@background-color: #FFF`
- Mixins låter oss använda existerande klasser eller id:n på en annan selektor
- Om du vill sätta upp regler som ska användas som mixins kan vi göra det med paranteser `#cirlce() {}`
- Mixins kan ta emot parametrar `#circle(@size: 25px) { width: @size}`
- Nesting kan användas för att strukturera din CSS så att den matchar din HTML struktur av din sida. Samtidigt som den reduserar chansen för konflikter.
- Du kan använda dig av matematiska operatorer
- Har funktioner. Du kan hitta funktionerna på följande plats: http://lesscss.org/functions/
  
## Övning
- Bygg en enkel sida och prova på några av funktionerna i Less, eller följ någon av dessa tutorials.
- https://1stwebdesigner.com/learning-less/
- https://www.tutorialspoint.com/less/

## SCSS / Sass
- Syntactically awesome style script
- Nyare versionen heter SCSS
- Äldre versionen Sass (Liknar mer av vanlig CSS)
  
### installera
- npm install -g sass

### SCSS
Du kan hålla koll på specifika filer med hjälp av `sass --watch input.scss output.css`

### Variabler
Du skriver variabler med $ ex. `$myVar: #333`

### Nestling
Fungerar exakt som LESS

### Partial Sass
- Partial sass innebär att de innehåller CSS som du kan inkludera i andra filerna
- _partial.scss
- För att använda dig av filen skriver du: `@use 'partial'`

### Mixin
Fungerar nästan lika som less.
````css
@mixin transform($propery) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property
}

.box {
    @include transform(rotate(30deg));
}
````

### extend
@extend låter dig dela delar av css properties. Dem kommer inte automatiskt in i CSS filen, utan det ärver.

````css
%message-shared {
    borde: 1px solid #ccc;
    padding: 10px;
    color: #333;
}

.message {
    @extend %message-shared;
}
````

### Matematik i SCSS
Du kan använda dig av operatorerna:
- +
- -
- *
- /
- %

### Övning 2

Bygg en enkel sida och prova på några av funktionerna i SCSS, eller följ någon av dessa tutorials.
- https://1stwebdesigner.com/learn-sass-tutorial
- https://www.tutorialspoint.com/sass/