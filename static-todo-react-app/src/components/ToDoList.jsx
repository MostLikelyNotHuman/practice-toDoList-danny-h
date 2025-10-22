export const ToDoList = () => {
    const listTasks = [
        'Learn React',
        'Build a project',
        'Read documentation'
    ];

    return (
        <>
            <ul>
                {listTasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
        </>
    )
}