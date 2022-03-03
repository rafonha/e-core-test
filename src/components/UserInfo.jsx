import { useEffect, useState } from "react"
import Loading from "./Loading"
import { useParams } from "react-router-dom";

export default function UserInfo() {

  const params = useParams();

  const [userState, setUserState] = useState({
    loadingUserData: false,
    userData: null
  })

  useEffect(() => {
    setUserState({ loadingUserData: true })

    const apiUrlUser = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/" + params.userId
    fetch(apiUrlUser)
      .then((response) => response.json())
      .then((dataUser) => {
        setUserState({ loadingUsersData: false, userData: dataUser })
      });

    }, [params.userId])

  return (
    <>
      <h1>User Details</h1>
      {(!userState.loadingUserData && userState.userData !== null) ?
        <ul>
          <li>ID: {userState.id}</li>
          <li>Name: {userState.displayName}</li>
        </ul>
      : <Loading />
      }
    </>
  )
}
