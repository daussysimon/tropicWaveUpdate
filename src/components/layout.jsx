import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import "../assets/styles/styles.scss";

/* eslint-disable */

export function Layout({ children }, ...props) {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="android-chrome"
          sizes="180x180"
          href={`${withPrefix("/")}img/android-chrome-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-grand.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-petit.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />
        <meta property="og:image" content={`${withPrefix("/")}img/og.png`} />
        {props?.helmet}
      </Helmet>
      <div className="layout">{children}</div>
    </>
  );
}
