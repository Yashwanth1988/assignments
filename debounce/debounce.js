
function debounce(callback, timeout){

	var timeoutId
	return function(e){
		clearTimeout(timeoutId)
		timeoutId = setTimeout(function(){
			callback(e)
		}, timeout)
	}
	

	
}