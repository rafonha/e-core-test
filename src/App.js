import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
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

console.log("usersState", usersState)

  const [teamsState, setTeamsState] = useState({
    loadingTeamsData: false,
    teamsData: null
  })

  useEffect(() => {
    setTeamsState({ loadingTeamsData: true })

    const apiUrlTeams = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/"
    fetch(apiUrlTeams)
      .then((response) => response.json())
      .then((dataTeams) => {
        setTeamsState({ loadingTeamsData: false, teamsData: dataTeams })
      });

  }, [ setTeamsState ])

  console.log("teamsState", teamsState)

  return (
    <>
      {/* <Home /> */}
    </>
  );
}

export default App;
