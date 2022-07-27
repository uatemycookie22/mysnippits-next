import {FunctionComponent} from "react";
import {FolderCollection, TreeProps} from "utils";

function constructFolderList<FunctionComponent>(folderCollection: FolderCollection){
    return folderCollection.folders.map(folder => {
        return (<li key={folder.folderName}>{folder.folderName}</li>)
    })
}

export const SnippitTree: FunctionComponent<TreeProps> = (props) => {
    const folderList = constructFolderList(props.folderCollection)

    return (
        <div className="tree">
            <ul>
                {folderList}
            </ul>
        </div>
    )
}