import React from 'react';
import { Row, Col } from 'antd';
import { type EngineOption } from '../../data/engines';
import { OptionCard } from './OptionCard';

interface OptionGridProps {
    options: EngineOption[];
    categoryId: string;
}

export const OptionGrid: React.FC<OptionGridProps> = ({ options, categoryId }) => {
    return (
        <Row gutter={[16, 16]}>
            {options.map((option, index) => (
                <Col xs={12} sm={8} md={6} lg={6} key={`${option.label}-${index}`}>
                    <OptionCard option={option} categoryId={categoryId} />
                </Col>
            ))}
        </Row>
    );
};
