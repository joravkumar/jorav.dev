import * as React from "react"
import { UpDown, UpDownWide } from "../Elements/Animation"
import Content from "../Elements/content"
import Divider from "../Elements/Divider"
import Inner from "../Elements/inner"
import Svg from "../Elements/Svg"
import * as styles from "./About.module.css"

const About = ({ offset, factor = 1 }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <h2 className={styles.h2}>About Me</h2>
        <ul>
          <li>
            I'm a computer science grad who started tinkering with code in high
            school and never stopped.
          </li>

          <li>
            I got into coding because I heard it was the future, but now I'm
            pretty sure it's the present, so I'm just trying to keep up.
          </li>
          <li>
            When I'm not coding, you can usually find me on a trip, eating
            something, or pondering the ultimate question: tabs or spaces?
          </li>
        </ul>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <Svg icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <Svg
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_brightest"
          left="93%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <Svg
          icon="circle"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <Svg
          icon="triangle"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <Svg
          icon="circle"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="14%"
        top="20%"
      />
      <Svg icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <Svg
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
)

export default About
