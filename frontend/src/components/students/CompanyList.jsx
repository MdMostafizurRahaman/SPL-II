import React, { useEffect, useState } from 'react';
import { Table, Typography, Layout } from 'antd';
import { showCompany } from '../../api/student.api';


const { Content } = Layout;
const { Title } = Typography;

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanyList = async () => {
      try {
        const response = await showCompany();
        setCompanies(response.data);
      } catch (error) {
        console.error("Failed to fetch company list:", error);
      }
    };

    fetchCompanyList();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: 'id',
      render: (text) => <span style={{ color: '#66fcf1' }}>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <span style={{ color: '#45a29e' }}>{text}</span>,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#1f2833', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ width: '70%', padding: '24px', background: '#0b0c10', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
        <Title level={2} style={{ color: '#66fcf1', textAlign: 'center', marginBottom: '24px' }}>Company List</Title>
        <Table
          columns={columns}
          dataSource={companies}
          rowKey="_id"
          pagination={false}
          style={{ background: '#1f2833' }}
          bordered
          rowClassName={(record, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}
        />
      </Content>
      <style jsx>{`
        .even-row {
          background-color: #1f2833;
        }
        .odd-row {
          background-color: #0b0c10;
        }
        .ant-table-thead > tr > th {
          background-color: #0b0c10;
          color: #66fcf1;
        }
        .ant-table {
          background-color: transparent;
        }
      `}</style>
    </Layout>
  );
};

export default CompanyList;
