import { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";

export default function TeamInfo() {

  let params = useParams();

  //Team data
  const [teamState, setTeamState] = useState({
    loadingTeamData: false,
    teamData: null,
    teamMembers: []
  })

  // Team members data
  const [usersData, setusersData] = useState(null)

  //useEffect to fetch teams and users data from restAPI
  useEffect(() => {
    setTeamState({ loadingTeamData: true })

    const apiUrlTeams = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/" + params.id
    fetch(apiUrlTeams)
      .then((response) => response.json())
      .then((dataTeam) => {
        setTeamState({ loadingTeamData: false, teamData: dataTeam, teamMembers: dataTeam.teamMemberIds })
      });

    const apiUrlUsers = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/"
    fetch(apiUrlUsers)
    .then((response) => response.json())
    .then((dataUsers) => {
      setusersData(dataUsers)
    })

  }, [params.id])

  //
  const { loadingTeamData, teamData, teamMembers } = teamState

  //get user name from id
  function getUserName(userId) {
    if (usersData) {
      const userName = usersData.find(user => user.id === userId)
      return `${userName.displayName} (id: ${userId})`
    } else {
      return "No user info available"
    }
  }

  //filter users by input value
  const [filterUser, setfilterUser] = useState("")

  function handleFilterUserName({ currentTarget }) {
    const newFilteredUsers = currentTarget.value
    setfilterUser(newFilteredUsers)
  }

  const userFilterLowerCase = filterUser.trim().toLocaleLowerCase();

  const filteredUsers = userFilterLowerCase ?
  teamMembers.filter((userId) => {
    return userId.includes(userFilterLowerCase)
  })
  : teamMembers

  return (
    <>
      <h2>Team Info</h2>
      {(!loadingTeamData && teamData) ?
        <>
          <ul>
            <li>ID: {teamData.id}</li>
            <li>Name: {teamData.name}</li>
            <li>Team Leader: {getUserName(teamData.teamLeadId)}</li>
          </ul>
          <label htmlFor="teamMembers">Search for team members: </label>
          <input type="text" name="teamMembers" id="teamMembers" placeholder={filterUser} onChange={handleFilterUserName} />
          <p>Team members:</p>
          <ul>
            {filteredUsers.map(element =>
              <li key={element}>{getUserName(element)}</li>
            )}
          </ul>
        </>
      : <Loading />
      }
      <Link to="/">Return to Teams list</Link>
    </>
  )
}
