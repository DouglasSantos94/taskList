(() => {
	'use strict'
	
	const taskList = document.getElementById('task-list');
	const txtTask = document.getElementById('txt-task');
	const btnAddTask = document.getElementById('btn-add-task');
	const btnRemoveTasks = document.getElementById('btn-remove-tasks');
	let tasks = [];
	
	const showTasks = () => {
		for(let li of tasks){
			taskList.appendChild(li);
		}
		console.log
	}

	const createListItem = (text) => {
		let listItem = document.createElement('li')
		let span = document.createElement('span')
		span.className = "icon-checkbox-unchecked"
		listItem.appendChild(span)
		listItem.appendChild(text)
		return listItem;
	}
	
	taskList.addEventListener('click', (event) => {
		const element = event.target;
		if(element.nodeName === 'SPAN'){
			const unchecked = element.classList.contains('icon-checkbox-unchecked');
			const li = element.parentElement;
			if(unchecked){
				element.className = 'icon-checkbox-checked';
				li.classList.add('checked');
				return; 
			}
			element.className = 'icon-checkbox-unchecked';
			li.classList.remove('checked');
		}
	});
	
	
	btnAddTask.addEventListener('click', () => {
		let taskText = document.createTextNode(txtTask.value)
		const listItem = createListItem(taskText);
		const taskExists = tasks.some((li) => li.textContent === listItem.textContent.trim());
		if(!taskExists){
			tasks.push(listItem);	
		}
		showTasks()
		
		txtTask.value = ''
		txtTask.focus()
	})
	
	btnRemoveTasks.addEventListener('click', () => {
		taskList.innerHTML = '';
		tasks = tasks.filter(li => !li.classList.contains('checked'));
		showTasks();
	})

})()
