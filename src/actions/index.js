addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
},

deleteTask = (taskId) => {
  return {
    type: 'DELETE_TASK',
    payload: taskId
  };
};


//action = object with type=name of action & payload =value of action
export {addTask, deleteTask};

//reducers are the decision makers for the actions.
