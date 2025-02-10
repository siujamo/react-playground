import { Button, Layout, Menu } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { Outlet } from "react-router"
import "./index.scss"
import menuItems from "./menu-items.ts"

export const DashboardLayout = () => {
  return (
    <Layout className="dashboard-wrapper">
      <Header className="dashboard-header">Header</Header>
      <Layout className="dashboard-content-wrapper">
        <Sider width="20%" className="dashboard-sidebar-wrapper">
          <div className="dashboard-sidebar">
            <Menu items={menuItems} onClick={({key}) => console.log(key)}/>
            <div className="dashboard-sidebar-buttons">
              <Button onClick={() => alert("我要加入账本！")}>加入账本</Button>
              <Button onClick={() => alert("我要创建账本！")}>创建账本</Button>
            </div>
          </div>
        </Sider>
        <Content className="dashboard-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
