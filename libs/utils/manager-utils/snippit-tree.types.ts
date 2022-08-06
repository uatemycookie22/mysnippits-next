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

interface SnippitCollection {
    snippits: SnippitData[]
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
    expanded?: boolean
    expandCallback?: (expand: boolean) => void
}

export interface TreeNodeProps extends ProjectProps{
    key: string
    level: number
    nodeData: NodeData
}