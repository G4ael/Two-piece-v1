let des = document.getElementById('des').getContext('2d')

let player = new Player(100,428,120,150,'./assets/mago_1.png')
let pontos = new Text() 
let vida = new Text() 
let play_pontos = new Text() 
let Play_life = new Text()

//Criação dos inimigos
let grupoInimigo = []
let inimigo = {
    time1: 0, //tempo para os inimigos aparecerem
    time2: 0, //tempo para os inimigos aparecerem
    time3: 0, //tempo para os inimigos aparecerem

    criaInimigo(){
        this.time1 += 0.4
        this.time2 += 0.4
        this.time3 += 0.4
        let pos_x = (Math.random() * (835 - 2 +1)+2)  //onde os inimigos vão aparecer
        let pos_x2 = (Math.random() * (835 - 2 +1)+2) //onde os inimigos vão aparecer
        let pos_x3 = (Math.random() * (835 - 2 +1)+2) //onde os inimigos vão aparecer

        if(this.time1 >=60){
            this.time1 = 0
            grupoInimigo.push(new Inimigo(pos_x,-200,80,80,'./assets/Morcego_1.png'))
            console.log(grupoInimigo)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoInimigo.push(new Inimigo(pos_x2,-300,80,80,'./assets/Morcego_2.png'))
            console.log(grupoInimigo)
        }
        if(this.time3 >=135){
            this.time3 = 0
            grupoInimigo.push(new Inimigo(pos_x3,-400,80,80,'./assets/Morcego_2.png'))
            console.log(grupoInimigo)
        }
    
        //Ajuste a criação de inimigos com base no nível atual
        if (nivel >= 2) {
            this.time1 += 0.5
            this.time2 += 0.5
            this.time3 += 0.5

        }else if(nivel >= 3){
            this.time1 += 0.6
            this.time2 += 0.6
            this.time3 += 0.6

        }else if(nivel >= 4){
            this.time1 += 0.8
            this.time2 += 0.8
            this.time3 += 0.8
        }
    },
    des(){
        grupoInimigo.forEach((inimigo)=>{ //Desenha o inimigo
            inimigo.des_img()
        })
    },

    //se o tiro pegar no inimigo ele é destruido
    destroiInimigo(){
        grupoTiros.forEach((tiro)=>{
            grupoInimigo.forEach((inimigo)=>{
                if(tiro.colid(inimigo)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoInimigo.splice(grupoInimigo.indexOf(inimigo), 1)
                    player.pts += 1
                    reproduzirAudio(dead)
                }
            })
        })
    },
    atual(){
        this.criaInimigo()
        this.destroiInimigo()
        grupoInimigo.forEach((inimigo)=>{ //atualiza o inimigo
            inimigo.mov()
            inimigo.anim('Morcego_')
            inimigo.atual_inimigo()
        })
    }
}

//Movimento do player
document.addEventListener('keydown',(e)=>{
    if(e.key === 'a'){
        player.dir = -15

    } else if(e.key === 'd'){
        player.dir = 15
    }
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'a' || e.key === 'd'){
        player.dir = 0 // Parando o movimento quando a tecla for liberada
    }
})

