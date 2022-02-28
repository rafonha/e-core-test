import { useEffect, useState } from "react"
import Users from "../components/Users"

export default function UsersPage() {
  return (
    <>
      <h1>UsersPage</h1>
      <Users
          // isLoading={usersState.loadingUsersData}
          // usersData={usersState.usersData}
      />
    </>
  )
}
