function draw(){
	clear()
	background(125)
	graphics.main.clear()
	graphics.main.push()
	switch(stage.scene){
		case 'level':
			if(game.color>0){
				graphics.main.background(mapColor([360,360,360],game.color)[0],mapColor([360,360,360],game.color)[1],mapColor([360,360,360],game.color)[2])
			}else{
				graphics.main.background(mapColor([240,240,240],game.color)[0],mapColor([240,240,240],game.color)[1],mapColor([240,240,240],game.color)[2])
			}
			for(let a=0,la=run.back.length;a<la;a++){
				for(let b=0,lb=run.back[a].length;b<lb;b++){
					run.back[a][b].display()
					run.back[a][b].update()
				}
			}
			graphics.main.translate(round(-stage.focus.x),round(-stage.focus.y))
			graphics.main.scale(stage.focus.size*stage.quality)
			graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
			for(let a=0,la=run.fore.length;a<la;a++){
				for(let b=0,lb=run.fore[a].length;b<lb;b++){
					run.fore[a][b].update()
					run.fore[a][b].display()
					if(run.fore[a][b].remove){
						run.fore[a].splice(b,1)
						b--
						lb--
					}
				}
			}
			displayBorder(graphics.main,game.edge)
		break
	}
	graphics.main.pop()
	stage.scale=min(width/graphics.main.width,height/graphics.main.height)
	displayTransition(graphics.main,transition)
	image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
	updateMouse(graphics.main)
}