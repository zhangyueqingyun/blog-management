import { ModalForm, Field } from '@zhangyueqingyun_/react-components';

const { Text } = Field;

export default function Edit({title, description}) {
    function onOk(values) {
        console.log('values', values);
    }

    return <ModalForm
        trigger={<div className="op-icon">编辑博客</div>}
        title="编辑博客"
        onOk={onOk}
    
    >  
        <Text name="title" defaultValue={title} label="博客名称" />
        <Text name="description" defaultValue={description} label="博客描述" />
    </ModalForm>
}