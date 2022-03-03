// import { fireEvent, render, screen, within } from "@testing-library/react"
// import TeamInfo from "./TeamInfo"

// describe("TeamsList", () => {
//     it("should render TeamsList", () => {
//         render(<TeamInfo />);
//         const div = screen.getByTestId("teamInfoPage")
//         expect(div).toBeTruthy()
//     })

//     it("should render a list of team's info", () => {
//         render(<TeamInfo />);
//         const list = screen.getByTestId("teamInfoList")
//         const { getAllByRole } = within(list)
//         const items = screen.getAllByRole("li")
//         expect(items.length).toBeGreaterThan(0)
//     })
    
//     it("should show filtered list of team members by ID", () => {
//         render(<TeamInfo />);
//         const input = screen.getByTestId("filterTeamsInput")
//         const inputMemberId = "37b"
//         const teamListItem = screen.getByTestId("filterTeamMembers")
//         fireEvent.change(input, {target: {value: inputMemberId}})
//         expect(teamListItem.innerText).toContain(inputMemberId)
//     })
// })