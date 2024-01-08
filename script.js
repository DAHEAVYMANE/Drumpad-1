// ** Recup des touches du pad */
const pads = document.querySelectorAll(".pad")
const letterToNumber = {
    a: 1,
    z: 2,
    e: 3,
    r: 4,
    q: 5,
    s: 6,
    d: 7,
    f: 8,
    w: 9,
    x: 10,
    c: 11,
    v: 12,
    t: 13,
    y: 14,
    u: 15,
    i: 16
}

// ** console.log(pads) */


// ** Boucle (parcourir les touches)
// pads.forEach((pad, i) => {
    // ** console.log(pad, i) */
//    pad.addEventListener("click", () => {
//        new Audio(`songs/song${i + 1}.wav`).play()
//    })
// })

// ** Affiche les touches du clavier sur le Pad * /
pads.forEach((pad, i) => {
    pad.textContent = Object.keys(letterToNumber)[i].toUpperCase()
    pad.style.fontSize = "30px"
    pad.addEventListener("click", () => {
        new Audio(`songs/song${i + 1}.wav`).play()
    })
})

// ** Jouer les notes grace au touches du clavier */

addEventListener("keypress", (event) => {
    const number = letterToNumber[event.key]
    new Audio(`songs/song${number}.wav`).play()
    pads[number - 1].classList.add("press")

})

addEventListener("keyup", (event) => {
    const number = letterToNumber[event.key]
    pads[number - 1].classList.remove("press")
})

// ** Jouer les notes grace au touches du clavier */
//** addEventListener("keypress", (event) => {
//    console.log(event.key)

//    if(event.key === "a") {
//        new Audio(`songs/song1.wav`).play()
//    } 
//
//
//
//
//
//
// } ) */