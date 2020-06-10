import DebugResponsive from "./debug";
import getMarkdownHtml from "./markdown";

document.body.innerHTML += getMarkdownHtml();

new DebugResponsive();
