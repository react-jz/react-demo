import react from 'react'
import { PreviewFooter, PreviewItem, PreviewButton } from 'react-weui'

const PreviewDemo = (props) => (
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
)