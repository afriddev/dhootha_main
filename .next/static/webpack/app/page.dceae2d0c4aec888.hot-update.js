"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/ui/CarouselView.tsx":
/*!*********************************!*\
  !*** ./app/ui/CarouselView.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"(app-pages-browser)/./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaChevronLeft,FaChevronRight!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CarouselView(param) {\n    let { dataArray, autoPlay, dots, speed, clientTestimonials, arrows } = param;\n    _s();\n    const [nextDisabled, setNextDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [prevDisabled, setPrevDiasbled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const settings = {\n        dots: dots ? true : false,\n        infinite: !arrows,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        autoplay: autoPlay,\n        autoplaySpeed: speed ? speed : 2000,\n        afterChange: function(index) {\n            if (index > 0) setPrevDiasbled(false);\n            if (index === 0) setPrevDiasbled(true);\n            if (index === (clientTestimonials === null || clientTestimonials === void 0 ? void 0 : clientTestimonials.length) - 1) setNextDisabled(true);\n            if (index < (clientTestimonials === null || clientTestimonials === void 0 ? void 0 : clientTestimonials.length) - 1) setNextDisabled(false);\n        },\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextArrow, {\n            disabled: nextDisabled\n        }, void 0, false, {\n            fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n            lineNumber: 33,\n            columnNumber: 16\n        }, this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PrevArrow, {\n            disabled: prevDisabled\n        }, void 0, false, {\n            fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n            lineNumber: 34,\n            columnNumber: 16\n        }, this),\n        arrows: arrows\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        ...settings,\n        className: \"relative flex w-full max-w-[92vw] items-center justify-center rounded-lg \".concat(clientTestimonials ? \"lg:max-w-[100vw]   lg:h-[70vh]\" : \"lg:max-w-[50vw]  \"),\n        children: [\n            dataArray && dataArray.length > 0 && !clientTestimonials && (dataArray === null || dataArray === void 0 ? void 0 : dataArray.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"min rounded\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: item.image,\n                        className: \" mr-2 h-[30vh] w-full rounded-lg object-fill  lg:h-[60vh] \"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, this)\n                }, index, false, {\n                    fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this);\n            })),\n            clientTestimonials && clientTestimonials.length > 0 && clientTestimonials.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center  p-4 text-primary-foreground \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center gap-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.image,\n                                    className: \"h-20 w-20 rounded-full object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"text-nowrap text-center text-3xl font-semibold \",\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 px-8 lg:px-[20vw] text-center  font-normal text-primary-foreground/80  \",\n                                children: item.review\n                            }, void 0, false, {\n                                fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(CarouselView, \"ul3DYBd5IFarjJprrmZEfdzmXUY=\");\n_c = CarouselView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarouselView);\nfunction NextArrow(props) {\n    const { onClick, disabled } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaChevronRight, {\n            onClick: onClick,\n            className: \"absolute top-[3] right-[0.1rem] z-[900] h-10 w-7 rounded-md border bg-primary-foreground p-2 text-black \".concat(disabled ? \"text-primabg-primary-foreground/20 bg-primary-foreground/10\" : \"bg-primary-foreground text-black\", \"  shadow-xl \")\n        }, void 0, false, {\n            fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_c1 = NextArrow;\nfunction PrevArrow(props) {\n    const { onClick, disabled } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaChevronLeft_FaChevronRight_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaChevronLeft, {\n            onClick: onClick,\n            className: \"absolute z-[900] h-10 w-7 rounded-md border bg-primary-foreground p-2 text-black \".concat(disabled ? \"text-primabg-primary-foreground/20 bg-primary-foreground/10\" : \"bg-primary-foreground text-black\", \" shadow-xl\")\n        }, void 0, false, {\n            fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/dhootha_main/app/ui/CarouselView.tsx\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PrevArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CarouselView\");\n$RefreshReg$(_c1, \"NextArrow\");\n$RefreshReg$(_c2, \"PrevArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9DYXJvdXNlbFZpZXcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2lDO0FBRStCO0FBQy9CO0FBRWpDLFNBQVNJLGFBQWEsS0FPVztRQVBYLEVBQ3BCQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLGtCQUFrQixFQUNsQkMsTUFBTSxFQUN5QixHQVBYOztJQVFwQixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBVTtJQUMxRCxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBVTtJQUUxRCxNQUFNWSxXQUFXO1FBQ2ZSLE1BQU1BLE9BQU8sT0FBTztRQUNwQlMsVUFBVSxDQUFDTjtRQUNYTyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsVUFBVWI7UUFDVmMsZUFBZVosUUFBUUEsUUFBUTtRQUMvQmEsYUFBYSxTQUFVQyxLQUFhO1lBQ2xDLElBQUlBLFFBQVEsR0FBR1IsZ0JBQWdCO1lBQy9CLElBQUlRLFVBQVUsR0FBR1IsZ0JBQWdCO1lBQ2pDLElBQUlRLFVBQVUsQ0FBQ2IsK0JBQUFBLHlDQUFBQSxtQkFBb0JjLE1BQU0sSUFBYSxHQUNwRFgsZ0JBQWdCO1lBQ2xCLElBQUlVLFFBQVEsQ0FBQ2IsK0JBQUFBLHlDQUFBQSxtQkFBb0JjLE1BQU0sSUFBYSxHQUNsRFgsZ0JBQWdCO1FBQ3BCO1FBQ0FZLHlCQUFXLDhEQUFDQztZQUFVQyxVQUFVZjs7Ozs7O1FBQ2hDZ0IseUJBQVcsOERBQUNDO1lBQVVGLFVBQVViOzs7Ozs7UUFDaENILFFBQVFBO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ1YsbURBQU1BO1FBQ0osR0FBR2UsUUFBUTtRQUNaYyxXQUFXLDRFQUFvSixPQUF4RXBCLHFCQUFtQixtQ0FBaUM7O1lBRTFJSixhQUNDQSxVQUFVa0IsTUFBTSxHQUFHLEtBQ25CLENBQUNkLHVCQUNESixzQkFBQUEsZ0NBQUFBLFVBQVd5QixHQUFHLENBQUMsQ0FBQ0MsTUFBTVQ7Z0JBQ3BCLHFCQUNFLDhEQUFDVTtvQkFBZ0JILFdBQVU7OEJBQ3pCLDRFQUFDSTt3QkFDQ0MsS0FBS0gsS0FBS0ksS0FBSzt3QkFDZk4sV0FBVTs7Ozs7O21CQUhKUDs7Ozs7WUFPZDtZQUNEYixzQkFDQ0EsbUJBQW1CYyxNQUFNLEdBQUcsS0FDNUJkLG1CQUFtQnFCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVDtnQkFDNUIscUJBQ0UsOERBQUNVO29CQUVDSCxXQUFVOztzQ0FFViw4REFBQ0c7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDSTtvQ0FDQ0MsS0FBS0gsS0FBS0ksS0FBSztvQ0FDZk4sV0FBVTs7Ozs7OzhDQUVaLDhEQUFDTztvQ0FBTVAsV0FBVTs4Q0FDZEUsS0FBS00sSUFBSTs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDTDtzQ0FDQyw0RUFBQ007Z0NBQUVULFdBQVU7MENBQ1ZFLEtBQUtRLE1BQU07Ozs7Ozs7Ozs7OzttQkFkWGpCOzs7OztZQW1CWDs7Ozs7OztBQUdSO0dBNUVTbEI7S0FBQUE7QUE2RVQsK0RBQWVBLFlBQVlBLEVBQUM7QUFFNUIsU0FBU3FCLFVBQVVlLEtBQVU7SUFDM0IsTUFBTSxFQUFFQyxPQUFPLEVBQUVmLFFBQVEsRUFBRSxHQUFHYztJQUU5QixxQkFDRSw4REFBQ1I7UUFBSUgsV0FBVTtrQkFDYiw0RUFBQzNCLCtHQUFjQTtZQUNidUMsU0FBU0E7WUFDVFosV0FBVywyR0FBeU4sT0FBOUdILFdBQVcsZ0VBQWdFLG9DQUFtQzs7Ozs7Ozs7Ozs7QUFJNU87TUFYU0Q7QUFZVCxTQUFTRyxVQUFVWSxLQUFVO0lBQzNCLE1BQU0sRUFBRUMsT0FBTyxFQUFFZixRQUFRLEVBQUUsR0FBR2M7SUFDOUIscUJBQ0UsOERBQUNSO1FBQUlILFdBQVU7a0JBQ2IsNEVBQUM1Qiw4R0FBYUE7WUFDWndDLFNBQVNBO1lBQ1RaLFdBQVcsb0ZBQWtNLE9BQTlHSCxXQUFXLGdFQUFnRSxvQ0FBbUM7Ozs7Ozs7Ozs7O0FBSXJOO01BVlNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9DYXJvdXNlbFZpZXcudHN4P2NjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxWaWV3SW50ZXJmYWNlSW50ZXJmYWNlIH0gZnJvbSBcIi4uL3R5cGVzL2hvbWVQYWdlRGF0YVR5cGVzXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25MZWZ0LCBGYUNoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENhcm91c2VsVmlldyh7XG4gIGRhdGFBcnJheSxcbiAgYXV0b1BsYXksXG4gIGRvdHMsXG4gIHNwZWVkLFxuICBjbGllbnRUZXN0aW1vbmlhbHMsXG4gIGFycm93cyxcbn06IENhcm91c2VsVmlld0ludGVyZmFjZUludGVyZmFjZSkge1xuICBjb25zdCBbbmV4dERpc2FibGVkLCBzZXROZXh0RGlzYWJsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcHJldkRpc2FibGVkLCBzZXRQcmV2RGlhc2JsZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogZG90cyA/IHRydWUgOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogIWFycm93cyxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXV0b3BsYXk6IGF1dG9QbGF5LFxuICAgIGF1dG9wbGF5U3BlZWQ6IHNwZWVkID8gc3BlZWQgOiAyMDAwLFxuICAgIGFmdGVyQ2hhbmdlOiBmdW5jdGlvbiAoaW5kZXg6IG51bWJlcikge1xuICAgICAgaWYgKGluZGV4ID4gMCkgc2V0UHJldkRpYXNibGVkKGZhbHNlKTtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkgc2V0UHJldkRpYXNibGVkKHRydWUpO1xuICAgICAgaWYgKGluZGV4ID09PSAoY2xpZW50VGVzdGltb25pYWxzPy5sZW5ndGggYXMgbmV2ZXIpIC0gMSlcbiAgICAgICAgc2V0TmV4dERpc2FibGVkKHRydWUpO1xuICAgICAgaWYgKGluZGV4IDwgKGNsaWVudFRlc3RpbW9uaWFscz8ubGVuZ3RoIGFzIG5ldmVyKSAtIDEpXG4gICAgICAgIHNldE5leHREaXNhYmxlZChmYWxzZSk7XG4gICAgfSxcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgZGlzYWJsZWQ9e25leHREaXNhYmxlZH0gLz4sXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IGRpc2FibGVkPXtwcmV2RGlzYWJsZWR9IC8+LFxuICAgIGFycm93czogYXJyb3dzLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlclxuICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCB3LWZ1bGwgbWF4LXctWzkydnddIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnICR7Y2xpZW50VGVzdGltb25pYWxzP1wibGc6bWF4LXctWzEwMHZ3XSAgIGxnOmgtWzcwdmhdXCI6XCJsZzptYXgtdy1bNTB2d10gIFwifWB9XG4gICAgPlxuICAgICAge2RhdGFBcnJheSAmJlxuICAgICAgICBkYXRhQXJyYXkubGVuZ3RoID4gMCAmJlxuICAgICAgICAhY2xpZW50VGVzdGltb25pYWxzICYmXG4gICAgICAgIGRhdGFBcnJheT8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1pbiByb3VuZGVkXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG1yLTIgaC1bMzB2aF0gdy1mdWxsIHJvdW5kZWQtbGcgb2JqZWN0LWZpbGwgIGxnOmgtWzYwdmhdIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIHtjbGllbnRUZXN0aW1vbmlhbHMgJiZcbiAgICAgICAgY2xpZW50VGVzdGltb25pYWxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgY2xpZW50VGVzdGltb25pYWxzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciAgcC00IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLXktNFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMjAgdy0yMCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW5vd3JhcCB0ZXh0LWNlbnRlciB0ZXh0LTN4bCBmb250LXNlbWlib2xkIFwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHB4LTggbGc6cHgtWzIwdnddIHRleHQtY2VudGVyICBmb250LW5vcm1hbCB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZC84MCAgXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5yZXZpZXd9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgIDwvU2xpZGVyPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxWaWV3O1xuXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHM6IGFueSkge1xuICBjb25zdCB7IG9uQ2xpY2ssIGRpc2FibGVkIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgIDxGYUNoZXZyb25SaWdodFxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtWzNdIHJpZ2h0LVswLjFyZW1dIHotWzkwMF0gaC0xMCB3LTcgcm91bmRlZC1tZCBib3JkZXIgYmctcHJpbWFyeS1mb3JlZ3JvdW5kIHAtMiB0ZXh0LWJsYWNrICR7ZGlzYWJsZWQgPyBcInRleHQtcHJpbWFiZy1wcmltYXJ5LWZvcmVncm91bmQvMjAgYmctcHJpbWFyeS1mb3JlZ3JvdW5kLzEwXCIgOiBcImJnLXByaW1hcnktZm9yZWdyb3VuZCB0ZXh0LWJsYWNrXCJ9ICBzaGFkb3cteGwgYH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5mdW5jdGlvbiBQcmV2QXJyb3cocHJvcHM6IGFueSkge1xuICBjb25zdCB7IG9uQ2xpY2ssIGRpc2FibGVkIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8RmFDaGV2cm9uTGVmdFxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB6LVs5MDBdIGgtMTAgdy03IHJvdW5kZWQtbWQgYm9yZGVyIGJnLXByaW1hcnktZm9yZWdyb3VuZCBwLTIgdGV4dC1ibGFjayAke2Rpc2FibGVkID8gXCJ0ZXh0LXByaW1hYmctcHJpbWFyeS1mb3JlZ3JvdW5kLzIwIGJnLXByaW1hcnktZm9yZWdyb3VuZC8xMFwiIDogXCJiZy1wcmltYXJ5LWZvcmVncm91bmQgdGV4dC1ibGFja1wifSBzaGFkb3cteGxgfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTbGlkZXIiLCJGYUNoZXZyb25MZWZ0IiwiRmFDaGV2cm9uUmlnaHQiLCJ1c2VTdGF0ZSIsIkNhcm91c2VsVmlldyIsImRhdGFBcnJheSIsImF1dG9QbGF5IiwiZG90cyIsInNwZWVkIiwiY2xpZW50VGVzdGltb25pYWxzIiwiYXJyb3dzIiwibmV4dERpc2FibGVkIiwic2V0TmV4dERpc2FibGVkIiwicHJldkRpc2FibGVkIiwic2V0UHJldkRpYXNibGVkIiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYWZ0ZXJDaGFuZ2UiLCJpbmRleCIsImxlbmd0aCIsIm5leHRBcnJvdyIsIk5leHRBcnJvdyIsImRpc2FibGVkIiwicHJldkFycm93IiwiUHJldkFycm93IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImRpdiIsImltZyIsInNyYyIsImltYWdlIiwibGFiZWwiLCJuYW1lIiwicCIsInJldmlldyIsInByb3BzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/CarouselView.tsx\n"));

/***/ })

});