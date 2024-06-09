import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import { getStudentBYID } from '../../api/student.api';
import { findCompanyManagerById } from '../../api/company.api';
import { Link, useNavigate } from 'react-router-dom';

const SuggestedStudentsTable = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const res = await findCompanyManagerById('666319381bd1d2ed39c36e69');
                const studentIds = res.company.suggested_students;

                const studentsData = await Promise.all(studentIds.map(async id => {
                    const studentRes = await getStudentBYID(id);
                    return { id, name: studentRes.data.name };
                }));

                setStudents(studentsData);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleAddInterViews = (id) => {
        console.log('Interview call for meeeeeeeeee:', id);
        navigate(`/add-interns/${id}`);
        // Add your edit logic here
    };

    const handleAdd = (id, name) => {
        console.log('Add:', id, name);
        // Add your add logic here
    };

    const columns = [
        {
            title: 'Student Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button onClick={() => handleAddInterViews(record.id)} style={{ marginRight: '8px' }}>Add for interview</Button>
                    <Button onClick={() => handleAdd(record.id, record.name)}>Add as intern</Button>
                </div>
            ),
        },
    ];

    const dataSource = students.map((student, index) => ({
        key: index,
        id: student.id,
        name: student.name,
    }));

    return (
        <div>
            <h2>Suggested Students</h2>
            <Table columns={columns} dataSource={dataSource} loading={loading} pagination={false} />
        </div>
    );
};

export default SuggestedStudentsTable;
