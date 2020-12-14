window.addEventListener('load', function(){

	$(document).ready(Menu);
	var contador =1; 
	function Menu()
	{
		$('.Menu').click(function () { 
			//$('nav').toggle();
			if(contador=1)
			{
				$('nav').animate({
					left:'1'

				});
				contador=0;
			}else 
			{
				contador=1;
				$('nav').animate({
					left:'-100%'

				});
			}
		});
	}
	
	
});





