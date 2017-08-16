import React,{Component} from "react"
import {Route,Router, browserHistory } from "react-router"
import {Provider} from "react-redux"

import Home from './Home/home'
import List from './List/list'
import Detail from './Detail/index'
import Index from './Index/index'

class Routes extends Component{
    render() {
        return (
            <Router history={browserHistory} >
                <Route path="/" component={Home}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/index" component={Index}></Route>
                <Route path="/list" component={List}></Route>
                {/*<Route path="/" component={PageNav}>*/}
                {/*<IndexRoute component={HomeContainer}></IndexRoute>*/}
                {/*<Route path="course" component={Course}></Route>*/}
                {/*<Route path="setting" component={Setting}></Route>*/}
                {/*</Route>*/}
            </Router>
        )
    }
}

export default Routes