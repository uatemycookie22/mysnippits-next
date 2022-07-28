import {SnippitTreeComponent, EmptyTreeComponent} from "components"
import {getTreePropsSample, TreeProps} from "utils";

const getTreeOrEmpty = (props: TreeProps) => {
    return props.folderCollection.folders.length ?
        (<SnippitTreeComponent {...props} ></SnippitTreeComponent>)
        : (<EmptyTreeComponent></EmptyTreeComponent>)
}

export default function Body() {
    const treeOrEmpty = getTreeOrEmpty(getTreePropsSample())

    return (
        <div className="body">
            <p>Body!!!</p>
            {treeOrEmpty}
        </div>
    )
}