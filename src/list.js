let listId = 0
class List {
  constructor(title){
  this.title = title
  this.id = ++listId
  eventStore.lists.push(this)
  }

  tasks(){
    return eventStore.tasks.filter(task =>

      {return task.listId === this.id})
  }
  toHtml(){
    return (`  <div>
              <h2>${this.title}
                <button data-title="${this.title}" class="delete-list">
                  X
                </button>
              </h2>
              <ul>

              </ul>
            </div>`)
  }
  option(){
  `<option value="${this.title}" selected="">${this.title}</option>`
  }
}
