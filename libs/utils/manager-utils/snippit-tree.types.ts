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


export function getTreePropsSample(): TreeProps {
    const snippitsSample: SnippitCollection = {
        snippits: []
    }

    const foldersSample: FolderCollection = {
        folders: [
            {folderName: 'My folder 1!', snippitCollection: snippitsSample},
            {folderName: 'My folder 2!', snippitCollection: snippitsSample},
            {folderName: 'My folder 3!', snippitCollection: snippitsSample},
        ],
    }

    return {
        folderCollection: foldersSample
    }
}