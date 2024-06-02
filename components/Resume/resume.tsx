import React from 'react'
import DropDown from '../DropDown/dropDown'
import styles from './resume.module.scss'
import WhoopExp from './Experience/Whoop/whoopExp'
import BisExp from './Experience/14BisAero/14bisAero'
import { DKExp } from './Experience/Whoop/dkExp'

const Resume = () => {
  
  return (
    <div className={styles.resumeContainer}>
        <DropDown title={"Experience"}>
          <DKExp />
          <WhoopExp />
          <BisExp />
        </DropDown>
        <DropDown title={"Skills"}>
          <DropDown title={"Languages / Frameworks"} body={"Typescript, Javascript, HTML, Css, React, NextJS, Redux, NodeJS, Express, PostgreSQL, Java, Jest, Cypress"} />
          <DropDown title={"Software"} body={"Postman, DataGrip, IntelliJ, Git, VSCode, Vim, AWS"} />
        </DropDown>
        <DropDown title={"Education"}>
          <DropDown title={"Wentworth Institute of Technology"} body={"Bachelor of Science in Computer Engineering, Minor in Computer Science"}/>
        </DropDown>
    </div>
  )
}

export default Resume
