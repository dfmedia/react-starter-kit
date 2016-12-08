import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

import './style.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: true };

    this.onCollapseChange = this.onCollapseChange.bind(this);
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const collapse = this.state.collapse;

    return (
      <div className={collapse ? 'ant-layout-aside ant-layout-aside-collapse' : 'ant-layout-aside'}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo">Logo</div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['articles']}>
            <Menu.Item key="articles">
              <Link to="/articles"><Icon type="laptop" />
                {!collapse && <span className="nav-text">Articles</span>}
              </Link>
            </Menu.Item>
            <Menu.Item key="setting">
              <Link to="/settings">
                <Icon type="setting" />
                {!collapse && <span className="nav-text">Settings</span>}
              </Link>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-main" style={{ background: '#eaeaea' }}>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            Digital First Media ©2016
          </div>
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.any,
};

export default Layout;
