"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/date */ \"./components/date.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n/* eslint-disable @next/next/link-passhref */ \n\n\n\n\nvar __N_SSG = true;\nfunction Home(param1) {\n    var allPostsData = param1.allPostsData;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        home: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle\n                }, void 0, false, {\n                    fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                lineHeight: \"1.5\",\n                textAlign: \"justify\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        fontSize: \"2xl\",\n                        fontWeight: \"bold\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                        mt: 6,\n                        listStyleType: \"none\",\n                        spacing: 5,\n                        children: allPostsData.map(function(param) {\n                            var id = param.id, date = param.date, title = param.title;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                p: \"0px\",\n                                m: \"0px\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/posts/\".concat(id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                                            children: title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 9\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 8\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 8\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                        color: \"#9C9C9C\",\n                                        fontSize: \"sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            dateString: date\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 9\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 8\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 7\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rickbrown/React/portfolio-website/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBNkMsNENBQ2pCO0FBQzRCO0FBRXhCO0FBQ0s7QUFjWjs7QUFFVixRQUFRLENBQUNVLElBQUksQ0FBQyxNQUE2QixFQUFFLENBQUM7UUFBOUJDLFlBQVksR0FBZCxNQUE2QixDQUEzQkEsWUFBWTs7SUFDMUMsTUFBTSw2RUFDSlYsMERBQU07UUFBQ1csSUFBSTs7d0ZBQ1ZaLGtEQUFJO3NHQUNIYSxDQUFLOzhCQUFFWCx5REFBUzs7Ozs7Ozs7Ozs7d0ZBR2pCRyxpREFBRztnQkFBQ1MsVUFBVSxFQUFDLENBQUs7Z0JBQUNDLFNBQVMsRUFBQyxDQUFTOztnR0FnRHZDUCxrREFBSTt3QkFBQ1EsUUFBUSxFQUFDLENBQUs7d0JBQUNDLFVBQVUsRUFBQyxDQUFNO2tDQUFDLENBRXZDOzs7Ozs7Z0dBQ0NSLDJEQUFhO3dCQUFDUyxFQUFFLEVBQUUsQ0FBQzt3QkFBRUMsYUFBYSxFQUFDLENBQU07d0JBQUNDLE9BQU8sRUFBRSxDQUFDO2tDQUNuRFQsWUFBWSxDQUFDVSxHQUFHLENBQUMsUUFBUTtnQ0FBTEMsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFVixLQUFLLFNBQUxBLEtBQUs7K0dBQ2xDTixzREFBUTtnQ0FBVWlCLENBQUMsRUFBQyxDQUFLO2dDQUFDQyxDQUFDLEVBQUMsQ0FBSzs7Z0hBQ2hDdEIsa0RBQVE7d0NBQUN1QixJQUFJLEVBQUcsQ0FBTyxTQUFLLE9BQUhKLEVBQUU7OEhBQzFCaEIsa0RBQUk7c0RBQUVPLEtBQUs7Ozs7Ozs7Ozs7O2dIQUVaYyxDQUFFOzs7OztnSEFDRm5CLGtEQUFJO3dDQUFDb0IsS0FBSyxFQUFDLENBQVM7d0NBQUNaLFFBQVEsRUFBQyxDQUFJOzhIQUNqQ1osd0RBQUk7NENBQUN5QixVQUFVLEVBQUVOLElBQUk7Ozs7Ozs7Ozs7OzsrQkFOVEQsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjdkIsQ0FBQztLQTFFdUJaLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9saW5rLXBhc3NocmVmICovXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBEYXRlIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZSdcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IEFsbFBvc3REYXRhIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQge1xuXHRCb3gsXG5cdExpbmssXG5cdExpc3RJdGVtLFxuXHRUYWIsXG5cdFRhYnMsXG5cdFRhYkxpc3QsXG5cdFRhYlBhbmVsLFxuXHRUYWJQYW5lbHMsXG5cdFRleHQsXG5cdFVub3JkZXJlZExpc3Rcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFsbFBvc3RzRGF0YSB9OiBBbGxQb3N0RGF0YSkge1xuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQgaG9tZT5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8Qm94IGxpbmVIZWlnaHQ9JzEuNScgdGV4dEFsaWduPSdqdXN0aWZ5Jz5cblx0XHRcdFx0ey8qIDxUZXh0PlxuXHRcdFx0XHRcdEhlbGxvLiBJJmFwb3M7bSBhIHNlbGYgdGF1Z2h0IGRldmVsb3BlciBhbmQgbGlmZS1sb25nIGxlYXJuZXIgYmFzZWQgaW5cblx0XHRcdFx0XHR0aGUgU291dGggRWFzdCBvZiBFbmdsYW5kLiBJIGVuam95IHR1cm5pbmcgY29tcGxleCBwcm9ibGVtcyBpbnRvXG5cdFx0XHRcdFx0c2ltcGxlLCBiZWF1dGlmdWwgYW5kIGludHVpdGl2ZSB1c2VyIGV4cGVyaWVuY2VzLiBXaGVuIEkmYXBvczttIG5vdFxuXHRcdFx0XHRcdHB1c2hpbmcgcGl4ZWxzLCB5b3UmYXBvcztsbCBmaW5kIG1lIHJlYWRpbmcsIGNvb2tpbmcsIGdhcmRlbmluZyBvclxuXHRcdFx0XHRcdHdhbGtpbmcgaW4gdGhlIGJlYXV0aWZ1bCBFbmdsaXNoIGNvdW50cnlzaWRlLlxuXHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHQ8L0JveD5cblxuXHRcdFx0PEJveCBmb250U2l6ZT0nMS4xcmVtJyBsaW5lSGVpZ2h0PScxLjUnIHB0PXsxfT5cblx0XHRcdFx0PFRhYnMgaXNGaXR0ZWQgc2l6ZT0nbGcnIHZhcmlhbnQ9J2VuY2xvc2VkJz5cblx0XHRcdFx0XHQ8VGFiTGlzdD5cblx0XHRcdFx0XHRcdDxUYWI+QmxvZzwvVGFiPlxuXHRcdFx0XHRcdFx0PFRhYj5Qcm9qZWN0czwvVGFiPlxuXHRcdFx0XHRcdFx0PFRhYj5Db250YWN0IE1lPC9UYWI+XG5cdFx0XHRcdFx0PC9UYWJMaXN0PlxuXHRcdFx0XHRcdDxUYWJQYW5lbHM+XG5cdFx0XHRcdFx0XHQ8VGFiUGFuZWw+XG5cdFx0XHRcdFx0XHRcdDxVbm9yZGVyZWRMaXN0XG5cdFx0XHRcdFx0XHRcdFx0bXQ9ezZ9XG5cdFx0XHRcdFx0XHRcdFx0bGlzdFN0eWxlVHlwZT0nbm9uZSdcblx0XHRcdFx0XHRcdFx0XHRzcGFjaW5nPXs1fVxuXHRcdFx0XHRcdFx0XHRcdC8vIG92ZXJmbG93WT0nc2Nyb2xsJ1xuXHRcdFx0XHRcdFx0XHRcdC8vIGhlaWdodD17MjAwfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbSBrZXk9e2lkfSBwPScwcHgnIG09JzBweCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOZXh0TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbms+e3RpdGxlfTwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OZXh0TGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPScjOUM5QzlDJyBmb250U2l6ZT0nc20nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvVW5vcmRlcmVkTGlzdD5cblx0XHRcdFx0XHRcdDwvVGFiUGFuZWw+XG5cdFx0XHRcdFx0XHQ8VGFiUGFuZWw+XG5cdFx0XHRcdFx0XHRcdDxoMT5Qcm9qZWN0czwvaDE+XG5cdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxuXHRcdFx0XHRcdFx0PFRhYlBhbmVsPlxuXHRcdFx0XHRcdFx0XHQ8aDE+Q29udGFjdCBNZTwvaDE+XG5cdFx0XHRcdFx0XHQ8L1RhYlBhbmVsPlxuXHRcdFx0XHRcdDwvVGFiUGFuZWxzPlxuXHRcdFx0XHQ8L1RhYnM+ICovfVxuXG5cdFx0XHRcdDxUZXh0IGZvbnRTaXplPScyeGwnIGZvbnRXZWlnaHQ9J2JvbGQnPlxuXHRcdFx0XHRcdEJsb2dcblx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHQ8VW5vcmRlcmVkTGlzdCBtdD17Nn0gbGlzdFN0eWxlVHlwZT0nbm9uZScgc3BhY2luZz17NX0+XG5cdFx0XHRcdFx0e2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcblx0XHRcdFx0XHRcdDxMaXN0SXRlbSBrZXk9e2lkfSBwPScwcHgnIG09JzBweCc+XG5cdFx0XHRcdFx0XHRcdDxOZXh0TGluayBocmVmPXtgL3Bvc3RzLyR7aWR9YH0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbms+e3RpdGxlfTwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9OZXh0TGluaz5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPScjOUM5QzlDJyBmb250U2l6ZT0nc20nPlxuXHRcdFx0XHRcdFx0XHRcdDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvVW5vcmRlcmVkTGlzdD5cblx0XHRcdDwvQm94PlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdGFsbFBvc3RzRGF0YVxuXHRcdH1cblx0fVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMYXlvdXQiLCJzaXRlVGl0bGUiLCJOZXh0TGluayIsIkRhdGUiLCJCb3giLCJMaW5rIiwiTGlzdEl0ZW0iLCJUZXh0IiwiVW5vcmRlcmVkTGlzdCIsIkhvbWUiLCJhbGxQb3N0c0RhdGEiLCJob21lIiwidGl0bGUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibXQiLCJsaXN0U3R5bGVUeXBlIiwic3BhY2luZyIsIm1hcCIsImlkIiwiZGF0ZSIsInAiLCJtIiwiaHJlZiIsImJyIiwiY29sb3IiLCJkYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});