import React from "react"
import { Helmet } from "react-helmet"

export default function Seo() {
  return <Helmet>
    <title>Yaroslav Zotov | Fullstack developer</title>
    <meta name="title" content="Yaroslav Zotov | Fullstack developer" />
    <meta name="description" content="Personal portfolio of Fullstack web and mobile developer Yaroslav Zotov" />
    <meta name="keywords"
          content="react, nextjs, gatsby, development, developer, fullstack, flutter, database, programmer, code, coding, mongodb, postgres, typescript, ui, ux. express, expressjs, asp, dotnet, api, website, mobile, app, webapp, pwa, spa, ssr, sass, css, scss, webdeveloper, webdev" />
    <meta name="robots" content="index, follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta property="og:image" content="/og-image.png" />
  </Helmet>
}
