import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit}) {
  const [taskText, setTaskText] = useState("")
  const [taskCategory, setTaskCategory] = useState("")

  function onSub(event){
    event.preventDefault()
    onTaskFormSubmit({
      text: taskText,
      category: taskCategory
    })
  }

  function onText (event){
    setTaskText(event.target.value)
  }


  function onTask (event) {
    setTaskCategory(event.target.value)
  }


  return (
    <form className="new-task-form" onSubmit={onSub} >
      <label>
        Details
        <input type="text" name="text" onChange={onText} />
      </label>
      <label>
        Category
        <select name="category" onChange={onTask}>
          {categories.filter((category) => category !== "All").map((category) => 
          <option key={category} value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
