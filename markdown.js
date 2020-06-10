import mdfile from "./README.md";
import markdownIt from "markdown-it";
import markdownItHighlight from "markdown-it-highlight";
import "markdown-it-highlight/dist/index.css";

const mdi = markdownIt();
mdi.use(markdownItHighlight);

export default function() {
  var result = mdi.render(mdfile);

  return `<div class="markdown-body">
  ${result}
  </div>`;
}
