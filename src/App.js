import './css/index.css'
import './css/reset.css'
import { A_link, Body_html, Cover_space, Header_content, Header_q, Main_nav } from './css';

function App() {
  return (
    <div className="App">
      <Body_html>
        <Cover_space>
          <Header_q>
            <Header_content>
              <A_link class="logo" href="/">
                <h1 class="logo__title">QWERy</h1>
              </A_link>
              <Main_nav>
                <ul class="main-nav__list">
                  <li class="main-nav__item">
                    <A_link class="main-nav__link main-nav__link_active" href="#">Information</A_link>
                  </li>

                  <li>
                    <A_link class="main-nav__link" href="#">About us</A_link>
                  </li>

                  <li>
                    <A_link class="main-nav__link" href="#">Culture</A_link>
                  </li>
                </ul>
              </Main_nav>
              <label for="name" class="search">
                <div class="search__icon" src="#"></div>
                <input class="search__form" type="text" placeholder="Search" />
              </label>
            </Header_content>
          </Header_q>
        </Cover_space>

        <section class="section section-main">
          <div class="section-main">
            <div class="main-title">
              <div class="main-title__summary">Explore the Nature Beauty
              </div>
              <h1 class="main-title__text">Discover
                <span class="main-title__text_regular">Wonderful Indonesia</span>
              </h1>
            </div>
            <div class="social-networks">
              <h3 class="social-networks__title">Follow us</h3>
              <ul class="social-networks__list">
                <li class="social-networks__item">
                  <a class="social-networks__link" href="#">
                    <div class="icon__instagram"></div>
                  </a>
                </li>
                <li class="social-networks__item">
                  <a class="social-networks__link" href="#">
                    <div class="icon__twitter"></div>
                  </a>
                </li>
                <li class="social-networks__item">
                  <a class="social-networks__link" href="#">
                    <div class="icon__facebook"></div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="scroll-down">
              Scroll down
              <div class="scroll-down__icon icon__arrow_downward"></div>
            </div>
          </div>
        </section>

      </Body_html>

    </div>
  );
}

export default App;
