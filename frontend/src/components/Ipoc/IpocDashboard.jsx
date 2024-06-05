import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined,
  UploadOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import dashboardImage from './dashboardIP.jpg';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   {
//     key: '9',
//     icon: <FileOutlined />,
//     label: 'Upload CV', // Change the label to 'Upload'
//     linkTo: '/upload', 
//   },
//   // Inside the items array
// {
//   key: '10',
//   icon: <UploadOutlined />,
//   label: 'Upload Profile Picture',
//   linkTo: '/upload-profile-picture',
// },

{
  key: '1',
  icon: < UnorderedListOutlined />,
  label: 'Add Company List',
  linkTo: '/addcompanyList',
},

{
  key: '2',
  icon: < UnorderedListOutlined />,
  label: 'Add Company Detail',
  linkTo: '/addcompanyDetail',
},
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* Map through items array */}
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {/* Render either a Link or a span based on the presence of linkTo */}
              {item.linkTo ? (
                <Link to={item.linkTo}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 64px)', // Subtract header height
            background: `url(${dashboardImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            // style={{
            //   padding: 24,
            //   minHeight: 360,
            //   background: colorBgContainer,
            //   borderRadius: borderRadiusLG,
            // }}
          >
            {/* Bill is a cat. */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

