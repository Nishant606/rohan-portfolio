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
          width={60}
          activeBoxShadow={'none'}
          checkedIcon={<MdOutlineDarkMode className="icon" />}
          uncheckedIcon={
            <MdOutlineWbSunny
              className="icon"
              css={`
                width: 30px;
                margin-top: 2px;
              `}
            />
          }
          checkedHandleIcon={<MdWbSunny className="handle-icon" />}
          uncheckedHandleIcon={<MdDarkMode className="handle-icon" />}
          onHandleColor={'#eee'}
          offHandleColor={'#000'}
          onColor={lightMode ? '#eee' : '#000'}
          offColor={lightMode ? '#eee' : '#000'}
          className="switch"
        />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 50px auto;
  & .logo {
    color: var(--primary-color);
    font-size: 24px;
    text-decoration: none;
    flex: 1;
    text-align: left;
  }
  & .theme-toggle {
    flex: 1;
    text-align: right;
    & .switch {
      border-radius: 20px !important;
      border: 2px solid var(--primary-color);
    }

    & .icon {
      font-size: 20px;
      margin-left: 2px;
    }
    & .handle-icon {
      font-size: 25px;
      color: var(--primary-color);
    }
  }
  & .proff-list {
    span {
      margin: 0 10px;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;
