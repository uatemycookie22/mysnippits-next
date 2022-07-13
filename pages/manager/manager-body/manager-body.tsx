import {FunctionComponent} from "react";
import SnippitTree from "./snippit-tree/snippit-tree";

const Body: FunctionComponent = () => {
    return (
        <div className="body">
            <p>Body!</p>
            <SnippitTree></SnippitTree>
        </div>
    )
}

export default Body;