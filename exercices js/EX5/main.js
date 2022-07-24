
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

   let n=getRandomInt(100)
 let  nb=0;

function jeu()
{let i=Number(document.querySelector("#num").value)
    if(i<n) { nb++;
    document.querySelector("#reponse").innerHTML="Plus grand  nombre de tentatives= "+nb  
   
}
if(i>n) {nb++;
    document.querySelector("#reponse").innerHTML="Plus petit nombre de tentatives= "+nb 
    
}
if(i==n) {nb++;
    document.querySelector("#reponse").innerHTML="Bravo vous l'avez trouvé en:"+nb+" fois"
    
}

}
function reset()
{n=getRandomInt(100)
    nb=0
    document.querySelector("#reponse").innerHTML=""


}

let btn=document.querySelector("#btn")
btn.onclick=jeu
let res=document.querySelector("#reset")
res.onclick=reset;