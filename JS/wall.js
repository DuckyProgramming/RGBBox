class wall extends physical{
	constructor(layer,x,y,type,color,width,height){
		super(layer,x,y,type,color,width,height)
		this.collide=[entities.players]
        switch(this.type){
            case 4: case 5:
                this.timers=[0]
            break
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
            case 4:
                if(colors.collide[game.color][this.color]){
                    this.layer.noFill()
                    if(this.color==0){
                        this.layer.stroke(mapColor([50,50,50],this.color)[0],mapColor([50,50,50],this.color)[1],mapColor([50,50,50],this.color)[2],this.fade*min(1,max(1-this.timers[0]/15,-9+this.timers[0]/15)))
                    }else{
                        this.layer.stroke(mapColor([100,100,100],this.color)[0],mapColor([100,100,100],this.color)[1],mapColor([100,100,100],this.color)[2],this.fade*min(1,max(1-this.timers[0]/15,-9+this.timers[0]/15)))
                    }
                    this.layer.strokeWeight(4)
                    regTriangle(this.layer,0,0,this.width/2,60)
                }
            break
            case 5:
                if(colors.collide[game.color][this.color]){
                    this.layer.noFill()
                    if(this.color==0){
                        this.layer.stroke(mapColor([50,50,50],this.color)[0],mapColor([50,50,50],this.color)[1],mapColor([50,50,50],this.color)[2],this.fade*min(1,max(1-this.timers[0]/15,-9+this.timers[0]/15)))
                    }else{
                        this.layer.stroke(mapColor([100,100,100],this.color)[0],mapColor([100,100,100],this.color)[1],mapColor([100,100,100],this.color)[2],this.fade*min(1,max(1-this.timers[0]/15,-9+this.timers[0]/15)))
                    }
                    this.layer.strokeWeight(4)
                    regTriangle(this.layer,0,-6,this.width/2,60)
                    regTriangle(this.layer,0,6,this.width/2,60)
                }
            break
            case 6:
                if(colors.collide[game.color][this.color]){
                    this.layer.fill(mapColor([150,150,150],this.color)[0],mapColor([150,150,150],this.color)[1],mapColor([150,150,150],this.color)[2],this.fade)
                    this.layer.rect(0,0,this.width,this.height)
                    for(let a=0,la=this.width/10;a<la;a++){
                        this.layer.triangle(-this.width/2+a*10,-this.height/2,-this.width/2+10+a*10,-this.height/2,-this.width/2+5+a*10,-this.height/2-15)
                        this.layer.triangle(-this.width/2+a*10,this.height/2,-this.width/2+10+a*10,this.height/2,-this.width/2+5+a*10,this.height/2+15)
                    }
                    for(let a=0,la=this.height/10;a<la;a++){
                        this.layer.triangle(-this.width/2,-this.height/2+a*10,-this.width/2,-this.height/2+10+a*10,-this.width/2-15,-this.height/2+5+a*10)
                        this.layer.triangle(this.width/2,-this.height/2+a*10,this.width/2,-this.height/2+10+a*10,this.width/2+15,-this.height/2+5+a*10)
                    }
                }
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
            case 4: case 5:
                if(this.timers[0]>0){
                    this.timers[0]++
                    if(this.timers[0]>=150){
                        this.timers[0]=0
                    }
                }
            break
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!this.collide[a][b].dead&&
                !((this.type==4||this.type==5)&&this.timers[0]>0)&&
                !((this.type==1||this.type==3||this.type==4||this.type==5||this.type==6)&&!colors.collide[game.color][this.color])){
                    switch(this.type){
                        case 6:
                            this.collide[a][b].dead=true
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==2||this.type==3){
                            game.color=this.color
                        }else if(this.type==4||this.type==5){
                            this.collide[a][b].jumps+=this.type-3
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
                                this.collide[a][b].timers[0]=5
                                this.collide[a][b].jumps=max(1,this.collide[a][b].jumps)
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