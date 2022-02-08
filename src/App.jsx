import './App.css';
import React from 'react';
import './style/css/index.css';

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
              <li name='text' id= 'Lobster Two' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Lobster Two'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Bangers' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Bangers'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Sacramento' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Sacramento'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Gloria Hallelujah' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Gloria Hallelujah'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Festive' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Festive'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Neucha' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Neucha'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Ole' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Ole'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Creepster' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Creepster'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Comforter' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Comforter'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Roboto' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Roboto'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Mochiy Pop P One' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Mochiy Pop P One'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Sedgwick Ave' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Sedgwick Ave'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Source Code Pro' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Source Code Pro'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Rubik Beastly' className="swiper-slide"><span className="fontText" style={{fontFamily: 'Rubik Beastly'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Neonderthaw' className="swiper-slide"><span  className="fontText" style={{fontFamily: 'Neonderthaw'}}>Almost before we knew it, we had left the ground.</span></li>
              <li name='text' id= 'Pacifico' className="swiper-slide"><span  className="fontText" style={{fontFamily: 'Pacifico'}}>Almost before we knew it, we had left the ground.</span></li>
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
              <li style={{fontFamily: "Lobster Two"}}>Lobster Two</li>
              <li style={{fontFamily: "Bangers"}}>Bangers</li>
              <li style={{fontFamily: "Sacramento"}}>Sacramento</li>
              <li style={{fontFamily: "Gloria Hallelujah"}}>Gloria Hallelujah</li>
              <li style={{fontFamily: "Festive"}}>Festive</li>
              <li style={{fontFamily: "Neucha"}}>Neucha</li>
              <li style={{fontFamily: "Ole"}}>Ole</li>
              <li style={{fontFamily: "Creepster"}}>Creepster</li>
              <li style={{fontFamily: "Comforter"}}>Comforter</li>
              <li style={{fontFamily: "Roboto"}}>Roboto</li>
              <li style={{fontFamily: "Mochiy Pop P One"}}>Mochiy Pop P One</li>
              <li style={{fontFamily: "Sedgwick Ave"}}>Sedgwick Ave</li>
              <li style={{fontFamily: "Source Code Pro"}}>Source Code Pro</li>
              <li style={{fontFamily: "Rubik Beastly"}}>Rubik Beastly</li>
              <li style={{fontFamily: "Neonderthaw"}}>Neonderthaw</li>
              <li style={{fontFamily: "Pacifico"}}>Pacifico</li>
            </ul>
          </article>

          <section>
            <ul className="fontbox">
              <li tabIndex="0" name='text' id="Lobster Two" className='Lobster Two'><div name='fontname' className='showfontname'>Lobster Two</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Bangers" className='Bangers'><div name='fontname' className='showfontname'>Bangers</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Sacramento" className='Sacramento'><div name='fontname' className='showfontname'>Sacramento</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Gloria Hallelujah" className='Gloria Hallelujah'><div name='fontname' className='showfontname'>Gloria Hallelujah</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Festive" className='Festive'><div name='fontname' className='showfontname'>Festive</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Neucha" className='Neucha'><div name='fontname' className='showfontname'>Neucha</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Ole" className='Ole'><div name='fontname' className='showfontname'>Ole</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Creepster" className='Creepster'><div name='fontname' className='showfontname'>Creepster</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Comforter" className='Comforter'><div name='fontname' className='showfontname'>Comforter</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Roboto" className='Roboto'><div name='fontname' className='showfontname'>Roboto</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Mochiy Pop P One" className='Mochiy Pop P One'><div name='fontname' className='showfontname'>Mochiy Pop P One</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Sedgwick Ave" className='Sedgwick Ave'><div name='fontname' className='showfontname'>Sedgwick Ave</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Source Code Pro" className='Source Code Pro'><div name='fontname' className='showfontname'>Source Code Pro</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Rubik Beastly" className='Rubik Beastly'><div name='fontname' className='showfontname'>Rubik Beastly</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Neonderthaw" className='Neonderthaw'><div name='fontname' className='showfontname'>Neonderthaw</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' id="Pacifico" className='Pacifico'><div name='fontname' className='showfontname'>Pacifico</div>Almost before we knew it, we had left the ground.</li>
            </ul>
          </section>

          <article className="popup">
            <section>
              <h4 className='title'>text</h4>
              <ul className='content'>
                <li style={{fontWeight:'200'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'200', fontStyle: 'italic'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'400'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'400', fontStyle: 'italic'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'600'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'600', fontStyle: 'italic'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'900'}}>Almost before we knew it, we had left the ground.</li>
                <li style={{fontWeight:'900', fontStyle: 'italic'}}>Almost before we knew it, we had left the ground.</li>
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
