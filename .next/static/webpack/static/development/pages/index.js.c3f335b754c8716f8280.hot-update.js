webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/digital/Projects/book/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* eslint-disable react/react-in-jsx-scope */\nconst hero = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 20\n  }\n}, \"hero\");\n\nconst search = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 22\n  }\n}, \"search\");\n\nconst categories = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 26\n  }\n}, \"categories\");\n\nconst books_feed = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 26\n  }\n}, \"books_feed\");\n\nconst chapters_feed = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 29\n  }\n}, \"chapters_feed\");\n\nconst ChaptersFeed = () => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 28\n  }\n}, \"chapters_feed\");\n\n_c = ChaptersFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }\n}, \"hi\", __jsx(\"hero\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }\n}), __jsx(\"search\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }\n}), __jsx(\"categories\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }\n}), __jsx(\"books_feed\", {\n  title: \"Trending\",\n  sort: \"trending\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }\n}), __jsx(\"books_feed\", {\n  title: \"Latest series\",\n  sort: \"newest\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }\n}), __jsx(\"chapters_feed\", {\n  title: \"Latest updates\",\n  sort: \"newest\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }\n}), __jsx(ChaptersFeed, {\n  title: \"Latest updates\",\n  sort: \"newest\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }\n})));\n\nvar _c;\n\n$RefreshReg$(_c, \"ChaptersFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJoZXJvIiwic2VhcmNoIiwiY2F0ZWdvcmllcyIsImJvb2tzX2ZlZWQiLCJjaGFwdGVyc19mZWVkIiwiQ2hhcHRlcnNGZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQW5COztBQUVBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBckI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBekI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBekI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBNUI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBM0I7O0tBQU1BLFk7QUFFUyxxRUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUpGLEVBS0U7QUFBWSxPQUFLLEVBQUMsVUFBbEI7QUFBNkIsTUFBSSxFQUFDLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMRixFQU1FO0FBQVksT0FBSyxFQUFDLGVBQWxCO0FBQWtDLE1BQUksRUFBQyxRQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTkYsRUFPRTtBQUFlLE9BQUssRUFBQyxnQkFBckI7QUFBc0MsTUFBSSxFQUFDLFFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFQRixFQVFFLE1BQUMsWUFBRDtBQUFjLE9BQUssRUFBQyxnQkFBcEI7QUFBcUMsTUFBSSxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSRixDQURGIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcmVhY3QtaW4tanN4LXNjb3BlICovXG5cbmNvbnN0IGhlcm8gPSAoKSA9PiA8ZGl2Pmhlcm88L2Rpdj5cblxuY29uc3Qgc2VhcmNoID0gKCkgPT4gPGRpdj5zZWFyY2g8L2Rpdj5cblxuY29uc3QgY2F0ZWdvcmllcyA9ICgpID0+IDxkaXY+Y2F0ZWdvcmllczwvZGl2PlxuXG5jb25zdCBib29rc19mZWVkID0gKCkgPT4gPGRpdj5ib29rc19mZWVkPC9kaXY+XG5cbmNvbnN0IGNoYXB0ZXJzX2ZlZWQgPSAoKSA9PiA8ZGl2PmNoYXB0ZXJzX2ZlZWQ8L2Rpdj5cbmNvbnN0IENoYXB0ZXJzRmVlZCA9ICgpID0+IDxkaXY+Y2hhcHRlcnNfZmVlZDwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgaGlcbiAgICA8aGVybyAvPlxuICAgIDxzZWFyY2ggLz5cbiAgICA8Y2F0ZWdvcmllcyAvPlxuICAgIDxib29rc19mZWVkIHRpdGxlPVwiVHJlbmRpbmdcIiBzb3J0PVwidHJlbmRpbmdcIiAvPlxuICAgIDxib29rc19mZWVkIHRpdGxlPVwiTGF0ZXN0IHNlcmllc1wiIHNvcnQ9XCJuZXdlc3RcIiAvPlxuICAgIDxjaGFwdGVyc19mZWVkIHRpdGxlPVwiTGF0ZXN0IHVwZGF0ZXNcIiBzb3J0PVwibmV3ZXN0XCIgLz5cbiAgICA8Q2hhcHRlcnNGZWVkIHRpdGxlPVwiTGF0ZXN0IHVwZGF0ZXNcIiBzb3J0PVwibmV3ZXN0XCIgLz5cbiAgPC9kaXY+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})