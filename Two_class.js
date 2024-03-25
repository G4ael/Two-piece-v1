class Text extends Obj{

}

class Player extends Obj{

    mov(){
        this.speed += this.dir * 0.1
        this.speed *= 0.9; // Aplicando uma pequena resistência para suavizar o movimento
        this.x += this.speed

        // Limitando a velocidade máxima do jogador
        if (this.speed > 3) {
            this.speed = 3
        } else if (this.speed < -3) {
            this.speed = -3
        }

        if(this.x <= 0){
            this.x = 0
            this.speed = 0
        } else if(this.x >= 900){
            this.x = 900
            this.speed = 0
        }
    }
}

