document.getElementById("lisaa").addEventListener("click", lisaaNimi)
document.getElementById("poista").addEventListener("click", poistaNimi)
document.getElementById("järjestä").addEventListener("click", jarjestaNimet)

function lisaaNimi() {
    let nimilista = document.getElementById("nimilista")
    let nimikentta = document.getElementById("nimikentta")
    let nimi = document.createElement("li")
    if (nimikentta.value == ''){
        alert("Pitää antaa nimi")
        return
    }
    nimi.setAttribute('id', nimikentta.value)
    nimi.appendChild(document.createTextNode(nimikentta.value))
    nimilista.appendChild(nimi)
}

function poistaNimi() {
    let nimilista = document.getElementById("nimilista")
    let nimikentta = document.getElementById("nimikentta")
    let nimi = document.getElementById(nimikentta.value)
    nimilista.removeChild(nimi)
}

function jarjestaNimet(){
    let nimilista = document.getElementById('nimilista')
    let nimet = nimilista.childNodes
    let nimetArray = []
    for (nimi in nimet) {
        if (nimet[nimi].nodeType == 1) {
            nimetArray.push(nimet[nimi])
        }
    }
    nimetArray.sort(function(a, b) {
    return a.innerHTML == b.innerHTML
        ? 0 
        : (a.innerHTML > b.innerHTML ? 1 : -1)
    })
    for (i = 0; i < nimetArray.length; ++i) {
    nimilista.appendChild(nimetArray[i])
    }
}