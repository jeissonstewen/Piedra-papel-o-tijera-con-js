const piedra=1, papel=2, tijera=3
let juegos, usuario,eleccion, user = 0, pc =0, emp=0, cont=0

const botonJugar= document.getElementById('jugar')
botonJugar.addEventListener('click',jugar)

function jugar(){
    const botonPiedra= document.getElementById('piedra')
    botonPiedra.addEventListener('click',selectPiedra)

    const botonPapel= document.getElementById('papel')
    botonPapel.addEventListener('click',selectPapel)

    const botonTijera= document.getElementById('tijera')
    botonTijera.addEventListener('click',selectTijera)

function selectPiedra(){
    usuario = piedra
    jugando()
}
function selectPapel(){
    usuario= papel
    jugando()
}
function selectTijera(){
    usuario = tijera
    jugando()
}
juegos = parseInt(prompt('cuantas veces quiere jugar'))
console.log(cont+1 + "de" + juegos)
function jugando(){
    if(cont<juegos){
        let pc = Math.floor((Math.random() * (4-1))+1);
        cont++
        if(usuario==pc){
            console.log('empate')
            empate()
        }
        if(usuario==1 && pc==2){
            console.log('Gana PC')
            ganaPC()
        }
        if(usuario==1 && pc==3){
            console.log('Ganas tú')
            ganaUser()
        }
        if(usuario==2 && pc==3){
            console.log('Gana PC')
            ganaPC()
        }
        if(usuario==2 && pc==1){
            console.log('Ganas tú')
            ganaUser()

        }
        if(usuario==3 && pc==1){
            console.log('Gana PC')
            ganaPC()
        }
        if(usuario==3 && pc==2){
            console.log('Ganas tú')
            ganaUser()
        }          
    } else if(cont==juegos){
        alert('Ya terminamos')
        reiniciar()
    }
}
}

function reiniciar(){
    document.getElementById('user').innerHTML = 0
    document.getElementById('pc').innerHTML = 0
    document.getElementById('empate').innerHTML = 0
    cont=0
    user=0
    pc=0
    emp =0
    juegos=0
}

function ganaUser(){
    user++
    document.getElementById('user').innerHTML = user
    console.log(cont+1 + "de" + juegos)
}
function ganaPC(){
    pc++
    document.getElementById('pc').innerHTML = pc
    console.log(cont+1 + "de" + juegos)
}
function empate(){
    emp++
    document.getElementById('empate').innerHTML = emp
    console.log(cont+1 + "de" + juegos)
}