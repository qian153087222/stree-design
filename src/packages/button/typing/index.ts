export enum EattrType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}
export enum EIconPlacement {
  left = 'left',
  right = 'right',
}

export enum ESize {
  tiny = 'tiny',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum EType {
  default = 'default',
  primary = 'primary',
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

export interface IProps {
  attrType: EattrType
  block: boolean
  bordered: boolean
  circle: boolean
  color: string
  dashed: boolean
  disabled: boolean
  ghost: boolean
  iconPlacement: EIconPlacement
  keyboard: boolean
  loading: boolean
  round: boolean
  size: ESize
  text: boolean
  textColor: string
  type: EType
  tag: string
}
// export interface Data {
//   type:string,
//   className:string,
//   slots:unknown,
//   iconPlacement:EIconPlacement,
//   onMouseup:()=>void,
//   spread:string,
//   border:string,
//   content:string,
//   [key: string]: unknown
// }
