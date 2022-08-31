export const add_todo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload,
  };
};
export const remove_todo = (payload) => {
  return {
    type: 'REMOVE_TODO',
    payload,
  };
};
export const update_todo_status = (payload) => {
  return {
    type: 'UPDATE_TODO_STATUS',
    payload,
  };
};
export const update_todo_content = (payload) => {
  return {
    type: 'UPDATE_TODO_CONTENT',
    payload,
  };
};
export const update_todo_name_input = (payload)=>{
  return {
    type:'UPDATE_TODO_NAME_INPUT',
    payload
  }
}
export const update_modal_title = (payload)=>{
  return {
    type:'UPDATE_MODAL_TITLE',
    payload
  }
}
export const ascend_todo_by_content = ()=> {
  return {
    type:'ASCEND_TODO_BY_CONTENT'
  }
}
export const descend_todo_by_content = ()=> {
  return {
    type:'DESCEND_TODO_BY_CONTENT'
  }
}
export const change_todo_content_color = (payload)=> {
  return {
    type:'CHANGE_TODO_CONTENT_COLOR',
    payload
  }
}
export const filter_todo_by_finish = ()=> {
  return {
    type:'FILTER_TODO_BY_FINISH',
  }
}
export const filter_todo_by_unfinish = ()=> {
  return {
    type:'FILTER_TODO_BY_UNFINISH',
  }
}
