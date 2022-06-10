import React from 'react';
import {Box, Header, List} from '@fluentui/react-northstar';

import {info as infoType} from '../../interfaces';

interface props {
  info: infoType[];
}

export default function InfoBox({info}: props) {
  return (
    <Box className="infoBox">
      {info.map((n) => (
        <Box
          style={{width: 'calc(100% * (1/2) - 10px - 1px)', paddingLeft: 24}}
          key={n.key}
        >
          <Header
            as="h2"
            content={n.content}
            style={{
              color: '#434748',
              fontWeight: 600,
            }}
          />
          <List
            items={n.items}
            style={{color: '#434748'}}
            className="InfoBox-list"
          />
        </Box>
      ))}
    </Box>
  );
}
