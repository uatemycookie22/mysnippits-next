import {FolderProps, NodeData, TreeNodeProps} from "utils";
import styles from './tree-node.module.scss'
import {SnippitFolderComponent} from "../snippit-folder/snippit-folder";
import {useState} from "react";

interface FolderOrSnippitProps {

}

function AssertFolder(props: any): props is FolderProps {
    return props?.folderData
        && props?.expanded !== undefined
        && props?.expandCallback
        && true || false
}

function FolderOrSnippit({ data, nodeType }: NodeData) {
    if(nodeType === 'FOLDER' && AssertFolder(data)) {
        const folderProps: Required<FolderProps> = {
            ...data,
            expanded: false,
            expandCallback,
        }
        return (
            <SnippitFolderComponent {...folderProps} />
        )
    } else {
        return (<></>)
    }
}

export function SnippitNodeComponent(props: TreeNodeProps) {
    const [expanded, expand] = useState(false)

    const folderOrSnippitProps: NodeData & {expandCallback: (val: boolean) => void} = {
        ...props.nodeData,
        expandCallback: (val) => expand(val),
    }

    return (
        <>
            <div>
                <button className={styles.nodeButton} onClick={() => expand(!expanded)}>
                    <FolderOrSnippit  {...folderOrSnippitProps} />
                </button>
            </div>
            {props.children}
        </>
    )
}