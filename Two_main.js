
let pontos = new Text() 
let vida = new Text() 
let play_point = new Text() 
let play_vida = new Text()


function desenha(){
  
  let grupoInimigo = []
let inimigo = {
    time1: 0, 
    time2: 0,
    time3: 0,

    criaInimigo(){
    },

    des(){
        grupoInimigo.forEach((inimigo)=>{
            inimigo.des_img()
        })
    },

    destroiInimigo(){
    },

    atual(){
    }
}


let grupoTiros = [] 
let grupoTirosInimigo = []
let tiros = {
    des(){
    },
    
    atual(){
    }
}

