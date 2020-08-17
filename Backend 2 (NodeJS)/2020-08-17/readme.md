# 2020-08-17

## Vad ska vi göra i Backend 2:
- Fördjupa oss i NodeJS och Express
- Webbapplikationsarkitektur
- TDD (Mindre)
- Säkerhet och GDPR
    - Authorization
    - Authentication
- Deployment mot molntjänster

## Vem är David?
Någon lärare som är legitmerad i matematik och datavetenskap.

Undervisat på gymnaiset i ~ 5 år

Undervisat på YH i 1 år

Fullstackutvecklare

## Förväntningar och farhågor
Förväntningar:
- Att lära sig något
Farhågor:
- Slänga ut projektet på nätet (molnet)
- Drömmer bort

## Lärarens förväntningar
- Var nyfikna
- Delta i undervisningen
- Ställ frågor
- Hjälp varandra
- Öva öva öva

## Bedöming
- Ett invdividuellt projekt
- Ett grupprojekt

# Repitetion

## NodeJS
- Ett program som exekvera JavaScript
- Körs från terminalen
- Drivs av V8

## HTTP
- HyperText Transfer Protocol
- Server / klient -modell
- Request / Response
- HTTP är plaintext med US-ASCII (UTF-8)

### HTTP Request
- Request line
    - HTTP Verb/Method som PUT, POST, PATCH, GET, DELETE... osv.
    - Sökväg till resurs
    - Version på protokollet
- Request Headers
    - Meta-data om förfrågan
- Request Body
    - Query parameters
    - Data som skickas av klienten
### HTTP Request
- Status Line
    - Version på protokollet
    - statuskod
    - beskrivning av statuskod
- Request Headers
    - metadata om svaret
- Resposne body

### Express
- Ett mikroramverk för att bygga webbapplikationer
- Inte en webserver, drivs av Node inbyggda http-server
- Minimalistisk, unopinionated (Dvs. det är barebone och du kan göra lite hur du vill)

### Vad kan en webbserver svara med?
- Headern Contet-Type berättar detta
    - Vanliga svar
    - application/json
### Datautbytesformat
- JavaScript Object Notation (JSON)
- eXtentible Markup Language (XML)
- CSV
- Eget protokoll med Binary
### JSON
- Du kan bara lagra information
- JSON är inget object
- Du kan inte skriva metoder i JSON
### Parprogrammering
- Driver
    - Den som skriver kod. Tänker högt hela tiden. Har fokus på kodraden som skrivs.
- Navigator
    - Observerar hur allting byggs upp. Har översikten på hur allt hänger ihop.
- Samarbetet
    - Kommunikation
- Bra verktyg att lära sig
- Byt rollerna

### Routing
- Statisk routing
    - app.get('/about', responseCallback)
- Dynamisk routing
    - app.post('/updateComment/:commentID', (req, res) => {
        req.params.commentId;
    });
        - Colon-tecknet säger att det här en dynamisk variabel.
        - Du accessar parametern genom req.params.(Din dynamiska variabel utan colon).
### Databaser
- DBMBS
    - DataBase Management System
- Relationsdatabaser
    - Tabeller med rader och kolumner
    - Datanormalisering
    - Schemabaserat
    - SQL som primärt språk
        - Postgres
        - MySQL
        - MariaDB
        - Microsoft SQL Server
- Dokumentdatabaser
    - Nestlade dokument med nycklar och värden
    - Schemafritt
    - Flexibelt
    - Högre risk för trubbel
    - Exempel
        - MongoDB
        - ArangoDB
        - Elasticsearch
- Graph Database
    - neo4j
    - Hög inlärningskruva
- Light Weight databaser
    - Småskaliga databaser med "oftast" enkla gränssnintt.
    - ex:
        - LowDB
        - NeDB
            - Exakt samma API som MongoDB.
        - SQLite3
### Git
- Ett versionshanteringssystem
- Skapades av Linus Torvalds

### Git i molnet
- Github
- Gitlab
- Bitbucket

### Webbapplikation vs Webbtjänst
- Vad är skillnaden mellan dessa
    - Webbapp, har ett GUI (FrontEnd)
    - Webbtjänst har ett API (oftast över HTTP)
- Vad är ett gränssnitt
    - Ett gränssnitt är ett sätt att få komma åt själva funktionerna.
    - kallas interface.
    - API är ett sätt interface
    - GUI är också ett interface

# Övning-1
- Enkel express server med tre vägar
- En som svarar med text
- En som svarar med JSON
- En som svarar med en fil.

# Övning-2
- Skapa, redigera, och ta bort dokument.

# Övning-3
- Bygga en webbtjänst som kan skapa, redigiera eller ta bort en resurs enligt modellen. Resursen:
```javascript
"_id": String,
"title": String,
"content": String
```
Webbtjänster ska även automagiskt generera IDn för vajre skapad resurs.
Skapa ett repo på github.com innan ni börjar och göra commits efter varje feature eller buggfix.

Testa webbtjänsten med Postman.

Utmanande:
Lägg även till en resurs för kommentarer och se till att kommentaren är kopplad till ett inlägg.
