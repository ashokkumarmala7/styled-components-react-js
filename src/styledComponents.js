import styled from 'styled-components'

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
  font-size: 15px;
`
export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};

  margin-left: 20px;
`
export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  width: 200px;
  margin: auto;
  height: 21vh;
`
export const HeadingC = styled.h1`
  color: #000000;
`

export const ContainerBg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
