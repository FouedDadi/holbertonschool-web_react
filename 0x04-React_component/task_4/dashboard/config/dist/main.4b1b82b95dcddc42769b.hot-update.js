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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "listCourses", [{
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
    }]);

    _defineProperty(_assertThisInitialized(_this), "listNotifications", [{
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
      html: _utils_utils__WEBPACK_IMPORTED_MODULE_8__.getLatestNotification
    }]);

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var isLoggedIn = this.props.isLoggedIn;
      var listNotifications = this.listNotifications.listNotifications;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_2__.default, {
        listNotifications: listNotifications
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseList_CourseList__WEBPACK_IMPORTED_MODULE_6__.default, {
        listCourses: this.listCourses
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

App.propTypes = {
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool)
};
App.defaultProps = {
  isLoggedIn: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c15ea802ada2f5a37305")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImlkIiwibmFtZSIsImNyZWRpdCIsInR5cGUiLCJ2YWx1ZSIsImh0bWwiLCJnZXRMYXRlc3ROb3RpZmljYXRpb24iLCJpc0xvZ2dlZEluIiwicHJvcHMiLCJsaXN0Tm90aWZpY2F0aW9ucyIsImxpc3RDb3Vyc2VzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEc7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBQ1UsQ0FDWjtBQUFFQyxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsS0FBZjtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBRFksRUFFWjtBQUFFRixRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsU0FBZjtBQUEwQkMsWUFBTSxFQUFFO0FBQWxDLEtBRlksRUFHWjtBQUFFRixRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsT0FBZjtBQUF3QkMsWUFBTSxFQUFFO0FBQWhDLEtBSFksQzs7d0VBS00sQ0FDbEI7QUFBRUYsUUFBRSxFQUFFLENBQU47QUFBU0csVUFBSSxFQUFFLFNBQWY7QUFBMEJDLFdBQUssRUFBRTtBQUFqQyxLQURrQixFQUVsQjtBQUFFSixRQUFFLEVBQUUsQ0FBTjtBQUFTRyxVQUFJLEVBQUUsUUFBZjtBQUF5QkMsV0FBSyxFQUFFO0FBQWhDLEtBRmtCLEVBR2xCO0FBQUVKLFFBQUUsRUFBRSxDQUFOO0FBQVNHLFVBQUksRUFBRSxRQUFmO0FBQXlCRSxVQUFJLEVBQUVDLCtEQUFxQkE7QUFBcEQsS0FIa0IsQzs7Ozs7OztXQU1wQixrQkFBUztBQUNQLFVBQVFDLFVBQVIsR0FBdUIsS0FBS0MsS0FBNUIsQ0FBUUQsVUFBUjtBQUNBLFVBQVFFLGlCQUFSLEdBQThCLEtBQUtBLGlCQUFuQyxDQUFRQSxpQkFBUjtBQUNBLDBCQUNFLGlIQUNFLGlEQUFDLGlFQUFEO0FBQWUseUJBQWlCLEVBQUVBO0FBQWxDLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxpREFBQyxtREFBRCxPQURGLGVBRUUsNERBRkYsRUFHR0YsVUFBVSxnQkFDVCxpREFBQywyREFBRDtBQUFZLG1CQUFXLEVBQUUsS0FBS0c7QUFBOUIsUUFEUyxnQkFHVCxpREFBQyxpREFBRCxPQU5KLGVBUUUsNERBUkYsZUFTRSxpREFBQyxtREFBRCxPQVRGLENBRkYsQ0FERjtBQWdCRDs7OztFQS9CZUMsNEM7O0FBa0NsQlosR0FBRyxDQUFDYSxTQUFKLEdBQWdCO0FBQ2RMLFlBQVUsRUFBRU0sd0RBQWNDO0FBRFosQ0FBaEI7QUFJQWYsR0FBRyxDQUFDZ0IsWUFBSixHQUFtQjtBQUNqQlIsWUFBVSxFQUFFO0FBREssQ0FBbkI7QUFJQSxpRUFBZVIsR0FBZixFOzs7Ozs7Ozs7O1VDcERBLHNEIiwiZmlsZSI6Im1haW4uNGIxYjgyYjk1ZGNkZGM0Mjc2OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL0FwcC9BcHAuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgQ291cnNlTGlzdCBmcm9tICcuLi9Db3Vyc2VMaXN0L0NvdXJzZUxpc3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgbGlzdENvdXJzZXMgPSBbXG4gICAgeyBpZDogMSwgbmFtZTogJ0VTNicsIGNyZWRpdDogNjAgfSxcbiAgICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiAnUmVhY3QnLCBjcmVkaXQ6IDQwIH0sXG4gIF07XG4gIGxpc3ROb3RpZmljYXRpb25zID0gW1xuICAgIHsgaWQ6IDEsIHR5cGU6ICdkZWZhdWx0JywgdmFsdWU6ICdOZXcgY291cnNlIGF2YWlsYWJsZScgfSxcbiAgICB7IGlkOiAyLCB0eXBlOiAndXJnZW50JywgdmFsdWU6ICdOZXcgcmVzdW1lIGF2YWlsYWJsZScgfSxcbiAgICB7IGlkOiAzLCB0eXBlOiAndXJnZW50JywgaHRtbDogZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIH0sXG4gIF07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxpc3ROb3RpZmljYXRpb25zIH0gPSB0aGlzLmxpc3ROb3RpZmljYXRpb25zO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Tm90aWZpY2F0aW9ucyBsaXN0Tm90aWZpY2F0aW9ucz17bGlzdE5vdGlmaWNhdGlvbnN9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdBcHAnPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcbiAgICAgICAgICAgIDxDb3Vyc2VMaXN0IGxpc3RDb3Vyc2VzPXt0aGlzLmxpc3RDb3Vyc2VzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxNWVhODAyYWRhMmY1YTM3MzA1XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==