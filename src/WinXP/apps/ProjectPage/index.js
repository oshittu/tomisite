import React from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from '../InternetExplorer/dropDownData';
import ie from 'assets/windowsIcons/ie-paper.png';
import printer from 'assets/windowsIcons/17(32x32).png';
import go from 'assets/windowsIcons/290.png';
import back from 'assets/windowsIcons/back.png';
import forward from 'assets/windowsIcons/forward.png';
import refresh from 'assets/windowsIcons/refresh.png';
import stop from 'assets/windowsIcons/stop.png';
import home from 'assets/windowsIcons/home.png';
import windows from 'assets/windowsIcons/windows.png';
import dropdown from 'assets/windowsIcons/dropdown.png';

function ProjectPage({ onClose, fileName = 'Project.html', ContentComponent }) {
  function onClickOptionItem(item) {
    if (item === 'Close') onClose();
    if (item === 'Print...') window.print();
  }

  return (
    <Div>
      {/* 1. Menu Bar */}
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

      {/* 2. Function Bar with Working Print */}
      <section className="ie__function_bar">
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={back} alt="" />
          <span className="ie__function_bar__text">Back</span>
        </div>
        <div className="ie__function_bar__button--disable">
          <img className="ie__function_bar__icon" src={forward} alt="" />
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
        <div
          className="ie__function_bar__button"
          onClick={() => window.print()}
          title="Print page"
        >
          <img
            className="ie__function_bar__icon--margin12"
            src={printer}
            alt=""
          />
          <span className="ie__function_bar__text">Print</span>
        </div>
      </section>

      {/* 3. Address Bar showing fake local Windows file path */}
      <section className="ie__address_bar">
        <div className="ie__address_bar__title">Address</div>
        <div className="ie__address_bar__content">
          <img src={ie} alt="ie" className="ie__address_bar__content__img" />
          <div className="ie__address_bar__content__text">
            {`C:\\Documents and Settings\\Tomi\\Projects\\${fileName}`}
          </div>
          <img
            src={dropdown}
            alt=""
            className="ie__address_bar__content__img"
          />
        </div>
        <div className="ie__address_bar__go">
          <img className="ie__address_bar__go__img" src={go} alt="go" />
          <span className="ie__address_bar__go__text">Go</span>
        </div>
      </section>

      {/* 4. Scrollable HTML Article Body */}
      <div className="article__body">
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <p>No project content component provided.</p>
        )}
      </div>

      {/* 5. XP Footer */}
      <footer className="ie__footer">
        <div className="ie__footer__status">
          <img className="ie__footer__status__img" src={ie} alt="" />
          <span className="ie__footer__status__text">Done</span>
        </div>
        <div className="ie__footer__right">
          <span>Local intranet</span>
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
  background-color: #fff;

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
    background-color: #efebde;
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
    border: 1px solid transparent;
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
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
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
  .ie__address_bar {
    background-color: #efebde;
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
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 10px 0 5px;
    height: 100%;
    &__img {
      height: 95%;
      margin-right: 3px;
    }
  }

  /* ----------------------------------------------------
     HTML Article Area with Handy Utility Layout Classes
     ---------------------------------------------------- */
  .article__body {
    flex: 1;
    overflow-y: auto;
    padding: 24px 32px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif;
    color: #222;
    line-height: 1.6;

    h1 {
      font-size: 26px;
      color: #0c327d;
      margin-bottom: 8px;
      border-bottom: 2px solid #70bfff;
      padding-bottom: 6px;
    }
    h2 {
      font-size: 20px;
      color: #1638e6;
      margin-top: 24px;
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 14px;
      font-size: 14px;
    }

    /* Side-by-side layout: Text on left, Image on right */
    .side-by-side {
      display: flex;
      gap: 24px;
      align-items: flex-start;
      margin: 16px 0;
      @media (max-width: 600px) {
        flex-direction: column;
      }
    }

    /* Clean Image Card with Caption */
    .image-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 8px;
      img {
        max-width: 100%;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }
      span {
        font-size: 11px;
        color: #666;
        margin-top: 6px;
        font-style: italic;
      }
    }

    /* Embedded iframe (LinkedIn, YouTube) */
    .embed-card {
      margin: 20px 0;
      border: 1px solid #e1e4e8;
      border-radius: 6px;
      overflow: hidden;
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
  .ie__footer__right {
    padding: 0 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.6);
  }
`;

export default ProjectPage;
