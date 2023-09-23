import {Component} from 'react'
import {
  Heading,
  CustomButton,
  ContainerDiv,
  ContainerBg,
} from './styledComponents'

import './App.css'

class App extends Component {
  state = {
    isDone: false,
  }

  onClickBtn = () => {
    this.setState(prevState => ({isDone: !prevState.isDone}))
  }

  render() {
    const {isDone} = this.state
    return (
      <>
        <ContainerDiv>
          <Heading>Hello World</Heading>
          <ContainerBg>
            <CustomButton type="button" onClick={this.onClickBtn}>
              Click
            </CustomButton>
            <CustomButton type="button" outline={true} isDone={isDone}>
              Click
            </CustomButton>
          </ContainerBg>
        </ContainerDiv>
      </>
    )
  }
}

export default App
