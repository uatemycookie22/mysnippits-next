import {NodeCollection, TreeProps} from "utils";
import {TreeNodeComponent} from "../tree-node/tree-node";
import styles from "./snippit-tree.module.scss"

function constructNodeTree (nodeCollection: NodeCollection, level: number) {
    return nodeCollection.nodes.map((node, index) => {
        const nodeProps = {
            nodeData: node,
            level,
        }

        const nestedFolderList = constructNodeTree(node.nodeCollection, level + 1)

        return (
            <TreeNodeComponent key={index.toString()} {...nodeProps}>
                {nestedFolderList}
            </TreeNodeComponent>
        )
    })
}

export const SnippitTreeComponent = (props: TreeProps) => {
    const nodeTree = constructNodeTree(props.nodeCollection, 0)

    return (
        <div className={styles.tree}>
            <ul className={styles.nodes}>
                {nodeTree}
            </ul>
        </div>
    )
}