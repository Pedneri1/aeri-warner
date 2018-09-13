var request = require('request');
var player = require('play-sound')(opts = {})

const URL = 'http://aeri.uefs.br/editais/97.pdf';
const DELAY = 120000;

function checkAeri() {
    var date = new Date();
    request(URL, (error, response, body) => {
        if (response.statusCode == 404) {
            console.log("Nada por aqui ainda - " + date.getHours() + ":" + date.getMinutes());
        } else {
            console.log("TEMOS RESULTADO !")
            player.play('music.mp3', (err) => {
                console.log("Error playing song, BUT THERE IS SOME RESULT HERE");
            })
        }
    });
    setTimeout(arguments.callee, DELAY);
}

checkAeri();


