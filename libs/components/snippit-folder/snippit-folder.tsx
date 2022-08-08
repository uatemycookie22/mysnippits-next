import {FolderProps} from "utils";
import styles from "./snippit-folder.module.scss"
import React from "react";

export const SnippitFolderComponent = ({folderData, expanded, expandCallback, level}: Required<FolderProps>) => {
    const expandedIcon = expanded ? 'expand_more' : 'chevron_right'
    const leftOffset = (level+1)*20

    return (
        <div className={styles.folderContainer} style={{left: `${leftOffset}px`, width: `calc(100% - ${leftOffset}px)`}}>
            <div className={styles.expandButton} onClick={() => expandCallback({type: 'expand'})} onDoubleClickCapture={(e) => e.stopPropagation()}>
                <span className="material-icons">{expandedIcon}</span>
            </div>
            <span className="material-icons">folder</span>
            <p className={styles.folderName}>{folderData.folderName}</p>
        </div>
    )
}