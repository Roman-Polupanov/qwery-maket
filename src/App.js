import logo from './logo.svg';
import './App.css';
import './css/index.css'
import './css/reset.css'

function App() {
  return (
    <div className="App">
      <div class="cover-space">
        <header class="header">
          <div class="header__content">
            <a class="logo" href="/">
              <h1 class="logo__title">QWERy</h1>
            </a>
            <nav class="main-nav header__center">
              <ul class="main-nav__list">
                <li class="main-nav__item">
                  <a class="main-nav__link main-nav__link_active" href="#">Information</a>
                </li>

                <li>
                  <a class="main-nav__link" href="#">About us</a>
                </li>

                <li>
                  <a class="main-nav__link" href="#">Culture</a>
                </li>
              </ul>
            </nav>
            <label for="name" class="search">
              <div class="search__icon" src="#"></div>
              <input class="search__form" type="text" placeholder="Search" />
            </label>
          </div>
        </header>
      </div>

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
    </div>
  );
}

export default App;
