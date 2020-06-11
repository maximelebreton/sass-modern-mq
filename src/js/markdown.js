import mdfile from "../../README.md";
import markdownIt from "markdown-it";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";
import css from "highlight.js/lib/languages/css";
import markdownItAnchor from "markdown-it-anchor";
//import "highlight.js/styles/github.css";
import "github-markdown-css";
import "highlight.js/styles/atom-one-light.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("css", css);

// const highlight = function(str, lang) {
//   if (lang && hljs.getLanguage(lang)) {
//     try {
//       return hljs.highlight(lang, str).value;
//     } catch (__) {}
//   }

//   return ""; // use external default escaping
// };

const mdi = new markdownIt({
  html: true
  //highlight: highlight
});

mdi.use(markdownItAnchor, {
  level: 1,
  // slugify: string => string,
  permalink: true,
  // renderPermalink: (slug, opts, state, permalink) => {},
  permalinkClass: "header-anchor",
  permalinkSymbol: "¶",
  permalinkBefore: false
});

export const runHighlight = function() {
  document.querySelectorAll("pre code").forEach(block => {
    hljs.highlightBlock(block);
  });
};

export default function() {
  var result = mdi.render(mdfile);

  return `<div class="markdown-body">${result}</div>`;
}
