import mdfile from "../../README.md";
import markdownIt from "markdown-it";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";
import css from "highlight.js/lib/languages/css";
//import "highlight.js/styles/github.css";
import "github-markdown-css";
import "highlight.js/styles/atom-one-light.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("css", css);

const highlight = function(str, lang) {
  console.log("highilight called");
  if (lang && hljs.getLanguage(lang)) {
    console.log("highilight lang found");
    try {
      console.log("highilight ok");
      return hljs.highlight(lang, str).value;
    } catch (__) {}
  }

  return ""; // use external default escaping
};

const mdi = markdownIt({
  html: true,
  highlight: highlight
});

export default function() {
  var result = mdi.render(mdfile);

  return `<div class="markdown-body">${result}</div>`;
}
