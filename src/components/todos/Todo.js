// import React from 'react'

// const Todo = props => <li>{props.text}</li>

// export default Todo; 

import React from 'react'
 
const Todo = props => {
  return (
    <div>
      {/* <span>{props.text}</span><button>DELETE</button> */} 
       {/* <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button>  */}
       <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}
 
export default Todo;
