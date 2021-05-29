import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Actions</span>}>
      <MenuItemGroup title="Quick Actions">
        <Menu.Item key="mail1">
          <a href="/createJobs">Create New Job</a>
        </Menu.Item>
        <Menu.Item key="mail1">
          <a href="/Profile">Profile</a>
        </Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu