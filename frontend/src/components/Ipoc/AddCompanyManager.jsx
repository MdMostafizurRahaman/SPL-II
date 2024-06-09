import React, { useState } from 'react';
import { Form, Input, Button, Layout, Typography } from 'antd';
import { addCompanyManager } from '../../api/ipoc.api';

const { Content } = Layout;
const { Title } = Typography;

const AddCompanyList = () => {
  const [form] = Form.useForm();
  const [companies, setCompanies] = useState([]);

  const onFinish = async (values) => {
    try {
      const response = await addCompanyManager(values);
      console.log(response);
      setCompanies([...companies, values]);
      form.resetFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#283c4f', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ width: '50%', padding: '24px', background: '#f0f2f5', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '24px', color: '#1890ff' }}>Add Company Manager</Title>
        <Form form={form} name="add_company_list" onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input the email!' }]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item
            name="companyName"
            label="Company Name"
            rules={[{ required: true, message: 'Please input the company name!' }]}
          >
            <Input placeholder="Enter company name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Add Company Manager
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default AddCompanyList;
