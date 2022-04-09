
import './css/reset.css'
import { A_link, Body_h, Cover_space, Header_content, Header_q, Logo, Logo_title, Main_nav, Main_nav__link, Main_nav__list, Search, Search_icon, Search__form } from './css/Header_style';
import { Main_title, Main_title__summary, Section_main, Main_title__text, Main_title__text_regular, Social_networks, Social_networks__title, Social_networks__item, Social_networks__link, Icon__instagram, Icon__facebook, Icon__twitter, Social_networks__list, Scroll_down_cont, Scroll_down } from './css/Section_main_style';

function App() {
  return (
    <Body_h>
      <Cover_space>
        <Header_q>
          <Header_content>
            <A_link class="logo" href="/">
              <Logo>
                <Logo_title>QWERy</Logo_title>
              </Logo>

            </A_link>
            <Main_nav>
              <Main_nav__list>
                <Main_nav__link>
                  <A_link href="#">Information</A_link>
                </Main_nav__link>

                <Main_nav__link>
                  <A_link href="#">About us</A_link>
                </Main_nav__link>

                <Main_nav__link>
                  <A_link href="#">Culture</A_link>
                </Main_nav__link>
              </Main_nav__list>
            </Main_nav>
            <Search>
              <Search_icon src="#"></Search_icon>
              <Search__form type="text" placeholder="Search" />
            </Search>
          </Header_content>
        </Header_q>
      </Cover_space>

      <Section_main>
        <Main_title>
          <Main_title__summary>Explore the Nature Beauty
          </Main_title__summary>
          <Main_title__text>Discover
            <Main_title__text_regular>Wonderful Indonesia</Main_title__text_regular>
          </Main_title__text>
        </Main_title>
        <Social_networks>
          <Social_networks__title>Follow us</Social_networks__title>
          <Social_networks__list>
            <Social_networks__item>
              <Social_networks__link href="#">
                <Icon__instagram />
              </Social_networks__link>
            </Social_networks__item>
            <Social_networks__item>
              <Social_networks__link href="#">
                <Icon__twitter />
              </Social_networks__link>
            </Social_networks__item>
            <Social_networks__item>
              <Social_networks__link href="#">
                <Icon__facebook />
              </Social_networks__link>
            </Social_networks__item>
          </Social_networks__list>
        </Social_networks>
        <Scroll_down_cont>
          Scroll down
          <Scroll_down />
        </Scroll_down_cont>
      </Section_main>

    </Body_h>
  );
}

export default App;
