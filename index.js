import "./debug";
import getMarkdownHtml from "./src/js/markdown";
import { runHighlight } from "./src/js/markdown";

document.body.innerHTML += getMarkdownHtml();
runHighlight();
