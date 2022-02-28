import { useEffect, useState } from "react"
import UsersList from "../components/UsersList"

export default function UsersPage() {
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
  return (
    <>
      <section>
        <h2>UsersPage</h2>
        {usersState.usersData !== null ?
          <UsersList
          isLoading={usersState.loadingUsersData}
          usersData={usersState.usersData}
          />
          : <p>Impossible to render Users data, please try again later</p>
        }
      </section>
    </>
  )
}
