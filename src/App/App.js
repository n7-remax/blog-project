import React, { Component } from 'react'

import './../common/style/reset.css'
import './../common/style/style.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Button from './Button/Button'
import Info from './Info/Info'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
				<Main/>
        <Button/>
        <Info/>
        <Footer/>
      </div>
    );
  }
}

export default App;