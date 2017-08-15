import React from 'react';
import { Table, Card } from 'antd';
import Daterange from '../../components/common/Daterange'
import styles from './Bill.css';


const Bill = () => {

    const dataSource = [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    },{
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
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '6',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '8',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '9',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '10',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '11',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    },{
        key: '12',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        key: '13',
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
            <Card noHovering={true} title="我的账户" style={{ width: '100%',marginBottom:20 }}>
                <h2>当前余额: <span>24</span></h2>
                <h4>已支付余额: <span>20</span></h4>
            </Card>
            <Daterange />
            <Table dataSource={dataSource} columns={columns} className={styles.table}/>
        </div>
    )
}

export default Bill;