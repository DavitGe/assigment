import React, {useState} from 'react';
import {
  Box,
  Form,
  Button,
  FormInput,
  Header,
  Text,
} from '@fluentui/react-northstar';
import {useNavigate} from 'react-router-dom';

export default function SeccondStep() {
  const navigate = useNavigate();
  const [menuItem, setMenuItem] = useState('');
  const [subMenu, setSubMenu] = useState([{key: 0, content: ''}]);

  const menuInputHandler = (e: any) => {
    setMenuItem(e.target.value);
  };

  const subMenuInputHandler = (key: number, e: any) => {
    const temp = subMenu.map((el) => {
      if (el.key === key) {
        return {
          key: key,
          content: e.target.value,
        };
      } else {
        return el;
      }
    });
    setSubMenu(temp);
  };

  const createSubMenu = () => {
    const temp = subMenu[subMenu.length - 1];
    setSubMenu([...subMenu, {key: temp.key + 1, content: ''}]);
  };

  const removeSubMenu = () => {
    let temp = subMenu;
    temp.pop();
    setSubMenu(temp);
  };

  const validation = () => {
    if (menuItem === '') {
      return false;
    }
    return !subMenu.find((el) => el.content === '');
  };

  const onSubmit = () => {
    if (validation()) {
      localStorage.setItem('menuItem', menuItem);
      localStorage.setItem('subMenu', JSON.stringify(subMenu));
      navigate('/settings/3');
    } else {
      alert('Fill all inputs!');
    }
  };

  return (
    <Box style={{marginLeft: 48, marginTop: 24}}>
      <Box>
        <Header as="h2" content="Configure Navigation" />
        <Text
          weight="regular"
          size="medium"
          content="The mega menu can be configured here"
        />
      </Box>
      <Box style={{marginTop: 12}}>
        <Header as="h3" content="Add navigation entries" />
        <Text weight="regular" size="medium" content="Fill these inputs:" />
      </Box>
      <Form style={{height: 'auto', marginTop: 32}} onSubmit={onSubmit}>
        <FormInput
          label="Menu item:"
          name="menuItem"
          id="menu-item"
          value={menuItem}
          onChange={menuInputHandler}
          required
          showSuccessIndicator={false}
        />
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <Box>
            {subMenu.map((el) => {
              if (el.key === 0) {
                return (
                  <FormInput
                    label="Submenu items:"
                    name="subMenuItem"
                    key={el.key}
                    value={el.content}
                    onChange={(e: any) => subMenuInputHandler(el.key, e)}
                    required
                    style={{marginTop: 8}}
                    showSuccessIndicator={false}
                  />
                );
              } else {
                return (
                  <FormInput
                    name="subMenuItem"
                    key={el.key}
                    value={el.content}
                    onChange={(e: any) => subMenuInputHandler(el.key, e)}
                    required
                    style={{marginTop: 8}}
                    showSuccessIndicator={false}
                  />
                );
              }
            })}
          </Box>
          <Box style={{display: 'flex'}}>
            <Button
              content="+ Add"
              style={{marginLeft: 12}}
              onClick={createSubMenu}
              primary
            />
            <Button
              content="- remove"
              tinted
              style={{marginLeft: 6}}
              onClick={removeSubMenu}
            />
          </Box>
        </Box>
        <Button content="Next >" primary type="submit" />
      </Form>
    </Box>
  );
}
