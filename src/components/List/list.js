import React, { Component } from 'react'
import {browserHistory} from "react-router"
import {
    PullToRefresh,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter
} from 'react-weui'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [1,2,3,4,5,6,7,8,9]
        }
    }

    handleClick(event) {
        console.log(this)
        browserHistory.push('/detail')
    }


    render() {
        return(
            <div>
                <div style={{
                    height: '200px',
                    background: '#fff'
                }}>
                    <PullToRefresh
                        onRefresh={
                            resolve => {
                                //mock add item after 1s and then resolve
                                setTimeout(()=>{
                                    this.setState({
                                        items: this.state.items.concat([this.state.items.length + 1])
                                    }, ()=> resolve())
                                }, 1000)
                            }
                        }
                    >
                        <CellsTitle >List with link</CellsTitle>

                        <Cells>
                            {
                                this.state.items.map( (item, i) => {
                                    return (
                                        <Cell key={i} access onClick={this.handleClick.bind(this)}>
                                            <CellBody>
                                                {item}
                                            </CellBody>
                                            <CellFooter />
                                        </Cell>
                                    )
                                })
                            }
                        </Cells>

                    </PullToRefresh>
                </div>
            </div>
        )
    }
}

export default List
