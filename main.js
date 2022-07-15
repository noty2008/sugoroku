let piece = [];		
let board = [];		
let position = 0;	
let turn = 10;		
function CastDice() {
	let randnum = (Math.floor( Math.random() * 6) + 1); 	
	alert(randnum + "が出ました");
	board[position] = 0;
	position += randnum;
	
	if (position == 14){
		board[14] = 3;
		ShowBoard();
		alert("あがりです おめでとう");
		document.getElementById("button").style.display="none";
		return;
	} else if (position > 14) {
		position = 14 - (position - 14);
	}
	board[position] = 1;
	turn--;
	
	document.getElementById("status").innerHTML = "残り：" + turn + "回";	
	ShowBoard();
	
	if (turn == 0){
		alert("ゲームオーバー");
		document.getElementById("button").style.display="none";
	}
}

let ShowBoard = function() {
		let b = document.getElementById("board");
		while(b.firstChild) {
			b.removeChild(b.firstChild);		
		}
		for(x = 0; x < 15; x++) {
				let c = piece[board[x]].cloneNode(true);	
				c.style.left = (x * 39) + "px";
				b.appendChild(c);
		}
}

onload = function () {
	for (i = 1; i < 15; i++){
		board[i] = 0;		
	}
	board[0] = 1;			
	board[14] = 2;			
	piece = [document.getElementById("cell"), document.getElementById("piece"), document.getElementById("goal"), document.getElementById("goal_piece")];
	
	document.getElementById("status").innerHTML = "残り：" + turn + "回";	
	ShowBoard();
}
