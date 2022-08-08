import {SnippitNodeProps} from "utils";
import styles from "./snippit-node.module.scss";
import React from "react";

export const SnippitNodeComponent = ({snippitData, level}: Required<SnippitNodeProps>) => {
    const leftOffset = (level+1)*32

    return (
        <div className={styles.snippitContainer} style={{left: `${leftOffset}px`, width: `calc(100% - ${leftOffset}px)`}}>
            <div className={styles.openButton} onClick={() => 0} onDoubleClickCapture={(e) => e.stopPropagation()}>
                <span className="material-icons">text_snippet</span>
            </div>
            <p className={styles.snippitName}>{snippitData.fileNameMetadata.name}</p>
        </div>
    )
}