import {SnippitTreeComponent, EmptyTreeComponent} from "components"
import {TreeProps} from "utils";
import styles from "./manager-body.module.scss"


const GetTreeOrEmpty = (props: TreeProps) => {
    return props.nodeCollection.nodes.length ?
        (<SnippitTreeComponent {...props} ></SnippitTreeComponent>)
        : (<EmptyTreeComponent></EmptyTreeComponent>)
}

export default function Body(treeProps: TreeProps) {
    return (
        <div className="body">
            <div className={styles.main}>
                <GetTreeOrEmpty {...treeProps} />
            </div>
        </div>
    )
}