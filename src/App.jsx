import './App.css';
import React from 'react';
import './style/css/index.css';

const fonts = [{font : 'Lobster Two'}, {font : 'Bangers'}, {font : 'Sacramento'}, {font : 'Gloria Hallelujah'}, {font : 'Festive'}, {font : 'Neucha'}, {font : 'Ole'}, {font : 'Creepster'}, {font : 'Comforter'}, {font : 'Roboto'}, {font : 'Mochiy Pop P One'}, {font : 'Sedgwick Ave'}, {font : 'Source Code Pro'}, {font : 'Rubik Beastly'}, {font : 'Neonderthaw'}, {font : 'Pacifico'}];

const fontWeight = [{weight: '200'}, {weight: '400'}, {weight: '600'}, {weight: '900'}];

class App extends React.Component {
  render(){
    return (
      <div> 
        <header>
          <div className='nowfontsize'>50</div><a> px</a>&ensp;
          <input tabIndex="0" type="range" min="8" max="50" step="1" id="slider"/>
        </header>
        <main>
          <section className="swiper mySwiper">
            <ul className="swiper-wrapper">
              {fonts.map(element => 
                <li name='text' id={element.font} className="swiper-slide"><span className="fontText" style={{fontFamily: element.font}}>Almost before we knew it, we had left the ground.</span></li>
              )}
            </ul>
              <span className="swiper-pagination"></span>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="secondBT">
                <input type="button" className="allshow" value="전체보기"/>
              </div>
            </section>

          <article className="fontall">
            <ul className="fontall_ul">
              {fonts.map(element =>
                <li style={{fontFamily: element.font}}>{element.font}</li>
              )}
            </ul>
          </article>

          <section>
            <ul className="fontbox">
              {fonts.map(element => 
                <li tabIndex="0" name='text' id={element.font} className={element.font}><div name="fontname" className='showfontname'>Lobster Two</div>Almost before we knew it, we had left the ground.</li>
              )}
            </ul>
          </section>

          <article className="popup">
            <section>
              <h4 className='title'>text</h4>
              <ul className='content'>
                {fontWeight.map(element =>
                  <div>
                    <li style={{fontWeight: element.weight}}>Almost before we knew it, we had left the ground.</li>
                    <li style={{fontWeight: element.weight, fontStyle: 'italic'}}>Almost before we knew it, we had left the ground.</li>
                  </div>
                )}
              </ul>
            </section>
            <section>
              <h4 tabIndex="0" className="import_title">Use on the web</h4>
              <div className="import_content">
                <div>To embed a font, copy the code into the of your html</div>
                <input type="radio" name='import_type' id="import_link" value="import_link"/><label htmlFor="import_link">&lt;link&gt;</label>&ensp;
                <input type="radio" name='import_type' id="import_tag" value="import_tag"/><label htmlFor="import_tag">@import</label>&ensp;
                <input type="submit" id='radio_btn' value="확인"></input>
                <div name="import_code" className="import_code"></div>
              </div>
              <div className="cmd">
                <input type="button" className="button" value="close"/>
              </div>
            </section>
          </article>

          <div className="backon"></div>
        </main>

        <footer>
          <div className="footer">
            <div className="container">
              <div className="first">
                <div>소개</div>
                <div>이용약관</div>
                <div>개인정보취급방침</div>
                <div>고객센터</div>
              </div>
              <div className="second">본 페이지는 Test페이지입니다.</div>
              <div className="third">@2022 Onoffmix. All Rights Reserved</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
