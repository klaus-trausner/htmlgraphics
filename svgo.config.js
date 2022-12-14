// https://github.com/svg/svgo#what-it-can-do

/**
 * @type {import("svgo").OptimizeOptions}
 */
export const svgoConfig = {
  plugins: [
    "cleanupAttrs",
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    "removeTitle",
    "removeDesc",
    "removeUselessDefs",
    "removeEditorsNSData",
    "removeEmptyAttrs",
    // "removeHiddenElems",
    // "removeEmptyText",
    "removeEmptyContainers",
    // "removeViewBox",
    "cleanupEnableBackground",
    // "convertStyleToAttrs",
    "convertColors",
    "convertPathData",
    "convertTransform",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeUnusedNS",
    // "cleanupIDs",
    "cleanupNumericValues",
    "moveElemsAttrsToGroup",
    // "moveGroupAttrsToElems",
    // "collapseGroups",
    // "removeRasterImages",
    // "mergePaths",
    // "convertShapeToPath",
    "sortAttrs",
    "removeDimensions",
    // { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
  ],
};
