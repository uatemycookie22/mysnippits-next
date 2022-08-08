import {
    Action,
    FolderProps,
    NodeData,
    SnippitNodeProps,
    TreeNodeProps,
    TreeNodeState
} from "utils";
import styles from './tree-node.module.scss'
import {SnippitFolderComponent} from "../snippit-folder/snippit-folder";
import {useReducer, Dispatch} from "react";
import {SnippitNodeComponent} from "../snippit-node/snippit-node";

type FolderOrSnippitProps = NodeData
    & Pick<TreeNodeProps, 'level'>
    & {state: TreeNodeState, dispatch: Dispatch<Action<TreeNodeState>>}

function AssertFolder(props: any): props is FolderProps {
    return props?.hasOwnProperty('folderData')
}

function AssertSnippit(props: any): props is SnippitNodeProps {
    return props?.hasOwnProperty('snippitData')
}

function FolderOrSnippit({ data, level, nodeType, dispatch, state }: FolderOrSnippitProps) {
    if(nodeType === 'FOLDER' && AssertFolder(data)) {
        const folderProps: Required<FolderProps> = {
            ...data,
            expanded: state.expanded,
            level,
            expandCallback: dispatch,
        }
        return (
            <SnippitFolderComponent {...folderProps} />
        )
    } else if (nodeType === 'SNIPPIT' && AssertSnippit(data)) {
        const snippitProps: Required<SnippitNodeProps> = {
            ...data,
            opened: state.opened,
            level,
            openCallback: dispatch,
        }

        return (<SnippitNodeComponent {...snippitProps}/>)
    }

    return (<></>)
}

function NodeReducer(state: TreeNodeState, action: Action<TreeNodeState>): TreeNodeState {
    const actionType = action.type === 'auto' ?
        (state.nodeType === 'FOLDER' ? 'expand' : 'open')
        : action.type

    switch(actionType) {
        case 'expand':
            return {...state, expanded: !state.expanded}
        case 'open':
            return {...state, opened: !state.opened}
        default:
            throw new Error()
    }
}

export function TreeNodeComponent({children, nodeData, parentExpanded, level, treeDispatcher}: Required<TreeNodeProps>) {
    const [state, dispatch] = useReducer(NodeReducer, {
        nodeType: nodeData.nodeType,
        expanded: false,
        opened: false,
    })

    const folderOrSnippitProps: FolderOrSnippitProps = {
        ...nodeData,
        level,
        state,
        dispatch: (action) => {
            dispatch(action)
            if (action.type === 'open') treeDispatcher({type: 'open-file'})
        },
    }

    const styledChildNodes = !Array.isArray(children) ?
        (<></>)
        : children.map(childNode => {
            const newProps: TreeNodeProps = {
                ...childNode.props,
                parentExpanded: !(!parentExpanded || !state.expanded)
            }

            return {
                ...childNode,
                props: newProps,
            }
        })

    return (<>
            <div className={!parentExpanded ? styles.collapsed : styles.nodeRow}>
                <button className={styles.nodeButton} onDoubleClick={() => dispatch({type: 'auto'})}>
                    <FolderOrSnippit  {...folderOrSnippitProps} />
                </button>
            </div>
            {styledChildNodes}
        </>
    )
}