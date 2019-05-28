import React from "react";
import { Button, Modal, Form, Input, DatePicker, Select } from "antd";
import { Row, Col } from "antd";
const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const Option = Select.Option;
      function onChange(value) {
        console.log(`selected ${value}`);
      }

      function onBlur() {
        console.log("blur");
      }

      function onFocus() {
        console.log("focus");
      }

      function onSearch(val) {
        console.log("search:", val);
      }
      return (
        <Modal
          visible={visible}
          title="ADD COMPANY"
          okText="Create"
          width="60%"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Row>
              <Col span={11}>
                <Form.Item label="Company Name">
                  {getFieldDecorator("title", {})(
                    <Input placeholder="Company Name" />
                  )}
                </Form.Item>
              </Col>
              <Col span={2} />
              <Col span={11}>
                <Form.Item label="Abberivation:">
                  {getFieldDecorator("title1", {})(
                    <Input placeholder="Abberivation" />
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={11}>
                <Form.Item label="IT Incharge :">
                  {getFieldDecorator("title2", {})(
                    <Input placeholder="IT Incharge Name" />
                  )}
                </Form.Item>
              </Col>
              <Col span={2} />
              <Row>
                <Col span={11}>
                  <Form.Item label="Lisence Period:">
                    <Select
                      showSearch
                      // style={{ width: 380 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="6 Month">6 Month</Option>
                      <Option value="1 Year">1 Year</Option>
                      <Option value="2 Year">2 Year</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={11}>
                  <Form.Item label="Lisence Type:">
                    <Select
                      showSearch
                      // style={{ width: 350 }}
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={onChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="Silver">Silver</Option>
                      <Option value=" Gold">Gold</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={2} />
                <Col span={11}>
                  <Form.Item label="Email:">
                    {getFieldDecorator("title5", {})(
                      <Input placeholder="Company@gmail.com" />
                    )}
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col span={6}>
                  <Form.Item label="Start Date">
                    {getFieldDecorator("date-picker")(<DatePicker />)}
                  </Form.Item>
                </Col>
              </Row>
            </Row>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          ADD NEW
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
export default CollectionsPage;
