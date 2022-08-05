import type { NextPage } from 'next'
import Head from 'next/head'
import Resume from '../components/Resume/resume'

const ResumePage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Matt Chapmans&apos;s Resume Page</title>
        <meta name="description" content="My Resume page with dropdown&apos;s containing my work experience, current tech stack, and education" />
      </Head>
      <Resume /> 
    </>
  )
}

export default ResumePage
