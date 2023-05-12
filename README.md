#Teststrategi

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
