
    let buton=document.getElementById('button')

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
            if(this.readyState==4 && this.status==200)
            {
            let datoPokemon=JSON.parse( this.responseText)
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