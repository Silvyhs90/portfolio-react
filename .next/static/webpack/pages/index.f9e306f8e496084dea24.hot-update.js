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
  image: 'portfolio1.png',
  site: 'moviesapi-alpha.vercel.app'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiam9iIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJzY2hvb2xzIiwic2Nob29sIiwibmFtZSIsImFjYWRlbWljcyIsIndoZXJlIiwibGFuZyIsImxldmVsIiwicHJvamVjdHMiLCJpbWFnZSIsInNpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNLEdBQUcsQ0FDbEI7QUFDSUMsT0FBSyxFQUFFLFlBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBRGtCLEVBS2xCO0FBQ0lELE9BQUssRUFBRSxLQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUxrQixFQVNsQjtBQUNJRCxPQUFLLEVBQUUsT0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FUa0IsRUFhbEI7QUFDSUQsT0FBSyxFQUFFLE1BRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBYmtCLEVBaUJsQjtBQUNJRCxPQUFLLEVBQUUsS0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqQmtCLEVBcUJsQjtBQUNJRCxPQUFLLEVBQUUsTUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQmtCLEVBeUJsQjtBQUNJRCxPQUFLLEVBQUUsaUJBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBekJrQixFQTZCbEI7QUFDSUQsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBN0JrQixFQWlDbEI7QUFDSUQsT0FBSyxFQUFFLFdBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBakNrQixFQXFDbEI7QUFDSUQsT0FBSyxFQUFFLFNBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBckNrQixFQXlDbEI7QUFDSUQsT0FBSyxFQUFFLFFBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhC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QUFDLHNDQUZoQjtBQUdJVyxPQUFLLEVBQUM7QUFIVixDQVptQixFQWlCbkI7QUFDSU4sTUFBSSxFQUFDLHNDQURUO0FBRUlMLGFBQVcsRUFBQyxpREFGaEI7QUFHSVcsT0FBSyxFQUFDO0FBSFYsQ0FqQm1CLEVBc0JuQjtBQUNJTixNQUFJLEVBQUMsa0JBRFQ7QUFFSUwsYUFBVyxFQUFDLHFEQUZoQjtBQUdJVyxPQUFLLEVBQUM7QUFIVixDQXRCbUIsRUEyQm5CO0FBQ0lOLE1BQUksRUFBQyxlQURUO0FBRUlMLGFBQVcsRUFBQyxzQ0FGaEI7QUFHSVcsT0FBSyxFQUFDO0FBSFYsQ0EzQm1CLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5ZTMwNmY4ZTQ5NjA4NGRlYTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUEhQJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSmF2YScsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUE9PJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA5MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdIVE1MJyxcclxuICAgICAgICBwZXJjZW50YWdlOiAxMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTXlTUUwvU3FsU2VydmVyJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdDU1MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0dOVS9MaW51eCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnV2luZG93cycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTm9kZUpTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA1MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdDIycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnVVgvVUknLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUGhvdG9zaG9wJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA2MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdSZXNwb25zaXZlIERlc2lnbicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnTWF0ZXJpYWwgRGVzaWduJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA2MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdPZmZpY2UnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzID1bXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGUgOidTdWIgZW5jYXJnYWRhJyxcclxuICAgICAgICBqb2I6ICdWeiBCYXRoIGFuZCBCb2R5IFMuQScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUcmFiYWpvIGVuIGVxdWlwbyBvcmllbnRhZG8gYSBvYmpldGl2by5BdGVuY2nDs24gYWwgY2xpZW50ZS4gRGVww7NzaXRvcyBwb3Igc2lzdGVtYSB5IGJhbmNvLiBTaXN0ZW1hIGRlIGZhY3R1cmFjacOzbiBRdWljayBQb3N0IHkgRGlzY292ZXJ5LkNvbnRyb2wgZGUgc3RvY2sgZGUgbWVyY2FkZXLDrWEuTWFuZWpvIGRlIOKAi3BhcXVldGUgT2ZmaWNlLkNhcGFjaXRhY2nDs24gZGUgcGVyc29uYWwuIENvbmZlY2Npw7NuIGRlIGJhc2UgZGUgZGF0b3MnLFxyXG4gICAgICAgIGZyb206MjAxMCxcclxuICAgICAgICB0bzoyMDE5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlIDonVGVsZW1hcmtldGVyJyxcclxuICAgICAgICBqb2I6ICdMdW1hdCBTZWd1cmlkYWQgJiBjb250cm9sJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RyYWJham8gZW4gY29uanVudG8gY29uIHVuIHZlbmRlZG9yIHF1ZSByZWFsaXphYmEgbGFzIHZpc2l0YXMgYSBsb3MgY2xpZW50ZXMsIGNvbmNsdXllbmRvIGNvbiB1biBzZWd1aW1pZW50byBkZSBlc3RvcywgcGFyYSBtZWpvciBhdGVuY2nDs24uVGFyZWFzIGFkbWluaXN0cmF0aXZhcyB2YXJpYXMsIHJlY2VwY2nDs24gZGUgbGxhbWFkb3MsIGRlcml2YWNpb25lcyB5IG1hbmVqbyBkZSBwYXF1ZXRlIE9mZmljZS5Db25mZWNjacOzbiBkZSBiYXNlIGRlIGRhdG9zJywgICAgICAgIFxyXG4gICAgICAgIGZyb206MjAwOSxcclxuICAgICAgICB0bzoyMDEwXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBzY2hvb2xzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNjaG9vbCA6J0VzY3VlbGEgTXVsdGltZWRpYWwgRGEgVmluY2knLFxyXG4gICAgICAgIG5hbWU6J0FuYWxpc3RhIGRlIHNpc3RlbWFzJyxcclxuICAgICAgICBmcm9tOjIwMTksXHJcbiAgICAgICAgdG86J0FjdHVhbGlkYWQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNjaG9vbCA6J0lubWFjdWxhZGEgQ29uY2VwY2lvbiBkZSBNYXJpYScsXHJcbiAgICAgICAgbmFtZTonQmFjaGlsbGVyIHNlY3VuZGFyaW8nLFxyXG4gICAgICAgIGZyb206MjAwMyxcclxuICAgICAgICB0bzoyMDA4XHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2FkZW1pY3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonVGFsbGVyIGRlIFVYJyxcclxuICAgICAgICB3aGVyZTogJ0VzY3VlbGEgTXVsdGltZWRpYWwgRGEgVmluY2knLFxyXG4gICAgICAgIGZyb206JyBOb3YgMjAxOScsXHJcbiAgICAgICAgdG86JyBEaWMgMjAxOSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonVGFsbGVyIGRlIFBoeXRvbicsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgTWF5IDIwMjAnLFxyXG4gICAgICAgIHRvOicgSnVuIDIwMjAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBUZXN0aW5nIFFBIEF1dG9tYXRpemFjaW9uJyxcclxuICAgICAgICB3aGVyZTogJ0VzY3VlbGEgTXVsdGltZWRpYWwgRGEgVmluY2knLFxyXG4gICAgICAgIGZyb206JyBPY3QgMjAxOScsXHJcbiAgICAgICAgdG86JyBOb3YgMjAxOSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonVGFsbGVyIGRlIEdpdGh1YicsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgT2N0IDIwMTknLFxyXG4gICAgICAgIHRvOicgTm92IDIwMTknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBKYXZhIGF2YW56YWRvIFNwcmluZycsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgU2VwIDIwMjAnLFxyXG4gICAgICAgIHRvOicgT2N0IDIwMjAnXHJcbiAgICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgbGFuZyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOidFc3Bhw7FvbCcsXHJcbiAgICAgICAgbGV2ZWw6ICdOYXRpdm8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J0luZ2xlcycsXHJcbiAgICAgICAgbGV2ZWw6ICdFc2NyaXRvIGludGVybWVkaW8gLyBvcmFsIEludGVybWVkaW8nXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0cyA9W1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1NpdGlvIHdlYiBwZWxpY3VsYXMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidDb25zdW1pZW5kbyBBUEkgZGUgcGVsaWN1bGFzIGNvbiBSZWFjdEpTJyxcclxuICAgICAgICBpbWFnZToncG9ydGZvbGlvMS5wbmcnLFxyXG4gICAgICAgIHNpdGU6J21vdmllc2FwaS1hbHBoYS52ZXJjZWwuYXBwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidTaXRpbyB3ZWIgUGVyc29uYWwnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidXZWIgcGVyc29uYWwgaGVjaG8gY29uIEh0bWwvQ3NzL0Jvb3RzdHJhcCcsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzIucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidUaGUgU21pdGhzIFdlYlBhZ2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidGYW5QYWdlIEhlY2hhIGNvbiBIdG1sL0Nzcy9Cb290c3RyYXAnLFxyXG4gICAgICAgIGltYWdlOidwb3J0Zm9saW8zLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonU2l0aW8gd2ViIEp1ZWdvIHByZWd1bnRhcy9yZXNwdWVzdGFzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonV2VicGFnZSBoZWNoYSBjb24gSHRtbC9Dc3MvQm9vdHN0cmFwL0phdmFzY3JpcHQnLFxyXG4gICAgICAgIGltYWdlOidwb3J0Zm9saW80LnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonU2l0aW8gd2ViIE11c2ljYScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246J1dlYnBhZ2UgaGVjaGEgY29uIEh0bWwvQ3NzL0Jvb3RzdHJhcC9QaHAvSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzUucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidKdWVnbyBlbiBKYXZhJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonSnVlZ28gcmVhbGl6YWRvIGNvbiBKYXZhIGVuIE5ldGJlYW5zJyxcclxuICAgICAgICBpbWFnZToncG9ydGZvbGlvNi5wbmcnXHJcbiAgICB9XHJcbl0iXSwic291cmNlUm9vdCI6IiJ9