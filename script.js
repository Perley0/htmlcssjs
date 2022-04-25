const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const searchBar = document.querySelector('.search input');


const generateTemplate = (e) => {
    const html =
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${e}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;
    list.innerHTML += html
};

const filterToDos = (term) => {
   Array.from(list.children)
    .filter((todo) => {
         return !todo.textContent.toLowerCase().includes(term);
   }) 
    .forEach(todo => {
        todo.classList.add('filtered');
    })

    Array.from(list.children)
    .filter((todo) => {
         return todo.textContent.toLowerCase().includes(term);
   }) 
    .forEach(todo => {
        todo.classList.remove('filtered');
    })

}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length){
    generateTemplate(todo);}
});


list.addEventListener('click', e => {
    e.stopImmediatePropagation();
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


searchBar.addEventListener('keyup', e => {
    e.preventDefault();
    const term = searchBar.value.trim().toLowerCase();
    filterToDos(term);
})



