import React, { Component } from 'react'
import { Link } from 'react-router'
import './home.css'

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarLabel,
    Article,
} from 'react-weui'
import Tab1 from './Tab1/index'
import Tab2 from './Tab2/index'
import Tab3 from './Tab3/index'
import Tab4 from './Tab4/index'

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tab: 0
        }
    }

    render() {
        return(
            <div className="home">
                <Tab>
                  <TabBody>
                      <Article style={{display: this.state.tab == 0 ? null : 'none'}}>
                          <section>
                              <Tab1/>
                          </section>
                      </Article>
                      <Article style={{display: this.state.tab == 1 ? null : 'none'}}>
                          <section>
                              <Tab2/>
                          </section>
                      </Article>
                      <Article style={{display: this.state.tab == 2 ? null : 'none'}}>
                          <section>
                              <Tab3/>
                          </section>
                      </Article>
                      <Article style={{display: this.state.tab == 3 ? null : 'none'}}>
                          <section>
                              <Tab4/>
                          </section>
                      </Article>
                  </TabBody>
                  <TabBar>
                      <TabBarItem
                          active={this.state.tab == 0}
                          onClick={e=>this.setState({tab:0})}
                          label="Tab1"
                      />
                      <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                          {/*<TabBarIcon>*/}
                          {/*/!*<img src={IconMsg}/>*!/*/}
                          {/*</TabBarIcon>*/}
                          <TabBarLabel>Tab2</TabBarLabel>
                      </TabBarItem>
                      <TabBarItem
                          active={this.state.tab == 2}
                          onClick={e=>this.setState({tab:2})}
                          // icon={<img src={IconArticle}/>}
                          label="Tab3"

                      />
                      <TabBarItem
                          active={this.state.tab == 3}
                          onClick={e=>this.setState({tab:3})}
                          // icon={<img src={IconCell}/>}
                          label="Tab4"
                      />
                  </TabBar>
              </Tab>
            </div>
        )
    }
}

export default Home