import {FolderProps} from "utils";

export const SnippitFolderComponent = (props: FolderProps) => {
    return (
        <>
            <button>
                <img/>
            </button>
            <p>{props.folderData.folderName}</p>
        </>
    )
}