import React, { Component} from 'react'
import
    {
        Button ,
        ActionSheet,
        Preview,
        PreviewHeader,
        PreviewFooter,
        PreviewBody,
        PreviewItem,
        PreviewButton
    } from 'react-weui'

class Index extends Component{
    constructor(props) {
        super(props);

        this.state = {
            ios_show: false,
            android_show: false,
            menus: [{
                label: 'Option 1',
                onClick: ()=> {}
            }, {
                label: 'Option 2',
                onClick: ()=> {}
            }],
            actions: [
                {
                    label: 'Cancel',
                    onClick: this.hide.bind(this)
                }
            ]
        }
    }

    hide(){
        this.setState({
            auto_show: false,
            ios_show: false,
            android_show: false,
        });
    }

    render() {
        return (
            <div className="main" >
                <div className="actionsheet" title="ActionSheet" subTitle="弹出式菜单" spacing>
                    <Button type="default" onClick={e=>this.setState({ios_show: true})}>IOS ActionSheet</Button>
                    <ActionSheet
                        menus={this.state.menus}
                        actions={this.state.actions}
                        show={this.state.ios_show}
                        type="ios"
                        onRequestClose={e=>this.setState({ios_show: false})}
                    />
                    <br/>

                    <Button type="default" onClick={e=>this.setState({android_show: true})}>Android ActionSheet</Button>
                    <ActionSheet
                        menus={this.state.menus}
                        actions={this.state.actions}
                        show={this.state.android_show}
                        type="android"
                        onRequestClose={e=>this.setState({android_show: false})}
                    />
                </div>
            </div>
        )
    }
}

export default Index