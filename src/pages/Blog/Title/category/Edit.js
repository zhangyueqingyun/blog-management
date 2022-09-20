import { ModalForm, Field } from '@zhangyueqingyun_/react-components';

const { Text } = Field;

export default function Edit({title, description}) {
    function onOk(values) {
        console.log('values', values);
    }

    return <ModalForm
        trigger={<div className="op-icon">编辑</div>}
        title="编辑文件夹信息"
        onOk={onOk}
    
    >  
        <Text name="title" defaultValue={title} label="文件夹名称" />
    </ModalForm>
}