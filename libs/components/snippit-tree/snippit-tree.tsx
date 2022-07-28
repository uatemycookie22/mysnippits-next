import {FolderCollection, TreeProps} from "utils";
import {SnippitFolderComponent} from "../snippit-folder/snippit-folder";

function constructFolderList (folderCollection: FolderCollection) {
    return folderCollection.folders.map(folder => {
        const folderProps = {
            folderData: folder,
        }

        return (<SnippitFolderComponent key={folder.folderName} {...folderProps}/>
        )
    })
}

export const SnippitTreeComponent = (props: TreeProps) => {
    const folderList = constructFolderList(props.folderCollection)

    return (
        <div className="tree">
            <ul className="folderList">
                {folderList}
            </ul>
        </div>
    )
}