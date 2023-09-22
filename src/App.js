import {
  Heading,
  HeadingC,
  CustomButton,
  ContainerDiv,
  ContainerBg,
} from './styledComponents'

import './App.css'

const App = () => (
  <>
    <ContainerDiv>
      <Heading>Hello World</Heading>
      <ContainerBg>
        <CustomButton type="button" bgColor={true}>
          Click
        </CustomButton>
        <CustomButton type="button" outline={true}>
          Click
        </CustomButton>
      </ContainerBg>
    </ContainerDiv>
  </>
)

export default App
