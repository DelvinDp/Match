// Write your code here
import {BrowserRouter, Route, Switch} from 'react-router-dom'
<BrowserRouter>
  <h1>Ipl dashboard</h1>
  <Switch>
    <Route exact path="/" component={MumbaiIndians} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
</BrowserRouter>
