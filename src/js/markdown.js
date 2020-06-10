import mdfile from "../../README.md";
import markdownIt from "markdown-it";
import markdownItHighlight from "markdown-it-highlight";

const mdi = markdownIt({
  html: true
});
mdi.use(markdownItHighlight);

export default function() {
  var result = mdi.render(mdfile);

  return `<div class="markdown-body">${result}</div>`;
}
