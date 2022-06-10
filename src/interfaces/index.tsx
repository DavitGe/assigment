export interface menuData {
  label: string | JSX.Element;
  key: number;
  items: string | JSX.Element;
}

export interface item {
  key: string | number;
  header: string;
}

export interface info {
  content: string;
  key: number;
  items: item[];
}

export interface menuChildData {
  label: string;
  key: number;
  items: info[];
}

export interface menuLocalData {
  label: string;
  key: number;
  childData: menuChildData[];
}

export interface dataType {
  menuData: menuLocalData[];
  keyState: number;
}

export interface sidebarPropsInterface {
  header: string;
  key: number;
  content: string | JSX.Element;
  media?: JSX.Element;
}

export interface sidebarChildProps {
  key: number;
  media: JSX.Element;
  content: string | JSX.Element;
  url?: string;
}

export interface panelData {
  key: number;
  title: string;
  content: string | JSX.Element;
}
