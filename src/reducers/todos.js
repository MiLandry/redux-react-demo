import todo from './todo';
const todos = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':{

        let t = {
            completed: false,
            id: action.id,
            text: action.text,
        }; 
        return [...state, t];
    }
    case 'TOGGLE_TODO' : {
        return state.map(t => todo(t, action));
    }
    default:
        return state;
    }
};

export default todos;