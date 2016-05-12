import React from 'react'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import './example.less'

// Styles for highlighted code blocks.
// import 'css/zenburn.css'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className="content flex">
          <img className="profile-img" alt="profile img" src="https://pbs.twimg.com/profile_images/520656033501286400/y6gnsa15.jpeg" />
          <div className="flex--basis-60 pad-right">
            <h1>Corey Speisman</h1>
            <p className="description">
              I'm a senior developer at Deloitte Digital and an avid learner in my spare time.
            </p>
            <div className="social-links">
              <a href="http://twitter.com/cdspeis">Twitter</a> - <a href="http://github.com/Cspeisman">Github</a> - <a href="https://dl.dropboxusercontent.com/u/13155426/Corey_Speismans_resume.pdf">Resume</a>
            </div>
          </div>
          <div className="right-side-content flex--basis-30">
            <h3>Select Projects</h3>
            <div className="project-list">
              <a href="http://github.com/Cspeisman/Elm-task-list">Elm Task List</a>
              <a href="http://www.funkparade.com/boombox/">Boombox Walk iOS App</a>
              <a href="https://github.com/Cspeisman/reactes-bp">React ES6 Boilerplate</a>
              <a href="https://github.com/heyitsolivia/jifbox">Jifbox</a>
              <a href="https://www.heartful.ly">Heartful.ly</a>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
