import { Spin } from 'antd';
import React from 'react';

const CustomSpin: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default CustomSpin;
