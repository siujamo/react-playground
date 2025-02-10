import { Layout } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { Outlet } from "react-router"
import "./index.scss"

export const DashboardLayout = () => {
  return (
    <Layout className="dashboard-wrapper">
      <Header className="dashboard-header">Header</Header>
      <Layout className="dashboard-content-wrapper">
        <Sider width="16%" className="dashboard-sidebar">Sider</Sider>
        <Content className="dashboard-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
