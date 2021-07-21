self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": function() { return /* binding */ skills; },
/* harmony export */   "experiences": function() { return /* binding */ experiences; },
/* harmony export */   "schools": function() { return /* binding */ schools; },
/* harmony export */   "academics": function() { return /* binding */ academics; },
/* harmony export */   "lang": function() { return /* binding */ lang; },
/* harmony export */   "projects": function() { return /* binding */ projects; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var skills = [{
  skill: 'Javascript',
  percentage: 70
}, {
  skill: 'PHP',
  percentage: 80
}, {
  skill: 'React',
  percentage: 80
}, {
  skill: 'Java',
  percentage: 80
}, {
  skill: 'POO',
  percentage: 90
}, {
  skill: 'HTML',
  percentage: 100
}, {
  skill: 'MySQL/SqlServer',
  percentage: 70
}, {
  skill: 'CSS',
  percentage: 80
}, {
  skill: 'GNU/Linux',
  percentage: 50
}, {
  skill: 'Windows',
  percentage: 80
}, {
  skill: 'NodeJS',
  percentage: 50
}, {
  skill: 'C#',
  percentage: 60
}, {
  skill: 'UX/UI',
  percentage: 70
}, {
  skill: 'Bootstrap',
  percentage: 70
}, {
  skill: 'Photoshop',
  percentage: 60
}, {
  skill: 'Responsive Design',
  percentage: 60
}, {
  skill: 'Material Design',
  percentage: 60
}, {
  skill: 'Office',
  percentage: 80
}];
var experiences = [{
  title: 'Sub encargada',
  job: 'Vz Bath and Body S.A',
  description: 'Trabajo en equipo orientado a objetivo.Atención al cliente. Depósitos por sistema y banco. Sistema de facturación Quick Post y Discovery.Control de stock de mercadería.Manejo de ​paquete Office.Capacitación de personal. Confección de base de datos',
  from: 2010,
  to: 2019
}, {
  title: 'Telemarketer',
  job: 'Lumat Seguridad & control',
  description: 'Trabajo en conjunto con un vendedor que realizaba las visitas a los clientes, concluyendo con un seguimiento de estos, para mejor atención.Tareas administrativas varias, recepción de llamados, derivaciones y manejo de paquete Office.Confección de base de datos',
  from: 2009,
  to: 2010
}];
var schools = [{
  school: 'Escuela Multimedial Da Vinci',
  name: 'Analista de sistemas',
  from: 2019,
  to: 'Actualidad'
}, {
  school: 'Inmaculada Concepcion de Maria',
  name: 'Bachiller secundario',
  from: 2003,
  to: 2008
}];
var academics = [{
  name: 'Taller de UX',
  where: 'Escuela Multimedial Da Vinci',
  from: ' Nov 2019',
  to: ' Dic 2019'
}, {
  name: 'Taller de Phyton',
  where: 'Escuela Multimedial Da Vinci',
  from: ' May 2020',
  to: ' Jun 2020'
}, {
  name: 'Taller de Testing QA Automatizacion',
  where: 'Escuela Multimedial Da Vinci',
  from: ' Oct 2019',
  to: ' Nov 2019'
}, {
  name: 'Taller de Github',
  where: 'Escuela Multimedial Da Vinci',
  from: ' Oct 2019',
  to: ' Nov 2019'
}, {
  name: 'Taller de Java avanzado Spring',
  where: 'Escuela Multimedial Da Vinci',
  from: ' Sep 2020',
  to: ' Oct 2020'
}];
var lang = [{
  name: 'Español',
  level: 'Nativo'
}, {
  name: 'Ingles',
  level: 'Escrito intermedio / oral Intermedio'
}];
var projects = [{
  name: 'Sitio web peliculas',
  description: 'Consumiendo API de peliculas con ReactJS',
  image: 'portfolio1.png'
}, {
  name: 'Sitio web Personal',
  description: 'Web personal hecho con Html/Css/Bootstrap',
  image: 'portfolio2.png'
}, {
  name: 'The Smiths WebPage',
  description: 'FanPage Hecha con Html/Css/Bootstrap',
  image: 'portfolio3.png'
}, {
  name: 'Sitio web Juego preguntas/respuestas',
  description: 'Webpage hecha con Html/Css/Bootstrap/Javascript',
  image: 'portfolio4.png'
}, {
  name: 'Sitio web Musica',
  description: 'Webpage hecha con Html/Css/Bootstrap/Php/Javascript',
  image: 'portfolio5.png'
}, {
  name: 'Juego en Java',
  description: 'Juego realizado con Java en Netbeans',
  image: 'portfolio6.png'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiam9iIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJzY2hvb2xzIiwic2Nob29sIiwibmFtZSIsImFjYWRlbWljcyIsIndoZXJlIiwibGFuZyIsImxldmVsIiwicHJvamVjdHMiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE1BQU0sR0FBRyxDQUNsQjtBQUNJQyxPQUFLLEVBQUUsWUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FEa0IsRUFLbEI7QUFDSUQsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBTGtCLEVBU2xCO0FBQ0lELE9BQUssRUFBRSxPQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQVRrQixFQWFsQjtBQUNJRCxPQUFLLEVBQUUsTUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0Fia0IsRUFpQmxCO0FBQ0lELE9BQUssRUFBRSxLQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWpCa0IsRUFxQmxCO0FBQ0lELE9BQUssRUFBRSxNQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQXJCa0IsRUF5QmxCO0FBQ0lELE9BQUssRUFBRSxpQkFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0F6QmtCLEVBNkJsQjtBQUNJRCxPQUFLLEVBQUUsS0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0E3QmtCLEVBaUNsQjtBQUNJRCxPQUFLLEVBQUUsV0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqQ2tCLEVBcUNsQjtBQUNJRCxPQUFLLEVBQUUsU0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQ2tCLEVBeUNsQjtBQUNJRCxPQUFLLEVBQUUsUUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0F6Q2tC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SFYsQ0FYbUIsRUFnQm5CO0FBQ0lOLE1BQUksRUFBQyxzQ0FEVDtBQUVJTCxhQUFXLEVBQUMsaURBRmhCO0FBR0lXLE9BQUssRUFBQztBQUhWLENBaEJtQixFQXFCbkI7QUFDSU4sTUFBSSxFQUFDLGtCQURUO0FBRUlMLGFBQVcsRUFBQyxxREFGaEI7QUFHSVcsT0FBSyxFQUFDO0FBSFYsQ0FyQm1CLEVBMEJuQjtBQUNJTixNQUFJLEVBQUMsZUFEVDtBQUVJTCxhQUFXLEVBQUMsc0NBRmhCO0FBR0lXLE9BQUssRUFBQztBQUhWLENBMUJtQixDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTllNGE3YzNhMTEwMzE2ODM4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1BIUCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmEnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1BPTycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSFRNTCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ015U1FML1NxbFNlcnZlcicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnQ1NTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdHTlUvTGludXgnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDUwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1dpbmRvd3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGVKUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnQyMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDYwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1VYL1VJJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdCb290c3RyYXAnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1Bob3Rvc2hvcCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVzcG9uc2l2ZSBEZXNpZ24nLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDYwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ01hdGVyaWFsIERlc2lnbicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnT2ZmaWNlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9W1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlIDonU3ViIGVuY2FyZ2FkYScsXHJcbiAgICAgICAgam9iOiAnVnogQmF0aCBhbmQgQm9keSBTLkEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVHJhYmFqbyBlbiBlcXVpcG8gb3JpZW50YWRvIGEgb2JqZXRpdm8uQXRlbmNpw7NuIGFsIGNsaWVudGUuIERlcMOzc2l0b3MgcG9yIHNpc3RlbWEgeSBiYW5jby4gU2lzdGVtYSBkZSBmYWN0dXJhY2nDs24gUXVpY2sgUG9zdCB5IERpc2NvdmVyeS5Db250cm9sIGRlIHN0b2NrIGRlIG1lcmNhZGVyw61hLk1hbmVqbyBkZSDigItwYXF1ZXRlIE9mZmljZS5DYXBhY2l0YWNpw7NuIGRlIHBlcnNvbmFsLiBDb25mZWNjacOzbiBkZSBiYXNlIGRlIGRhdG9zJyxcclxuICAgICAgICBmcm9tOjIwMTAsXHJcbiAgICAgICAgdG86MjAxOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZSA6J1RlbGVtYXJrZXRlcicsXHJcbiAgICAgICAgam9iOiAnTHVtYXQgU2VndXJpZGFkICYgY29udHJvbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUcmFiYWpvIGVuIGNvbmp1bnRvIGNvbiB1biB2ZW5kZWRvciBxdWUgcmVhbGl6YWJhIGxhcyB2aXNpdGFzIGEgbG9zIGNsaWVudGVzLCBjb25jbHV5ZW5kbyBjb24gdW4gc2VndWltaWVudG8gZGUgZXN0b3MsIHBhcmEgbWVqb3IgYXRlbmNpw7NuLlRhcmVhcyBhZG1pbmlzdHJhdGl2YXMgdmFyaWFzLCByZWNlcGNpw7NuIGRlIGxsYW1hZG9zLCBkZXJpdmFjaW9uZXMgeSBtYW5lam8gZGUgcGFxdWV0ZSBPZmZpY2UuQ29uZmVjY2nDs24gZGUgYmFzZSBkZSBkYXRvcycsICAgICAgICBcclxuICAgICAgICBmcm9tOjIwMDksXHJcbiAgICAgICAgdG86MjAxMFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3Qgc2Nob29scyA9IFtcclxuICAgIHtcclxuICAgICAgICBzY2hvb2wgOidFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBuYW1lOidBbmFsaXN0YSBkZSBzaXN0ZW1hcycsXHJcbiAgICAgICAgZnJvbToyMDE5LFxyXG4gICAgICAgIHRvOidBY3R1YWxpZGFkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzY2hvb2wgOidJbm1hY3VsYWRhIENvbmNlcGNpb24gZGUgTWFyaWEnLFxyXG4gICAgICAgIG5hbWU6J0JhY2hpbGxlciBzZWN1bmRhcmlvJyxcclxuICAgICAgICBmcm9tOjIwMDMsXHJcbiAgICAgICAgdG86MjAwOFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgYWNhZGVtaWNzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBVWCcsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgTm92IDIwMTknLFxyXG4gICAgICAgIHRvOicgRGljIDIwMTknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBQaHl0b24nLFxyXG4gICAgICAgIHdoZXJlOiAnRXNjdWVsYSBNdWx0aW1lZGlhbCBEYSBWaW5jaScsXHJcbiAgICAgICAgZnJvbTonIE1heSAyMDIwJyxcclxuICAgICAgICB0bzonIEp1biAyMDIwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidUYWxsZXIgZGUgVGVzdGluZyBRQSBBdXRvbWF0aXphY2lvbicsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgT2N0IDIwMTknLFxyXG4gICAgICAgIHRvOicgTm92IDIwMTknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBHaXRodWInLFxyXG4gICAgICAgIHdoZXJlOiAnRXNjdWVsYSBNdWx0aW1lZGlhbCBEYSBWaW5jaScsXHJcbiAgICAgICAgZnJvbTonIE9jdCAyMDE5JyxcclxuICAgICAgICB0bzonIE5vdiAyMDE5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidUYWxsZXIgZGUgSmF2YSBhdmFuemFkbyBTcHJpbmcnLFxyXG4gICAgICAgIHdoZXJlOiAnRXNjdWVsYSBNdWx0aW1lZGlhbCBEYSBWaW5jaScsXHJcbiAgICAgICAgZnJvbTonIFNlcCAyMDIwJyxcclxuICAgICAgICB0bzonIE9jdCAyMDIwJ1xyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmcgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonRXNwYcOxb2wnLFxyXG4gICAgICAgIGxldmVsOiAnTmF0aXZvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidJbmdsZXMnLFxyXG4gICAgICAgIGxldmVsOiAnRXNjcml0byBpbnRlcm1lZGlvIC8gb3JhbCBJbnRlcm1lZGlvJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPVtcclxuICAgIHtcclxuICAgICAgICBuYW1lOidTaXRpbyB3ZWIgcGVsaWN1bGFzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonQ29uc3VtaWVuZG8gQVBJIGRlIHBlbGljdWxhcyBjb24gUmVhY3RKUycsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzEucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidTaXRpbyB3ZWIgUGVyc29uYWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidXZWIgcGVyc29uYWwgaGVjaG8gY29uIEh0bWwvQ3NzL0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzIucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidUaGUgU21pdGhzIFdlYlBhZ2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidGYW5QYWdlIEhlY2hhIGNvbiBIdG1sL0Nzcy9Cb290c3RyYXAnLFxyXG4gICAgICAgIGltYWdlOidwb3J0Zm9saW8zLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonU2l0aW8gd2ViIEp1ZWdvIHByZWd1bnRhcy9yZXNwdWVzdGFzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonV2VicGFnZSBoZWNoYSBjb24gSHRtbC9Dc3MvQm9vdHN0cmFwL0phdmFzY3JpcHQnLFxyXG4gICAgICAgIGltYWdlOidwb3J0Zm9saW80LnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonU2l0aW8gd2ViIE11c2ljYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246J1dlYnBhZ2UgaGVjaGEgY29uIEh0bWwvQ3NzL0Jvb3RzdHJhcC9QaHAvSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzUucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidKdWVnbyBlbiBKYXZhJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonSnVlZ28gcmVhbGl6YWRvIGNvbiBKYXZhIGVuIE5ldGJlYW5zJyxcclxuICAgICAgICBpbWFnZToncG9ydGZvbGlvNi5wbmcnXHJcbiAgICB9XHJcbl0iXSwic291cmNlUm9vdCI6IiJ9