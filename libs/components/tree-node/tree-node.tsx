import {FolderProps, NodeData, TreeNodeProps} from "utils";
import styles from './tree-node.module.scss'
import {SnippitFolderComponent} from "../snippit-folder/snippit-folder";

function AssertFolder(props: any): props is FolderProps {
    return props?.folderName != undefined && true || false
}

function FolderOrSnippit(props: NodeData) {
    const propsData = props.data

    if(AssertFolder(propsData)) {
        return (
            <SnippitFolderComponent {...propsData} />
        )
    } else {
        return (<></>)
    }
}

export function SnippitNodeComponent(props: TreeNodeProps) {
    return (
        <>
            <div>
                <button className={styles.nodeButton}>
                </button>
                <FolderOrSnippit {...props.nodeData} />
            </div>
            {props.children}
        </>
    )
}