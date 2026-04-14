import React from 'react'
import DropDown from '../DropDown/dropDown'
import styles from './resume.module.scss'
import StealthStartup from './Experience/StealthStartup/StealthStartup'
import WhoopExp from './Experience/Whoop/whoopExp'
import BisExp from './Experience/14BisAero/14bisAero'
import { DKExp } from './Experience/Draftkings/DkExp'

const Resume = () => {
  
  return (
    <div className={styles.resumeContainer}>
        <div className={styles.downloadLink}>
          <a href="/Matt_Chapman_Resume.md" download>Download Resume (.md)</a>
        </div>
        <DropDown title={"Experience"}>
          <StealthStartup />
          <DKExp />
          <WhoopExp />
          <BisExp />
        </DropDown>
        <DropDown title={"Skills"} body={"Typescript, React, Next.js, Node.js, HTML, CSS, Remix, React Query, Prisma, Zod, Neon (Postgres), Vercel, PostHog, Neovim, Claude Code, AI-Assisted Development"} />
        <DropDown title={"Education"}>
          <DropDown title={"Wentworth Institute of Technology"} body={"Bachelor of Science in Computer Engineering, Minor in Computer Science"}/>
        </DropDown>
    </div>
  )
}

export default Resume
