//Her skal du skrive din typescriptkode
var childNull = document.getElementById('0');
console.log(childNull);

var sundListe = document.getElementsByClassName('sundt');
console.log(sundListe);

var usundListe = document.getElementsByClassName('usundt');
console.log(usundListe);

var parrentList =  document.getElementsByTagName('ul')
console.log(parrentList);

var childList =  document.getElementsByTagName('li')
console.log(childList);

for (var i in parrentList) 
{
    console.log(i);
}

for (var io in childList) 
{
    console.log(io);
}

let id2tag = document.getElementById("2");
id2tag.setAttribute("class","sundt");
