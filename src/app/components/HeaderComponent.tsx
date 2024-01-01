import { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { IconComponent } from "./IconComponent";

const { Header } = Layout;

interface HeaderComponentProps {
  isMobile: boolean;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isMobile,
}) => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const menuItems = (
    <Menu
      theme="dark"
      mode={isMobile ? "vertical" : "horizontal"}
      defaultSelectedKeys={["1"]}
    >
      <Menu.Item key="1">O mnie</Menu.Item>
      <Menu.Item key="2">Galeria</Menu.Item>
      <Menu.Item key="3">Kontakt</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", fontSize: "20px", marginRight: "auto" }}>
          <IconComponent imageName="logo" />
        </div>

        {isMobile ? (
          <Button
            type="primary"
            onClick={toggleDrawer}
            icon={<MenuOutlined />}
          />
        ) : (
          menuItems
        )}

        <Drawer
          placement="right"
          closable={false}
          onClose={toggleDrawer}
          visible={isMobile && drawerVisible}
        >
          {menuItems}
        </Drawer>
      </div>
    </Header>
  );
};
