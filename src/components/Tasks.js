
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (

        // state is immmutable, so 
        // Tasks.push() does not work
        <>
           {/* {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>)
           )}  */}
           {tasks.map((task) => (
           <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
           ))} 
        </>
    )
}

export default Tasks
