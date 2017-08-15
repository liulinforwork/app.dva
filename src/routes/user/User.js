import React from 'react';
import EditableTagGroup from '../../components/common/EditableTagGroup';
import { Table, Select, Input, Button } from 'antd';


const User = () => {

    const Option = Select.Option;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

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
            <EditableTagGroup />
            <p>职位用于定义项目中成员的角色，职位名称可修改，新增的职位可删除。默认职位用户可在APP端发布项目现场照片</p>

            <br/>

            <EditableTagGroup />
            <p>部门用于员工数据分类，方便管理</p>

            <div style={{margin:20, marginLeft:0}}>
                <Select defaultValue="lucy" style={{ width: 120, marginRight:10 }} onChange={handleChange}>
                    <Option value="jack">监工</Option>
                    <Option value="lucy">设计师</Option>
                    <Option value="Yiminghe">工程师</Option>
                </Select>
                <Select defaultValue="lucy" style={{ width: 120,marginRight:20  }} allowClear>
                    <Option value="lucy">施工部</Option>
                </Select>
                <Input placeholder="请输入员工部门" style={{width:150, marginRight:20}}/>
                <Button type="primary">查询</Button>
            </div>

            <Table dataSource={dataSource} columns={columns} />

        </div>
    )
}

export default User;