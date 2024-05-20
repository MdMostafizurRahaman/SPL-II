// import React from 'react'

// function Home(){

//     return(
//         <h2>Home Component</h2>
//     )
// }
// export default Home;


import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link } from 'react-router-dom'; // Import Link
import internImage from './Home.png'; // Import the image
const { Header, Sider, Content } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/registration-type" className="btn btn-primary">Signup</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </Menu.Item>
          {/* <Menu.Item key="2" icon={<DashboardOutlined />}>
            <Link to="/StudentDashboard">Student Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DashboardOutlined />}>
            <Link to="/IpocDashboard">Ipoc Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<DashboardOutlined />}>
            <Link to="/CompanyDashboard">Company Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            <Link to="/Upload">Upload Resume</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<DashboardOutlined />}>
            <Link to="/Stu_dashboard">StudentDashboard</Link>
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content 
        style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'calc(100vh - 64px)',
              background: `url(${internImage})`, // Set the background image
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
        }} >
          {/* Your content */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
