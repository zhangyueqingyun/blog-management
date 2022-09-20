import { ModalForm, Field, Button, Toast } from '@zhangyueqingyun_/react-components';
import { uploadBlog } from '../../../../utils/oss';

const {Upload, Text} = Field;

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
        trigger={<div className="op-icon">新增博客</div>}
        title="新增博客"
        onOk={onOk}
    
    >
        <Upload name="ossPath" upload={upload}>
            <Button type="primary">上传博客</Button>
        </Upload>   
        <Text name="title" label="博客名称" />
        <Text name="description" label="博客描述" />
    </ModalForm>
}