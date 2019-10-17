# Data och övningar

## Sammanfattning
- Vad som behöver fungera i projekten och hur
- Repetition och övningar

# Databas

- Vi har inte haft någon databaskunskap än, men tänk er att vi har data om personer i ett kalkylblad
- Hur kan vi vara säkra på att den person vi exempelvis sparar är rätt person?
  - Ett sätt kan vara att se till att varje rad har ett unikt id som vi kan hänvisa till.
  - Vi kommer att återkomma till databaser i nån annan kurs

# API
- I förra kursen gjorde vi GET-anrop till https://randomuser.me/api för att hämta data
- Det finns fler typer av anrop vi kan göra. Här är några av de vanligaste

## Användning av RESTapi
Ett restFul API skulle exempelvis kunna tillåta följande anrop
- GET /person - Hämta alla personer
- GET /person/:id  (ex /person/5) - Hämta en specifik person
- POST /person - Skapa person
- PUT /person/:id - Spara specifik person
- DELETE /person/:id - Ta bort specifik person

## Svar
- När vi gör ett anrop kommer vi att få tillbaka en status-kod och ev ett JSON-svar

200 - OK
201 - Created
400 - Bad request
404 - Not found
405 - Method not allowed
500 - Internal server error
501 - Not implemented

## Hantera data
- Vi har tidigare hämtat data från fejkade API:er med hjälp av GET-anrop
- Jag tänker att vi även skulle kunna spara data med fejkade API:er med hjälp av POST- eller PUT-anrop och ta bort data med hjälp av DELETE-anrop
- Vi kan sätta upp ett gemensamt fejkat API på t ex https://www.mockapi.io/
- Varje grupp hjälper till att lägga in någon endpoint (typ entitet)

## Entiteter
- ”Substantiv”, klasser, typ customer, person, building, course
- Vilka entiteter behöver vi i vår applikation?
- Vilka egenskaper (properties) behöver varje entitet?
- Hur vill vi t ex att ett JSON-svar ska se ut när vi frågar efter kunder?

### event (Kalender)
- Uid
- userid
- customerid
- date (YYYY-MM-DD)
- description
- content

## API och JS
- Vi har hämtat data (GET) både med jQuery och med vanlig JS
- Vi behöver även kunna skapa (POST), spara (PUT) och ta bort (DELETE)
- Mitt förslag är att ni använder jQuery. Testa lite för att se att ni får de svar ni förväntar er
- https://api.jquery.com/jquery.ajax/ https://www.yogihosting.com/jquery-ajax-events/
