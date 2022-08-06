import {FolderProps} from "utils";
import styles from "./snippit-folder.module.scss"

export const SnippitFolderComponent = ({folderData, expanded, expandCallback}: Required<FolderProps>) => {
    const expandedIcon = expanded ? 'expand_more' : 'chevron_right'

    return (
        <div className={styles.folderContainer}>
            <button className={styles.expandButton} onClick={() => expandCallback(!expanded)}>
                <span className="material-icons">{expandedIcon}</span>
            </button>
            <span className="material-icons">folder</span>
            <p className={styles.folderName}>{folderData.folderName}</p>
        </div>
    )
}