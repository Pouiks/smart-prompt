import React from 'react';
import { Card, Typography, Tooltip } from 'antd';
import { LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { type EngineOption } from '../../data/engines';
import { usePromptBuilder } from '../../context/PromptContext';

const { Text } = Typography;

interface OptionCardProps {
    option: EngineOption;
    categoryId: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({ option, categoryId }) => {
    const { isOptionSelected, toggleOption, isPremiumUser } = usePromptBuilder();

    const isSelected = isOptionSelected(option, categoryId);
    const isLocked = option.type === 'premium' && !isPremiumUser;

    return (
        <Tooltip title={option.description || option.label} mouseEnterDelay={0.5}>
            <Card
                hoverable={!isLocked}
                size="small"
                onClick={() => !isLocked && toggleOption(option, categoryId)}
                style={{
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    borderColor: isSelected ? '#eb2f96' : isLocked ? '#303030' : '#303030',
                    backgroundColor: isSelected ? 'rgba(235, 47, 150, 0.15)' : isLocked ? '#1f1f1f' : '#1f1f1f',
                    opacity: isLocked ? 0.5 : 1,
                    transition: 'all 0.2s',
                    borderWidth: isSelected ? '2px' : '1px'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text strong={isSelected} ellipsis style={{ color: isSelected ? '#eb2f96' : undefined, maxWidth: isLocked ? '80%' : '90%' }}>
                        {option.label}
                    </Text>

                    {isLocked && <LockOutlined style={{ color: '#faad14' }} />}
                    {isSelected && <CheckCircleOutlined style={{ color: '#1890ff' }} />}
                </div>

                {!isLocked && (
                    <div style={{ marginTop: 8, fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)' }}>
                        {option.description && option.description.length > 40 ? option.description.substring(0, 40) + '...' : option.description}
                    </div>
                )}
            </Card>
        </Tooltip>
    );
};
