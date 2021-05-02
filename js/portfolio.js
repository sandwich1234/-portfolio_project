$(document).ready(function(){
	$("#section_top").each(function(){
		var $slides = $(this).find('img'),
		slideCount = $slides.length,
		currentIndex = 0;

		$slides = $(this).find("img"),
		slideCount = $slides.length,
		currentIndex = 0;
		//淡入顯示首張 Slide
		$slides.eq(currentIndex).fadeIn();

		//每7500毫秒就執行 showNextSlide 函式
		setInterval(showNextSlide, 4000);
		
		//顯示下一張Slide的函式
		function showNextSlide(){

			//下張Slide 的 index
			//(如果是最後一張Slidem 則會到第一張)
			var nextIndex = (currentIndex + 1) % slideCount;

			//目前的Slide 淡出顯示
			$slides.eq(currentIndex).fadeOut(2000);

			//下一張Slide 淡入顯示
			$slides.eq(nextIndex).fadeIn(2000);

			//更新目前 index
			currentIndex = nextIndex;
		}
	})
})