import axios from 'axios'
import React, { useState } from 'react'
import API from '../api'

export default function JoinBlock({ isLogin }) {
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  const onEnter = () => {
    const obj = { roomId, userName }
    if (!roomId || !userName) {
      return alert('Неверные данные!')
    }
    setLoading(true)
    setTimeout(() => {
      API.post('/rooms', obj).then(isLogin(obj))
    }, 0)
  }
  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        disabled={loading}
        className="btn btn-success"
        onClick={onEnter}
      >
        {loading ? 'Вход...' : 'Войти'}
      </button>
    </div>
  )
}
