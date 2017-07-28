
//window details
var height=34;
var width=70;

//Loop details
var interval=500;
var intid;
//game details
var skateLen=4;
var downSpeed=2;

//skate current details
var sktl;
var sktr;

//running
var running=true;

//Score
var score=0;

function run(){
	createMap();
	createSkate();
	dropFruit();
}

function createMap(){
	document.write("<table>");
	for(var y=0;y<height;y++){
		document.write("<tr>");
		for(var x=0;x<width;x++){
			if(x==0 || x==width-1 || y==0 || y==height-1){
				document.write("<td class='wall' id='"+x+"-"+y+"'></td>");
			}
			else{
				document.write("<td class='blank' id='"+x+"-"+y+"'></td>");
			}
		}
		document.write("</tr>");
			
	}
	document.write("</table>");
}

function get(x,y){
	return document.getElementById(x+"-"+y);
}

function set(x,y,clas){
	get(x,y).setAttribute("class",clas);
}

function createSkate(){
	
	var  upx=width/2-2;
	var upy=height-2;
	for(var y=0;y<4;y++){
		for(x=0;x<6;x++){
				if(x==0 || x==5 || y==0){
					set(upx+x,upy-y,"skate");
				}
		}
	}
	
	sktl=upx;
	sktr=upx+5;
}

var sx;
var sy;
function dropFruit(){
	
	var max=width-2;
	var min=2;
	sx=Math.floor(Math.random()*(max - min) + min);
	sy=2;
	
	intid=setInterval(updateLoop,interval);
	//alert(x);
}

function updateLoop(x,y){
	if(running){
	
	if(sy<=height-3){
	
	set(sx,sy,"inbit");
	
	set(sx,sy-1,"blank");
	sy+=1;
	
	}
	
	else{
		
		
		if(sx>=sktl && sx<=sktr){
				set(sx,sy-1,"blank");
				clearInterval(intid);
				interval-=10;
				score++;
				document.getElementById("heading").innerHTML="Score:"+score;
				dropFruit();
		}else{
			set(sx,sy-1,"blank");
			set(sx,sy,"inbit");
			alert("Lost Score:"+score);
			clearInterval(intid);
		}
	}
	
	}
	
}

function moveSkateRight(){
	
	
	var upy=height-2;
	
	//set(sktr,height-2,"skate")
	
	for(var y=0;y<4;y++){
		
					
					set(sktl,upy-y,"blank");
					set(sktr,upy-y,"blank");
					set(sktl+1,upy-y,"skate");
					set(sktr+1,upy-y,"skate");
		
	}
	set(sktr,upy,"skate");
	sktl=sktl+1;
	sktr=sktr+1;
	
	
}

function moveSkateLeft(){
	
	
	var upy=height-2;
	
	//set(sktr,height-2,"skate")
	
	for(var y=0;y<4;y++){
		
					
					set(sktl,upy-y,"blank");
					set(sktr,upy-y,"blank");
					set(sktl-1,upy-y,"skate");
					set(sktr-1,upy-y,"skate");
		
	}
	set(sktl,upy,"skate");
	sktl=sktl-1;
	sktr=sktr-1;
	
	
}
window.addEventListener("keypress",function key(){
	
	var key1 = event.keyCode;

	
	if(key1 ==100 || key1 ==68){
		if(sktr<width-2){
		
		/*set(sktl,height-2,"blank");
		sktr+=1;
		sktl+=1;
		set(sktr,height-2,"skate");*/
		moveSkateRight();
		}
	}
	
	if(key1 ==97 || key1 ==65){
		if(sktl>1){
		/*set(sktr,height-2,"blank");
		sktr-=1;
		sktl-=1;
		set(sktl,height-2,"skate");*/
		moveSkateLeft();
		}
	}
	
	if(key1 ==32){
		running=!running;
	}
});

run();