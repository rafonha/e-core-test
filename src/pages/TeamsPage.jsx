import { useEffect, useState } from "react"
import Teams from "../components/Teams"

export default function TeamsPage() {
    const [teamsState, setTeamsState] = useState({
        loadingTeamsData: false,
        teamsData: null
      })

      useEffect(() => {
        setTeamsState({ loadingUserData: true })
        const apiUrlTeams = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/"
        fetch(apiUrlTeams)
          .then((response) => response.json())
          .then((dataTeams) => {
            setTeamsState({ loadingTeamsData: false, teamsData: dataTeams })
          });

      }, [setTeamsState])
  return (
    <>
        <div>TeamsPage</div>
        <Teams
            isLoading={teamsState.loadingTeamsData}
            teamsState={teamsState.teamsData}
        />
    </>
  )
}
