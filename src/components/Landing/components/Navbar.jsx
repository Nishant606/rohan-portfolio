import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Switch from 'react-switch';
import {
  MdOutlineDarkMode,
  MdOutlineWbSunny,
  MdWbSunny,
  MdDarkMode,
} from 'react-icons/md';
import { ThemeContext } from '../../../Context/DarkTheme';
const Navbar = () => {
  const { lightMode, setLightMode } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  const handleThemeChange = (event) => {
    setChecked(event);
  };
  console.log(lightMode);
  return (
    <NavbarWrapper lightMode={lightMode}>
      <a className="logo" href="/">
        Rohan Singh
      </a>

      <div className="proff-list">
        <span>Designer</span>
        <span>Developer</span>
        <span>Product Manager</span>
      </div>
      <div className="theme-toggle">
        <Switch
          onChange={setLightMode}
          checked={lightMode}
          // width={60}
          // activeBoxShadow={'none'}
          // checkedIcon={<MdOutlineDarkMode className="icon" />}
          // uncheckedIcon={<MdOutlineWbSunny className="icon" />}
          // checkedHandleIcon={<MdWbSunny className="handle-icon" />}
          // uncheckedHandleIcon={<MdDarkMode className="handle-icon" />}
          // onHandleColor={'#000'}
          // offHandleColor={'#000'}
          // onColor={'#000'}
          // borderRadius={'20px'}
          // offColor={'#000'}
          // className="switch"
        />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;

  & .logo {
    color: ${(props) => (props.lightMode ? '#000' : 'var(--primary-color)')};
    font-size: 24px;
    text-decoration: none;
    flex: 1;
    text-align: left;
  }
  & .theme-toggle {
    flex: 1;
    text-align: right;
    & .switch {
      border: 2px solid var(--primary-color);
    }

    & .icon {
      font-size: 20px;
    }
    & .handle-icon {
      font-size: 25px;
      color: var(--primary-color);
    }
  }
  & .proff-list {
    span {
      margin: 0 10px;
    }
  }
`;
