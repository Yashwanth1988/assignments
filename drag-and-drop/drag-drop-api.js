function DragDropApi(){

	this.onDrag = function(action, event, element){
		//console.log('onDrag',event, element)
		if(action === 'mousedown'){
			//console.log('mousedown', event.screenX, event.screenY)
		}

		if(action === 'mousemove' && element){
			//console.log(event.screenX, event.screenY)
		}

		element.style.position = 'absolute'
		element.style.left = event.screenX + 'px'
		element.style.top = event.screenY - 50 + 'px'
		// on mouse press
		// take draggable element
		// adjust position as per mouse cursor
		
	}

	this.onDrop = function(action, event, element, container){
		console.log('onDrop',event)
		console.log('container',container.style)

		if(!container.style.position){
			container.style.position = 'relative'
			container.style.left = 0
			container.style.top = 0
		}
		console.log('mouseup', event.screenX, event.screenY)

		var { left, right, top, bottom } = getCoordinates(container)

		// if(event.screenX >= parseInt(container.style.left.replace('px', '')) + 500
		// 	  || event.screenY >= parseInt(container.style.top.replace('px','')) + 500){
		// 	element.style.position = 'relative'
		// 	element.style.left = container.style.left
		// 	element.style.top = container.style.top
		// }

		if((event.screenX < left || event.screenX > right)
				|| (event.screenY < top || event.screenY > bottom)
			){
			element.style.position = 'relative'
			element.style.left = container.style.left
			element.style.top = container.style.top
		}

		// on mouse release
		// detect draggable element is in the container
		// set the position of the draggable element to the current cursor position
	}

	function trackPosition(){
		// track cursor position
	}

	function getCoordinates(containerDOM){
		if(!containerDOM.style.position){
			containerDOM.style.position = 'relative'
			containerDOM.style.left = 0
			containerDOM.style.top = 0
		}

		var width = containerDOM.offsetWidth
		var height = containerDOM.offsetHeight

		return {
			top: parseInt(containerDOM.style.top.replace('px', '')),
			right: parseInt(containerDOM.style.left.replace('px', '')) + width,
			left: parseInt(containerDOM.style.left.replace('px', '')),
			bottom: parseInt(containerDOM.style.top.replace('px', '')) + height
		}

	}


	
}