import { useEffect, useState } from 'react';
import {Tree} from '@zhangyueqingyun_/react-components';
import { getCategories } from '../../services/blog';

export default function BlogPage () {
    const [treeData, setTreeData] = useState();

    async function fetch(node) {
        return getTreeData(node.id);
    }

    async function initTreeData() {
        const data = await getTreeData(-1);
        setTreeData(data);
    }

    useEffect(function () {
        initTreeData()
    }, [])

    return (<>{treeData && <Tree treeData={treeData} fetch={fetch}></Tree>}</>)
}

async function getTreeData (id) {
    const categories = await getCategories(id);
    for(let category of categories) {
        category.key = category.id;
        category.title = category.name;
    }
    return categories;
}