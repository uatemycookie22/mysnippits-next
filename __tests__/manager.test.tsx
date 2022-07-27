import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Body from "../pages/manager/manager-body/manager-body";

describe('Manager', () => {
    it('renders empty tree if empty', () => {
        const {getByText} = render(<Body/>)
        const emptyTree = getByText('Tree is empty')

        expect(emptyTree).toBeInTheDocument()
    })
})