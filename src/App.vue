<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html,
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    color:#0C0C0C;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .clearfix:after {
    display: block;
    content: "";
    height: 0;
    width: 100%;
    clear: both;
  }
  a {
    text-decoration: none !important;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  p{
    font-size:0.32rem;
  }
  select {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  input {
    -webkit-appearance: none;
  }
  .bottom-margin {
    width:100%;
    overflow: hidden;
    height:1.8rem;
  }

</style>
