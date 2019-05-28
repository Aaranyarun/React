import React, { Component } from "react";

import { Layout, Icon, Select, notification, Menu, Dropdown } from "antd";

const { Header } = Layout;
const { Option } = Select;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        <Icon type="edit" /> Edit Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        <Icon type="logout" /> Logout
      </a>
    </Menu.Item>
  </Menu>
);
const options = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
// // const openIcon = () => {
//   Icon.open({
//     message: "Notification Title",
//     description:
//       "This is the content of the notification. This is the content of the notification. This is the content of the notification."
//   });
// };

export class Layoutform extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                <Icon type="user" /> Aarany <Icon type="down" />
              </a>
            </Dropdown>

            <screenLeft>
              <Icon type="bell" style={{ color: "red" }} />
            </screenLeft>
          </Header>
          {/* <Content>Content</Content>
          <Footer>Footer</Footer> */}
        </Layout>
        <div>,</div>,
      </div>
    );
  }
}

export default Layoutform;
