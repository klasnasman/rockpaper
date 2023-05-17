#Skolprojekt där vi arbetat med Cypress.

Varför har vi valt dessa tester: Vi har valt testerna utifrån våra funktioner för att säkerhetsställa att applikationen fungerar på korrekt sätt. 

Vad vi gjort annorlunda om vi fick börja om:

strukturera upp med filer och mappar i från början istället för att behöva bryta ut koderna i efterhand.
Strukturerat upp dokumentet bättre innan vi börja koda funktionerna och testerna


Enhetstester:

Test 1:  “Calculate winner” - funktionen. Genom att testa olika scenarion där spelaren och datorn väljer olika alternativ, testar vi att funktionen “calculate winner” returnerar rätt vinnare.

Test 2: “Save game info” - funktionen. Genom att skicka in olika värden för spelaren och datorns val samt vem som vinner, testar vi om funktionen “save game info” returnerar ett objekt med de värdena vi skickat in. 

Test 3: “Update score by winner” - funktionen. Genom att skicka in värdet för vem som vinner och vilka poäng som bör visas, testar vi att funktionen “update score winner” uppdaterar scoreboarden med rätt värden. 

Användartest:

Test 1: “Should update the history list when button is clicked - user VS computer”. När en av knapparna “rock”, “paper” eller “scissors” klickas, ska listan med historik uppdateras med överensstämmande värde. I testet möter spelaren datorn. 

Test 2: “Reset button should remove list”. När man klickar på “reset button” testar vi att scoreboardlistan inte har några children kvar.

Cypress E2E-tester: 

Tester i filen “game.cy.js”:

Test 1: “Game scenario player vs player result in tie”. Här testar vi att om två spelare spelar mot varandra och väljer samma alternativ genereras “it’s a tie” på skärmen.

Test 2: “Game scenario player vs player result in win”. Här testar vi när två spelare spelar mot varandra och det blir 1-0 till “player 1”. 

Test 3: “Game scenario player vs computer result in win”. Här testar vi när användaren spelar mot datorn och det blir 1-0 till datorn. 

Tester i filen “input.cy.js”:

Test 1: “Should show warning message when trying to start test without input in second input”. Vi har gjort ett negativt test, i testet bör ett felmeddelande returneras ifall vi saknar ett värde i ena fältet. 

Test 2: “Should show correct input name”. Vi har också testat att användarnamnen som skrivs i input rutorna stämmer överens med namnen i scoreboarden. 
