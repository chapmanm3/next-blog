import type { NextPage } from 'next'
import Head from 'next/head'
import Resume from '../components/Resume/resume'

const ResumePage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Matt Chapmans&apos;s Resume Page</title>
      </Head>
      <Resume /> 
    </>
  )
}

export default ResumePage
