import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined,
  UploadOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import dashboardImage from '../../assets/dashboardSt2.png';
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
 
  {
    key: '1',
    icon: <FileOutlined />,
    label: 'Upload CV', // Change the label to 'Upload'
    linkTo: '/upload', 
  },

{
  key: '2',
  icon: <UploadOutlined />,
  label: 'Upload CGPA & Skills',
  linkTo: '/uploadCgpaAndSkills',
},

{
  key: '3',
  icon: < UnorderedListOutlined />,
  label: 'Company List',
  linkTo: '/companyList',
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

