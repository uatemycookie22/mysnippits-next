import {FunctionComponent} from "react";
import {SnippitTree, EmptyTree} from "components"
import {getTreePropsSample, TreeProps} from "utils";

const getTreeOrEmpty: FunctionComponent<TreeProps> = (props) => {
    return props.folderCollection.folders.length ?
        (<SnippitTree {...props} ></SnippitTree>) : (<EmptyTree></EmptyTree>)
}

export default function Body<FunctionComponent>() {
    const treeOrEmpty = getTreeOrEmpty(getTreePropsSample())

    return (
        <div className="body">
            <p>Body!!!</p>
            {treeOrEmpty}
        </div>
    )
}