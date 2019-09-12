1. 
   1. skapa ett nytt repo
   2. skapa en branch och checka ut den med git checkout <namn>
   3. Lägg till en fil och committa den
   4. Växla mellan brancherna och se hur filinnehållet ändras.
2. 1. Merga tillbaka ändringarna från din nya branch till din master branch.
3. 1. Ta bort din branch du har skapat.
4. 1. Gör 2-3 commits i era repon. Ångra en av dem med `git revert`
5. 1. Gör ett par ändringar i ditt repo, committa dem inte, men gör ett `git add .`. Sedan resetta repot till samma status det var i innan med `git reset --hard`. Vad händer?
6. 1. Prova att två och två göra en PR genom att följa nedanstående tutorial. (Github har dokumentation om hur en PR funkar hos dem, men jag har inte hittat någon bra tutorial.)
   2. https://help.github.com/en/articles/creating-a-pull-request
   3. https://help.github.com/en/articles/reviewing-proposed-changes-in-a-pull-request
7. 1. Skapa en git hook som skriver ut ett meddelande när man gör en commit och testa att den fungerar.