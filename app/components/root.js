import React from 'react'
import {connect} from 'react-redux';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


const Root = () => {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to ="/">Go Home</Link>
        <Link to="/candies">Go to Candies</Link>
      </nav>
      {/* <nav>
        Goodie Bag
      </nav> */}
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default Root
