import React, {useEffect, useState} from 'react';
import {
  Box,
  Form,
  FormInput,
  Header,
  Button,
  Text,
} from '@fluentui/react-northstar';

import {menuLocalData} from '../../interfaces';
import {randomNumberInRange} from '../Header';
import SaveChanges from './SaveChanges';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
};

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

  const [menuItem, setMenuItem] = useState('');
  const [subMenu, setSubMenu] = useState([{key: 0, label: ''}]);

  useEffect(() => {
    setMenuItem(
      localStorage.getItem('menuItem') || 'Please fill previous parts!'
    );

    setSubMenu(
      JSON.parse(localStorage.getItem('subMenu') || JSON.stringify(subMenu))
    );

    // const finalSubMenu = subMenu.map((el) => {
    //   console.log('el.label', el.label);
    //   return {
    //     key: el.key,
    //     label: el.label,
    //     items: [
    //       {
    //         content: '',
    //         key: randomNumberInRange(1, 10000),
    //         items: [
    //           {
    //             key: randomNumberInRange(1, 10000),
    //             header: '',
    //           },
    //         ],
    //       },
    //     ],
    //   };
    // });
    // setMenuData({
    //   label: menuItem,
    //   key: randomNumberInRange(1, 10000),
    //   childData: finalSubMenu,
    // });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const finalSubMenu = subMenu.map((el) => {
      return {
        key: el.key,
        label: el.label,
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
    });
    setMenuData({
      label: menuItem,
      key: randomNumberInRange(1, 10000),
      childData: finalSubMenu,
    });
  }, [subMenu]);

  interface infoHandlerProps {
    childIndex: number;
    infoIndex: number;
    e: HTMLElementEvent<HTMLTextAreaElement>;
  }

  interface itemHandlerProps {
    childIndex: number;
    infoIndex: number;
    itemIndex: number;
    e: HTMLElementEvent<HTMLTextAreaElement>;
  }

  interface addItemProps {
    childIndex: number;
    infoIndex: number;
  }
  const infoInputHandler = ({childIndex, infoIndex, e}: infoHandlerProps) => {
    let temp = menuData.childData;
    temp[childIndex].items[infoIndex].content = e.target.value;

    setMenuData({...menuData, childData: temp});
  };

  const itemInputHandler = ({
    childIndex,
    infoIndex,
    itemIndex,
    e,
  }: itemHandlerProps) => {
    let temp = menuData.childData;
    temp[childIndex].items[infoIndex].items[itemIndex].header = e.target.value;
    setMenuData({...menuData, childData: temp});
  };

  const addTitle = (childIndex: number) => {
    let temp = menuData.childData;
    temp[childIndex].items.push({
      content: '',
      key: randomNumberInRange(1, 10000),
      items: [
        {
          header: '',
          key: randomNumberInRange(1, 10000),
        },
      ],
    });
    setMenuData({...menuData, childData: temp});
  };

  const addItem = ({childIndex, infoIndex}: addItemProps) => {
    let temp = menuData.childData;
    temp[childIndex].items[infoIndex].items.push({
      header: '',
      key: randomNumberInRange(1, 10000),
    });
    setMenuData({...menuData, childData: temp});
  };

  return (
    <Box style={{marginLeft: 48, marginTop: 24}}>
      <Box>
        <Header content={menuItem} />
        <Text
          weight="regular"
          size="medium"
          content="Fill little more inputs:"
        />
      </Box>
      <Form>
        {menuData.childData.map((el) => {
          return (
            <Box>
              <Header content={el.label} />
              {el.items.map((info) => {
                return (
                  <Box key={info.key}>
                    <Header as="h3" content="Title:" />
                    <FormInput
                      value={info.content}
                      onChange={(e: any) => {
                        infoInputHandler({
                          childIndex: menuData.childData.indexOf(el),
                          infoIndex: el.items.indexOf(info),
                          e,
                        });
                      }}
                    />
                    <Header as="h3" content="Items: " />
                    {info.items.map((item) => {
                      return (
                        <FormInput
                          style={{marginTop: 4}}
                          key={item.key}
                          value={item.header}
                          onChange={(e: any) => {
                            itemInputHandler({
                              childIndex: menuData.childData.indexOf(el),
                              infoIndex: el.items.indexOf(info),
                              itemIndex: info.items.indexOf(item),
                              e,
                            });
                          }}
                        />
                      );
                    })}
                    <Button
                      onClick={() => {
                        addItem({
                          childIndex: menuData.childData.indexOf(el),
                          infoIndex: el.items.indexOf(info),
                        });
                      }}
                      content="Add item"
                      style={{marginTop: 6}}
                    />
                  </Box>
                );
              })}
              <Button
                onClick={() => addTitle(menuData.childData.indexOf(el))}
                content="Add Title"
                style={{marginTop: 12}}
                primary
              />
            </Box>
          );
        })}
      </Form>
      <SaveChanges data={menuData} />
    </Box>
  );
}
