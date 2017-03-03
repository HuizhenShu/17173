function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
		window.onload = func;
	}else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}


function animate(offset) {
	//获取的是style.top，是相对左边获取距离，所以第一张图后style.top都为负值，
	//且style.top获取的是字符串，需要用parseInt()取整转化为数字。
	var image = document.getElementById('image');
	var newTop = parseInt(image.style.top) + offset;
	image.style.top = newTop + 'px';
	if(newTop<-360){
		image.style.top = -120 + 'px';
		}
	if(newTop>0){
		image.style.top = -480 + 'px';
		}
	}
index = 0;
function buttonsShow() {
	//这里需要清除之前的样式
	//
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var buttons = document.getElementById('buttons').getElementsByTagName('li');
	
	// buttons[index].className = 'bton';
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].className == 'bton') {
			buttons[i].className = '';
		}
	}	//数组从0开始，故index需要-1
	buttons[index].className = 'bton';
}

function slideDispaly(){
	var image = document.getElementById('image');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var buttons = document.getElementById('buttons').getElementsByTagName('li');
	buttons[0].onclick = function() {
		image.style.top = 0 + 'px';
		this.className = 'bton';
		buttons[1].className = '';
		buttons[2].className = '';
	}

	buttons[0].onmouseover = function() {
		image.style.top = 0 + 'px';
		this.className = 'bton';
		buttons[1].className = '';
		buttons[2].className = '';
	}

	buttons[1].onclick = function(){
		image.style.top = -120 + 'px';
		this.className = 'bton';
		buttons[0].className = '';
		buttons[2].className = '';
	}

	buttons[1].onmouseover = function() {
		image.style.top = -120 + 'px';
		this.className = 'bton';
		buttons[0].className = '';
		buttons[2].className = '';
	}

	buttons[2].onclick = function() {
		image.style.top = -240 + 'px';
		this.className = 'bton';
		buttons[1].className = '';
		buttons[0].className = '';
	}

	buttons[2].onmouseover = function() {
		image.style.top = -240 + 'px';
		this.className = 'bton';
		buttons[1].className = '';
		buttons[0].className = '';
	}

	prev.onclick = function() {
		index -= 1;
		if (index < 0) {
			index = 2;
		}
		buttonsShow();
		animate(120);
	}
	next.onclick = function() {
	//由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
		index += 1;
		if (index > 2) {
			index = 0;
		}
		buttonsShow();
		animate(-120);
	}	
	var timer;
	function play() {
		timer = setInterval(function () {
		next.onclick()
		}, 1500)
	}
	play();
	var slidecontainer = document.getElementById('slidecontainer');
	
	function stopp() {
		clearInterval(timer);
	}
	slidecontainer.onmouseover = stopp;
	slidecontainer.onmouseout = play;

}


function show(){  
        document.getElementById("overDiv").style.display = "block" ;  
        document.getElementById("hsDiv").style.display = "block" ;  
    }  
function closeDiv(){  
    document.getElementById("overDiv").style.display = "none" ;  
    document.getElementById("hsDiv").style.display = "none" ;  
}

function tabToggle(){
			var tabs = document.getElementsByClassName('hotgametab');

			for (var i = 0; i<tabs.length; i++) {
				//  function closure, 函数闭包, 为每个tab创建他们自己的scope;
				(function () {
					var tab = tabs[i];
					var titles = tab.getElementsByClassName('tab-trigger-item');
					var contents = tab.getElementsByClassName("tab-content-item");

					for (var j = 0; j < titles.length; j++) {
						var title = titles[j];
						
						//  保存当前title的index;
						title.index = j;

						title.onclick = function () {
							var title = this;
							
							//  reset status to normal
							for (var k = 0; k < titles.length; k++) {
								titles[k].className = "tab-trigger-item";
								contents[k].className = "tab-content-item";
							}

							//  set active status
							title.className = "tab-trigger-item active";
							contents[title.index].className = "tab-content-item active";
							return false;
						};
					}
				})();
			}
		}
addLoadEvent(tabToggle);		
addLoadEvent(slideDispaly);
	
	


	
