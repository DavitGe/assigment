import React, {useState, useEffect} from 'react';
import {
  Box,
  Header,
  Button,
  Input,
  Text,
  SearchIcon,
  Accordion,
  List,
} from '@fluentui/react-northstar';
import {Link} from 'react-router-dom';
// import {initialValue as data} from '../../initialValue';
import {dataType, panelData} from '../../interfaces';

const initialData: panelData[] = [
  {
    key: 0,
    title: '',
    content: '',
  },
];

interface Props {
  data: dataType;
}
export default function FirstStep({data}: Props) {
  const [menuData, setMenuData] = useState(initialData);
  useEffect(() => {
    const panels: panelData[] = data.menuData.map((el) => {
      const childPanels = el.childData.map((elCh) => {
        const childItems = elCh.items.map((child) => {
          return {
            key: child.key,
            header: child.content,
          };
        });
        return {
          key: elCh.key,
          title: elCh.label,
          content: <List items={childItems} />,
        };
      });
      return {
        key: el.key,
        title: el.label,
        content: <Accordion panels={childPanels} />,
      };
    });
    setMenuData([...panels]);
  }, []);
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
        <Text
          weight="regular"
          size="medium"
          content="Here's an example of how a section can be used to group inputs"
        />
      </Box>
      <Box style={{display: 'flex', flexDirection: 'row', marginTop: 32}}>
        <Button
          content={<Link to={'/settings/2'}>+ Add entry</Link>}
          primary
          style={{marginRight: 12}}
        />
        <Input
          icon={<SearchIcon />}
          placeholder="Search for a navigation entry..."
        />
      </Box>
      <Box style={{marginTop: 32}}>
        <Accordion panels={menuData} />
      </Box>
    </Box>
  );
}
