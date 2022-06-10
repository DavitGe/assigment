import React from 'react';
import {Box, Divider} from '@fluentui/react-northstar';
import SettingsContent from '../components/SettingsContent';
import Sidebar from '../components/Sidebar';

export default function Settings() {
  return (
    <Box style={{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <Box style={{marginTop: 12, marginBottom: 12}}>
        <Divider vertical size={1} />
      </Box>
      <SettingsContent />
    </Box>
  );
}
