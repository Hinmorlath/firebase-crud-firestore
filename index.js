window.addEventListener('DOMContentLoaded', () => {

})

const taskform = document.getElementById('task-form')

taskform.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = taskform['task-title']
    const description = taskform['task-description']
})