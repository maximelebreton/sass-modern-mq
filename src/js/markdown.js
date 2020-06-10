import mdfile from "/README.md";
import markdownIt from "markdown-it/dist/markdown-it.min.js";
import markdownItHighlight from "markdown-it-highlight/dist/index.js";

const mdi = markdownIt();
mdi.use(markdownItHighlight);

export default function() {
  var result = mdi.render(mdfile);

  return `<div class="markdown-body">${result}</div>`;
}
