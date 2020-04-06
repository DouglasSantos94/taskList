let Elements = (function(){
	'use strict'
	let _elements = function(){
		let taskList = document.getElementById('task-list')
		let txtTask = document.getElementById('txt-task')
		let btnAddTask = document.getElementById('btn-add-task')
		let btnRemoveTasks = document.getElementById('btn-remove-tasks')

		this.taskList = function(){
			return taskList
		}

		this.txtTask = function(){
			return txtTask
		}

		this.btnAddTask = function(){
			return btnAddTask
		}

		this.btnRemoveTasks = function(){
			return btnRemoveTasks
		}
	}

	return _elements
})()

function getElements(){
	let elements = new Elements()
	return elements
}

let elements = getElements()
let $taskList = elements.taskList()
let $btnAddTask = elements.btnAddTask()
let $txtTask = elements.txtTask()
let $btnRemoveTasks = elements.btnRemoveTasks()


function check(element){
	let unchecked = element.className === 'icon-checkbox-unchecked'
	if(unchecked){
		element.className = 'icon-checkbox-checked'
	} else {
		element.className = 'icon-checkbox-unchecked'
	}
}	


$taskList.addEventListener('click', function(e){
	let name = e.target.nodeName
	let isSpan = name === 'SPAN'
	isSpan ? check(e.target) : check(e.target.firstChild)
})

$btnRemoveTasks.addEventListener('click', function(){
	let lista = $taskList
	let lis = lista.children
	for (li of lis){
		let span = li.firstChild
		let checked = span.className === 'icon-checkbox-checked'
		if(checked){
			li.remove()
		}
	}
})



$btnAddTask.addEventListener('click', function(){
	let lista = $taskList
	let listItem = document.createElement('li')
	let span = document.createElement('span')
	span.className = "icon-checkbox-unchecked"
	let taskText = document.createTextNode($txtTask.value)
	listItem.appendChild(span)
	listItem.appendChild(taskText)
	lista.appendChild(listItem)
	$txtTask.value = ''
	$txtTask.focus()
})