$(init);

function init(){

	var imagesPos = [0, 0, 0];
	var accelerations = [0, 0, 0];
	var backgroundPosX = [0, 246, 490];
	var ACCELL_SPEED = 0.35
	var SLOT_HEIGHT = 245.333

	function moveTheImages(){

		// Move each image
		for (var i = 0; i < 3; i++) {
			imagesPos[i] += SLOT_HEIGHT * (parseInt(Math.random()*4)+2)
			$('#item'+(i+1)).css({
				backgroundPosition: backgroundPosX[i] + "px " + parseInt(imagesPos[i]) + "px"
			});
		};
	}
	$("#container").click(moveTheImages);

	// 
	for (var i = 0; i < 3; i++) {
		$('#item'+(i+1)).mousemove(function(ev){
			currentItem = parseInt(ev.target.id.replace('item','')) - 1
			accelerations[currentItem] = (123 - Math.abs(ev.offsetX-123)) * ACCELL_SPEED;
			// console.log(accelerations[currentItem])
		})
		$('#item'+(i+1)).mouseout(function(ev){
			// Stop accelerating
			currentItem = parseInt(ev.target.id.replace('item','')-1)
			// Move to the final position
			imagesPos[currentItem] = (Math.ceil(imagesPos[currentItem] / SLOT_HEIGHT) + parseInt(Math.random()*4)) * SLOT_HEIGHT
			$(ev.target).css({
				backgroundPosition: backgroundPosX[currentItem] + "px " + parseInt(imagesPos[currentItem]) + "px"
			});
			// 
			accelerations[currentItem]=0
		})
	};

	// Loop anim
	window.requestAnimationFrame(animate);
	function animate(){
		// Move each image
		for (var i = 0; i < 3; i++) {
			if (accelerations[i] == 0) continue;

			imagesPos[i] += accelerations[i]
			$('#item'+(i+1)).css({
				backgroundPosition: backgroundPosX[i] + "px " + parseInt(imagesPos[i]) + "px"
			});
		};
		// console.log("anim")
		window.requestAnimationFrame(animate);
	}
}