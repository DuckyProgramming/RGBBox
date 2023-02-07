function draw(){
	clear()
	background(125)
	graphics.main.clear()
	switch(stage.scene){
		case 'level':
			graphics.main.push()
			if(game.color>0){
				graphics.main.background(mapColor([360,360,360],game.color)[0],mapColor([360,360,360],game.color)[1],mapColor([360,360,360],game.color)[2])
			}else{
				graphics.main.background(mapColor([220,220,220],game.color)[0],mapColor([220,220,220],game.color)[1],mapColor([220,220,220],game.color)[2])
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
			graphics.main.pop()
			graphics.main.noStroke()
			graphics.main.fill(100)
			graphics.main.textSize(20)
			graphics.main.text(ceil(game.time/6)/10,graphics.main.width/2,40)
			graphics.main.textSize(15)
			for(let a=0,la=min(game.splits.length,20);a<la;a++){
				graphics.main.text(game.splits[a],50,15+a*15)
			}
			for(let a=20,la=min(game.splits.length,40);a<la;a++){
				graphics.main.text(game.splits[a],150,15+(a-20)*15)
			}
			if(game.maxZone<game.zone){
				game.maxZone++
				game.splits.push((game.zone)+": "+ceil(game.time/6)/10)
			}
			game.time++
		break
		case 'menu':
			graphics.main.background(240)
			graphics.main.noStroke()
			graphics.main.fill(120)
			graphics.main.textSize(90)
			graphics.main.text("RGBBox",graphics.main.width/2,graphics.main.height/2-75)
			graphics.main.textSize(30)
			graphics.main.text("WASD or Arrow Keys to Move\n\nClick to Begin",graphics.main.width/2,graphics.main.height/2+60)
		break
		case 'end':
			graphics.main.background(0)
			graphics.main.noStroke()
			graphics.main.fill(255)
			graphics.main.noStroke()
			graphics.main.textSize(25)
			graphics.main.text("RGBBox\nUse this screen\nfor record proof",graphics.main.width/2,graphics.main.height/2)
			graphics.main.fill(100)
			graphics.main.textSize(20)
			graphics.main.text(ceil(game.time/6)/10,graphics.main.width/2,40)
			graphics.main.textSize(15)
			for(let a=0,la=min(game.splits.length,20);a<la;a++){
				graphics.main.text(game.splits[a],50,15+a*15)
			}
			for(let a=20,la=min(game.splits.length,40);a<la;a++){
				graphics.main.text(game.splits[a],150,15+(a-20)*15)
			}
			if(game.maxZone<game.zone){
				game.maxZone++
				game.splits.push((game.zone)+": "+ceil(game.time/6)/10)
			}
		break
	}
	stage.scale=min(width/graphics.main.width,height/graphics.main.height)
	displayTransition(graphics.main,transition)
	image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
	updateMouse(graphics.main)
}