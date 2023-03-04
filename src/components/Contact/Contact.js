import * as React from "react"
import { UpDown, UpDownWide, waveAnimation } from "../Elements/Animation"
import Content from "../Elements/content"
import Divider from "../Elements/Divider"
import Inner from "../Elements/inner"
import Svg from "../Elements/Svg"
import * as styles from "./Contact.module.css"

// const links = [
//   {
//     title: "LinkedIn",
//     url: "https://www.linkedin.com/in/joravkumar/",
//   },
//   {
//     title: "Github",
//     url: "https://github.com/joravkumar",
//   },
//   {
//     title: "Say Hello",
//     url: "mailto:joravkumar@gmail.com",
//   },
// ]
const Contact = ({ offset, factor = 1 }) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        {/* <ContactMDX /> */}
        <h2 className={styles.h2}>
          Want to chat about a project, share a funny meme, or just say hi?
        </h2>

        <ul>
          <li>
            Shoot me an <a href="mailto:joravkumar@gmail.com">email</a>, a
            carrier pigeon, or a smoke signal.
          </li>
          <li>
            I'm always on the lookout for new opportunities to learn and grow as
            a developer, so if you've got a weird idea, I'm all ears.
          </li>
          <li>
            Thanks for stopping by, and remember: there's no problem that can't
            be solved with a little bit of code and a whole lot of coffee.
          </li>
        </ul>
      </Inner>
      {/* <Footer /> */}
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <Svg
          icon="circle"
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
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
        width={6}
        color="icon_brightest"
        left="14%"
        top="20%"
      />
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="60%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_darkest"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
)

export default Contact
