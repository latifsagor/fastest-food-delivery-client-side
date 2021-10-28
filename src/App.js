import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './Component/NotFound/NotFound'
import Home from './Component/Home/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Booking from './Component/Booking/Booking'
import Login from './Component/Login/Login/Login'
import Header from './Component/Shared/Header/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
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
