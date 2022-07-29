interface FileName {
    rawName: string,
    name: string,
    extension: string,
}

interface SnippitData {
    fileNameMetadata: FileName
}

interface SnippitCollection {
    snippits: SnippitData[]
}

interface FolderData {
    folderName: string
    snippitCollection: SnippitCollection
    folderCollection: FolderCollection
}

export interface FolderCollection {
    folders: FolderData[]
}

export interface TreeProps {
    folderCollection: FolderCollection
}

export interface FolderProps {
    key: string
    folderData: FolderData
}