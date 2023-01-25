class wall extends physical{
	constructor(layer,x,y,type,color,width,height){
		super(layer,x,y,type,color,width,height)
		this.collide=[entities.players]
        switch(this.type){
        }
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
            case 1:
                if(colors.collide[game.color][this.color]){
				    this.layer.fill(mapColor([100,100,100],this.color)[0],mapColor([100,100,100],this.color)[1],mapColor([100,100,100],this.color)[2],this.fade)
				    this.layer.rect(0,0,this.width,this.height)
                }
			break
            case 2:
                if(colors.collide[game.color][this.color]){
				    this.layer.fill(mapColor([255,255,255],this.color)[0],mapColor([255,255,255],this.color)[1],mapColor([255,255,255],this.color)[2],this.fade)
				    this.layer.rect(0,0,this.width,this.height)
                }
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!this.collide[a][b].dead&&
                !((this.type==3||this.type==4)&&this.timers[0]>0)){
                    switch(this.type){
                        case 5:
                            this.collide[a][b].dead=true
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==3||this.type==4){
                            this.collide[a][b].jumps+=this.type-2
                            if(this.timers[0]==0){
                                this.timers[0]++
                            }
                        }else{
                            this.collide[a][b].squish[boxCollideBox(this,this.collide[a][b])]=true
                            if(boxCollideBox(this,this.collide[a][b])==0&&this.collide[a][b].velocity.y<0){
                                this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==1&&this.collide[a][b].velocity.y>0){
                                this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                this.collide[a][b].velocity.x*=(1-physics.friction)
                                if(this.type!=2){
                                    this.collide[a][b].timers[0]=5
                                    this.collide[a][b].jumps=1
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==2&&this.collide[a][b].velocity.x<0){
                                this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==3&&this.collide[a][b].velocity.x>0){
                                this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                            }
                        }
                    }
                }
            }
        }
        super.update()
	}
}