import React, {useState} from 'react';

import {Box, Button} from '@fluentui/react-northstar';
import {dataType, menuLocalData} from '../../interfaces';
import {useNavigate} from 'react-router-dom';

interface Props {
  data: menuLocalData;
}
const initialLocalData: menuLocalData = {
  label: '',
  key: 0,
  childData: [
    {
      label: '',
      key: 0,
      items: [
        {
          content: '',
          key: 0,
          items: [
            {
              key: 0,
              header: '',
            },
          ],
        },
      ],
    },
  ],
};
const initialData: dataType = {
  menuData: [initialLocalData],
  keyState: 0,
};
export default function SaveChanges({data}: Props) {
  const navigate = useNavigate();
  const validation = () => {
    if (data.label == '') return false;
    data.childData.map((child) => {
      if (child.label == '') return false;
      child.items.map((info) => {
        if (info.content == '') return false;
        info.items.map((item) => {
          if (item.header == '') return false;
        });
      });
    });
    return true;
  };
  const onSubmit = () => {
    if (validation()) {
      let result = JSON.parse(
        localStorage.getItem('data') || JSON.stringify(initialData)
      );
      result.menuData.push(data);
      localStorage.setItem('data', JSON.stringify(result));
      localStorage.removeItem('menuItem');
      localStorage.removeItem('subMenu');
      alert('Data saved!');
      navigate('/');
    } else {
      alert('fill all gaps');
    }
  };
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
      <Button content="Save" primary onClick={onSubmit} />
    </Box>
  );
}
