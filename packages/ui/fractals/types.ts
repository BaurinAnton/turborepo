export type TPropKeys = {
  children: 'children'
}

// export type TPropChildren = { children: ReactNode }

// export type TPropTagName<T extends keyof JSX.IntrinsicElements> = { tagName: T }

export type TPropContainerProps<T extends JSX.IntrinsicAttributes> = {
  containerProps: T
}
