import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "./Loading"

export default function UsersList() {
  const [usersState, setUsersState] = useState({
    loadingUsersData: false,
    usersData: null
  })

  useEffect(() => {
    setUsersState({ loadingUserData: true })

    const apiUrlUsers = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/"
    fetch(apiUrlUsers)
    .then((response) => response.json())
        .then((dataUsers) => {
          setUsersState({ loadingUsersData: false, usersData: dataUsers })
        });
  }, [ setUsersState ])

  const [filterUser, setfilterUser] = useState("")

  function handleFilterUserName({ currentTarget}) {
    const newFilteredUsers = currentTarget.value
    setfilterUser(newFilteredUsers)
  }

  const userFilterLowerCase = filterUser.trim().toLocaleLowerCase();

  const filteredUsers = userFilterLowerCase ?
  usersState.usersData.filter(({ displayName }) => {
    return displayName.includes(userFilterLowerCase)
  })
  : usersState.usersData

  return (
    <>
      <h3>User list</h3>
      <input type="text" name="filterUserName" id="filterUserName" placeholder={filterUser} onChange={handleFilterUserName}/>
      <ul>
      {(!usersState.loadingUsersData && usersState.usersData) ?
        filteredUsers.map(user => {
          return(
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.displayName}</Link>
            </li>
          )
        })
      : <Loading />
      }
      </ul>
    </>
  )
}
