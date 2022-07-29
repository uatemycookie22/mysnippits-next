import {SnippitTreeComponent, EmptyTreeComponent} from "components"
import {FolderCollection, TreeProps} from "utils";

const getTreeOrEmpty = (props: TreeProps) => {
    return props.folderCollection.folders.length ?
        (<SnippitTreeComponent {...props} ></SnippitTreeComponent>)
        : (<EmptyTreeComponent></EmptyTreeComponent>)
}

export default function Body({ folderData }: { folderData: FolderCollection }) {
    const treeOrEmpty = getTreeOrEmpty({folderCollection: folderData})

    return (
        <div className="body">
            <p>Body!!!</p>
            {treeOrEmpty}
        </div>
    )
}