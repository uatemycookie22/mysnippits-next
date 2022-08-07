import {SnippitTreeComponent, EmptyTreeComponent} from "components"
import {TreeProps} from "utils";

const GetTreeOrEmpty = (props: TreeProps) => {
    return props.nodeCollection.nodes.length ?
        (<SnippitTreeComponent {...props} ></SnippitTreeComponent>)
        : (<EmptyTreeComponent></EmptyTreeComponent>)
}

export default function Body(treeProps: TreeProps) {
    return (
        <div className="body">
            <div>
                <GetTreeOrEmpty {...treeProps} />
            </div>
        </div>
    )
}