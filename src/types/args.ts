import { ChangeEventHandler } from "react";

export type ButtonArgs = { children?: JSX.Element | string, onClick?: () => any, type?: "default" | "danger" | "accent", size?: "default" | "small", className?: string}
export type SelectArgs = { id?: string, value?: string, name?: string, onChange?: ChangeEventHandler, options: {value: string; content: string}[], className?: string}