import * as React from "react"
import Divider from "../../components/Elements/Divider"
import Inner from "../Elements/inner"
import { UpDown, UpDownWide } from "../../components/Elements/Animation"
import Svg from "../../components/Elements/Svg"
import * as styles from "./Intro.module.css"
import Content from "../Elements/content"
// import Intro from "../../sections/intro.mdx"

const Main = ({ offset, factor = 1 }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="triangle"
          hiddenMobile
          width={56}
          stroke
          color="icon_orange"
          left="25%"
          top="70%"
        />
        <Svg
          icon="hexa"
          width={48}
          stroke
          color="icon_red"
          left="60%"
          top="70%"
        />
        <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_blue"
          left="80%"
          top="10%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="50%"
        />
        <Svg
          icon="circle"
          width={16}
          color="icon_darker"
          left="70%"
          top="90%"
        />
        <Svg
          icon="triangle"
          width={16}
          stroke
          color="icon_darkest"
          left="30%"
          top="65%"
        />
        <Svg
          icon="cross"
          width={16}
          stroke
          color="icon_pink"
          left="28%"
          top="15%"
        />
        <Svg
          icon="circle"
          width={6}
          color="icon_darkest"
          left="75%"
          top="10%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="circle"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="5%"
        top="70%"
      />
      <Svg icon="circle" width={6} color="icon_darkest" left="14%" top="20%" />
      <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg
        icon="upDown"
        hiddenMobile
        width={24}
        color="icon_darker"
        left="40%"
        top="80%"
      />
      <Svg
        icon="triangle"
        width={8}
        stroke
        color="icon_darker"
        left="25%"
        top="5%"
      />
      <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
      <Svg
        icon="box"
        hiddenMobile
        width={64}
        color="icon_purple"
        left="5%"
        top="90%"
      />
      <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg
        icon="hexa"
        width={16}
        stroke
        color="icon_darker"
        left="10%"
        top="50%"
      />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_darker"
        left="80%"
        top="70%"
      />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <h1 className={styles.h1}>
          Hey there, I'm Jorav, a developer who's always down to code!
        </h1>
        <ul>
          <li>
            My favorite things to build are the ones that make people smile and
            go "whoa, that's so cool!"
          </li>
          <li>
            I've been working with JavaScript for 7+ years, and I'm still trying
            to figure out if it's a blessing or a curse.
          </li>
          <li>
            If you're looking for someone who loves to make bad puns and write
            even worse code, you've come to the right place.
          </li>
        </ul>
        <p className={styles.p}></p>
        <p className={styles.p}></p>
      </Inner>
    </Content>
  </div>
)

export default Main
