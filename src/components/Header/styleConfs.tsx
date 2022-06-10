export const parentStyleConf = {
  menuProps: {
    style: {
      width: '100%',
      padding: '2px',
      margin: '0',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 24,
      height: '100%',
    },
  },
  contentProps: {
    style: {
      position: 'absolute',
      top: 64,
      left: 64,
    },
  },
  menuItemProps: {
    style: {
      cursor: 'pointer',
      marginLeft: 18,
      fontWeight: 500,
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
    },
  },
  menuItemSelectedProps: {
    style: {
      cursor: 'pointer',
      marginLeft: 18,
      fontWeight: 500,
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
    },
  },
  containerProps: {
    style: {
      height: '100%',
      width: '100%',
      padding: '2px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
  },
};

export const childStyleConf = {
  menuProps: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 0,
    },
  },
  menuItemProps: {
    style: {
      cursor: 'pointer',
      fontWeight: 500,
      fontSize: 19,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 28,
      paddingRight: 64,
    },
  },
  menuItemSelectedProps: {
    style: {
      cursor: 'pointer',
      backgroundColor: '#fff',
      fontWeight: 500,
      fontSize: 19,
      height: 48,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 28,
      paddingRight: 64,
    },
  },
  contentProps: {
    style: {
      position: 'relative',
    },
  },
  containerProps: {
    style: {
      position: 'relative',
      backgroundColor: '#e3e3e3',
      marginTop: 4,
    },
  },
};
