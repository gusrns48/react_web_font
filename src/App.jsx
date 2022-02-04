import './App.css';
import React from 'react';
import $ from "jquery";
import './style/css/index.css';

class App extends React.Component {

  componentDidMount() {
    $('input').on('change', function () {
      var v = $(this).val();
      $('li[name=text]').css('font-size', v + 'px')
      //$('div[name=fontname]').css('font-size', v / 3 + 'px')

      if(v=='import_link'||v=='import_tag'){
        v = $('.nowfontsize').text();
      }
      $('.nowfontsize').html(v)
    }); 

    $("li[name=text]").keydown(function(keyNum){ //fonts enter > detail popup_page
      if(keyNum.keyCode == 13){
        this.click()
      }
    });

    $("li[name=text]").on("click", function(event) { //fonts click > detail popup_page
      var fontname = this.className.replaceAll(" ","+") //web-font Ex code parameter fontname

      $(".backon").show();
      $(".backon").css("backdrop-filter", 'blur(4px)')

      $(".popup").show(); //popup_page show

      $("input[name=import_type]").each(function() { //radio reset
        $(this).prop('checked', false);
      });

      $(".import_content").hide(); //Ex code reset
      $('.import_code').hide();

      $('.title').html(this.className) //popup title, content font change
      $('.content').css('font-family',this.className)

      $('#radio_btn').click(function () { //web-font Ex code change and show
          var radioVal = $('input[name="import_type"]:checked').val(); //radio checked ?
          if(radioVal == 'import_link'){
            $('.import_code').html('&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt<br>')
            $('.import_code').append('&lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt<br>')
            $('.import_code').append(`&lt;link href=https://fonts.googleapis.com/css2?family=${fontname}&display=swap" rel="stylesheet"&gt;`)
          }
          else if(radioVal == 'import_tag'){
            $('.import_code').html(`&lt;style&gt;@import url('https://fonts.googleapis.com/css2?family=${fontname}&display=swap');&lt;style&gt;`)
          }
          $('.import_code').show();
      });
    });

    $("body").on("click", function(event) { //popup close
      if(event.target.value == 'close' || event.target.className == 'backon'){
          $(".popup").hide();
          $(".backon").hide();
      }
    });

    $(".import_title").keydown(function(keyNum){
      if(keyNum.keyCode == 13){
        this.click()
      }
    });

    $(".import_title").on("click", function(event) { //web-font Ex code swich button
      if($('.import_content').css('display') =='none'){
        $('.import_content').show()
      } else {
        $('.import_content').hide()
      }
    });
  }

  render(){
    return (
      <div> 
        <header>
          <div className='nowfontsize'>50</div><a> px</a>&ensp;
          <input tabIndex="0" type="range" min="8" max="100" step="1" id="slider"/><hr/>
        </header>
        <main>
          <section>
            <ol className="fontbox">
              <li tabIndex="0" name='text' className='Lobster Two'><div name='fontname' className='showfontname'>Lobster Two</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Bangers'><div name='fontname' className='showfontname'>Bangers</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Sacramento'><div name='fontname' className='showfontname'>Sacramento</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Gloria Hallelujah'><div name='fontname' className='showfontname'>Gloria Hallelujah</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Press Start 2P'><div name='fontname' className='showfontname'>Press Start 2P</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Neucha'><div name='fontname' className='showfontname'>Lobster</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Ole'><div name='fontname' className='showfontname'>Lobster</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Creepster'><div name='fontname' className='showfontname'>Creepster</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Comforter'><div name='fontname' className='showfontname'>Comforter</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Roboto'><div name='fontname' className='showfontname'>Roboto</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Mochiy Pop P One'><div name='fontname' className='showfontname'>Mochiy Pop P One</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Sedgwick Ave'><div name='fontname' className='showfontname'>Sedgwick Ave</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Source Code Pro'><div name='fontname' className='showfontname'>Source Code Pro</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Rubik Beastly'><div name='fontname' className='showfontname'>Rubik Beastly</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Neonderthaw'><div name='fontname' className='showfontname'>Neonderthaw</div>Almost before we knew it, we had left the ground.</li>
              <li tabIndex="0" name='text' className='Pacifico'><div name='fontname' className='showfontname'>Pacifico</div>Almost before we knew it, we had left the ground.</li>
            </ol>
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
      </div>
    );
  }
}

export default App;
