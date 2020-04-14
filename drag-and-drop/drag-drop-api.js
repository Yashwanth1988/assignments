function DragDropApi(){

	this.onDrag = function(event, element){
		element.style.cursor = 'move'
		element.style.position = 'absolute'
		element.style.left = event.clientX - element.offsetWidth/2 + 'px'
		element.style.top = event.clientY + (element.offsetHeight/2)*2 + 'px'
	}

	this.onDrop = function(event, element, container){

		// on mouse release
		// detect draggable element is in the container
		// set the position of the draggable element to the current cursor position

		if(!container.style.position){
			container.style.position = 'relative'
			container.style.left = 0
			container.style.top = 0
		}

		var { left, right, top, bottom } = getCoordinates(container)

		if((event.clientX < left || event.clientX > right)
				|| (event.clientY < top || event.clientY > bottom)
			){
			element.style.position = 'relative'
			element.style.left = container.style.left
			element.style.top = container.style.top
		}

		
	}

	function getCoordinates(containerDOM){
		return containerDOM.getBoundingClientRect()
	}
}