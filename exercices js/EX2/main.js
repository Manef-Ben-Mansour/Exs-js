let nom=document.querySelector("#nom")
let prenom=document.querySelector("#prenom")
let  mail=document.querySelector("#mail")
let btn=document.querySelector("#btn")

function ecrire() { document.querySelector("#formulaire").innerHTML="exercice réussi"
btn.remove();
console.log("nom = " +nom)
console.log("prenom = "+ prenom)
console.log("mail = "+ mail)
}


btn.onclick=ecrire