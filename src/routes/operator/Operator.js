import React from 'react';
import { Button, Table } from 'antd';
import styles from './Operator.css'

const Operator = () => {
    const dataSource = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '3',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '5',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }, {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '8',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '9',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '10',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '11',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }];

    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }];



    return (
        <div>
            <Button type="primary" className={styles.create}>创建账号</Button>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default Operator;
