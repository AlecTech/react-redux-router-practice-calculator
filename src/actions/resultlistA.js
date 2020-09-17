//this will return and object. but my input will be a string
const viewResults = resultContent => {
    //can do console.log() here to chech whats passed in
    return{
        // This is the NAME of our action.
      // "type" is how our 'reducer' knows what we want to do.
      type:'VIEW_FIELD',
        // This is the DATA we are passing through to the reducer...
      // payload is a property
      payload: resultContent
    };
}
const changeColor = color => {
  return {
    type: 'CHANGE_THEME',
    payload: color
  };
}
export {viewResults, changeColor};

// const addNewToDo = toDoContent => {
//     return {
      
//       type: 'ADD_NEW_TO_DO',
    
//       payload: toDoContent
//     };
//   }
  
  // Another action: remove a to-do!
  // This time we don't need content - the To-Do already exists!
  // We DO need to target it somehow though... so an ID will do the trick.

//   const removeToDo = id => {
//     return {
//       type: 'REMOVE_TO_DO',
//       payload: id
//     };
//   }
  
  // If we want to use this in other files, we must export.
  // !!! Curly braces let us, comma separated, add multiple exports.
//   export { addNewToDo, removeToDo };