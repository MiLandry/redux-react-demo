const VisbilityTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (
    <div>
        <AddTodo />
        <VisbilityTodoList />
        <Footer />
    </div>
);
