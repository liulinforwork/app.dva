import React from 'react';

import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

import styles from './Sider.css';

class Sider extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div style={{ width: 240}}>

        <Menu
          defaultSelectedKeys={['1']}

          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>用户首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>员工管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>项目管理</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>快捷语管理</span></span>}>
            <Menu.Item key="5">快捷语库</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="pie-chart" />
            <span>我的账单</span>
          </Menu.Item>
          <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>操作员管理</span></span>}>
            <Menu.Item key="13">添加操作员</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>数据统计</span></span>}>
            <Menu.Item key="15">用户行为统计</Menu.Item>
          </SubMenu>
        </Menu>
          <Button type="primary" onClick={this.toggleCollapsed} className={styles.collapse}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>

      </div>
    );
  }
}

export default Sider;

// defaultOpenKeys={['sub1']}
