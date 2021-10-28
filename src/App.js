import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './Component/NotFound/NotFound'
import Home from './Component/Home/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
