import * as React from 'react'
import { default as NextImage } from 'next/image'
import {
  TImageProps,
  ImageContainer
  // StyledImageContainer
} from './fractals'

const Image = ({ containerProps, ...props }: TImageProps) => {
  return (
    <ImageContainer {...containerProps}>
      <NextImage {...props} />
    </ImageContainer>
  )
  // return (
  //   <StyledImageContainer {...containerProps}>
  //     <NextImage {...props} />
  //   </StyledImageContainer>
  // )
  // return (
  //   <>
  //     <ImageContainer {...containerProps}>
  //       <NextImage {...props} />
  //     </ImageContainer>

  //     {/* <StldImageContainer>
  //       <NextImage {...props} />
  //     </StldImageContainer> */}
  //   </>
  // )
}

export default Image
