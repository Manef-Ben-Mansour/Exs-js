function calculsalaire()
{let s=Number(document.querySelector("#brut").value)
let supp=Number(document.querySelector("#supplément").value)
let sx=document.querySelector("#sexe")
let ch=document.querySelector("#charge").value
if(sx.value=="Homme") sx=0;
else sx=2
if(ch==">3") ch=2
else if(ch==3) ch=1
else ch=0
let impotr=s*18/100
impotr-=impotr*(sx+ch)/100
let net=s-impotr-s*12/100+supp;
document.querySelector("#net").innerHTML="votre salaire net est:"+net+"$"


}
let btn=document.querySelector("#btn")
btn.onclick=calculsalaire