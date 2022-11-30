import Link from 'next/link'
import { ComponentProps } from 'react'
import { TPropKeys } from 'ui'

type TNextLinkProps = ComponentProps<typeof Link>

export type TLinkProps = TNextLinkProps &
  Required<Pick<TNextLinkProps, TPropKeys['children']>>
