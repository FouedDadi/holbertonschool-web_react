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
        if (event.ctrlKey && event.code === 72) {
          alert('Logging you out');
          this.props.logOut();
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', function (event) {
        if (event.ctrlKey && event.code === 72) {
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
/******/ 	__webpack_require__.h = () => ("a30b2c351fd19be6f8b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvQXBwL0FwcC5qcyIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbImxpc3RDb3Vyc2VzIiwiaWQiLCJuYW1lIiwiY3JlZGl0IiwibGlzdE5vdGlmaWNhdGlvbnMiLCJ0eXBlIiwidmFsdWUiLCJodG1sIiwiZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uIiwiQXBwIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjdHJsS2V5IiwiY29kZSIsImFsZXJ0IiwicHJvcHMiLCJsb2dPdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNMb2dnZWRJbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUUsS0FBZjtBQUFzQkMsUUFBTSxFQUFFO0FBQTlCLENBRGtCLEVBRWxCO0FBQUVGLElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxRQUFNLEVBQUU7QUFBbEMsQ0FGa0IsRUFHbEI7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE9BQWY7QUFBd0JDLFFBQU0sRUFBRTtBQUFoQyxDQUhrQixDQUFwQjtBQUtBLElBQU1DLGlCQUFpQixHQUFHLENBQ3hCO0FBQUVILElBQUUsRUFBRSxDQUFOO0FBQVNJLE1BQUksRUFBRSxTQUFmO0FBQTBCQyxPQUFLLEVBQUU7QUFBakMsQ0FEd0IsRUFFeEI7QUFBRUwsSUFBRSxFQUFFLENBQU47QUFBU0ksTUFBSSxFQUFFLFFBQWY7QUFBeUJDLE9BQUssRUFBRTtBQUFoQyxDQUZ3QixFQUd4QjtBQUFFTCxJQUFFLEVBQUUsQ0FBTjtBQUFTSSxNQUFJLEVBQUUsUUFBZjtBQUF5QkUsTUFBSSxFQUFFQyxtRUFBcUI7QUFBcEQsQ0FId0IsQ0FBMUI7O0lBS01DLEc7Ozs7Ozs7Ozs7Ozs7V0FDSiw2QkFBb0I7QUFDbEJDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVUMsS0FBVixFQUFpQjtBQUNwRCxZQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsSUFBTixLQUFlLEVBQXBDLEVBQXdDO0FBQ3RDQyxlQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUNBLGVBQUtDLEtBQUwsQ0FBV0MsTUFBWDtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7V0FFRCxnQ0FBdUI7QUFDckJQLGNBQVEsQ0FBQ1EsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsVUFBVU4sS0FBVixFQUFpQjtBQUN2RCxZQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsSUFBTixLQUFlLEVBQXBDLEVBQXdDO0FBQ3RDQyxlQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUNBLGVBQUtDLEtBQUwsQ0FBV0MsTUFBWDtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7V0FDRCxrQkFBUztBQUNQLFVBQU1iLGlCQUFpQixHQUFHLEtBQUtBLGlCQUEvQjtBQUNBLFVBQVFlLFVBQVIsR0FBdUIsS0FBS0gsS0FBNUIsQ0FBUUcsVUFBUjtBQUNBLDBCQUNFLGlIQUNFLGlEQUFDLGlFQUFEO0FBQWUseUJBQWlCLEVBQUVmO0FBQWxDLFFBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxpREFBQyxtREFBRCxPQURGLGVBRUUsNERBRkYsRUFHR2UsVUFBVSxnQkFBRyxpREFBQywyREFBRDtBQUFZLG1CQUFXLEVBQUVuQjtBQUF6QixRQUFILGdCQUE4QyxpREFBQyxpREFBRCxPQUgzRCxlQUlFLDREQUpGLGVBS0UsaURBQUMsbURBQUQsT0FMRixDQUZGLENBREY7QUFZRDs7OztFQWpDZW9CLDRDOztBQW9DbEJYLEdBQUcsQ0FBQ1ksU0FBSixHQUFnQjtBQUNkRixZQUFVLEVBQUVHLHdEQURFO0FBRWRMLFFBQU0sRUFBRUssd0RBQWNDO0FBRlIsQ0FBaEI7QUFLQWQsR0FBRyxDQUFDZSxZQUFKLEdBQW1CO0FBQ2pCTCxZQUFVLEVBQUUsSUFESztBQUVqQkYsUUFBTSxFQUFFO0FBQUEsV0FBTSxLQUFLLENBQVg7QUFBQTtBQUZTLENBQW5CO0FBS0EsaUVBQWVSLEdBQWYsRTs7Ozs7Ozs7OztVQ2xFQSxzRCIsImZpbGUiOiJtYWluLjA3NjdkZDMyODg5ZjU3MjNjZDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9BcHAvQXBwLmNzcyc7XG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IENvdXJzZUxpc3QgZnJvbSAnLi4vQ291cnNlTGlzdC9Db3Vyc2VMaXN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRMYXRlc3ROb3RpZmljYXRpb24gfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbmNvbnN0IGxpc3RDb3Vyc2VzID0gW1xuICB7IGlkOiAxLCBuYW1lOiAnRVM2JywgY3JlZGl0OiA2MCB9LFxuICB7IGlkOiAyLCBuYW1lOiAnV2VicGFjaycsIGNyZWRpdDogMjAgfSxcbiAgeyBpZDogMywgbmFtZTogJ1JlYWN0JywgY3JlZGl0OiA0MCB9LFxuXTtcbmNvbnN0IGxpc3ROb3RpZmljYXRpb25zID0gW1xuICB7IGlkOiAxLCB0eXBlOiAnZGVmYXVsdCcsIHZhbHVlOiAnTmV3IGNvdXJzZSBhdmFpbGFibGUnIH0sXG4gIHsgaWQ6IDIsIHR5cGU6ICd1cmdlbnQnLCB2YWx1ZTogJ05ldyByZXN1bWUgYXZhaWxhYmxlJyB9LFxuICB7IGlkOiAzLCB0eXBlOiAndXJnZW50JywgaHRtbDogZ2V0TGF0ZXN0Tm90aWZpY2F0aW9uKCkgfSxcbl07XG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5jb2RlID09PSA3Mikge1xuICAgICAgICBhbGVydCgnTG9nZ2luZyB5b3Ugb3V0Jyk7XG4gICAgICAgIHRoaXMucHJvcHMubG9nT3V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSAmJiBldmVudC5jb2RlID09PSA3Mikge1xuICAgICAgICBhbGVydCgnTG9nZ2luZyB5b3Ugb3V0Jyk7XG4gICAgICAgIHRoaXMucHJvcHMubG9nT3V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3ROb3RpZmljYXRpb25zID0gdGhpcy5saXN0Tm90aWZpY2F0aW9ucztcbiAgICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxOb3RpZmljYXRpb25zIGxpc3ROb3RpZmljYXRpb25zPXtsaXN0Tm90aWZpY2F0aW9uc30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J0FwcCc+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gPENvdXJzZUxpc3QgbGlzdENvdXJzZXM9e2xpc3RDb3Vyc2VzfSAvPiA6IDxMb2dpbiAvPn1cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9nT3V0OiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkFwcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IHRydWUsXG4gIGxvZ091dDogKCkgPT4gdm9pZCAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTMwYjJjMzUxZmQxOWJlNmY4YjNcIikiXSwic291cmNlUm9vdCI6IiJ9