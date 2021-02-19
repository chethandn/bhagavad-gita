import React from "react";
import { Menu } from "antd";
import Title from "antd/lib/typography/Title";

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Title>Bhagavad Gita</Title>
      </Menu.Item>
      <div className="nav-items">
        <Menu.Item>
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/chapters">Chapters</a>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Navbar;
