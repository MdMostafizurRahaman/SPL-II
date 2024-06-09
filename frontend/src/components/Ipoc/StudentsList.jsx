import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Menu, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { viewStudentList } from '../../api/ipoc.api';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isCompanyDropdownVisible, setIsCompanyDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await viewStudentList();
        setStudents(response);
      } catch (error) {
        console.error("Failed to fetch student list:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleReferClick = (student) => {
    setSelectedStudent(student);
    setIsCompanyDropdownVisible(true);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Roll',
      dataIndex: 'roll',
      key: 'roll',
    },
    {
      title: 'Session',
      dataIndex: 'session',
      key: 'session',
    },
    {
      title: 'CGPA',
      dataIndex: 'cgpa',
      key: 'cgpa',
    },
    {
      title: 'Skills',
      dataIndex: 'skills',
      key: 'skills',
      render: (skills) => skills.join(', '),
    },
    {
      title: 'Preferred Companies',
      dataIndex: 'preferred_companies',
      key: 'preferred_companies',
      render: (preferredCompanies) => preferredCompanies.join(', '),
    },
    {
      title: 'Suggested Companies',
      dataIndex: 'suggested_companies',
      key: 'suggested_companies',
      render: (suggestedCompanies) => (
        <ul>
          {suggestedCompanies.map((company) => (
            <li key={company._id}>{company.name}</li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Call for Interview',
      dataIndex: 'call_for_interview',
      key: 'call_for_interview',
      render: (callForInterview) => callForInterview.join(', '),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => handleReferClick(record)}>Edit</Menu.Item>
            </Menu>
          }
        >
          <Button shape="circle" icon={<EllipsisOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="p-4">
      <Table
        columns={columns}
        dataSource={students}
        rowKey="_id"
        className="shadow-lg rounded-md"
      />
    </div>
  );
};

export default StudentList;
