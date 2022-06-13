import React, {useState, useEffect} from 'react';

import {ReactMegaMenu} from 'react-mega-menu';
import {parentStyleConf, childStyleConf} from './styleConfs';
import {Box} from '@fluentui/react-northstar';
import {Link} from 'react-router-dom';

import {MenuIcon, MoreIcon} from '@fluentui/react-icons-northstar';
import {dataType, menuData, menuLocalData} from '../../interfaces';
import InfoBox from './InfoBox';

// import {initialValue as data} from '../../initialValue';

export function randomNumberInRange(min: number, max: number): number {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const initialState: menuData[] = [
  {
    label: '',
    key: 1,
    items: '',
  },
];
interface Props {
  data: dataType;
}
export default function Header({data}: Props) {
  const [menuData, setMenuData] = useState(initialState);
  useEffect(() => {
    const fetchedData = data.menuData.map((el: menuLocalData) => {
      const fetchedChildData: menuData[] = el.childData.map((chEl) => {
        const result = {
          label: chEl.label,
          key: chEl.key,
          items: <InfoBox info={chEl.items} />,
        };
        return result;
      });
      const result = {
        label: el.label,
        key: el.key,
        items: (
          <ReactMegaMenu
            tolerance={50}
            data={fetchedChildData}
            styleConfig={childStyleConf}
          />
        ),
      };
      return result;
    });
    setMenuData([
      {
        label: <MenuIcon style={{paddingRight: 12}} />,
        key: 1,
        items: (
          <Link
            to="/settings/1"
            style={{
              backgroundColor: '#FFFFFF',
              padding: '12px 32px 12px 24px',
              marginLeft: -24,
            }}
          >
            Settings
          </Link>
        ),
      },
      ...fetchedData,
      {
        label: <MoreIcon style={{paddingLeft: 12}} />,
        key: 4,
        items: <div>MoreIcon</div>,
      },
    ]);
  }, [data]);

  return (
    <Box
      style={{
        backgroundColor: '#f5f5f5',
        boxShadow: '2px 1px 12px 1px rgba(0, 0, 0, 0.1)',
        height: 64,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ReactMegaMenu
        tolerance={30} // optional, defaults to 100
        data={menuData}
        styleConfig={parentStyleConf}
      />
    </Box>
  );
}
