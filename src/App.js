import {Component} from 'react'
import {
  Heading,
  HeadingC,
  CustomButton,
  ContainerDiv,
  ContainerBg,
} from './styledComponents'

import './App.css'

class App extends Component {
  
    state = {
    color:"#ffffff",
  }

 onClickBtn = () => {
    this.setState((prevState) => ({color:prevState.color==="#0070c1"})
 }

  render () {

    const {color} = this.state
    return (
      <>
        <ContainerDiv>
          <Heading>Hello World</Heading>
          <ContainerBg>
            <CustomButton type="button" onClick={this.onClickBtn}>
              Click
            </CustomButton>
            <CustomButton type="button" outline={true}>
              Click
            </CustomButton>
          </ContainerBg>
        </ContainerDiv>
      </>
    )
  }
}

export default App
