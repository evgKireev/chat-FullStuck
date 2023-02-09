import './App.css'
import React from 'react'
import reducer from './reducer'
import socket from './constants'
import JoinBlock from './Components/JoinBlock.jsx'
import Chat from './Components/Chat'
import axios from 'axios'
function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    isAuth: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  })
  const isLogin = async (obj) => {
    dispatch({
      type: 'IS_AUTH',
      payload: obj,
    })
    socket.emit('ROOM:JOIN', obj)
    const { data } = await axios.get(`/rooms/${obj.roomId}`)
    dispatch({
      type: 'SET_DATA',
      payload: data,
    })
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  }

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers)
    socket.on('ROOM:NEW_MESSAGE', (messages) => {
      dispatch({
        type: 'NEW_MESSAGE',
        payload: messages,
      })
    })
  }, [])
  return (
    <div className="App">
      {!state.isAuth ? (
        <JoinBlock isLogin={isLogin} />
      ) : (
        <Chat
          {...state}
          dispatch={dispatch}
        />
      )}
    </div>
  )
}

export default App
