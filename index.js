import ReactDOM from 'react-dom'
import { createStore } from 'Redux';

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);



