#  2019-10-23

## Vad är ett API
API är ett sätt att få två program att kunna prata med varandra.
API står för: Application Programming Interface.

Det finns flera olika API:er. Ex.
- SOAP (XML från microsoft)
- restFul API (JSON)

## Vad är HTTP
HTTP är ett protocoll som berättar hur data ska skickas och uppfattas. \
HTTP står för: HyperText Transfer Protocol \
Det finns även HTTPS, som då innebär att informationen är krypterat.

### Vanliga HTTP-funktioner
Det finns fyra stycken funktioner i HTTP som används för att kommunicera med en server.
- GET
- POST
- PUT
- DELETE

## RestFul API
I Restful API så finns samma uppsättning som man har på HTTP-funktionerna, och man kallar det för CRUD.
- POST (**C**reate)
- Get (**R**ead)
- PUT (**U**pdate)
- Delete (**D**elete)

## Webbservrar
För att kunna hantera HTTP så behöver du använda dig av en Webbserver. Det finns många olika typer av HTTP servrar där ute, de mest vanliga är:
- Apache
- Nginx
- IIS
- Lighttpd

För att en webbserver ska kunna prata över internet så behöver den en IP-adress, ex. 192.210.56.10.

Utöver att ha en IP-adress, så behöver servern även en brandvägg, där den blockerar all obehörig trafik, förutom på ex. port 80.

Då behöver Webbservern behöver då konfigureras att kunna ta emot data på port 80. Detta kallar man att servern skall lyssna (Listen) på port 80.

På en webbserver så behövs ett backend språk. De vanlgia språk som används för backend är:
- PHP
- Java
- .net
- node
- Ruby

Du har utöver detta oftast också en databas som lagrar data, exempelvis:
- mySQL
- MS SQL
- MongoDB
- Redis