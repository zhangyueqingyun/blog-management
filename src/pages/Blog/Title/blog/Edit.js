import { ModalForm, Field } from '@zhangyueqingyun_/react-components';
import { EditFilled } from '@ant-design/icons';

const { Text, TextArea } = Field;

export default function Edit({title, description}) {
    function onOk(values) {
        console.log('values', values);
    }

    return <ModalForm
        trigger={<EditFilled />}
        title="编辑博客"
        onOk={onOk}
    
    >  
        <Text name="title" defaultValue={title} label="博客名称" />
        <TextArea name="description" defaultValue={description} label="博客描述" />
    </ModalForm>
}