
//state (default value) this is where object will go
//(this could be called abc not state)
//action-function (type of request) (this could be called abc not action)
//STORE will be running the REDUCER. It will push inside[] currect state to be updated
//and stores , action) that was sent
const resultlistReducer = (state = [], action) => {
    // Which action is this. inside switch check a value, if it maches this then do that
    //here we check what type or NAME of action we are doing. action.type or could be type.name
    switch( action.type) {
         // If this is the VIEW FIELD NEW action...
        case 'VIEW_FIELD':
            //here you can console log to chech whats missing
             // Then create this new entry
            const newField = {
                task:action.payload
            };
            // Create a COPY of the original state array.
            //here we update a STATE . [...] is a spread operator
            //what goes inside [ ] we'll take and create new array by [...]
            const newResultList = [...state];
            // Now we have new array and new entry so lets Add the new entry to the new array.
            newResultList.push(newField);
             // Return the updated state (overwrites the state.)
            return newResultList;
            // so we just done REDUX way of updating State
            case 'CHANGE_THEME':
                const newColor = {
                    task:action.payload
                };
                const newResultColor = [...state];
                newResultColor.push(newColor);
            return newResultColor;

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