import { getMyData } from '../helpers/index'
import { accessKey } from '../config/index'

// return API endpoint based on image ID to get specific image information
export const checkID = async (endpoint) => {
  return await getMyData(
    `https://api.unsplash.com/photos/${endpoint}?client_id=${accessKey}`
  )
}
