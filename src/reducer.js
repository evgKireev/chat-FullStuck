export default (state, actions) => {
  switch (actions.type) {
    case 'IS_AUTH':
      return {
        ...state,
        isAuth: actions.payload,
        roomId: actions.payload.roomId,
        userName: actions.payload.userName,
      }
    case 'SET_DATA':
      return {
        ...state,
        users: actions.payload.users,
        messages: actions.payload.messages,
      }
    case 'SET_USERS':
      return {
        ...state,
        users: actions.payload,
      }
    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, actions.payload],
      }
    default:
      return state
  }
}
