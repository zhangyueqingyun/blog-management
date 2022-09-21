import { useEffect, useState } from 'react';
import { Tree } from '@zhangyueqingyun_/react-components';
import Title from './Title';
import { getCategories } from '../../services/blog';
import { FolderFilled, FileOutlined, FolderOpenFilled } from '@ant-design/icons';

import './index.css'

export default function BlogPage () {
    const [treeData, setTreeData] = useState();

    async function fetch(node) {
        return getTreeData(node.id);
    }

    async function initTreeData() {
        const data = await getTreeData(-1);
        setTreeData([{key: 'all', title: <Title id={-1} type='all' title='全部' />, children: data, open: true}]);
    }

    useEffect(function () {
        initTreeData()
    }, [])

    return (<div className="blog-page">{treeData &&<> 
            <div className="page-title">博客管理</div>
            <div className="page-content">
                <Tree treeData={treeData} fetch={fetch}></Tree>
            </div>
        
        </>
    }</div>)
}

async function getTreeData (id) {
    const categories = await getCategories(id);
    for(let category of categories) {
        category.key = category.id;
        category.isLeaf = category.type === 'blog'
        category.icon = ({open}) => {
            if(category.type === 'blog') {
                return <FileOutlined />
            } else {
                return open ? <FolderOpenFilled /> : <FolderFilled />
            }
        }
        category.title = <Title
            id={category.id} 
            title={category.name} 
            description={category.description} 
            type={category.type}
            open={category.open}
        />;
    }
    return categories;
}