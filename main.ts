radio.onReceivedString(function (receivedString) {
    if (receivedString == "Aantal Mensen") {
        Aantal_Mensen += 1
        radio.sendNumber(Aantal_Mensen)
    } else if (receivedString == "Gewonnen") {
        Winnaars += 1
        basic.showString("Winnaars: " + Winnaars + " Deelnemers: " + Aantal_Mensen)
    } else {
        basic.showString("Winnaars: " + Winnaars + " Deelnemers: " + Aantal_Mensen)
    }
})
let Winnaars = 0
let Aantal_Mensen = 0
radio.setGroup(3)
Aantal_Mensen = 0
Winnaars = 0
