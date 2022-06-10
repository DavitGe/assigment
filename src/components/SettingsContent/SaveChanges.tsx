import React from 'react';

import {Box, Button} from '@fluentui/react-northstar';

export default function SaveChanges() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 48,
        right: 64,
      }}
    >
      <Button content="Discard" tinted style={{marginRight: 24}} />
      <Button content="Save" primary />
    </Box>
  );
}
