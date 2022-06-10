import React from 'react';
import {Divider, Box, Header, List} from '@fluentui/react-northstar';
import {sidebarProps} from './sidebar.config';

export default function Sidebar() {
  return (
    <Box
      style={{
        paddingLeft: 24,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="sidebar"
    >
      <Box>
        <Header content="Settings" style={{marginTop: 0}} />
      </Box>
      <Divider />
      <Box style={{marginTop: 24}}>
        <List items={sidebarProps} />
      </Box>
    </Box>
  );
}
