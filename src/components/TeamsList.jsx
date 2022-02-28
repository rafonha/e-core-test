import Loading from "./Loading";
// import TeamInfo from "./TeamInfo";

export default function TeamsList({
    isLoading = false,
    teamsData = null
}) {
  console.log("teamsData on TeamsList", teamsData)

  return (
    <>
      <h3>Team list</h3>
      {isLoading &&
        <Loading />
      }
      <ul>
        {(!isLoading && teamsData !== null) ?
          teamsData.map(item => {
            return(
              <li key={item.id}>
                  {item.name}
              </li>
            )
          })
          : <li>Impossible to render Teams data, please try again later</li>
        }
      </ul>
    </>
  )
}
