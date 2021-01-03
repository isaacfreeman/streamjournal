import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>I have a little stream, and I'd like to learn more about it.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
