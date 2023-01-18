const form = document.getElementById('form')
let id = localStorage.getItem('id') || 1
let people = JSON.parse(localStorage.getItem('people')) || []
const ul = document.getElementById('ul')

form.addEventListener('submit', e => {
    e.preventDefault()

    const person = Object.create(null)
    person.name = e.target.name.value 
    person.email = e.target.email.value
    
    addPerson(person)
    form.reset()
    showPeople()
})

function addPerson(person) {
    person.id = Number(id)
    id++
    people.push(person)
    localStorage.setItem('people', JSON.stringify(people))
    localStorage.setItem('id', id)
}

function showPeople() {
    ul.textContent = ''
    people.forEach(person => {
        const li = document.createElement('li')
        li.textContent = person.name
        ul.append(li)
    })
}

showPeople()
