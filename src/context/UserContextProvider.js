import React, { useEffect, useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {


  const storedTask = JSON.parse(localStorage.getItem('task'));
  const [task, setTask] = useState(storedTask);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task])


  return (
    <UserContext.Provider value={{ task, setTask }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
