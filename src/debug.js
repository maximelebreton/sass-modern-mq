export class debugSassMqRatio {
  constructor() {
    this.init();
  }

  init() {
    this.cssVarNames = this.getCssVarNames();
    if (this.isDebug()) {
      console.log(this.cssVarNames);
      this.addHtmlToBody(this.getDebugHtml());
    }
  }

  isDebug() {
    return this.cssVarNames.includes("--mq-debug-responsive");
  }

  getDebugHtml() {
    let html = ``;

    html += `

    `;
    html += `
    <div class="mq-container">
      <div class="mq-ratio-models">
        <div class="mq-landscape-ratio"></div>
        <div class="mq-square-ratio"></div>
        <div class="mq-portrait-ratio"></div>
      </div>
      <div class="mq-rules">
      ${this.cssVarNames
        .map(name => `<div class="${this.rename(name)}"></div>`)
        .join("")}
      </div>
    </div>
    `;

    return html;
  }

  addHtmlToBody(html) {
    document.querySelector("body").innerHTML += html;
  }

  rename(value) {
    let renamedValue = value;
    renamedValue = renamedValue.replace(">", "greater-");
    renamedValue = renamedValue.replace("<", "less-");
    renamedValue = renamedValue.replace("=", "equal-");
    renamedValue = renamedValue.replace("!", "not-");
    return renamedValue;
  }

  getCssVarNames() {
    const rules = Array.from(document.styleSheets)
      .filter(
        sheet =>
          sheet.href === null || sheet.href.startsWith(window.location.origin)
      )
      .reduce(
        (acc, sheet) =>
          (acc = [
            ...acc,
            ...Array.from(sheet.cssRules).reduce(
              (def, rule) =>
                (def =
                  rule.selectorText === ":root"
                    ? [
                        ...def,
                        ...Array.from(rule.style).filter(name =>
                          name.startsWith("--")
                        )
                      ]
                    : def),
              []
            )
          ]),
        []
      );
    return rules;
  }
}

export default new debugSassMqRatio();
