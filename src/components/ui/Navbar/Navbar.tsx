"use client";
import { Layout, Menu, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const Navbar = ({
  items,
}: {
  items: { key: string; label: string; href: string }[];
}) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout className="layout">
      <Header className="flex items-center">
        <Content>
          <Link href="/">
            <Title className="m-0 text-white">Doctors Portal</Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
