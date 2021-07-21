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
  site: 'https://github.com/Silvyhs90/moviesapp'
}, {
  name: 'Sitio web Personal',
  description: 'Web personal hecho con Html/Css/Bootstrap',
  image: 'portfolio2.png'
}, {
  name: 'The Smiths WebPage',
  description: 'FanPage Hecha con Html/Css/Bootstrap',
  image: 'portfolio3.png',
  site: 'https://github.com/Silvyhs90/thesmithsweb'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlcyIsInRpdGxlIiwiam9iIiwiZGVzY3JpcHRpb24iLCJmcm9tIiwidG8iLCJzY2hvb2xzIiwic2Nob29sIiwibmFtZSIsImFjYWRlbWljcyIsIndoZXJlIiwibGFuZyIsImxldmVsIiwicHJvamVjdHMiLCJpbWFnZSIsInNpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxNQUFNLEdBQUcsQ0FDbEI7QUFDSUMsT0FBSyxFQUFFLFlBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBRGtCLEVBS2xCO0FBQ0lELE9BQUssRUFBRSxLQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUxrQixFQVNsQjtBQUNJRCxPQUFLLEVBQUUsT0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FUa0IsRUFhbEI7QUFDSUQsT0FBSyxFQUFFLE1BRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBYmtCLEVBaUJsQjtBQUNJRCxPQUFLLEVBQUUsS0FEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqQmtCLEVBcUJsQjtBQUNJRCxPQUFLLEVBQUUsTUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQmtCLEVBeUJsQjtBQUNJRCxPQUFLLEVBQUUsaUJBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBekJrQixFQTZCbEI7QUFDSUQsT0FBSyxFQUFFLEtBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBN0JrQixFQWlDbEI7QUFDSUQsT0FBSyxFQUFFLFdBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBakNrQixFQXFDbEI7QUFDSUQsT0FBSyxFQUFFLFNBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBckNrQixFQXlDbEI7QUFDSUQsT0FBSyxFQUFFLFFBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBekNrQixFQTZDbEI7QUFDSUQsT0FBSyxFQUFFLElBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBN0NrQixFQWlEbEI7QUFDSUQsT0FBSyxFQUFFLE9BRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBakRrQixFQXFEbEI7QUFDSUQsT0FBSyxFQUFFLFdBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBckRrQixFQXlEbEI7QUFDSUQsT0FBSyxFQUFFLFdBRFg7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBekRrQixFQTZEbEI7QUFDSUQsT0FBSyxFQUFFLG1CQURYO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQTdEa0IsRUFpRWxCO0FBQ0lELE9BQUssRUFBRSxpQkFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqRWtCLEVBcUVsQjtBQUNJRCxPQUFLLEVBQUUsUUFEWDtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyRWtCLENBQWY7QUEyRUEsSUFBTUMsV0FBVyxHQUFFLENBQ3RCO0FBQ0lDLE9BQUssRUFBRSxlQURYO0FBRUlDLEtBQUcsRUFBRSxzQkFGVDtBQUdJQyxhQUFXLEVBQUUseVBBSGpCO0FBSUlDLE1BQUksRUFBQyxJQUpUO0FBS0lDLElBQUUsRUFBQztBQUxQLENBRHNCLEVBUXRCO0FBQ0lKLE9BQUssRUFBRSxjQURYO0FBRUlDLEtBQUcsRUFBRSwyQkFGVDtBQUdJQyxhQUFXLEVBQUUsc1FBSGpCO0FBSUlDLE1BQUksRUFBQyxJQUpUO0FBS0lDLElBQUUsRUFBQztBQUxQLENBUnNCLENBQW5CO0FBaUJBLElBQU1DLE9BQU8sR0FBRyxDQUNuQjtBQUNJQyxRQUFNLEVBQUUsOEJBRFo7QUFFSUMsTUFBSSxFQUFDLHNCQUZUO0FBR0lKLE1BQUksRUFBQyxJQUhUO0FBSUlDLElBQUUsRUFBQztBQUpQLENBRG1CLEVBT25CO0FBQ0lFLFFBQU0sRUFBRSxnQ0FEWjtBQUVJQyxNQUFJLEVBQUMsc0JBRlQ7QUFHSUosTUFBSSxFQUFDLElBSFQ7QUFJSUMsSUFBRSxFQUFDO0FBSlAsQ0FQbUIsQ0FBaEI7QUFlQSxJQUFNSSxTQUFTLEdBQUcsQ0FDckI7QUFDSUQsTUFBSSxFQUFDLGNBRFQ7QUFFSUUsT0FBSyxFQUFFLDhCQUZYO0FBR0lOLE1BQUksRUFBQyxXQUhUO0FBSUlDLElBQUUsRUFBQztBQUpQLENBRHFCLEVBT3JCO0FBQ0lHLE1BQUksRUFBQyxrQkFEVDtBQUVJRSxPQUFLLEVBQUUsOEJBRlg7QUFHSU4sTUFBSSxFQUFDLFdBSFQ7QUFJSUMsSUFBRSxFQUFDO0FBSlAsQ0FQcUIsRUFhckI7QUFDSUcsTUFBSSxFQUFDLHFDQURUO0FBRUlFLE9BQUssRUFBRSw4QkFGWDtBQUdJTixNQUFJLEVBQUMsV0FIVDtBQUlJQyxJQUFFLEVBQUM7QUFKUCxDQWJxQixFQW1CckI7QUFDSUcsTUFBSSxFQUFDLGtCQURUO0FBRUlFLE9BQUssRUFBRSw4QkFGWDtBQUdJTixNQUFJLEVBQUMsV0FIVDtBQUlJQyxJQUFFLEVBQUM7QUFKUCxDQW5CcUIsRUF5QnJCO0FBQ0lHLE1BQUksRUFBQyxnQ0FEVDtBQUVJRSxPQUFLLEVBQUUsOEJBRlg7QUFHSU4sTUFBSSxFQUFDLFdBSFQ7QUFJSUMsSUFBRSxFQUFDO0FBSlAsQ0F6QnFCLENBQWxCO0FBaUNBLElBQU1NLElBQUksR0FBRyxDQUNoQjtBQUNJSCxNQUFJLEVBQUMsU0FEVDtBQUVJSSxPQUFLLEVBQUU7QUFGWCxDQURnQixFQUtoQjtBQUNJSixNQUFJLEVBQUMsUUFEVDtBQUVJSSxPQUFLLEVBQUU7QUFGWCxDQUxnQixDQUFiO0FBV0EsSUFBTUMsUUFBUSxHQUFFLENBQ25CO0FBQ0lMLE1BQUksRUFBQyxxQkFEVDtBQUVJTCxhQUFXLEVBQUMsMENBRmhCO0FBR0lXLE9BQUssRUFBQyxnQkFIVjtBQUlJQyxNQUFJLEVBQUM7QUFKVCxDQURtQixFQU9uQjtBQUNJUCxNQUFJLEVBQUMsb0JBRFQ7QUFFSUwsYUFBVyxFQUFDLDJDQUZoQjtBQUdJVyxPQUFLLEVBQUM7QUFIVixDQVBtQixFQVluQjtBQUNJTixNQUFJLEVBQUMsb0JBRFQ7QUFFSUwsYUFBVyxFQUFDLHNDQUZoQjtBQUdJVyxPQUFLLEVBQUMsZ0JBSFY7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FabUIsRUFrQm5CO0FBQ0lQLE1BQUksRUFBQyxzQ0FEVDtBQUVJTCxhQUFXLEVBQUMsaURBRmhCO0FBR0lXLE9BQUssRUFBQztBQUhWLENBbEJtQixFQXVCbkI7QUFDSU4sTUFBSSxFQUFDLGtCQURUO0FBRUlMLGFBQVcsRUFBQyxxREFGaEI7QUFHSVcsT0FBSyxFQUFDO0FBSFYsQ0F2Qm1CLEVBNEJuQjtBQUNJTixNQUFJLEVBQUMsZUFEVDtBQUVJTCxhQUFXLEVBQUMsc0NBRmhCO0FBR0lXLE9BQUssRUFBQztBQUhWLENBNUJtQixDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNjA2MzNlNTVlYjE0ZWFhMjRlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1BIUCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ0phdmEnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1BPTycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogOTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnSFRNTCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogMTAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ015U1FML1NxbFNlcnZlcicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnQ1NTJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdHTlUvTGludXgnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDUwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1dpbmRvd3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ05vZGVKUycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnQyMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDYwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1VYL1VJJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc2tpbGw6ICdCb290c3RyYXAnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ1Bob3Rvc2hvcCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnUmVzcG9uc2l2ZSBEZXNpZ24nLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDYwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBza2lsbDogJ01hdGVyaWFsIERlc2lnbicsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNjAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNraWxsOiAnT2ZmaWNlJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlcyA9W1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlIDonU3ViIGVuY2FyZ2FkYScsXHJcbiAgICAgICAgam9iOiAnVnogQmF0aCBhbmQgQm9keSBTLkEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVHJhYmFqbyBlbiBlcXVpcG8gb3JpZW50YWRvIGEgb2JqZXRpdm8uQXRlbmNpw7NuIGFsIGNsaWVudGUuIERlcMOzc2l0b3MgcG9yIHNpc3RlbWEgeSBiYW5jby4gU2lzdGVtYSBkZSBmYWN0dXJhY2nDs24gUXVpY2sgUG9zdCB5IERpc2NvdmVyeS5Db250cm9sIGRlIHN0b2NrIGRlIG1lcmNhZGVyw61hLk1hbmVqbyBkZSDigItwYXF1ZXRlIE9mZmljZS5DYXBhY2l0YWNpw7NuIGRlIHBlcnNvbmFsLiBDb25mZWNjacOzbiBkZSBiYXNlIGRlIGRhdG9zJyxcclxuICAgICAgICBmcm9tOjIwMTAsXHJcbiAgICAgICAgdG86MjAxOVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZSA6J1RlbGVtYXJrZXRlcicsXHJcbiAgICAgICAgam9iOiAnTHVtYXQgU2VndXJpZGFkICYgY29udHJvbCcsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUcmFiYWpvIGVuIGNvbmp1bnRvIGNvbiB1biB2ZW5kZWRvciBxdWUgcmVhbGl6YWJhIGxhcyB2aXNpdGFzIGEgbG9zIGNsaWVudGVzLCBjb25jbHV5ZW5kbyBjb24gdW4gc2VndWltaWVudG8gZGUgZXN0b3MsIHBhcmEgbWVqb3IgYXRlbmNpw7NuLlRhcmVhcyBhZG1pbmlzdHJhdGl2YXMgdmFyaWFzLCByZWNlcGNpw7NuIGRlIGxsYW1hZG9zLCBkZXJpdmFjaW9uZXMgeSBtYW5lam8gZGUgcGFxdWV0ZSBPZmZpY2UuQ29uZmVjY2nDs24gZGUgYmFzZSBkZSBkYXRvcycsICAgICAgICBcclxuICAgICAgICBmcm9tOjIwMDksXHJcbiAgICAgICAgdG86MjAxMFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3Qgc2Nob29scyA9IFtcclxuICAgIHtcclxuICAgICAgICBzY2hvb2wgOidFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBuYW1lOidBbmFsaXN0YSBkZSBzaXN0ZW1hcycsXHJcbiAgICAgICAgZnJvbToyMDE5LFxyXG4gICAgICAgIHRvOidBY3R1YWxpZGFkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzY2hvb2wgOidJbm1hY3VsYWRhIENvbmNlcGNpb24gZGUgTWFyaWEnLFxyXG4gICAgICAgIG5hbWU6J0JhY2hpbGxlciBzZWN1bmRhcmlvJyxcclxuICAgICAgICBmcm9tOjIwMDMsXHJcbiAgICAgICAgdG86MjAwOFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgYWNhZGVtaWNzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBVWCcsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgTm92IDIwMTknLFxyXG4gICAgICAgIHRvOicgRGljIDIwMTknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBQaHl0b24nLFxyXG4gICAgICAgIHdoZXJlOiAnRXNjdWVsYSBNdWx0aW1lZGlhbCBEYSBWaW5jaScsXHJcbiAgICAgICAgZnJvbTonIE1heSAyMDIwJyxcclxuICAgICAgICB0bzonIEp1biAyMDIwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidUYWxsZXIgZGUgVGVzdGluZyBRQSBBdXRvbWF0aXphY2lvbicsXHJcbiAgICAgICAgd2hlcmU6ICdFc2N1ZWxhIE11bHRpbWVkaWFsIERhIFZpbmNpJyxcclxuICAgICAgICBmcm9tOicgT2N0IDIwMTknLFxyXG4gICAgICAgIHRvOicgTm92IDIwMTknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J1RhbGxlciBkZSBHaXRodWInLFxyXG4gICAgICAgIHdoZXJlOiAnRXNjdWVsYSBNdWx0aW1lZGlhbCBEYSBWaW5jaScsXHJcbiAgICAgICAgZnJvbTonIE9jdCAyMDE5JyxcclxuICAgICAgICB0bzonIE5vdiAyMDE5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidUYWxsZXIgZGUgSmF2YSBhdmFuemFkbyBTcHJpbmcnLFxyXG4gICAgICAgIHdoZXJlOiAnRXNjdWVsYSBNdWx0aW1lZGlhbCBEYSBWaW5jaScsXHJcbiAgICAgICAgZnJvbTonIFNlcCAyMDIwJyxcclxuICAgICAgICB0bzonIE9jdCAyMDIwJ1xyXG4gICAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmcgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonRXNwYcOxb2wnLFxyXG4gICAgICAgIGxldmVsOiAnTmF0aXZvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidJbmdsZXMnLFxyXG4gICAgICAgIGxldmVsOiAnRXNjcml0byBpbnRlcm1lZGlvIC8gb3JhbCBJbnRlcm1lZGlvJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPVtcclxuICAgIHtcclxuICAgICAgICBuYW1lOidTaXRpbyB3ZWIgcGVsaWN1bGFzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonQ29uc3VtaWVuZG8gQVBJIGRlIHBlbGljdWxhcyBjb24gUmVhY3RKUycsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzEucG5nJyxcclxuICAgICAgICBzaXRlOidodHRwczovL2dpdGh1Yi5jb20vU2lsdnloczkwL21vdmllc2FwcCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonU2l0aW8gd2ViIFBlcnNvbmFsJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonV2ViIHBlcnNvbmFsIGhlY2hvIGNvbiBIdG1sL0Nzcy9Cb290c3RyYXAnLFxyXG4gICAgICAgIGltYWdlOidwb3J0Zm9saW8yLnBuZydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTonVGhlIFNtaXRocyBXZWJQYWdlJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonRmFuUGFnZSBIZWNoYSBjb24gSHRtbC9Dc3MvQm9vdHN0cmFwJyxcclxuICAgICAgICBpbWFnZToncG9ydGZvbGlvMy5wbmcnLFxyXG4gICAgICAgIHNpdGU6J2h0dHBzOi8vZ2l0aHViLmNvbS9TaWx2eWhzOTAvdGhlc21pdGhzd2ViJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidTaXRpbyB3ZWIgSnVlZ28gcHJlZ3VudGFzL3Jlc3B1ZXN0YXMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidXZWJwYWdlIGhlY2hhIGNvbiBIdG1sL0Nzcy9Cb290c3RyYXAvSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgaW1hZ2U6J3BvcnRmb2xpbzQucG5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOidTaXRpbyB3ZWIgTXVzaWNhJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjonV2VicGFnZSBoZWNoYSBjb24gSHRtbC9Dc3MvQm9vdHN0cmFwL1BocC9KYXZhc2NyaXB0JyxcclxuICAgICAgICBpbWFnZToncG9ydGZvbGlvNS5wbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6J0p1ZWdvIGVuIEphdmEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOidKdWVnbyByZWFsaXphZG8gY29uIEphdmEgZW4gTmV0YmVhbnMnLFxyXG4gICAgICAgIGltYWdlOidwb3J0Zm9saW82LnBuZydcclxuICAgIH1cclxuXSJdLCJzb3VyY2VSb290IjoiIn0=