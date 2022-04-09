import './css/reset.css'
import { A_link, Body_h, Cover_space, Header_content, Header_q, Logo, Logo_title, Main_nav, Main_nav__link, Main_nav__list, Search, Search_icon, Search__form } from './css/Header_style';
import { Main_title, Main_title__summary, Section_main, Main_title__text, Main_title__text_regular, Social_networks, Social_networks__title, Social_networks__item, Social_networks__link, Icon__instagram, Icon__facebook, Icon__twitter, Social_networks__list, Scroll_down_cont, Scroll_down } from './css/Section_main_style';
import { Content, Main_title_small, Section_col, Section_cols, Section_col_image, Section_col_cont, Arrow_right, Arrow_right_cont } from './css/Content';

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
          <Scroll_down href="#" />
        </Scroll_down_cont>
      </Section_main>

      <Content>
        <Section_cols>
          <Section_col_image />
          <Section_col>
            <Section_col_cont>
              <Main_title_small>
                <Main_title__summary>EAST NUSA TENGGARA</Main_title__summary>
                <Main_title__text>Have you enjoyed your holiday?</Main_title__text>
              </Main_title_small>
              <p>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism. The beautiful waters of Komodo will make you meet many travelers from other countries.</p>
              <Arrow_right_cont href='#'>
                read more
                <Arrow_right />
              </Arrow_right_cont>
            </Section_col_cont>
          </Section_col>
        </Section_cols>
      </Content>
    </Body_h >
  );
}

export default App;
