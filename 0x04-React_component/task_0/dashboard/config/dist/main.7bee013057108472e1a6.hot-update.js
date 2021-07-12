self["webpackHotUpdatedashboard"]("main",{

/***/ "./src/App/App.js":
/*!************************!*\
  !*** ./src/App/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _App_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/App.css */ "./src/App/App.css");
/* harmony import */ var _Notifications_Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notifications/Notifications */ "./src/Notifications/Notifications.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Login/Login */ "./src/Login/Login.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header/Header */ "./src/Header/Header.js");
/* harmony import */ var _CourseList_CourseList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CourseList/CourseList */ "./src/CourseList/CourseList.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");










var App = function App(_ref) {
  var isLoggedIn = _ref.isLoggedIn;
  var listCourses = [{
    id: 1,
    name: 'ES6',
    credit: 60
  }, {
    id: 2,
    name: 'Webpack',
    credit: 20
  }, {
    id: 3,
    name: 'React',
    credit: 40
  }];
  var htmlObj = {
    __html: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.getLatestNotification)()
  };
  var listNotifications = [{
    id: 1,
    type: 'default',
    value: 'New course available'
  }, {
    id: 2,
    type: 'urgent',
    value: 'New resume available'
  }, {
    id: 3,
    type: 'urgent',
    html: htmlObj
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_2__.default, {
    listNotifications: listNotifications
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseList_CourseList__WEBPACK_IMPORTED_MODULE_6__.default, {
    listCourses: listCourses
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null)));
};

App.propTypes = {
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
App.defaultProps = {
  isLoggedIn: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("456e667f93a425b80f32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImlzTG9nZ2VkSW4iLCJsaXN0Q291cnNlcyIsImlkIiwibmFtZSIsImNyZWRpdCIsImh0bWxPYmoiLCJfX2h0bWwiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJsaXN0Tm90aWZpY2F0aW9ucyIsInR5cGUiLCJ2YWx1ZSIsImh0bWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDOUIsTUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQUVDLE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRSxLQUFmO0FBQXNCQyxVQUFNLEVBQUU7QUFBOUIsR0FEa0IsRUFFbEI7QUFBRUYsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLFNBQWY7QUFBMEJDLFVBQU0sRUFBRTtBQUFsQyxHQUZrQixFQUdsQjtBQUFFRixNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsT0FBZjtBQUF3QkMsVUFBTSxFQUFFO0FBQWhDLEdBSGtCLENBQXBCO0FBS0EsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFVBQU0sRUFBRUMsbUVBQXFCO0FBRGYsR0FBaEI7QUFHQSxNQUFNQyxpQkFBaUIsR0FBRyxDQUN4QjtBQUFFTixNQUFFLEVBQUUsQ0FBTjtBQUFTTyxRQUFJLEVBQUUsU0FBZjtBQUEwQkMsU0FBSyxFQUFFO0FBQWpDLEdBRHdCLEVBRXhCO0FBQUVSLE1BQUUsRUFBRSxDQUFOO0FBQVNPLFFBQUksRUFBRSxRQUFmO0FBQXlCQyxTQUFLLEVBQUU7QUFBaEMsR0FGd0IsRUFHeEI7QUFBRVIsTUFBRSxFQUFFLENBQU47QUFBU08sUUFBSSxFQUFFLFFBQWY7QUFBeUJFLFFBQUksRUFBRU47QUFBL0IsR0FId0IsQ0FBMUI7QUFLQSxzQkFDRSxpSEFDRSxpREFBQyxpRUFBRDtBQUFlLHFCQUFpQixFQUFFRztBQUFsQyxJQURGLGVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRSxpREFBQyxtREFBRCxPQURGLGVBRUUsNERBRkYsRUFHR1IsVUFBVSxnQkFBRyxpREFBQywyREFBRDtBQUFZLGVBQVcsRUFBRUM7QUFBekIsSUFBSCxnQkFBOEMsaURBQUMsaURBQUQsT0FIM0QsZUFJRSw0REFKRixlQUtFLGlEQUFDLG1EQUFELE9BTEYsQ0FGRixDQURGO0FBWUQsQ0ExQkQ7O0FBNEJBRixHQUFHLENBQUNhLFNBQUosR0FBZ0I7QUFDZFosWUFBVSxFQUFFYSx3REFBY0M7QUFEWixDQUFoQjtBQUlBZixHQUFHLENBQUNnQixZQUFKLEdBQW1CO0FBQ2pCZixZQUFVLEVBQUU7QUFESyxDQUFuQjtBQUlBLGlFQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7VUM5Q0Esc0QiLCJmaWxlIjoibWFpbi43YmVlMDEzMDU3MTA4NDcyZTFhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vQXBwL0FwcC5jc3MnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi4vTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBDb3Vyc2VMaXN0IGZyb20gJy4uL0NvdXJzZUxpc3QvQ291cnNlTGlzdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5jb25zdCBBcHAgPSAoeyBpc0xvZ2dlZEluIH0pID0+IHtcbiAgY29uc3QgbGlzdENvdXJzZXMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0VTNicsIGNyZWRpdDogNjAgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiAnUmVhY3QnLCBjcmVkaXQ6IDQwIH0sXG4gIF07XG4gIGNvbnN0IGh0bWxPYmogPSB7XG4gICAgX19odG1sOiBnZXRMYXRlc3ROb3RpZmljYXRpb24oKSxcbiAgfTtcbiAgY29uc3QgbGlzdE5vdGlmaWNhdGlvbnMgPSBbXG4gICAgeyBpZDogMSwgdHlwZTogJ2RlZmF1bHQnLCB2YWx1ZTogJ05ldyBjb3Vyc2UgYXZhaWxhYmxlJyB9LFxuICAgIHsgaWQ6IDIsIHR5cGU6ICd1cmdlbnQnLCB2YWx1ZTogJ05ldyByZXN1bWUgYXZhaWxhYmxlJyB9LFxuICAgIHsgaWQ6IDMsIHR5cGU6ICd1cmdlbnQnLCBodG1sOiBodG1sT2JqIH0sXG4gIF07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOb3RpZmljYXRpb25zIGxpc3ROb3RpZmljYXRpb25zPXtsaXN0Tm90aWZpY2F0aW9uc30gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxociAvPlxuICAgICAgICB7aXNMb2dnZWRJbiA/IDxDb3Vyc2VMaXN0IGxpc3RDb3Vyc2VzPXtsaXN0Q291cnNlc30gLz4gOiA8TG9naW4gLz59XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NTZlNjY3ZjkzYTQyNWI4MGYzMlwiKSJdLCJzb3VyY2VSb290IjoiIn0=