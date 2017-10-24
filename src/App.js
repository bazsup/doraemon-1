import React from 'react';
import Header from './Header'
import LogoIMG from './logo.svg'
import './static/css/bootstrap.min.css'

import styled from 'styled-components'

const Card = styled.div`
  padding: 10px;
  background: pink;
  margin: 5px;
  width: 40%;
  float: left;
`

const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
`
const ButtonPrimary = Button.extend`
  background: cyan;
`

const Logo = styled.img.attrs({
  src: LogoIMG
})`
  background: gray;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const App = () => (
  <div>
    Hello Alpaca <br/>
    ให้อัลปาก้าทำนายกันน <br/>
    <Header message="สวัสดี โดเรมอน"/>
    <Header>
      ฉันเป็นลูกแกไง
    </Header>
    <Header />
    <Logo />
    <Card />
    <Card /> <br/>
    <Button >Click</Button>
    <ButtonPrimary>Click
      <Header message="eiei"/>
    </ButtonPrimary>
    <div className="container">
      <div className="col-12">
        column 12 grid
      </div>
    </div>
  </div>
)

export default App
