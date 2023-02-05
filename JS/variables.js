colors={
    map:[
        [1,1,1],
        [1.5,0.5,0.5],
        [0.5,1.5,0.5],
        [0.5,0.5,1.5],
        [1.5,1.5,0.5],
        [1.5,0.5,1.5],
        [0.5,1.5,1.5],
    ],collide:[
        [true,true,true,true,true,true,true],
        [true,true,false,false,true,true,false],
        [true,false,true,false,false,true,true],
        [true,false,false,true,true,false,true],
        [true,true,true,false,true,true,true],
        [true,false,true,true,true,true,true],
        [true,true,false,true,true,true,true],
    ],
}
stage={scale:0,focus:{x:0,y:0,scale:0},scene:'level'}
game={zone:11,edge:{x:0,y:0},tileSize:40,color:0}
physics={gravity:0.5,resistance:0.03,friction:0.05}
graphics={main:0,backgrounds:[],minor:[]}
transition={trigger:false,anim:0,scene:stage.scene,zone:game.zone,key:0}
inputs={mouse:{x:0,y:0},rel:{x:0,y:0},keys:[[false,false,false,false],[false,false,false,false]]}
entities={clouds:[],walls:[[],[]],enemies:[],players:[],particles:[]}
collision={incident:{x:0,y:0},calculate:{x:0,y:0}}
run={back:[],fore:[]}
a=0;b=0;c=0;d=0;_=0
la=0;lb=0;lc=0;ld=0