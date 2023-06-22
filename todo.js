  // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
    }
]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}



const populateTodos = () => {

    let todoList = document.getElementById('todo-list')


    for (let i = 0; i < arrayOfTodos.length; i++){

    let todoListItem = document.createElement('LI')

    let todoText = document.createTextNode(arrayOfTodos[i].title)

    todoListItem.appendChild(todoText)

    todoList.appendChild(todoListItem)

    }
}




// DONE Using the assignment from yesterday, create a branch called: " Todo-Filtering ".

// DONE Fetch the same data.
// DONE (arrayOfTodos) Store the data in a variable.

// DONE Add an input for the userID. This input should only take in a number from 1 - 10.

// Add a button that when clicked will:

    // DONE clear the previous todos from the view : seperate function
    // DONE and populate the list with only todos with the userID that matches the number inputted. : seperate function

    const orderedList = document.getElementById("todo-list");


    const clearTodos = () => {
        orderedList.innerHTML = null;
 
}


const filterByID = () => {

    clearTodos();

    // capture the ol
   let todoList = document.getElementById('todo-list')   

   // input number from the user
   let userNum = document.getElementById("number_input").value

   let filterdArray = arrayOfTodos.filter( (users) => users.userId == userNum )
   
   //for loop
   for(let i=0; i < filterdArray.length; i++) {

      let todoListItem = document.createElement('LI')                    
      let todoText = document.createTextNode(filterdArray[i].title)  
      // build the string of code
      todoListItem.appendChild(todoText)  
      todoList.appendChild(todoListItem)   
   
   } // end for

} //end function


// then stores the currently filtered todos in a variable so that ...
// You can create two more buttons that when clicked:

// removes those todos from the view
// and shows only todos that are either:
// completed
// not completed