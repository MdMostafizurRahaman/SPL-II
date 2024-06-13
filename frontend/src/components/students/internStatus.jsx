import React from 'react';
import { Modal, Typography } from 'antd';

const { Text } = Typography;

const InternStatus = ({ visible, onClose, modalText }) => {
  return (
    <Modal
      title="Information"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Text>Congratulations! you're allocted for {modalText} </Text>
    </Modal>
  );
};

export default InternStatus;
