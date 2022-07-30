import {ReactElement} from "react";

export interface ProjectProps<T> extends Record<string, T | ReactElement | ReactElement[] | undefined> {
    children?: ReactElement | ReactElement[]
}