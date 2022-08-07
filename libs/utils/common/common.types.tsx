import {ReactElement} from "react";

export interface ProjectProps extends Record<string, any> {
    children?: ReactElement | ReactElement[]
}