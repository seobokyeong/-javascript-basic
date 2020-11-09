const form = document.querySelector('form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

// localStorage.setItem('문자열 키', '문자열 값')
// localStorage.getItem('문자열 키')

function saveTodo(text) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function removeTodo(e) {
  const li = e.target.parentNode
  li.remove()

  const newTodo = todos.filter((todo) => todo.id !== parseInt(li.id))
  todos = newTodo
  saveTodo()
}

//지워주는 거 removeTodo

function paintTodo(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')
  span.addEventListener('click', removeTodo)

  li.innerText = text
  li.id = todos.length + 1
  span.innerText = 'x'
  li.appendChild(span)
  ul.appendChild(li)

  todos.push({
    id: todos.length + 1,
    text: text
  })

  console.log(todos)
  saveTodo()
}

function handleSubmit(e) {
  e.preventDefault()
  if (input.value === '') return
  paintTodo(input.value)
  input.value = ''
}

function loadTodo() {
  const loadTodo = localStorage.getItem('todos')
  if (loadTodo !== null) {
    const parseTodo = JSON.parse(loadTodo)
    parseTodo.forEach((todo) => paintTodo(todo.text))
  }

  // console.length(localStorage.getItem('todos'))
}

function init() {
  loadTodo()
  form.addEventListener('submit', handleSubmit)
}

init()
