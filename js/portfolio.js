// DOM元素載入後 再執行 方便抓值
window.onload = function(){
	
	
	
	var angleleft =  document.getElementById("angleleft");
	
	var angleright= document.getElementById("angleright");


	angleleft.addEventListener("click",leftFn());
	angleright.addEventListener("click",rightFn());


	function leftFn(){
		console.log("3");
	}

	function rightFn(){
		console.log("2");
	}
}