import React from 'react'

export default function JoinBlock() {
  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
      />
      <input
        type="text"
        placeholder="Ваше имя"
      />
      <button className="btn btn-success">Вход</button>
    </div>
  )
}
