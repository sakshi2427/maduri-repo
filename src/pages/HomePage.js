import React from 'react'
import splitLogo from '../img/splitLogo.jpg'
import codeSceneLogo from '../img/CodeSceneLogo.jpg'

export default function HomePage() {
  return (
    <main>
      <div className='App-intro'>
        This example showcases Split React functions.
      </div>
      <div className='App-intro'>
        All pages render the same HTML output, but using different approaches for accessing features flags and treatments.
      </div>
      <div className='App-intro'>
       Let's have a look and understand. Also how both Split.io and COdeScene complement each other.  </div>
       <img src={splitLogo} className='App-logo' alt='logo' />
       <h1>+</h1>
       <img src={codeSceneLogo} className='App-logo' alt='logo' />
    </main>
  )
}
