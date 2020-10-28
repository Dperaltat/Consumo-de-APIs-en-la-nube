var pagina = 1;
var total;
let buton=document.getElementById('button')
let btnAtras = document.getElementById("anterior");
let btnAdelante = document.getElementById("siguiente");

function nextPage() {  
    pagina = pagina + 1;
    paginacion(pagina);
  }
  
  function prevPage() { 
  
    pagina = pagina - 1;
    paginacion(pagina);
  
  }
  
function bloquear(){
  
    if(pagina==1){
        btnAtras.disabled = true;
        btnAdelante.disabled = false;
    }else {
        btnAtras.disabled = false;
    }
  
    if(pagina<total){
        btnAdelante.disabled = false;
    }else if(pagina==total){
        btnAdelante.disabled = true;
    }
  
    if(total==0){
        btnAdeltante.disabled = true;
        btnAtras.disabled = true;
    }
}


buton.addEventListener('click',()=>{
    let caja=document.getElementById('caja').value
    let img=document.getElementById('img')
    let p=document.getElementById('info')
    let p1=document.getElementById('info1')
    let p2=document.getElementById('info2')
    let p3=document.getElementById('info3')
    let p4=document.getElementById('info4')

    let xhttp=new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
    xhttp.send()

    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200){
            let datoPokemon=JSON.parse( this.responseText)
            bloquear();
            console.log(datoPokemon)
            img.setAttribute("src",datoPokemon.sprites.front_default)
            p.textContent=datoPokemon.id
            p1.textContent=datoPokemon.name
            p2.textContent=datoPokemon.base_experience
            p3.textContent=datoPokemon.height
            p4.textContent=datoPokemon.weight
        }
    }
})

btnAdelante.addEventListener('click',()=>{
    let caja=document.getElementById('caja').value
    let img=document.getElementById('img')
    let p=document.getElementById('info')
    let p1=document.getElementById('info1')
    let p2=document.getElementById('info2')
    let p3=document.getElementById('info3')
    let p4=document.getElementById('info4')

    let xhttp=new XMLHttpRequest()

    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200){
            let datoPokemon=JSON.parse( this.responseText)
            total = Math.round((datoPokemon.id));
            caja= caja+total;
            console.log(total)
            bloquear();
            console.log(datoPokemon)
            img.setAttribute("src",datoPokemon.sprites.front_default)
            p.textContent=datoPokemon.id
            p1.textContent=datoPokemon.name
            p2.textContent=datoPokemon.base_experience
            p3.textContent=datoPokemon.height
            p4.textContent=datoPokemon.weight
        }
    }

    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`+ total, true)
    xhttp.send()
})