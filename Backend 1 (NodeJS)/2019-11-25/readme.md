# Async programmering 

Callback-funktion är i sitt enklaste form en funktion som skickas till en annan funktion som en parameter.

````javascript
function levelOne(value, callback){
    let newScore = value + 5;
    callback(newScore);
}

function startGame() {
    let currentScore = 5;
    console.log('Game Started! Current Score is ' + currentScore );

    levelOne(currentScore, newScore => {
        console.log('Level one reached. Your score is' + currentScore);
    } );

}
````


## Promises

Promises är objekt som representerar en misslyckad eller en lyckad Async operation och sitt värde.

````javascript 
let promise = new Promise((resolve,reject) => {

    if(true) { // No error generated. 
        resolve("Stuff worked!");
    } 
    else {
        reject(Error("It broke"));
    }
});
````


Praktiskt exempel:

````javascript
function sucessCallback(result) {
    console.log("Audio file ready");
}

function errorCallback(result) {
    console.log("Audio file is not ready");
}

createAudioFileAsync(audioSettings,sucessCallback, errorCallback);
````

# Socket.io
Socket.io gör så att du kan hantera realtid kommunikation baserat på event. Det gör att man inte behöver get och post anrop.

