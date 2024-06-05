import React, { useState } from 'react';
import { Form, Input, Button, List, Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const AddCompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setCompanies([...companies, values.companyName]);
    form.resetFields();
  };

  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ width: '50%', padding: '24px', background: '#fff', borderRadius: '8px' }}>
        <Title level={2}>Add Company List</Title>
        <Form form={form} name="add_company_list" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[{ required: true, message: 'Please input the company name!' }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Add Company
            </Button>
          </Form.Item>
        </Form>
        <List
          bordered
          dataSource={companies}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Content>
    </Layout>
  );
};

export default AddCompanyList;
