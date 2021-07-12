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
  html: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.getLatestNotification)()
}];

var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.keyCode === 72) {
          alert('Logging you out');
          this.props.logOut();
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', function (event) {
        if (event.ctrlKey && event.keyCode === 72) {
          alert('Logging you out');
          this.props.logOut();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var listNotifications = this.listNotifications;
      var isLoggedIn = this.props.isLoggedIn;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Notifications_Notifications__WEBPACK_IMPORTED_MODULE_2__.default, {
        listNotifications: listNotifications
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "App"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CourseList_CourseList__WEBPACK_IMPORTED_MODULE_6__.default, {
        listCourses: listCourses
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

App.propTypes = {
  isLoggedIn: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  logOut: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};
App.defaultProps = {
  isLoggedIn: true,
  logOut: function logOut() {
    return void 0;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7aae65f5b2da4ffee53f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbImxpc3RDb3Vyc2VzIiwiaWQiLCJuYW1lIiwiY3JlZGl0IiwibGlzdE5vdGlmaWNhdGlvbnMiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwiQXBwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5Iiwia2V5Q29kZSIsImFsZXJ0IiwicHJvcHMiLCJsb2dPdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNMb2dnZWRJbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsS0FBZjtBQUFzQkMsUUFBTSxFQUFFO0FBQTlCLENBRGtCLEVBRWxCO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxRQUFNLEVBQUU7QUFBbEMsQ0FGa0IsRUFHbEI7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE9BQWY7QUFBd0JDLFFBQU0sRUFBRTtBQUFoQyxDQUhrQixDQUFwQjtBQUtBLElBQU1DLGlCQUFpQixHQUFHLENBQ3hCO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxPQUFLLEVBQUU7QUFBakMsQ0FEd0IsRUFFeEI7QUFBRUwsSUFBRSxFQUFFLENBQU47QUFBU0ksTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE9BQUssRUFBRTtBQUFoQyxDQUZ3QixFQUd4QjtBQUFFTCxJQUFFLEVBQUUsQ0FBTjtBQUFTSSxNQUFJLEVBQUUsUUFBZjtBQUF5QkUsTUFBSSxFQUFFQyxtRUFBcUI7QUFBcEQsQ0FId0IsQ0FBMUI7O0lBS01DLEc7Ozs7Ozs7Ozs7Ozs7V0FDSiw2QkFBb0I7QUFDbEJDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVUMsS0FBVixFQUFpQjtBQUNwRCxZQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsT0FBTixLQUFrQixFQUF2QyxFQUEyQztBQUN6Q0MsZUFBSyxDQUFDLGlCQUFELENBQUw7QUFDQSxlQUFLQyxLQUFMLENBQVdDLE1BQVg7QUFDRDtBQUNGLE9BTEQ7QUFNRDs7O1dBRUQsZ0NBQXVCO0FBQ3JCUCxjQUFRLENBQUNRLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLFVBQVVOLEtBQVYsRUFBaUI7QUFDdkQsWUFBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUFLLENBQUNFLE9BQU4sS0FBa0IsRUFBdkMsRUFBMkM7QUFDekNDLGVBQUssQ0FBQyxpQkFBRCxDQUFMO0FBQ0EsZUFBS0MsS0FBTCxDQUFXQyxNQUFYO0FBQ0Q7QUFDRixPQUxEO0FBTUQ7OztXQUNELGtCQUFTO0FBQ1AsVUFBTWIsaUJBQWlCLEdBQUcsS0FBS0EsaUJBQS9CO0FBQ0EsVUFBUWUsVUFBUixHQUF1QixLQUFLSCxLQUE1QixDQUFRRyxVQUFSO0FBQ0EsMEJBQ0UsaUhBQ0UsaURBQUMsaUVBQUQ7QUFBZSx5QkFBaUIsRUFBRWY7QUFBbEMsUUFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLGlEQUFDLG1EQUFELE9BREYsZUFFRSw0REFGRixFQUdHZSxVQUFVLGdCQUFHLGlEQUFDLDJEQUFEO0FBQVksbUJBQVcsRUFBRW5CO0FBQXpCLFFBQUgsZ0JBQThDLGlEQUFDLGlEQUFELE9BSDNELGVBSUUsNERBSkYsZUFLRSxpREFBQyxtREFBRCxPQUxGLENBRkYsQ0FERjtBQVlEOzs7O0VBakNlb0IsNEM7O0FBb0NsQlgsR0FBRyxDQUFDWSxTQUFKLEdBQWdCO0FBQ2RGLFlBQVUsRUFBRUcsd0RBREU7QUFFZEwsUUFBTSxFQUFFSyx3REFBY0M7QUFGUixDQUFoQjtBQUtBZCxHQUFHLENBQUNlLFlBQUosR0FBbUI7QUFDakJMLFlBQVUsRUFBRSxJQURLO0FBRWpCRixRQUFNLEVBQUU7QUFBQSxXQUFNLEtBQUssQ0FBWDtBQUFBO0FBRlMsQ0FBbkI7QUFLQSxpRUFBZVIsR0FBZixFOzs7Ozs7Ozs7O1VDbEVBLHNEIiwiZmlsZSI6Im1haW4uMzBmMWE4MTdmMzgzY2UwNDc5ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL0FwcC9BcHAuY3NzJztcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4uL05vdGlmaWNhdGlvbnMvTm90aWZpY2F0aW9ucyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4vTG9naW4nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgQ291cnNlTGlzdCBmcm9tICcuLi9Db3Vyc2VMaXN0L0NvdXJzZUxpc3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldExhdGVzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3QgbGlzdENvdXJzZXMgPSBbXG4gIHsgaWQ6IDEsIG5hbWU6ICdFUzYnLCBjcmVkaXQ6IDYwIH0sXG4gIHsgaWQ6IDIsIG5hbWU6ICdXZWJwYWNrJywgY3JlZGl0OiAyMCB9LFxuICB7IGlkOiAzLCBuYW1lOiAnUmVhY3QnLCBjcmVkaXQ6IDQwIH0sXG5dO1xuY29uc3QgbGlzdE5vdGlmaWNhdGlvbnMgPSBbXG4gIHsgaWQ6IDEsIHR5cGU6ICdkZWZhdWx0JywgdmFsdWU6ICdOZXcgY291cnNlIGF2YWlsYWJsZScgfSxcbiAgeyBpZDogMiwgdHlwZTogJ3VyZ2VudCcsIHZhbHVlOiAnTmV3IHJlc3VtZSBhdmFpbGFibGUnIH0sXG4gIHsgaWQ6IDMsIHR5cGU6ICd1cmdlbnQnLCBodG1sOiBnZXRMYXRlc3ROb3RpZmljYXRpb24oKSB9LFxuXTtcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IDcyKSB7XG4gICAgICAgIGFsZXJ0KCdMb2dnaW5nIHlvdSBvdXQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dPdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleUNvZGUgPT09IDcyKSB7XG4gICAgICAgIGFsZXJ0KCdMb2dnaW5nIHlvdSBvdXQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2dPdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbGlzdE5vdGlmaWNhdGlvbnMgPSB0aGlzLmxpc3ROb3RpZmljYXRpb25zO1xuICAgIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPE5vdGlmaWNhdGlvbnMgbGlzdE5vdGlmaWNhdGlvbnM9e2xpc3ROb3RpZmljYXRpb25zfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8Q291cnNlTGlzdCBsaXN0Q291cnNlcz17bGlzdENvdXJzZXN9IC8+IDogPExvZ2luIC8+fVxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBsb2dPdXQ6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgbG9nT3V0OiAoKSA9PiB2b2lkIDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YWFlNjVmNWIyZGE0ZmZlZTUzZlwiKSJdLCJzb3VyY2VSb290IjoiIn0=