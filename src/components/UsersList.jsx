// import UserInfo from "./UserInfo"

import Loading from "./Loading"

export default function UsersList( {
    isLoading = false,
    usersData = null
}) {
  console.log(usersData)
  return (
      <>
        <h3>User list</h3>
        {isLoading &&
        <Loading />
        }
        <ul>
        {(!isLoading && usersData !== null) ?
          usersData.map(item => {
            return(
              <li key={item.id}>
                {item.displayName}
              </li>
            )
          })
        : <li>Impossible to render Users data, please try again later</li>
        }
        </ul>
      </>
  )
}
