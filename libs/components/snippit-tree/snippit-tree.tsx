import {NodeCollection, TreeProps} from "utils";
import {TreeNodeComponent} from "../tree-node/tree-node";
import styles from "./snippit-tree.module.scss"

function constructNodeTree (initNodeCollection: NodeCollection, dispatcher: Required<TreeProps>['treeDispatcher']) {
    function constructRow(nodeCollection: NodeCollection, level: number) {
        return nodeCollection.nodes.map((node, index) => {
            const nodeProps = {
                nodeData: node,
                level,
                parentExpanded: level === 0,
                treeDispatcher: dispatcher,
            }

            const nestedFolderList = constructRow(node.nodeCollection, level + 1)

            return (
                <TreeNodeComponent key={index.toString()} {...nodeProps}>
                    {nestedFolderList}
                </TreeNodeComponent>
            )
        })
    }

    return constructRow(initNodeCollection, 0)
}

export const SnippitTreeComponent = (props: Required<TreeProps>) => {
    const nodeTree = constructNodeTree(props.nodeCollection, props.treeDispatcher)

    return (
        <div className={styles.tree}>
            <ul className={styles.nodes}>
                {nodeTree}
            </ul>
        </div>
    )
}