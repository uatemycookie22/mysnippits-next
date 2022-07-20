import '@testing-library/jest-dom'
import {SnippitTree} from "components";
import { render, screen } from "@testing-library/react";

describe('Manager', () => {
    it('renders snippit tree', () => {
        render(<SnippitTree/>)

        const x = screen.getByRole('list')

        expect(x).toBeInTheDocument()
    })
})