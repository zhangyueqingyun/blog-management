import { useEffect, useState, useRef } from 'react';
import { Tree } from '@zhangyueqingyun_/react-components';
import Title from './Title';
import { getCategories } from '../../services/blog';
import { FolderFilled, FileOutlined, FolderOpenFilled } from '@ant-design/icons';

import { TreeContext } from './context';

import './index.css'

export default function BlogPage () {
    const [treeData, setTreeData] = useState();
    const ref = useRef();

    async function refetch(node) {
        ref?.current?.refetch(node);
    }

    async function fetch(node) {
        return getTreeData(node.id);
    }

    async function initTreeData() {
        const data = await getTreeData(-1);
        setTreeData([{id: -1, key: -1, title: <Title data={{id: -1, type: 'all', title: '全部'}} />, children: data, open: true}]);
    }

    useEffect(function () {
        initTreeData()
    }, [])

    return (<div className="blog-page">{treeData &&<> 
        <div className="page-title">博客管理</div>
        <div className="page-content">
            <TreeContext.Provider value={{refetch}}>
                <Tree ref={ref} treeData={treeData} fetch={fetch}></Tree>
            </TreeContext.Provider>
        </div>    
    </>}</div>)
}

async function getTreeData (id, refetch) {
    const categories = await getCategories(id);
    for(let category of categories) {
        const data = {...category, parentId: id};
        category.data = data;
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
            data={data}
        />;
    }
    return categories;
}