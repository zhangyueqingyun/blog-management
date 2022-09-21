import { ModalForm, Field } from '@zhangyueqingyun_/react-components';
import { PlusCircleOutlined } from '@ant-design/icons'
const { Text } = Field;

export default function Add() {
    function onOk(values) {
        console.log('values', values);
    }

    return <ModalForm
        trigger={<PlusCircleOutlined />}
        title="新建分类"
        onOk={onOk}
    
    >
        <Text name="title" label="标题" />
    </ModalForm>
}