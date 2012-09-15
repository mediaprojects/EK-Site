$(document).ready(function(){
	$('#basic-search').on({
		focus: function(){
			$(this).css({
				'border-color': '#333',
				'cursor': 'auto'
			}).animate({
				'width' : 150
			})
		},
		blur: function(){
			$(this).css({
				'border-color': '#fff',
				'cursor': 'pointer'
			}).animate({
				'width' : 0
			})
		}
	}, 'input')
})