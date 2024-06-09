import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import internImage from '../src/assets/home3.jpg';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/registration-type" className="btn btn-primary">Signup</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/login" className="btn btn-primary">Login</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<MenuFoldOutlined />}>
            <Link to="/about" className="btn btn-primary">About</Link>
          </Menu.Item>
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
            background: `url(${internImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ textAlign: 'center', color: 'black' }}>
            <Title level={2}>Welcome to </Title>
            <h1><b> Intern & Placement Office Management</b></h1>
            
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
