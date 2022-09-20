import React, {useState} from 'react';
import { Card, Form, Button, Field, Toast, Space } from '@zhangyueqingyun_/react-components';
import {login} from '../../services/login';
import { SESSION_STORAGE } from '../../utils/storage';
import './index.css';

function Actions({getValues}) {
    const [loading, setLoading] = useState(false);

    async function onClick() {
        setLoading(true);
        const user = getValues();
        const {access_token} = await login(user);
        sessionStorage[SESSION_STORAGE.ACCESS_TOKEN] = access_token;
        Toast.success('登陆成功');
        setLoading(false);
        setTimeout(function() {
            window.location.href = '/blog';
        }, 2000);
        return
    }

    return <div className="actions">
        <Button loading={loading} onClick={onClick} type="primary">
            登录
        </Button>
    </div>
}

const {Text, Password} = Field;

export default function LoginPage () {
    return <div className="container">
        <Card title={<Space interval={12}>
                <img 
                    src="https://zblog-images.oss-cn-hangzhou.aliyuncs.com/avatar.jpeg" 
                    alt="logo" 
                    width={25}
                    height={25}
                />
                博客管理系统
            </Space>}
        > 
            <Form actions={<Actions />}>
                <Text label="账号" name="username" placeholder="用户名"/>
                <Password label="密码" name="password" placeholder="密码"/>
            </Form>
        </Card></div>
}