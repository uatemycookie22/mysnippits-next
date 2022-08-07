import {ProjectProps} from "../common/common.types";

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

export interface NodeData {
    data: FolderProps | SnippitData
    nodeType: NodeType
    nodeCollection: NodeCollection
}

export interface NodeCollection {
    nodes: NodeData[]
}

export interface TreeProps {
    nodeCollection: NodeCollection
}

export interface FolderProps {
    folderData: FolderData
    level?: number
    expanded?: boolean
    expandCallback?: () => void
}

export interface TreeNodeProps extends ProjectProps {
    key: string
    level: number
    nodeData: NodeData
    parentExpanded?: boolean
}