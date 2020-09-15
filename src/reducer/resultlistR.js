
const resultlistReducer = (state = [], action) => {
    // Which action is this? What should we do!?
    switch( action.type) {
         // If this is the ADD NEW action...
        case 'VIEW_FIELD':
             // Prepare a new task object.
            const newField = {
                task:action.payload
            };
            // Create a COPY of the original state array.
            const newResultList = [...state];
            // Add the new task to the new array.
            newResultList.push(newField);
             // Return the updated state (overwrites the state.)
            return newResultList;

        default:
            return state;
    }
}
export default resultlistReducer;

// const toDosReducer = ( state = [], action ) => {
    
//     switch ( action.type ) {
     
//       case 'ADD_NEW_TO_DO':
       
//         const newTask = {
//           id: uuidv4(),
//           task: action.payload
//         };
        
//         const newToDoList = [...state];
        
//         newToDoList.push( newTask );
       
//         return newToDoList;
//       case 'REMOVE_TO_DO':
//         // Note: the Array.filter() method returns an UPDATED COPY of the array.
//         const updatedToDoList = state.filter( // filter() takes a function as an argument.
//           // The array will be composed only of items that do NOT have the ID we passed.
//           toDo => toDo.id !== action.payload
//         );
//         // Return / overwrite the state with this new array of To-Dos.
//         return updatedToDoList;
//       // By default, make no change... (if the action type...
//       // doesn't match.)
//       default:
//         return state;
//     }
//   }
  
  // Don't forget to export!
//   export default toDosReducer;