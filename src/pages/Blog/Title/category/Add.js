import { ModalForm, Field } from '@zhangyueqingyun_/react-components';

const { Text } = Field;

export default function Add() {
    function onOk(values) {
        console.log('values', values);
    }

    return <ModalForm
        trigger={<div className="op-icon">新建文件夹</div>}
        title="新建文件夹"
        onOk={onOk}
    
    >
        <Text name="title" label="文件夹名称" />
    </ModalForm>
}