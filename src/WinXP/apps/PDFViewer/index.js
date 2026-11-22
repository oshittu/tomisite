import React from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from '../InternetExplorer/dropDownData'; // reuses IE's menu items cleanly!
import ie from 'assets/windowsIcons/ie-paper.png';
import printer from 'assets/windowsIcons/17(32x32).png';
import go from 'assets/windowsIcons/290.png';
import links from 'assets/windowsIcons/links.png';
import search from 'assets/windowsIcons/299(32x32).png';
import favorite from 'assets/windowsIcons/744(32x32).png';
import back from 'assets/windowsIcons/back.png';
import forward from 'assets/windowsIcons/forward.png';
import refresh from 'assets/windowsIcons/refresh.png';
import stop from 'assets/windowsIcons/stop.png';
import home from 'assets/windowsIcons/home.png';
import windows from 'assets/windowsIcons/windows.png';
import dropdown from 'assets/windowsIcons/dropdown.png';

function PDFViewer({ onClose, docUrl = null, docTitle = 'Document.pdf' }) {
  function onClickOptionItem(item) {
    if (item === 'Close') onClose();
    if (item === 'Print...') window.print();
  }

  return (
    <Div>
      {/* 1. Menu Bar (File, Edit, View, Favorites, etc.) */}
      <section className="ie__toolbar">
        <div className="ie__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
            height={21}
          />
        </div>
        <img className="ie__windows-logo" src={windows} alt="windows" />
      </section>

      {/* 2. Classic Function Bar (Back, Forward, Stop, Refresh, Print) */}
      <section className="ie__function_bar">
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
          <div className="ie__function_bar__arrow" />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={stop} alt="" />
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--margin-1"
            src={refresh}
            alt=""
          />
        </div>
        <div className="ie__function_bar__button">
          <img className="ie__function_bar__icon--margin-1" src={home} alt="" />
        </div>
        <div className="ie__function_bar__separate" />
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={search}
            alt=""
          />
          <span className="ie__function_bar__text">Search</span>
        </div>
        <div className="ie__function_bar__button">
          <img
            className="ie__function_bar__icon--normalize"
            src={favorite}
            alt=""
          />
          <span className="ie__function_bar__text">Favorites</span>
        </div>
        <div className="ie__function_bar__separate" />
        {/* Working Print Button! */}
        <div
          className="ie__function_bar__button"
          onClick={() => window.print()}
          title="Print document"
        >
          <img
            className="ie__function_bar__icon--margin12"
            src={printer}
            alt="Print"
          />
          <span className="ie__function_bar__text">Print</span>
        </div>
      </section>

      {/* 3. Address Bar */}
      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">
            {`C:\\Documents and Settings\\Tomi\\My Documents\\${docTitle}`}
          </div>
          <img
            src={dropdown}
            alt="dropdown"
            className="ie__address_bar__content__img"
          />
        </div>
        <div className="ie__address_bar__go">
          <img className="ie__address_bar__go__img" src={go} alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>
        <div className="ie__address_bar__separate" />
      </section>

      {/* 4. PDF Content Area */}
      <div className="pdf__content">
        {docUrl ? (
          <iframe className="pdf__iframe" src={docUrl} title={docTitle} />
        ) : (
          <div className="pdf__placeholder">
            <p>📄 No PDF loaded yet.</p>
            <p>
              Place your PDF file into <code>src/assets/pdfs/</code> and pass it
              in!
            </p>
          </div>
        )}
      </div>

      {/* 5. XP Footer */}
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src={ie} alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__block" />
        <div className="ie__footer__block" />
        <div className="ie__footer__right">
          <span className="ie__footer__right__text">Local intranet</span>
        </div>
      </footer>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;

  .ie__toolbar {
    height: 25px;
    background-color: #efebde;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__button {
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
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
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
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
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
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__address_bar__content {
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
      left: 16px;
      right: 17px;
      overflow: hidden;
    }
  }
  .ie__address_bar__go,
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 10px 0 5px;
    height: 100%;
    &__img {
      height: 95%;
      margin-right: 3px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .pdf__content {
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: #525659;
    overflow: hidden;
  }
  .pdf__iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  .pdf__placeholder {
    color: white;
    text-align: center;
    padding-top: 100px;
    font-size: 14px;
    line-height: 24px;
    code {
      background: #333;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
  .ie__footer {
    height: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #efebde;
    display: flex;
    align-items: center;
    font-size: 11px;
  }
  .ie__footer__status {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 5px;
    &__img {
      width: 14px;
      height: 14px;
      margin-right: 3px;
    }
  }
  .ie__footer__block {
    height: 80%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
  }
  .ie__footer__right {
    padding: 0 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.6);
  }
`;

export default PDFViewer;
