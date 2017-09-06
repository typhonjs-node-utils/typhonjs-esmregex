/**
 * Provides a regexp to detect ES Modules. This test works in the 99% case and tests against ES module import and
 * export statements that conform to the ES2015+ standard and any additional stage 1+ TC39 proposals.
 *
 * Note: This regex test will not correctly for multi-line import or export statements currently.
 *
 * @type {RegExp}
 */
// ES2015 - SystemJS ~2 years ago. 7 errors just proposal errors
// module.exports = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s* (\{|default|function|class|var|const|let|async\s+function))/;

// current SystemJS - space changes + (?!type). 9 errors including compound import regression and proposal errors
// module.exports = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?(?!type)([^"'\(\)\n; ]+)\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/;

// mod current SystemJS - old space placement from initial ES2015 + (?!type). 7 errors just proposal errors
module.exports = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?(?!type)([^"'\(\)\n;]+)\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s* (\{|default|function|class|var|const|let|async\s+function))/;
