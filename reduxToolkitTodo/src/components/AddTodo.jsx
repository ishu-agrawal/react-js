import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo, setEditTodo } from '../features/todo/todoSlice'
export default function AddTodo() {
    const [input, setInput] = useState('')
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()

    const editTodo = useSelector(state => state.editTodo)

    useEffect(() => {
      if (editTodo) {
        setInput(editTodo.text);
        setEditId(editTodo.id);
      } else {
        setInput(''); // Clear input field when cancel is clicked
        setEditId(null);
      }
    }, [editTodo])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(editId){
          dispatch(updateTodo({ id: editId, text: input }))
          dispatch(setEditTodo(null)); 
        } else{
          dispatch(addTodo(input))
        }
        setEditId(null)
        setInput('')
    }
  return (
    <>
     <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
          type="submit"
          className={`text-white ${
            editId ? 'bg-orange-500 hover:bg-orange-600' : 'bg-indigo-500 hover:bg-indigo-600'
          } border-0 py-2 px-6 rounded text-lg`}
        >
          {editId ? 'Update Todo' : 'Add Todo'}
        </button>
    </form>
    </>
  )
}
