export enum EattrType {
    button, submit, reset
}
export enum EIconPlacement {
    left, right
}

export enum ESize {
    tiny, small, medium, large
}

export enum EType {
    default, primary, success, info, warning, error
}

export interface IProps {
    "attr-type": EattrType,
    block: boolean,
    bordered: boolean,
    circle: boolean,
    color: string,
    dashed: boolean,
    disabled: boolean,
    ghost: boolean,
    "icon-placement": EIconPlacement,
    keyboard: boolean,
    loading: boolean,
    round: boolean,
    size: ESize,
    text: boolean,
    "text-color": string,
    type: EType,
    tag: string
}