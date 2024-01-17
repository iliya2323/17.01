import axios from "axios";
import {Fragment, useEffect, useState } from "react"
import Checkbox from "./checkbox"
import Head from "./head"
export default function Example() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
axios
.get("http://localhost:3000/api/todos")
.then((data) => {
  //console.log(data);
  setTodos(data.data);
})
.catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(todos);

  }, [todos]);
  return (
    <div><Head/>
    <div><div className="chek"><Checkbox/></div>
    <div className="all">
    
    <div className="">
    
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Добавить новую задачу</h3>
        
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            
            <input
              
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="    Закончить проект"
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            Добавить
          </button>
          
        </form>
        
      </div>
    </div>
      {todos?.map((todo) => (
       <div className="relative flex items-start">
       <div className="flex h-6 items-center">
         <input
           id="offers"
           aria-describedby="offers-description"
           name="offers"
           type="checkbox"
           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
         />
       </div>
       <div className="ml-3 text-sm leading-6">
         <label htmlFor="offers" className="font-medium text-gray-900">
           {todo?.name}
         </label>
         <p id="offers-description" className="text-gray-500">
           Закончить разработку проекта
         </p>
         
       </div>
       
     </div>
      ))}
    </div>
    
    </div>
    
    </div>

  )
}



