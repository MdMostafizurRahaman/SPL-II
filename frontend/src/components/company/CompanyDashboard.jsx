import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileOutlined,
  TeamOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import dashboardImage from '../../assets/dashboardIP.jpg';
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
 
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  {
    key: '1',
    icon: <FileOutlined />,
    label: 'Upload CV', 
    linkTo: '/upload', 
  },

{
  key: '2',
  icon: <UnorderedListOutlined />,
  label: 'Add Interviewers',
  linkTo: '/suggested-interns',
},

{
  key: '3',
  icon: <UnorderedListOutlined />,
  label: 'Add Interns',
  linkTo: '/add-interns',
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
       
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
         
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
          
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
            minHeight: 'calc(100vh - 64px)', 
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
          
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
