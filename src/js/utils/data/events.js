import { fetchQuery } from './_index'
import { createImg } from '../components/_index'
import { setVariable, deleteResults } from '../helpers/_index'

// Fetch search query based on keycode (enter) or click
export const userInput = async (data) => {
  if (event.keyCode === 13) {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    data = await fetchQuery(query)
    deleteResults()
    createImg(data)
    return data
  } else {
    let query = document.querySelector('#searchElement').value
    setVariable(true)
    data = await fetchQuery(query)
    deleteResults()
    createImg(data)
    return data
  }
}
