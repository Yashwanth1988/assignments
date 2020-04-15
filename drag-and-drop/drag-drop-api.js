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
		var containerElement = document.querySelector('#container')

		var { left, right, top, bottom } = getCoordinates(containerElement)

		if((event.clientX < left || event.clientX > right)
				|| (event.clientY < top || event.clientY > bottom)
			){
			this.currentElement.style.position = 'absolute'
			this.currentElement.style.left = left
			this.currentElement.style.top = top
			containerElement.dispatchEvent(new Event('mouseup', {bubbles: true}))
		}

		containerElement.dispatchEvent(new Event('mouseup', {bubbles: true}))
	}

	function moveTo(element){
		element.style.cursor = 'move'
		element.style.position = 'absolute'
		element.style.left = event.clientX - element.offsetWidth + 6 + 'px'
		element.style.top = event.clientY - element.offsetHeight + 6 + 'px'
	}

	this.onDrop = function(event){
		this.dragStarted = false
	}

	function getCoordinates(containerDOM){
		return containerDOM.getBoundingClientRect()
	}
}