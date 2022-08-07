import {FolderProps, NodeData, TreeNodeProps} from "utils";
import styles from './tree-node.module.scss'
import {SnippitFolderComponent} from "../snippit-folder/snippit-folder";
import {useState} from "react";

type FolderOrSnippitProps = NodeData
    & Required<Pick<FolderProps, 'expandCallback'>>
    & Required<Pick<FolderProps, 'expanded'>>
    & Pick<TreeNodeProps, 'level'>

function AssertFolder(props: any): props is FolderProps {
    return props?.hasOwnProperty('folderData')
}

function FolderOrSnippit({ data, level, nodeType, expandCallback, expanded }: FolderOrSnippitProps) {
    if(nodeType === 'FOLDER' && AssertFolder(data)) {
        const folderProps: Required<FolderProps> = {
            ...data,
            expanded,
            expandCallback,
            level,
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

    const folderOrSnippitProps: FolderOrSnippitProps = {
        ...props.nodeData,
        level: props.level,
        expanded,
        expandCallback: () => {
            expand(!expanded)
        },
    }

    const styledChildNodes = !Array.isArray(props.children) ?
        undefined
        : props.children.map(childNode => {
            const newProps: TreeNodeProps = {
                ...childNode.props,
                parentExpanded: !(props.parentExpanded === false || expanded === false)
            }

            return {
                ...childNode,
                props: newProps,
            }
        })

    return (
        <>
            <div className={props.parentExpanded === false ? styles.collapsed : styles.nodeRow}>
                <button className={styles.nodeButton} onDoubleClick={() => expand(!expanded)}>
                    <FolderOrSnippit  {...folderOrSnippitProps} />
                </button>
            </div>
            {styledChildNodes}
        </>
    )
}