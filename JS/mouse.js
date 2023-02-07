function mouseClicked(){
	updateMouse(graphics.main)
	switch(stage.scene){
		case 'menu':
			transition.trigger=true
			transition.scene='level'
		break
	}
}