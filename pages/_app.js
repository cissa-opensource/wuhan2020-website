// Follow https://github.com/tailwindcss/setup-examples/blob/master/examples/nextjs/pages/_app.js
// to see the explanation for this file _app.js

import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

export default MyApp;