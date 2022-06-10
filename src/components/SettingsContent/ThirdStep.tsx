import React, {useEffect, useState} from 'react';
import {Box, Form, FormInput, Header, Text} from '@fluentui/react-northstar';

import {menuLocalData, menuChildData} from '../../interfaces';
import {randomNumberInRange} from '../Header';

const initialData: menuLocalData = {
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

export default function ThirdStep() {
  const [menuData, setMenuData] = useState(initialData);

  let lSubMenu = localStorage.getItem('subMenu');
  let menuItem = localStorage.getItem('menuItem') || '';

  let subMenu = [{key: 0, content: ''}];

  if (menuItem === '') {
    alert('Fill step 2!');
  }

  if (lSubMenu !== null) {
    subMenu = JSON.parse(lSubMenu);
  } else {
    alert('Fill step 2!');
    subMenu = [{key: 0, content: ''}];
  }

  useEffect(() => {
    if (menuData === initialData) {
      setMenuData({
        label: menuItem,
        key: randomNumberInRange(1, 10000),
        childData: subMenu.map((e) => {
          return {
            label: e.content,
            key: e.key,
            items: [
              {
                content: '',
                key: randomNumberInRange(1, 10000),
                items: [
                  {
                    key: randomNumberInRange(1, 10000),
                    header: '',
                  },
                ],
              },
            ],
          };
        }),
      });
    }
  }, []);

  const titleInputHandler = (childKey: number, key: number, e: any) => {
    // const childData: menuChildData[] = menuData.childData.map((child) => {
    //   if (childKey === child.key) {
    //     child.items.map((el) => {
    //       if (el.key === key) {
    //         return {
    //           ...el,
    //           label: e.target.value,
    //         };
    //       } else {
    //         return el;
    //       }
    //     });
    //   } else {
    //     return child;
    //   }
    // });
    // if (childData != undefined) {
    //   setMenuData({...menuData, childData: childData});
    // }
  };
  return (
    <Box style={{marginLeft: 48, marginTop: 24}}>
      <Box>
        <Header as="h2" content="Finish creating new item!" />
        <Text
          weight="regular"
          size="medium"
          content="Fill little more inputs:"
        />
      </Box>
      <Box>
        {menuData.childData.map((el) => {
          if (el.label === '') {
            return <Text content="Please fill step 2!" />;
          }
          return (
            <Form key={el.key}>
              <Header content={el.label} as="h3" />
              {el.items.map((info) => {
                return (
                  <FormInput
                    label="Title:"
                    name="Title"
                    key={info.key}
                    value={info.content}
                    onChange={(e: any) =>
                      titleInputHandler(el.key, info.key, e)
                    }
                    style={{marginTop: 8}}
                  />
                );
              })}
            </Form>
          );
        })}
      </Box>
    </Box>
  );
}
