import React from 'react'
interface ITodoPanel {
    completeAll: () => void;
    deleteAll: () => void;
}


const TodoPanel: React.FC<ITodoPanel> = ({completeAll, deleteAll}) => {
  

  
    return (
    <section>
        <button onClick={completeAll}>Complete all</button>
        <button onClick={deleteAll}>Delete all completed</button>

    </section>
  )
}

export default TodoPanel
