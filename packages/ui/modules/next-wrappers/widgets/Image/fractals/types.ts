import Image from 'next/image'
import { ComponentProps } from 'react'
import { TPropKeys, TPropContainerProps } from 'ui'
import { IMAGE_CONTAINER_ELEMENT } from '.'

export type TImageContainerProps = ComponentProps<
  typeof IMAGE_CONTAINER_ELEMENT
>

export type TImageProps = Partial<
  TPropContainerProps<Omit<TImageContainerProps, TPropKeys['children']>>
> &
  Omit<ComponentProps<typeof Image>, TPropKeys['children']>
