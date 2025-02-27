import { useState } from "react"
import '../style.css'


const Todo = () => {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('')

    const handleAdd = ( ) => {
        if (input.trim() === "") return;
        
        setTodo(([
            ...todo, //copia o estado anterior
            { complete: false, name: input } //adiciona
          ]))


        setInput('')
    }
    const handleClick = (index) => {
        setTodo((prevTodo) => //prevTodo ta representando o parametro q vem no set, que seria o estado anterior da lista
          prevTodo.map((item, i) => //caçando o item na lista
            i === index ? { ...item, complete: !item.complete } : item
          )
        );
      };
  return (
    <div className="popup">
      <ul>
        {todo.map((item, index )=> (<li className={item.complete ? "feito" : ""} key={index}> {item.name} 
            <input type="checkbox" name="don't" id={index}
            checked={item.complete}
            onChange={() => handleClick(index)}/>
            </li>)) || ""}
      </ul>
      <div>
    <input type="text" placeholder="New Todo" value={input} onChange={e => setInput(e.target.value)}/>
      <button onClick={handleAdd}>ADD</button>
    </div>
      
    </div>
  )
}

export default Todo
