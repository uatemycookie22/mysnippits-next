import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import {TreeProps} from "utils";
import {SnippitTreeComponent} from "components";

const mockTreeProps: TreeProps = {
    nodeCollection:
        {
            nodes: [
                {
                    data: {
                        folderData: {
                            folderName: "My folder 1"
                        }
                    },
                    nodeType: "FOLDER",
                    nodeCollection: {
                        nodes: [
                            {
                                data: {
                                    folderData: {
                                        folderName: "My nested folder 1"
                                    }
                                },
                                nodeType: "FOLDER",
                                nodeCollection: {
                                    nodes: [
                                        {
                                            data: {
                                                folderData: {
                                                    folderName: "My nested folder 2"
                                                }
                                            },
                                            nodeType: "FOLDER",
                                            nodeCollection: {
                                                nodes: []
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
            ]
        }
}

describe('Snippit tree', () => {
    it('checks if folders were created', () => {
        const {container} = render(<SnippitTreeComponent {...mockTreeProps}/>)

        const rowNodeCollection = container?.firstElementChild?.firstElementChild?.children as HTMLCollection
        expect(rowNodeCollection).toBeDefined()

        const rowNodes = Array.from(rowNodeCollection)

        expect(rowNodes.length).toEqual(3)
    })
})