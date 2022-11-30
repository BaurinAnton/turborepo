import * as React from 'react'
import { default as NextLink } from 'next/link'
import { TLinkProps } from './types'

const Link = ({ children, ...props }: TLinkProps) => {
  return <NextLink {...props}>{children}</NextLink>
}

export default Link
