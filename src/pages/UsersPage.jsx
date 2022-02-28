import { useEffect, useState } from "react"
import Users from "../components/Users"

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
        <h1>UsersPage</h1>
        <Users
            isLoading={usersState.loadingUsersData}
            usersData={usersState.usersData}
        />
      </>
  )
}
