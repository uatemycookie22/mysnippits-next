import {Action, PartialPick, ProjectProps} from "../common/common.types";
import {Dispatch} from "react";

export type NodeType = 'SNIPPIT' | 'FOLDER'

interface FileName {
    rawName: string,
    name: string,
    extension: string,
}

export interface SnippitData {
    fileNameMetadata: FileName
}

interface FolderData {
    folderName: string
}

export interface NodeData extends Pick<TreeNodeState, 'nodeType'>{
    data: FolderProps | SnippitNodeProps
    nodeCollection: NodeCollection
}

export interface NodeCollection {
    nodes: NodeData[]
}

export interface TreeProps {
    nodeCollection: NodeCollection
    treeDispatcher?: Dispatch<Action<any>>
}

export interface FolderProps
    extends PartialPick<TreeNodeProps, 'level'>, PartialPick<TreeNodeState, 'expanded'>{
    folderData: FolderData
    expandCallback?: Dispatch<Action<TreeNodeState>>
}

export interface SnippitNodeProps
    extends PartialPick<TreeNodeProps, 'level'>, PartialPick<TreeNodeState, 'opened'>{
    snippitData: SnippitData
    openCallback?: Dispatch<Action<TreeNodeState>>
}

export interface TreeNodeProps extends ProjectProps, Required<Pick<TreeProps, 'treeDispatcher'>> {
    key: string
    level: number
    nodeData: NodeData
    parentExpanded?: boolean
}

export interface TreeNodeState {
    nodeType: NodeType
    expanded: boolean
    opened: boolean
}