let grupoTiros = [] 
let grupoTirosInimigo = []
let tiros = {
    des(){
    },
    
    atual(){
    }
}

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