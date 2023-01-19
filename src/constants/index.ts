const API = process.env.NEXT_PUBLIC_APP_API
const END_POINT = {
  POST_SIGN_UP: `${API}/users/create`,
  POST_SIGN_IN: `${API}/users/login`,
  PUT_UPDATE_TODO: `${API}/todos/`,
  POST_CREATE_TODO: `${API}/todos`,
  DELETE_DELETE_TODO: `${API}/todos/`,
  GET_TODOS: `${API}/todos`,
}

const QUERY_KEY = {
  USER: 'user',
  TODO: 'todo',
}

export {END_POINT, QUERY_KEY}
