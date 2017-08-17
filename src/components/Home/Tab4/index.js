import React, { Component } from 'react'
import './index.css'
import {
    Cell,
    CellsTitle,
    FormCell,
    Form,
    CellHeader,
    CellBody,
    Label,
    Input,
    CellsTips,
    Button,
    TextArea,
    Msg,
    Toptips,
    Picker,
    Toast
} from 'react-weui'

class Tab4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            show: false,
            text: '',
            timer: null,

            loading_show: false,
            picker_show: false,
            city_value: '北京',
            picker_group: [{
                items: [{
                    label: '北京'
                },{
                    label: '长沙'
                },{
                    label: '上海'
                },{
                    label: '武汉',
                }]
            }],

            form: {
                name: '',
                xueyuan: '',
                qinshi: '',
                phone: '',
                num: '0',
                books: ''
            },
        };
    }

    componentWillUnmount() {
        this.state.timer && clearTimeout(this.state.timer);
    }

    handleInput(e, value) {
        const {
            form
        } = this.state;

        form[value] = e.target.value;

        this.setState({
            form
        });
    }

    backForward() {
        this.setState({
            success: false,
            form: {
                name: '',
                qinshi: '',
                phone: '',
                num: '0',
                books: ''
            },
        })
    }

    handleSubmit() {
        const {
            form,
            city_value
        } = this.state;
        const that = this;

        const regu = /^[1][3-9][0-9]{9}$/;
        const re = new RegExp(regu);

        let bool = false;
        if (form.name.trim() === '') {
            bool = true;
        } else if (form.qinshi.trim() === '') {
            bool = true;
        } else if (!re.test(form.phone)) {
            bool = true;
        } else if (parseInt(form.num) <= 0) {
            bool = true;
        } else {

        }
        if (bool) {
            this.setState({
                show: true,
                text: '请检查表单信息是否填写正确'
            });

            this.state.timer = setTimeout(() => {
                this.setState({
                    show: false
                });
            }, 2000);
        } else {
            that.setState({
                loading_show: true
            })
            form.xueyuan = city_value;

            console.log(form)

            /*
            *   提交
            * */
            // addDonate(form).save().then(function(donate){
            //     that.setState({
            //         success: true,
            //         loading_show: false
            //     })
            // })
        }
    }

    render() {
        const {
            form
        } = this.state;
        return(
            <div className="scroll-body">
                {!this.state.success &&
                <div>
                    <Toast icon="loading" show={this.state.loading_show}>提交中...</Toast>
                    <Toptips type="warn" show={this.state.show}>{this.state.text}</Toptips>
                    <CellsTitle className="cell-title">信息填写</CellsTitle>
                    <Form>
                        <FormCell>
                            <CellHeader>
                                <Label>姓名</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="你的姓名" value={form.name} onChange={(e) => this.handleInput(e, 'name')} />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>学院</Label>
                            </CellHeader>
                            <CellBody>
                                <Input
                                    type="text"
                                    onClick={e => {
                                        e.preventDefault()
                                        this.setState({ picker_show: true })
                                    }}
                                    placeholder="选择你所在的城市"
                                    value={this.state.city_value}
                                    readOnly={true}
                                />
                            </CellBody>
                        </FormCell>
                        <Picker
                            lang={{leftBtn: '取消', rightBtn: '确定'}}
                            onChange={(selected) => {
                                let value = '';
                                selected.forEach((s, i) => {
                                    value = this.state.picker_group[i]['items'][s].label
                                })
                                this.setState({
                                    picker_value: value,
                                    picker_show: false
                                })
                            }}
                            groups={this.state.picker_group}
                            show={this.state.picker_show}
                            onCancel={e => this.setState({ picker_show: false })}
                        />
                        <FormCell>
                            <CellHeader>
                                <Label>楼层</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="text" placeholder="请输入楼层" value={form.qinshi} onChange={(e) => this.handleInput(e, 'qinshi')} />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>联系方式</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="number" placeholder="手机号码" value={form.phone} onChange={(e) => this.handleInput(e, 'phone')} />
                            </CellBody>
                        </FormCell>
                        <FormCell>
                            <CellHeader>
                                <Label>数量</Label>
                            </CellHeader>
                            <CellBody>
                                <Input type="number" placeholder="请输入数量" value={form.num} onChange={(e) => this.handleInput(e, 'num')} />
                            </CellBody>
                        </FormCell>
                        <Cell link>
                            <CellBody>tip</CellBody>
                        </Cell>
                        {form.num >= 5 &&
                        <FormCell>
                            <CellBody>
                                <TextArea placeholder="请备注书名" rows="3" maxlength="200" value={form.books} onChange={(e) => this.handleInput(e, 'books')}></TextArea>
                            </CellBody>
                        </FormCell>
                        }
                    </Form>
                    <CellsTips>请仔细填写以上信息</CellsTips>
                    <Button className="large-btn" onClick={() => this.handleSubmit()}>确认提交</Button>
                </div>
                }
                {this.state.success &&
                <div>
                    <Msg
                        type="success"
                        title="提交成功"
                        description={parseInt(form.num) >= 5 ? '１' : '１２'}
                        buttons={[{
                            type: 'primary',
                            label: '返回',
                            onClick: () => this.backForward()
                        }]}
                    />
                </div>
                }
            </div>
        )
    }
}

export default Tab4