let taskId = 0
class Task {
  constructor(description,listId,priority = 'low'){
  this.description = description
  this.priority = priority
  this.listId = listId
  this.id == ++taskId
  eventStore.tasks.push(this)

  }
  list(){
  return eventStore.lists.find(list =>
    {return list.id === this.listId}
  )
  }

}
