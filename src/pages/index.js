import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Stream Journal</h1>
    <h2>Learning about the tiny stream I live beside.</h2>
    <div>A blog will go here, but first I'll learn about Gatsby.</div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <Link to="/about/">About</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
