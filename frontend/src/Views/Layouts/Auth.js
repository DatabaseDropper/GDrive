import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { authLogout } from './../../Actions'

import { Layout, Button, Space, Typography, Row, Col } from 'antd';
import { PoweroffOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import Component_Text_Align from './../Components/Text/Align'

class Layout_Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {siderCollapsed: (window.screen.width < 700 ? true : false)};

        this.handleLogout = this.handleLogout.bind(this);
        this.handleToggleSider = this.handleToggleSider.bind(this);
    }

    handleLogout() {
        this.props.authLogout();
        this.props.history.push('/');
    }

    handleToggleSider() {
        this.setState({siderCollapsed: !this.state.siderCollapsed});
    }

    render() {
        return (
            <Layout className="layout" style={{minHeight: '100vh'}}>
                <Layout.Header style={{ padding: '0 20px' }}>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <img src="/logo-poziome-biale.png" alt="Cloud Drive" />
                        </Col>
                        <Col>
                            <Button type="" shape="circle" icon={(this.state.siderCollapsed ?  <MenuFoldOutlined /> : <MenuUnfoldOutlined />)} size="large" onClick={this.handleToggleSider} />
                        </Col>
                    </Row>
                </Layout.Header>
                <Layout style={{background: '#ffffff'}}>
                    <Layout.Content style={{ padding: '20px' }}>
                        {this.props.children}
                    </Layout.Content>
                    <Layout.Sider collapsed={this.state.siderCollapsed} collapsedWidth={0} theme="light" style={{borderLeft: '1px solid #f0f2f5'}}>
                        <Component_Text_Align.Center>
                            <div style={{padding: '20px'}}>
                                <Space direction="vertical">
                                    <Typography.Paragraph>
                                        <Button type="primary" shape="circle" icon={<PoweroffOutlined />} size="large" onClick={this.handleLogout} />
                                    </Typography.Paragraph>
                                    <Typography.Paragraph>
                                        {this.props.state.get('authData').id}
                                    </Typography.Paragraph>
                                </Space>
                            </div>
                        </Component_Text_Align.Center>
                    </Layout.Sider>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    authLogout: bindActionCreators(authLogout, dispatch)
});
  
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout_Auth));