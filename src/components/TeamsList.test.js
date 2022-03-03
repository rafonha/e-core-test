import { render, screen } from "@testing-library/react"
import TeamsList from "./TeamsList"

describe("TeamsList", () => {
    it("should render TeamsList", () => {
        render(<TeamsList />);
        const div = screen.getByTestId("teamsListPage")
        expect(div).toBeTruthy()
    })

    // it("should render list of teams", () => {
    //     render(<TeamsList />);
    //     const list = screen.getByTestId("teamsList")
    //     const { getAllByTestId } = within(list)
    //     const items = screen.getAllByTestId("teamListItem")
    //     expect(items.length).toBeGreaterThan(0)
    // })
    
    // it("should show filtered list of teams", () => {
    //     render(<TeamsList />);
    //     const input = screen.getByTestId("filterTeamsInput")
    //     const inputTeamName = "Ordinary"
    //     const teamListItem = screen.getByTestId("filterTeamsInput")
    //     fireEvent.change(input, {target: {value: inputTeamName}})
    //     expect(teamListItem.innerText).toContain(inputTeamName)
    // })
})