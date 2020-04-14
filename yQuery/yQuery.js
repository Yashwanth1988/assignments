/*
	yQuery version 1.0.0 released April 14th 2020
	Author: Bathini Yashwanth
*/
function init(selector){

	this.node = document.querySelector(selector)

	this.text = function(){
		return this.node.innerText
	}

	this.find = function(sel){
		this.node = this.node.querySelector(sel)
		return this
	}

	this.height = function(number){
		this.node.style.height = number + 'px'
 		return this
	}

	this.width = function(number){
		this.node.style.width = number + 'px'
 		return this
	}

	this.border = function(number){
		this.node.style.border = `${number}px solid #000`
 		return this
	}

	this.backgroundColor = function(color){
		this.node.style.backgroundColor = color
 		return this
	}
}

function yQuery(selector){
	return new init(selector)
}