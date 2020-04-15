function DragDropApi(){
	
	this.dragStarted = false
	this.currentElement = null

	this.onDragStart = function(event){
		this.dragStarted = true
		this.currentElement = document.querySelector(`#${event.target.id}`)
	}

	this.onDrag = function(){
		if(this.dragStarted){
			moveTo(this.currentElement)
		}
	}

	this.onDragStop = function(){
		var c = document.querySelector('#container')
		c.dispatchEvent(new Event('mouseup', {bubbles: true}))
	}

	function moveTo(element){
		element.style.cursor = 'move'
		element.style.position = 'absolute'
		element.style.left = event.clientX - element.offsetWidth/2 + 'px'
		element.style.top = event.clientY + (element.offsetHeight/2)*2 + 'px'
	}

	this.onDrop = function(){
		this.dragStarted = false
	}

	// this.onDrop = function(event){

	// 	// on mouse release
	// 	// detect draggable element is in the container
	// 	// set the position of the draggable element to the current cursor position

	// 	this.dragStarted = false
	// 	var containerElement = document.querySelector(`#${event.target.id}`)

	// 	if(!containerElement.style.position){
	// 		containerElement.style.position = 'relative'
	// 		containerElement.style.left = 0
	// 		containerElement.style.top = 0
	// 	}

	// 	var { left, right, top, bottom } = getCoordinates(containerElement)

	// 	if((event.clientX < left || event.clientX > right)
	// 			|| (event.clientY < top || event.clientY > bottom)
	// 		){
	// 		this.currentElement.style.position = 'relative'
	// 		this.currentElement.style.left = containerElement.style.left
	// 		this.currentElement.style.top = containerElement.style.top
	// 	}

		
	// }

	// function getCoordinates(containerDOM){
	// 	return containerDOM.getBoundingClientRect()
	// }
}