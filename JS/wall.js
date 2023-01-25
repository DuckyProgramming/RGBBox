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
                this.layer.fill(mapColor([255,255,255],this.color)[0],mapColor([255,255,255],this.color)[1],mapColor([255,255,255],this.color)[2],this.fade)
                this.layer.quad(-this.width/2,0,0,-this.height/2,this.width/2,0,0,this.height/2)
                this.layer.fill(mapColor([255,255,255],this.color)[0],mapColor([255,255,255],this.color)[1],mapColor([255,255,255],this.color)[2],this.fade*0.2)
                this.layer.quad(-this.width/2-3,0,0,-this.height/2-3,this.width/2+3,0,0,this.height/2+3)
                this.layer.quad(-this.width/2-6,0,0,-this.height/2-6,this.width/2+6,0,0,this.height/2+6)
            break
            case 3:
                if(colors.collide[game.color][this.color]){
				    this.layer.fill(mapColor([255,255,255],this.color)[0],mapColor([255,255,255],this.color)[1],mapColor([255,255,255],this.color)[2],this.fade)
                    this.layer.quad(-this.width/2,0,0,-this.height/2,this.width/2,0,0,this.height/2)
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
                !((this.type==3||this.type==4)&&this.timers[0]>0)&&
                !((this.type==1||this.type==3)&&!colors.collide[game.color][this.color])){
                    switch(this.type){
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==2||this.type==3){
                            game.color=this.color
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
                                this.collide[a][b].timers[0]=5
                                this.collide[a][b].jumps=1
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