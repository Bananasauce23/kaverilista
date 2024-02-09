document.getElementById("aloita").addEventListener("click", pyydaNimet)

function pyydaNimet(event){
    nimilista = []
    event.preventDefault();
    while (nimilista.length < 10){
    let nimi = prompt("Anna kaverin nimi:");
    if (nimi.length < 1){
        alert("Pitää antaa nimi")
    }
    else{
        nimilista.push(nimi)
        }
    }
    lisaaNimet()
}

function lisaaNimet(){
    let lista = document.getElementById("list");
    uusiLista = [];
    nimilista.forEach(nimi => {
        uusiLista.push("<li>" + nimi + "</li>");
    });
    lista.innerHTML = uusiLista.join('');
    }