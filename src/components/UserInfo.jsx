import { useEffect, useState } from "react"
import Loading from "./Loading"
import { useParams } from "react-router-dom";

export default function UserInfo() {

  let params = useParams();

  console.log("params", params)

  const [userState, setUserState] = useState({
    loadingUserData: false,
    userData: null
  })

  useEffect(() => {
    setUserState({ loadingUserData: true })

    const apiUrlUser = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/" + params.id
    fetch(apiUrlUser)
      .then((response) => response.json())
      .then((dataUser) => {
        setUserState({ loadingUsersData: false, userData: dataUser })
      });

    }, [params.id])

    console.log(userState)
  return (
    <>
      <h3>User Details</h3>
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
