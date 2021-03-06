(function() {
	function runSnake() {
		var snakeJS = document.createElement('script');
		snakeJS.src = 'https://rawgit.com/jlkravitz/snake-js/master/snake.js';
		snakeJS.onload = function() { Snake.run() }; 
		document.body.appendChild(snakeJS);
	}

	if(!($ = window.jQuery)) {
		var jquery = document.createElement('script');
		jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
		jquery.onload = runSnake;
		document.body.appendChild(jquery);
	} else { 
		runSnake();
	}
})()
