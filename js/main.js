$(init);

function init(){

	var imagesPos = [0, 0, 0];

	setInterval(moveTheImages, 4000);
	function moveTheImages(){

		// Move each image
		for (var i = 0; i < 3; i++) {
			imagesPos[i] += 245.333 * (parseInt(Math.random()*4)+2)
			$('#item'+(i+1)).css({
				backgroundPositionY: imagesPos[i]
			});
		};
		

	}
	moveTheImages()
}