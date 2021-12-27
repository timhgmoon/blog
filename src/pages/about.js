import * as React from 'react'
import ContactForm from '../components/ContactForm'
import MyNav from '../components/myNav'
import {container, discord, title} from '../components/index.module.css'
const About = () => {
  return (
    <main>
      <title>About Me</title>
      <MyNav></MyNav>
      <div className={container}>
        <h1 className={title}>About Me</h1>
        <p>Just a personal blog that I can refer back to for recent leetcode problems and projects. I've also included a discord bot that will send leetcode questions at a certain time interval. <a className={discord} rel="noreferrer" href="https://discord.gg/AFkUgVbN" target="_blank">Feel free to join here.</a> </p>
        <ContactForm></ContactForm>
      </div>
      
    </main>
  )
}

export default About