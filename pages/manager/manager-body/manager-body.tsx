import {SnippitTreeComponent, EmptyTreeComponent} from "components"
import {Action, TreeProps} from "utils";
import {useCallback, useReducer} from "react";

const GetTreeOrEmpty = (props: Required<TreeProps>) => {
    return props.nodeCollection.nodes.length ?
        (<SnippitTreeComponent {...props} ></SnippitTreeComponent>)
        : (<EmptyTreeComponent></EmptyTreeComponent>)
}

function BodyReducer(state: any, action: Action<any>): any {
    switch (action.type){
        case 'open-file':
            return {fileOpened: true}
        default:
            throw new Error()
    }
}

export default function Body(props: TreeProps) {
    const [_, dispatch] = useReducer(BodyReducer, {})

    const treeProps: Required<TreeProps> = {
        ...props,
        treeDispatcher: useCallback((val) => dispatch(val), [])
    }

    return (
        <div className="body">
            <GetTreeOrEmpty {...treeProps} />
        </div>
    )
}