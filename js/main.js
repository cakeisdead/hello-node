/** Falling Elements **/
function singleDrop(x){
	var elem = $("<div class='falling-elem'>node</div>");
	elem.css('left',x);
	elem.css('-webkit-transition', 'top '+Math.floor((Math.random()*30+1))+'s');
	elem.css('font-size', (Math.random() + 1) + 'em')
	elem.appendTo(document.body);
	setTimeout( function (){
		elem.css("top",screen.height);
	},0);
	elem.fadeOut(Math.floor((Math.random()*10000)+1));
}

function letItRain(drops) {
	for(var i=0; i <= drops; i++)
		singleDrop(Math.floor((Math.random()*screen.width)+1));	
}
