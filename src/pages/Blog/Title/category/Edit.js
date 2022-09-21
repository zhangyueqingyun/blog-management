import { ModalForm, Field } from '@zhangyueqingyun_/react-components';

import { EditOutlined } from '@ant-design/icons';
const { Text } = Field;

export default function Edit({title, description}) {
    function onOk(values) {
        console.log('values', values);
    }

    return <ModalForm
        trigger={<EditOutlined />}
        title="编辑分类"
        onOk={onOk}
    
    >  
        <Text name="title" defaultValue={title} label="标题" />
    </ModalForm>
}