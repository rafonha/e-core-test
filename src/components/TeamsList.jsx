import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Loading from "./Loading";

export default function TeamsList() {
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

  const [filterTeams, setfilterTeams] = useState("")

    function handleFilterTeamsName({ currentTarget}) {
      const newFilteredTeams = currentTarget.value
      setfilterTeams(newFilteredTeams)
    }

    const teamFilterLowerCase = filterTeams.trim().toLocaleLowerCase();

    const filteredTeams = teamFilterLowerCase ?
    teamsState.teamsData.filter(({ name }) => {
      let lowerCaseName = name.toLocaleLowerCase()
      return lowerCaseName.includes(teamFilterLowerCase)
    })
    : teamsState.teamsData

  return (
    <>
      <h3>Team list</h3>
      <input type="text" name="filterTeamsName" id="filterTeamsName" placeholder={filterTeams} onChange={handleFilterTeamsName}/>
      <ul>
        {(!teamsState.loadingTeamsData && teamsState.teamsData) ?
          filteredTeams.map(team => {
            return(
              <li key={team.id}>
                <Link to={`/${team.id}`}>{team.name}</Link>
              </li>
            )
          })
          : <Loading />
        }
      </ul>
    </>
  )
}
