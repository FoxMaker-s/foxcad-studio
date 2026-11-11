/**
 * @foxmakers/cad-tools
 * FoxMakers Free Browser-Based CAD Tools
 * 
 * This package provides links and utilities for the FoxMakers CAD Tools suite.
 * The tools run in the browser — no Node.js processing required.
 * 
 * @see https://hub.foxmakers.it/en/tools
 * @license MIT
 */

const FOXMAKERS_TOOLS = {
  stlRepair: 'https://hub.foxmakers.it/en/tools/stl-repair',
  stlToStep: 'https://hub.foxmakers.it/en/tools/stl-to-step',
  objToStl: 'https://hub.foxmakers.it/en/tools/obj-3mf-to-stl',
  foxCadStudio: 'https://hub.foxmakers.it/en/tools',
  embedStlRepair: 'https://hub.foxmakers.it/embed/tools/stl-repair',
  website: 'https://www.foxmakers.it',
  github: 'https://github.com/FoxMaker-s',
};

/**
 * Get embed HTML for FoxMakers STL Repair tool
 * @param {object} options - { width, height, locale }
 * @returns {string} HTML iframe embed code
 */
function getEmbedCode({ width = '100%', height = '600', locale = 'en' } = {}) {
  const url = locale === 'it'
    ? 'https://hub.foxmakers.it/embed/tools/stl-repair?lang=it'
    : 'https://hub.foxmakers.it/embed/tools/stl-repair';
  return `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allow="clipboard-write" loading="lazy" title="FoxMakers STL Repair Tool"></iframe>`;
}

module.exports = { FOXMAKERS_TOOLS, getEmbedCode };