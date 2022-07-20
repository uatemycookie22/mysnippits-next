import {FunctionComponent} from "react";
import {SnippitTree, EmptyTree} from "components"
import {TreeProps} from "utils";

const getTreeOrEmpty: FunctionComponent<TreeProps> = (props) => {
    return false ? (<SnippitTree {...props} ></SnippitTree>) : (<EmptyTree></EmptyTree>)
}

export default function Body<FunctionComponent>() {
    return (
        <div className="body">
            <p>Body!!!</p>
            {getTreeOrEmpty({})}
        </div>
    )
}