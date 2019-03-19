import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import call from '../../utils/call'

class RegistrationForm extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };

    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            let email1 = this.props.dbData.data.email
            let email2 = this.props.friendEmail
            const postBody = {
                email1: email1,
                email2: email2
              };
              call.post(postBody)
                .then(res => {
                  // console.log(res.data);
                  this.props.handlePost(res.data);
                }).catch(err => {
                  if (err) console.error(err);
                });
              this.props.clearSubmit();
          }
        });
      }

    render() {
      const { getFieldDecorator } = this.props.form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your matches E-mail!',
              }],
            })(
              <Input placeholder="yourdate@gmail.com" name="friendEmail" value={this.props.friendEmail} onChange={this.props.handleInputChange} />
            )}
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit">Find Match</Button>
          </Form.Item>
        </Form>
      );
    }
  }

  const WrappedEmailForm = Form.create({ name: 'register' })(RegistrationForm);


export default WrappedEmailForm;
