import React from 'react';
import { List, Typography, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const companies = [
  { name: 'Cefalo', id: 'cefalo' },
  { name: 'Brain Station', id: 'brain-station' },
  { name: 'Samsung', id: 'samsung' },
  { name: 'a2i', id: 'a2i' },
  // Add more companies as needed
];

const CompanyList = () => {
  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ width: '50%', padding: '24px', background: '#fff', borderRadius: '8px' }}>
        <Title level={2}>Company List</Title>
        <List
          bordered
          dataSource={companies}
          renderItem={item => (
            <List.Item>
              <Link to={`/company/${item.id}`}>{item.name}</Link>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default CompanyList;
