import { ModalForm, Field, Button, Toast } from '@zhangyueqingyun_/react-components';
import { uploadBlog } from '../../../../utils/oss';
import { PlusCircleFilled } from '@ant-design/icons'

import { useContext, useState } from 'react';
import { TitleContext } from '../context';
import { addBlog } from '../../../../services/blog';
import { getNowDatetime } from '../../../../utils/datatime';
import { TreeContext } from '../../context';

const { Upload, Text, TextArea } = Field;

export default function Add() {
    const {data: {id: categoryId}} = useContext(TitleContext);
    const {refetch} = useContext(TreeContext);
    const [file, setFile] = useState();

    async function onOk(values) {
        await addBlog({...values, categoryId, datatime: getNowDatetime()});
        refetch({key: categoryId});
        Toast.success('新增成功');
        return true;
    }

    async function upload(files) {
        const file = files[0];
        console.log('file', file)
        await uploadBlog(file);
        Toast.success('上传成功');
        setFile(file);
        return file.name;
    }

    return <ModalForm
        trigger={<PlusCircleFilled />}
        title="新增博客"
        onOk={onOk}
    
    >
        <Upload label="文件" name="ossPath" upload={upload} uploadResult={<span style={{marginLeft: 10}}>{file?.name}</span>}>
            <Button type="primary">上传博客</Button>
        </Upload>   
        <Text name="title" label="名称" />
        <TextArea name="description" label="描述" />
    </ModalForm>
}