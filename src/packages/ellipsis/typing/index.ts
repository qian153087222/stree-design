import { HTMLAttributes, Slots } from 'vue'

export interface Data {
  [key: string]: unknown
}
export interface SetupContext {
  attrs: HTMLAttributes
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
  expose: (exposed?: Record<string, any>) => void
}
export interface Props {
  attrs: HTMLAttributes
  slots: Slots
}
