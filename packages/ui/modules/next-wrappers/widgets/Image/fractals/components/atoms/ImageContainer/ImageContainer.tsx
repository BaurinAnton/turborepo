import * as React from 'react'
import { createElement } from 'react'
import { TImageContainerProps, IMAGE_CONTAINER_ELEMENT } from '../../..'

const ImageContainer = ({ children, ...props }: TImageContainerProps) => {
  return createElement(IMAGE_CONTAINER_ELEMENT, props, children)
}

export default ImageContainer
