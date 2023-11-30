const checkUserMiddleWare = (store) => (next) => (action) => {


  console.log(new Date().toTimeString());
  if (action.type === 'users/addUser') {
    const users = store.getState().users;
    if (users.includes(action.payload)) {
      return;
    } else {
      const obj = {
        id: Math.random().toString(36).slice(2, 8),
        username: action.payload
      }
      action.payload = obj
    }
  }
  next(action)
}

export default checkUserMiddleWare
