import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Body from "../pages/manager/manager-body/manager-body";
import {TreeProps} from "utils";

describe('Manager', () => {
    it('renders empty tree if empty', () => {
        const emptyTreeProps: TreeProps = {nodeCollection: {nodes: []}}

        const {getByText} = render(<Body {...emptyTreeProps}/>)
        const emptyTree = getByText('Tree is empty')

        expect(emptyTree).toBeInTheDocument()
    })
})