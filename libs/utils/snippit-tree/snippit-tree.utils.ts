interface FileName {
    rawName: string,
    name: string,
    extension: string,
}

interface Snippit {
    fileNameMetadata: FileName
}

interface SnippitCollection {
    snippits: Snippit[]
}

interface Folder {
    folderName: string
    snippitCollection: SnippitCollection
}

export interface FolderCollection {
    folders: Folder[]
}

export interface TreeProps {
    folderCollection: FolderCollection
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