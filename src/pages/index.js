import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="RightRooms" />
    <div style=%20maxWidth%3A%20%60300px%60%2C%20marginBottom%3A%20%601.45rem%60%20>
      <Image />
    </div>
    <h1>Here’s the problem …</h1>
    <p>If you find it hard to find the right hotel room for you, you're not alone.</p>
    <p>It's easy to find out if there's a coffee maker, WiFi, even a trouser press.</p>
    <p>But finding out if a hotel has step free access, a lift, or your room has a walk in shower? Not so easy.</p>
    <p>And yet, at least one in five travellers wants to confirm there are the specific features they need in their room. From the traveller who just can’t manage stairs easily, or wants the windows to open, to the traveller who has sight loss.</p>
 <h1>… And here’s what we’re doing about it</h1>
    <p>We’re on a mission to help every traveller find their just right room.</p>
    <p>We want to eliminate all the time and stress searching for it. And the unwelcome surprises and hassle that can come from not quite being able to book it. </p>

    
  </Layout>
)

export default IndexPage
