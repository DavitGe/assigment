import {sidebarPropsInterface, sidebarChildProps} from '../../interfaces';
import linkLogo from '../../assets/link.svg';
import {List, Image, Text} from '@fluentui/react-northstar';
import {Link} from 'react-router-dom';

export const settingItems: sidebarChildProps[] = [
  {
    key: 1,
    media: <Image src={linkLogo} style={{width: 18, height: 18}} />,
    content: 'Step 1',
    url: '/settings/1',
  },
  {
    key: 2,
    media: <Image src={linkLogo} style={{width: 18, height: 18}} />,
    content: 'Step 2',
    url: '/settings/2',
  },
  {
    key: 3,
    media: <Image src={linkLogo} style={{width: 18, height: 18}} />,
    content: 'Step 3',
    url: '/settings/3',
  },
];

export const AdministrationItems: sidebarChildProps[] = [
  {
    key: 1,
    media: <Image src={linkLogo} style={{width: 18, height: 18}} />,
    content: 'Licensing',
  },
  {
    key: 2,
    media: <Image src={linkLogo} style={{width: 18, height: 18}} />,
    content: 'Administrators',
  },
];

export const sidebarProps: sidebarPropsInterface[] = [
  {
    header: 'Settings',
    key: 1,
    content: (
      <List navigable>
        {settingItems.map((item) => {
          if (item.url) {
            return (
              <Link to={item.url}>
                <List.Item
                  media={item.media}
                  key={item.key}
                  content={item.content}
                  index={item.key}
                />
              </Link>
            );
          }
          return (
            <List.Item
              media={item.media}
              key={item.key}
              content={item.content}
              index={item.key}
            />
          );
        })}
      </List>
    ),
    media: <Text content="1" />,
  },
  {
    header: 'Administration',
    key: 2,
    content: <List navigable items={AdministrationItems} />,
    media: <Text content="2" />,
  },
];
