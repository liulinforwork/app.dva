import React, {Component} from 'react';
// import PropTypes from 'prop-types'
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router'
import styles from './App.css';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer} = Layout;
// <div className="logo" />
const App = ({children}) => {
  return (
      <Layout>

        <Header className="header">
          <span style={{ color: '#fff', fontSize:20 }}>@ 纯属测试后台管理系统</span>

        </Header>

        <Layout>

          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                theme="dark"
                style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">
                <Link to={'/main'}><Icon type="mail" />用户首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/user'}><Icon type="user" />员工管理</Link>
              </Menu.Item>

              <SubMenu key="3" title={<span><Icon type="laptop" />项目管理</span>}>
                <Menu.Item key="31">
                  <Link to={'/project/list'}>项目列表</Link>
                </Menu.Item>
                <Menu.Item key="32">
                  <Link to={'/project/examine'}>项目审核</Link>
                </Menu.Item>
                <Menu.Item key="33">
                  <Link to={'/project/open'}>项目公开</Link>
                </Menu.Item>
              </SubMenu>

              <Menu.Item key="4">
                <Link to={'/quick'}><Icon type="notification" />快捷语管理</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to={'/bill'}><Icon type="mail" />我的账单</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to={'/operator'}><Icon type="mail" />操作员管理</Link>
              </Menu.Item>

              <SubMenu key="7" title={<span><Icon type="notification" />数据统计</span>}>
                <Menu.Item key="71">
                  <Link to={'/statistics/project'}>项目统计</Link>
                </Menu.Item>
                <Menu.Item key="72">
                  <Link to={'/statistics/dynamic'}>动态统计</Link>
                </Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>

          <Layout style={{ padding: '0 24px 24px' }}>

            <Content style={{ background: '#fff', padding: 24, margin: '24px 0', minHeight: 750}}>
              {children}
            </Content>
            <Footer style={{ textAlign: 'center', padding:0 }}>
              MDRK ©2016 Created by 马丁洛克网络科技有限公司
            </Footer>
          </Layout>

        </Layout>

      </Layout>
  );
}


App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
