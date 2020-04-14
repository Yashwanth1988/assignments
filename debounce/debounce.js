
function debounce(callback, timeout, event){

	//var now = Date.now()
	//var nextNow = Date.now()
	var timeoutId
	return function(){
		clearTimeout(timeoutId)
		timeoutId = setTimeout(function(){
			//nextNow = Date.now()
			//if((nextNow - now) >= timeout){
				callback()
			//}
		}, timeout)
	}
	

	
}