import {ReactElement} from "react";

export interface ProjectProps extends Record<string, any> {
    children?: ReactElement | ReactElement[]
}

export type PartialPick<T, K extends keyof T> = Pick<Partial<T>, K>

export interface Action<T> {
    type: string
    payload?: Partial<T>
}