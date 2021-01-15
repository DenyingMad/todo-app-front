export const getTaskList = () =>
  fetch("/task/get-all-tasks", {
    method: "GET"
  })
    .then(response => response.json())
    .then(tasks => tasks || [])

export const saveTask = (task) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  return fetch('/task/add-task', {
    method: "POST",
    headers: headers,
    body: JSON.stringify(task),
  })
    .then(response => response.json())
}
