class Obj{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }
    des_obj(){

    }

    des_img(){

    }

    colid(objeto) {

        }
    }

class Tiro extends Obj{
    constructor(x,y,w,h,a,velX,velY){
        super(x,y,w,h,a)
        this.velX = velX
        this.velY = velY
        
        this.frame = 1
        this.tempo = 0
    }
    anim(nome){
    }

    mov(){
    }
    
    des_tiro(){
    }
}

class TiroInimigo extends Obj{
    des_tiro(){
    }

    mov(){
    }
}
