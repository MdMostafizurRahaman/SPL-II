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
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to="/Signup">Signup</Link>, // Link to Signup.jsx
              },
              {
                key: '2',
                icon: <DashboardOutlined />,
                label: <Link to="/StudentDashboard">Student Dashboard</Link>,
              },

              {
                key: '2',
                icon: <DashboardOutlined />,
                label: <Link to="/IpocDashboard">Ipoc Dashboard</Link>,
              },

              {
                key: '2',
                icon: <DashboardOutlined />,
                label: <Link to="/CompanyDashboard">Company Dashboard</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: <Link to="/Upload">Upload Resume</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
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
              minHeight: 'calc(100vh - 64px)', // Subtract header height
              background: `url(${internImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <div style={{ textAlign: 'center', color: 'revert-layer'}}>
              <h1>Welcome to Inten & Placement Office Management</h1>
            </div> */}
          </Content>
        </Layout>
      </Layout>
    );
}
  
export default Home;
