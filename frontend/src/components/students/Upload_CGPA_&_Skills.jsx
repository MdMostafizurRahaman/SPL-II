import React from 'react';
import { Form, Input, Button, Select, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Option } = Select;

const UploadCGPAAndSkillset = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Assign useNavigate to a variable

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate('/Stu_dashboard'); // Use navigate function here
  };

  const validateCGPA = (_, value) => {
    if (value && value > 4.0) {
      return Promise.reject(new Error('CGPA must not be more than 4.00'));
    }
    return Promise.resolve();
  };

  return (
    <Layout style={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Content style={{ width: '50%', padding: '24px', background: '#fff', borderRadius: '8px' }}>
        <Form
          form={form}
          name="upload_cgpa_and_skillset"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ skills: [] }}
        >
          <Form.Item
            name="cgpa"
            label="CGPA"
            rules={[
              { required: true, message: 'Please input your CGPA!' },
              { validator: validateCGPA },
            ]}
          >
            <Input placeholder="Enter your CGPA" type="number" step="0.01" />
          </Form.Item>
          <Form.Item
            name="skills"
            label="Skillset"
            rules={[{ required: true, message: 'Please select your skillset!' }]}
          >
            <Select
              mode="multiple"
              placeholder="Select your skills"
              style={{ width: '100%' }}
            >
              <Option value="React">React</Option>
              <Option value="JavaScript">JavaScript</Option>
              <Option value="CSS">CSS</Option>
              <Option value="HTML">HTML</Option>
              <Option value="Node.js">Node.js</Option>
              <Option value="Python">Python</Option>
              <Option value="Java">Java</Option>
              <Option value="C">C</Option>
              <Option value="C++">C++</Option>
              <Option value="C#">C#</Option>
              <Option value="MongoDb">MongoDb</Option>
              <Option value="Mysql">Mysql</Option>
              <Option value="Express.js">Express.js</Option>
              <Option value="PHP">PHP</Option>
              <Option value="Angular">Angular</Option>
              <Option value="TypeScript">TypeScript</Option>
              <Option value="Vue.js">Vue.js</Option>
              <Option value="Kotlin">Kotlin</Option>
              <Option value="Laravel">Laravel</Option>
              
              {/* Add more skills as needed */}
            </Select>
          </Form.Item>

          <Form.Item
            name="preferredCompanies"
            label="Preferred Company"
            rules={[{ required: true, message: 'Please select your preferred companies!' }]}
          >
            <Select
              mode="multiple"
              placeholder="Select your preferred companies"
              style={{ width: '100%' }}
            >
              <Option value="Cefalo">Cefalo</Option>
              <Option value="Brain Station 23">Brain Station 23</Option>
              <Option value="Samsung">Samsung</Option>
              <Option value="a2i">a2i</Option>
              {/* Add more companies as needed */}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default UploadCGPAAndSkillset;
