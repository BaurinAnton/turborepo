import { ImageContainer } from '.'
import styled from 'styled-components'

const StyledImageContainer = styled(ImageContainer).withConfig<{}>({
  displayName: 'ImageContainer',
  componentId: 'sc-1x1x1x1',
  shouldForwardProp: prop => ![].includes(prop as keyof {})
})`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`

export default StyledImageContainer
