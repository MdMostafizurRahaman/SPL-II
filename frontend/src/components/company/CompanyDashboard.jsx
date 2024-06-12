import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileOutlined,
  UnorderedListOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';
import dashboardImage from '../../assets/dashboardIP.jpg';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const items = [
  // {
  //   key: '1',
  //   icon: <FileOutlined />,
  //   label: 'Upload CV',
  //   linkTo: '/upload',
  // },
  {
    key: '2',
    icon: <UnorderedListOutlined />,
    label: 'View Suggested Students',
    linkTo: '/suggested-interns',
  },
  {
    key: '3',
    icon: <LogoutOutlined />,
    label: 'Logout',
    linkTo: '/logout',
  },
];

const CompanyDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('userType');
    if (user === 'student' || user === 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Redirect to login page
    navigate('/login');
  };

  const boxStyle = {
    padding: '40px',
    backgroundColor: '#34495e',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    color: '#ecf0f1',
    maxWidth: '600px', // Limiting box width for a smaller size
    margin: 'auto', // Center align the box horizontally
    marginTop: '250px', // Provide some top margin for better spacing
    maxHeight: '300px', // Limiting box height to prevent it from being too tall
    overflow: 'auto', // Adding scroll bar if content exceeds height
  };

  const textStyle = {
    fontSize: '36px',
    fontFamily: 'Pacifico, cursive',
    color: '#ecf0f1',
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} onClick={item.key === '3' ? handleLogout : null}>
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
        <Header style={{ padding: 0 }} />
        <Content
          style={{
            ...boxStyle,
            background: `url(${dashboardImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Title level={3} style={textStyle}>Dear company authority,</Title>
          <p style={{ fontSize: '16px', color: '#ecf0f1' }}>
            Welcome to your dashboard. Here you can view the suggested students for the interview according to IPOC,
            and from those students, you can take all or some of them as interns for your company.
          </p>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#1c2833', color: '#ecf0f1' }}>IPOM</Footer>
      </Layout>
    </Layout>
  );
};

export default CompanyDashboard;