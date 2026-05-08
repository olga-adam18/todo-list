class TodoApp {
    constructor(){
        
        this.form = document.querySelector('form'); 
        this.todoInput = document.querySelector('#todo-input');
        this.todoContent = document.querySelector('#todo-content');

        
        this.todosArr = JSON.parse(localStorage.getItem('todosDB')) ?? [];

         
        this.loadInitialData(); 
        this.bindEvents();   
    }

    
}