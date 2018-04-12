document.addEventListener('DOMContentLoaded', () => {

  eventStore = {
      lists: [],
      tasks: []
  }
  const newListTitle = document.querySelector('#new-list-title')
  const form = document.querySelector('#create-list-form')
  const lists = document.querySelector('#lists')
  form.addEventListener('submit',function(e){
  e.preventDefault()
  let newList = new List(newListTitle.value)
  lists.innerHTML = eventStore.lists.map(function(list){
    return list.toHtml()
  }).join("")
  if (eventStore.lists.length > 0){
  listDiv.innerHTML = taskForm(eventStore.lists)
  }
  })







  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();


  function taskForm(array){
    var listOptions = listsObjs => listsObjs.map( listObj => listObj.option() )
return ` <form id="create-task-form">
            <label for="parent-list">Select List:</label>
            <select id="parent-list">

              ${listsObjs(array).join('')}

            </select>

            <label for="new-task-description">Task description:</label>
            <input required="" type="text" id="new-task-description" placeholder="description">

            <label for="new-task-priority">Priority level:</label>
            <input type="text" id="new-task-priority" placeholder="priority">
            <input type="submit" value="Create New Task">
          </form>`
  }







});
