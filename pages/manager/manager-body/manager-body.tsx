import {FunctionComponent} from "react";
import {SnippitTree, EmptyTree} from "components"
import {TreeProps} from "utils";

const getTreeOrEmpty: FunctionComponent<TreeProps> = (props) => {
    return true ? (<SnippitTree {...props} ></SnippitTree>) : (<EmptyTree></EmptyTree>)
}

const Body: FunctionComponent = () => {
    return (
        <div className="body">
            <p>Body!!</p>
            {getTreeOrEmpty({})}
        </div>
    )
}

export default Body;