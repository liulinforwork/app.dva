import React from 'react';
import { Select, Input, Button, Table } from 'antd';



const List = () => {

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

    const Option = Select.Option;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (

        <div>
            <div style={{marginBottom:20}}>
                工程阶段:&nbsp;&nbsp;&nbsp;
                <Select defaultValue="lucy" style={{ width: 120, marginRight:10 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                是否公开:&nbsp;&nbsp;&nbsp;
                <Select defaultValue="lucy" style={{ width: 120, marginRight:10 }} allowClear>
                    <Option value="lucy">Lucy</Option>
                </Select>

                <Select defaultValue="lucy" style={{ width: 120, marginRight:10 }} allowClear>
                    <Option value="lucy">Lucy</Option>
                </Select>

                <Input placeholder="请输入员工部门" style={{width:150, marginRight:20}}/>
                <Button type="primary" style={{marginRight:10}}>查询</Button>
                <Button type="primary">新增</Button>
            </div>

            <Table dataSource={dataSource} columns={columns} />
        </div>

    )
}

export default List;
