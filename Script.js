var id;
let buton=document.getElementById('button')
let btnAtras = document.getElementById("anterior");
let btnAdelante = document.getElementById("siguiente");

function nextPage() {  
    id = id + 1;
  }
  
  function prevPage() { 
    id = id - 1;
  }
  
function bloquear(){
  
    if(id==1){
        btnAtras.disabled = true;
        btnAdelante.disabled = false;
    }else {
        btnAtras.disabled = false;
    }
  
    if(id<=891){
        btnAdelante.disabled = false;
    }else if(id>=892){
        btnAdelante.disabled = true;
    }
  
    if(id==0){
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

btnAtras.addEventListener('click',()=>{
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
            id = Math.round((datoPokemon.id));
            console.log(id)
            caja = id-1;
            console.log(caja)
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

    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`)
    xhttp.send()
})

btnAdelante.addEventListener('click',()=>{
    let xhttp=new XMLHttpRequest()

    xhttp.onreadystatechange=function () {
        if(this.readyState==4 && this.status==200){
            let datoPokemon=JSON.parse( this.responseText)
            id = Math.round((datoPokemon.id));
            console.log(id)
            caja = id+1;
            console.log(caja)
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
    let caja=document.getElementById('caja').value
    let img=document.getElementById('img')
    let p=document.getElementById('info')
    let p1=document.getElementById('info1')
    let p2=document.getElementById('info2')
    let p3=document.getElementById('info3')
    let p4=document.getElementById('info4')
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/`+caja)
    xhttp.send()
})