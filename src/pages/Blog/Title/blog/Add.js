import { ModalForm, Field, Button, Toast } from '@zhangyueqingyun_/react-components';
import { uploadBlog } from '../../../../utils/oss';
import { PlusCircleFilled } from '@ant-design/icons'

const {Upload, Text, TextArea} = Field;

export default function Add() {
    function onOk(values) {
        console.log('values', values);
    }

    async function upload(files) {
        const file = files[0];
        await uploadBlog(file);
        Toast.success('上传成功');
        return file.name;
    }

    return <ModalForm
        trigger={<PlusCircleFilled />}
        title="新增博客"
        onOk={onOk}
    
    >
        <Upload label="文件" name="ossPath" upload={upload}>
            <Button type="primary">上传博客</Button>
        </Upload>   
        <Text name="title" label="名称" />
        <TextArea name="description" label="描述" />
    </ModalForm>
}