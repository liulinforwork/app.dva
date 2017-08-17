import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Table } from 'antd';
import styles from './Quick.css';

const Quick = ({ quick }) => {
    const { list } = quick;

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
            <h2>快捷语列表</h2>
            <h2>{list}</h2>
            <p className={styles.info}>快捷语用于项目现场照片时填写不合格原因</p>
            <Button type="primary" style={{margin:20,marginLeft:0}}>添加快捷语</Button>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

Quick.propTypes = {
    quick: PropTypes.object,
}

export default connect(({ quick }) => ({ quick }))(Quick);
