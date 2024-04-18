import React from 'react';
import { Card, Col, Row } from 'antd';
const Reviews = () => (
  <Row gutter={16}>
    <Col span={8}>
      <div className='mx-10'>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      </div>
    </Col>
    <Col span={8}>
    <div className='mx-10'>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      </div>
    </Col>
    <Col span={8}>
    <div className='mx-10'>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      </div>
    </Col>
  </Row>
);
export default Reviews;