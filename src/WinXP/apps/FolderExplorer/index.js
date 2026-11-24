import React from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from '../MyComputer/dropDownData';
import go from 'assets/windowsIcons/290.png';
import search from 'assets/windowsIcons/299(32x32).png';
import back from 'assets/windowsIcons/back.png';
import forward from 'assets/windowsIcons/forward.png';
import up from 'assets/windowsIcons/up.png';
import viewInfo from 'assets/windowsIcons/view-info.ico';
import control from 'assets/windowsIcons/300(16x16).png';
import network from 'assets/windowsIcons/693(16x16).png';
import document from 'assets/windowsIcons/308(16x16).png';
import folderSmall from 'assets/windowsIcons/318(16x16).png';
import folder from 'assets/windowsIcons/318(48x48).png';
import folderOpen from 'assets/windowsIcons/337(32x32).png';
import dropdown from 'assets/windowsIcons/dropdown.png';
import pullup from 'assets/windowsIcons/pullup.png';
import windows from 'assets/windowsIcons/windows.png';
import menu from 'assets/windowsIcons/358(32x32).png';

function FolderExplorer({ onClose, onOpenApp, title = 'Folder', items = [] }) {
  function onClickOptionItem(item) {
    if (item === 'Close') onClose();
  }
  function handleItemClick(item) {
    if (item.app && onOpenApp) {
      onOpenApp(item.app); // Opens another WinXP app!
    } else if (item.url) {
      window.open(item.url, '_blank'); // Opens external link in new browser tab
    }
  }
  return (
    <Div>
      {/* 1. Menu Bar */}
      <section className="com__toolbar">
        <div className="com__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
          />
        </div>
        <img className="com__windows-logo" src={windows} alt="windows" />
      </section>

      {/* 2. Function Bar (Back, Forward, Up, Search, Folders) */}
      <section className="com__function_bar">
        <div className="com__function_bar__button--disable">
          <img className="com__function_bar__icon" src={back} alt="" />
          <span className="com__function_bar__text">Back</span>
          <div className="com__function_bar__arrow" />
        </div>
        <div className="com__function_bar__button--disable">
          <img className="com__function_bar__icon" src={forward} alt="" />
          <div className="com__function_bar__arrow" />
        </div>
        <div className="com__function_bar__button">
          <img className="com__function_bar__icon--normalize" src={up} alt="" />
        </div>
        <div className="com__function_bar__separate" />
        <div className="com__function_bar__button">
          <img
            className="com__function_bar__icon--normalize"
            src={search}
            alt=""
          />
          <span className="com__function_bar__text">Search</span>
        </div>
        <div className="com__function_bar__button">
          <img
            className="com__function_bar__icon--normalize"
            src={folderOpen}
            alt=""
          />
          <span className="com__function_bar__text">Folders</span>
        </div>
        <div className="com__function_bar__separate" />
        <div className="com__function_bar__button">
          <img
            className="com__function_bar__icon--margin12"
            src={menu}
            alt=""
          />
          <div className="com__function_bar__arrow" />
        </div>
      </section>

      {/* 3. Address Bar */}
      <section className="com__address_bar">
        <div className="com__address_bar__title">Address</div>
        <div className="com__address_bar__content">
          <img
            src={folderSmall}
            alt="folder"
            className="com__address_bar__content__img"
          />
          <div className="com__address_bar__content__text">
            {`C:\\Documents and Settings\\Tomi\\${title}`}
          </div>
          <img
            src={dropdown}
            alt="dropdown"
            className="com__address_bar__content__img"
          />
        </div>
        <div className="com__address_bar__go">
          <img className="com__address_bar__go__img" src={go} alt="go" />
          <span className="com__address_bar__go__text">Go</span>
        </div>
      </section>

      {/* 4. Main Body: Split Sidebar & Content */}
      <div className="com__content">
        <div className="com__content__inner">
          {/* Left XP Collapsible Sidebar */}
          <div className="com__content__left">
            {/* Card 1: File and Folder Tasks */}
            <div className="com__content__left__card">
              <div className="com__content__left__card__header">
                <div className="com__content__left__card__header__text">
                  File and Folder Tasks
                </div>
                <img
                  src={pullup}
                  alt=""
                  className="com__content__left__card__header__img"
                />
              </div>
              <div className="com__content__left__card__content">
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={folderSmall}
                    alt=""
                  />
                  <div className="com__content__left__card__text link">
                    Make a new folder
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={viewInfo}
                    alt=""
                  />
                  <div className="com__content__left__card__text link">
                    Publish this folder to the Web
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={control}
                    alt=""
                  />
                  <div className="com__content__left__card__text link">
                    Share this folder
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Other Places */}
            <div className="com__content__left__card">
              <div className="com__content__left__card__header">
                <div className="com__content__left__card__header__text">
                  Other Places
                </div>
                <img
                  src={pullup}
                  alt=""
                  className="com__content__left__card__header__img"
                />
              </div>
              <div className="com__content__left__card__content">
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={document}
                    alt=""
                  />
                  <div className="com__content__left__card__text link">
                    My Documents
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={folderSmall}
                    alt=""
                  />
                  <div className="com__content__left__card__text link">
                    My Computer
                  </div>
                </div>
                <div className="com__content__left__card__row">
                  <img
                    className="com__content__left__card__img"
                    src={network}
                    alt=""
                  />
                  <div className="com__content__left__card__text link">
                    My Network Places
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Details */}
            <div className="com__content__left__card">
              <div className="com__content__left__card__header">
                <div className="com__content__left__card__header__text">
                  Details
                </div>
                <img
                  src={pullup}
                  alt=""
                  className="com__content__left__card__header__img"
                />
              </div>
              <div className="com__content__left__card__content">
                <div className="com__content__left__card__text bold black">
                  {title}
                </div>
                <div className="com__content__left__card__text">
                  File Folder
                </div>
                <div className="com__content__left__card__text">
                  Date Modified: Today
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Folder Content Area */}
          <div className="com__content__right">
            {items.length > 0 ? (
              <div className="com__content__right__card">
                <div className="com__content__right__card__header">{title}</div>
                <div className="com__content__right__card__content">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (item.app && onOpenApp) {
                          onOpenApp(item.app); // Opens another WinXP window!
                        } else if (item.url) {
                          window.open(item.url, '_blank'); // Opens external link
                        }
                      }}
                      className="com__content__right__card__item"
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={item.icon || folder}
                        alt={item.name}
                        className="com__content__right__card__img"
                      />
                      <div className="com__content__right__card__text">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="com__empty__container">
                <p>This folder is empty.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;

  .com__toolbar {
    background-color: #efebde;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .com__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1px 0 1px 2px;
    border-left: 0;
    flex: 1;
  }
  .com__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .com__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }
  .com__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  .com__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .com__function_bar__text {
    margin-right: 4px;
  }
  .com__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
  }
  .com__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .com__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .com__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
    flex-shrink: 0;
  }
  .com__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .com__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
      margin-left: 2px;
    }
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
    }
    &__text {
      position: absolute;
      white-space: nowrap;
      left: 20px;
      right: 17px;
      overflow: hidden;
    }
  }
  .com__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .com__content {
    flex: 1;
    overflow: hidden;
    background-color: #fff;
  }
  .com__content__inner {
    display: flex;
    height: 100%;
    overflow: hidden;
  }
  .com__content__left {
    width: 200px;
    height: 100%;
    overflow: auto;
    padding: 10px;
    background: linear-gradient(to bottom, #7ba2e7 0%, #6375d6 100%);
    flex-shrink: 0;
  }
  .com__content__left__card {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 12px;
  }
  .com__content__left__card__header {
    display: flex;
    align-items: center;
    height: 23px;
    padding-left: 11px;
    padding-right: 2px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      rgb(240, 240, 255) 0,
      rgb(240, 240, 255) 30%,
      rgb(168, 188, 255) 100%
    );
  }
  .com__content__left__card__header__text {
    font-weight: 700;
    color: #0c327d;
    flex: 1;
    font-size: 11px;
  }
  .com__content__left__card__header__img {
    width: 18px;
    height: 18px;
  }
  .com__content__left__card__content {
    padding: 6px 10px;
    background: linear-gradient(
      to right,
      rgb(180, 200, 251) 0%,
      rgb(164, 185, 251) 50%,
      rgb(180, 200, 251) 100%
    );
  }
  .com__content__left__card__row {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .com__content__left__card__img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  .com__content__left__card__text {
    font-size: 10px;
    line-height: 14px;
    color: #0c327d;
    &.black {
      color: #000;
    }
    &.bold {
      font-weight: bold;
    }
    &.link:hover {
      cursor: pointer;
      color: #2b72ff;
      text-decoration: underline;
    }
  }
  .com__content__right {
    height: 100%;
    overflow: auto;
    background-color: #fff;
    flex: 1;
  }
  .com__content__right__card__header {
    width: 300px;
    font-weight: 700;
    padding: 10px 0 3px 15px;
    position: relative;
    &:after {
      content: '';
      display: block;
      background: linear-gradient(to right, #70bfff 0, #fff 100%);
      position: absolute;
      bottom: 0;
      left: 15px;
      height: 1px;
      width: 100%;
    }
  }
  .com__content__right__card__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px;
  }
  .com__content__right__card__item {
    display: flex;
    align-items: center;
    width: 180px;
    margin-bottom: 15px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .com__content__right__card__img {
    width: 45px;
    height: 45px;
    margin-right: 8px;
  }
  .com__content__right__card__text {
    font-size: 11px;
    word-break: break-word;
  }
  .com__empty__container {
    padding: 40px;
    color: #888;
    font-size: 12px;
  }
`;

export default FolderExplorer;
