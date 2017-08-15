import react, { Component } from 'react'
import { PreviewFooter, PreviewItem, PreviewButton } from 'react-weui'

class PreView extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="preview" title="Preview" subTitle="表单预览">
                    <Preview>
                        <PreviewHeader>
                            <PreviewItem label="Total" value="$49.99" />
                        </PreviewHeader>
                        <PreviewBody>
                            <PreviewItem label="Product" value="Name" />
                            <PreviewItem label="Description" value="Product Description" />
                            <PreviewItem label="Details" value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. " />
                        </PreviewBody>
                        <PreviewFooter>
                            <PreviewButton primary>Action</PreviewButton>
                        </PreviewFooter>
                    </Preview>
                </div>
            </div>
        )
    }
}

export default PreView