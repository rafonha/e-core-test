import { useEffect, useState } from "react";
import TeamsList from "../components/TeamsList";

export default function TeamsPage() {
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

  console.log("teamsData on TeamsPage", teamsState.teamsData)

  return (
    <section>
        <h2>TeamsPage</h2>
        {teamsState.teamsData !== null ?
          <TeamsList
            isLoading={teamsState.loadingTeamsData}
            teamsState={teamsState.teamsData}
          />
          : <p>Impossible to render Teams data, please try again later</p>
        }
      </section>
  )
}
