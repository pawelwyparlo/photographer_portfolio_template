"use client";

import { useState, useEffect } from "react";
import { Layout } from "antd";
import {
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { HeaderComponent } from "./components/HeaderComponent";

const { Content, Footer } = Layout;

const Page: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      {/* Header */}
      <HeaderComponent isMobile={isMobile} />

      {/* Content */}
      <Content style={{ marginTop: 64, padding: "0 50px" }}>
        {/* Placeholder for main content */}
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Your main content goes here
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        {/* Social Icons */}
        <span style={{ marginRight: 16 }}>
          <InstagramOutlined />
        </span>
        <span style={{ marginRight: 16 }}>
          <LinkedinOutlined />
        </span>
        <span style={{ marginRight: 16 }}>
          <FacebookOutlined />
        </span>

        {/* Logo */}
        <div style={{ color: "white", fontSize: "20px", display: "inline" }}>
          Your Logo
        </div>

        {/* Privacy Policy */}
        <span style={{ marginLeft: 16 }}>Polityka prywatności</span>
      </Footer>
    </Layout>
  );
};

export default Page;
