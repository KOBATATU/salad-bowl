const { getStoryContext } = require("@storybook/test-runner");
const { injectAxe, checkA11y, configureAxe } = require("axe-playwright");

module.exports = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }
    //ルールがある場合は読み込む
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });
    await checkA11y(page, "#storybook-root", {
      //アクセシビリティがcriticalである場合はエラーとする
      includedImpacts: ["critical"],
      detailedReport: false,
      detailedReportOptions: { html: true },
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};
