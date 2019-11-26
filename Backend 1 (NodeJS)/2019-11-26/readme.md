# Filuppladdning

Enctype, är encodingtype.
Det finns en default type: application/x-www-form-urlencoded.
Den fungerar bra för normal data. Men när det gäller filer som är i binärt form.
Då behöver vi ändra encoding type till följande om vi använder oss av filuppladdning:
Multipart/form-data
````html
<form action="/file-upload" enctype="Multipart/form-data" method="post">
    <input type="file" name="photos" multiple> <!-- Flera filer -->>
    <input type="file" name="pic">
    <input type="submit">
</form>
````