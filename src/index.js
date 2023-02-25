document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.getElementById("create-task-form")

  newTask.addEventListener("submit",function (e){
    e.preventDefault()
  });
