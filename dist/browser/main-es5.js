(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div>\n\t<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadeosio3d/cadeosio3d.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadeosio3d/cadeosio3d.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <meta http-equiv=Pragma content=no-cache>\n    <meta http-equiv=Expires content=-1>\n    <meta http-equiv=CACHE-CONTROL content=NO-CACHE>\n\n    <title>CADEOS.io</title>\n    <link rel=\"shortcut icon\" href=\"/imgs/CADEOS Logo transparent background2.png\" type=\"image/x-png\">\n    <link rel=\"stylesheet\" href=\"/style.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/openjscad.css\" type=\"text/css\">\n\n  <body>\n    <script src=\"/dist/index.js\"></script>\n<!-- top left header (logo and error message) -->\n    <div id=\"header\">\n      <a class=\"navbar-brand \" routerLink=\"./\"><img src=\"/imgs/cadeosico.png\" />   CADEOS.io</a>\n    </div>\n\n<!-- sliding tab (help, links, examples, options, etc) -->\n    <div id=\"menu\">\n      <img id=\"menuHandle\" src=\"/imgs/menuHandleVLIn.png\">\n      <nav>\n        <div id=\"menuVersion\"></div>\n\n<!--\n        <div id=\"optionsTitle\" class=\"navlink\"><a href='#' onclick='return false'>Options</a></div>\n        <div id=\"options\"></div>\n        <span class=\"menuSubInfo\">Your personal settings</span></p>\n -->\n        <b>Supported Formats</b>\n        <table class=\"info\">\n          <tr><td align=\"right\"><b>jscad</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://openjscad.org/dokuwiki/doku.php\">OpenJSCAD</a> (native, import/export)</td></tr>\n          <tr><td align=\"right\"><b>scad</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"http://openscad.org\">OpenSCAD</a> (<a target=_blank href=\"https://openjscad.org/dokuwiki/doku.php\">experimental</a>, import)</td></tr>\n          <tr><td align=\"right\"><b>stl</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"http://en.wikipedia.org/wiki/STL_(file_format)\">STL format</a> (experimental, import/export)</td></tr>\n          <tr><td align=\"right\"><b>amf</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"http://en.wikipedia.org/wiki/Additive_Manufacturing_File_Format\">AMF format</a> (experimental, import/export)</td></tr>\n          <tr><td align=\"right\"><b>dxf</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://en.wikipedia.org/wiki/AutoCAD_DXF\">DXF format</a> (experimental, import/export)</td></tr>\n          <tr><td align=\"right\"><b>x3d</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://en.wikipedia.org/wiki/X3D\">X3D format</a> (experimental, export)</td></tr>\n          <tr><td align=\"right\"><b>svg</b></td><td><a target=\"_blank\" rel=\"noopener\" href=\"https://en.wikipedia.org/wiki/Scalable_Vector_Graphics\">SVG format</a> (experimental, import/export)</td></tr>\n        </table>\n        <p><a class=\"navlink about\" href=\"#\">About</a></p>\n      </nav>\n    </div> <!-- /menu -->\n\n<!-- about dialog -->\n    <div id=\"about\">\n      <img src=\"/imgs/CADEOS Logo transparent background2.png\" style=\" width: 20%;\">\n      <div id=\"aboutVersion\" ></div>\n\n      <p>\n\n\n<p>\nLicense: MIT License<br>\nGet your copy/clone/fork from <a href=\"https://github.com/CADEOS\" target=\"_blank\" rel=\"noopener\">GitHub: CADEOS.io</a>\n      </p>\n      <p>\n        <br/><a class=\"okButton\" href='#'> OK </a>\n      </p>\n    </div> <!-- about -->\n\n\n<!-- design viewer -->\n    <div oncontextmenu=\"return false;\" id=\"viewerContext\"></div> <!-- avoiding popup when right mouse is clicked -->\n\n<!-- design parameters -->\n    <div id=\"parametersdiv\"></div>\n    <div id=\"selectdiv\"></div>\n\n<!-- design information (status message, download buttons, drag and drop area, etc) -->\n    <div id=\"tail\">\n      <div id=\"statusdiv\"></div>\n      <div id=\"filedropzone\">\n        <div id=\"filedropzone_empty\">\n        </div>\n        <div id=\"filedropzone_input\">\n          <p>\n            <label class=\"input-control\">Add Supported Files: <input type=\"file\" id=\"files-input\" accept=\"*/*\" multiple=\"1\"></label>\n          </p>\n        </div>\n        <div id=\"filedropzone_filled\">\n          <span id=\"currentfile\">...</span>\n          <div id=\"filebuttons\">\n            <button id=\"getstlbutton\" style=\"display:none\" onclick=\"getStl();\">Get STL</button>\n            <button id=\"reloadAllFiles\">Reload</button>\n           <!--button onclick=\"parseFile(gCurrentFile,true,false);\">Debug (see below)</button-->\n            <label for=\"autoreload\">Auto Reload</label><input type=\"checkbox\" name=\"autoreload\" value=\"\" id=\"autoreload\">\n          </div>\n        </div>\n      </div>\n    </div> <!-- tail -->\n\n\n  </body>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exchanges/exchanges.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exchanges/exchanges.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron-fluid\">\n  <div class=\"container\">\n  </div>\n</div>\n\n<section>\n  <div class=\"container\">\n\n    <!--features-->\n    <mat-pages title=\"Trade your ADE tokens\">\n\n      <!--1-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Nedex\"></mat-page-outlook>\n        <mat-page-content>\n\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--2-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Findex\"></mat-page-outlook>\n        <mat-page-content>\n\n\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--3-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Token Store\"></mat-page-outlook>\n        <mat-page-content>\n\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--4-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Yolo\"></mat-page-outlook>\n        <mat-page-content>\n\n\n\n        </mat-page-content>\n      </mat-page-loader>\n\n      <!--5-->\n      <mat-page-loader>\n        <mat-page-outlook title=\"Mydex\"></mat-page-outlook>\n        <mat-page-content>\n\n\n\n        </mat-page-content>\n      </mat-page-loader>\n\n    </mat-pages>\n\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style type=\"text/css\">\n  /*Rules for sizing the icon*/\n  .material-icons.md-18 { font-size: 18px; }\n  .material-icons.md-24 { font-size: 24px; }\n  .material-icons.md-36 { font-size: 36px; }\n  .material-icons.md-48 { font-size: 1000%; text-shadow: -1px 0 rgb(197, 81, 252), 0 1px rgb(197, 81, 252), 1px 0 rgb(197, 81, 252), 0 -1px rgb(197, 81, 252);}\n\n  </style>\n\n\n<div class=\"backstretch animated\"></div>\n\n<img src=\"assets/ADE burning background.png\" class=\"\" style=\" width: 100%;\">\n\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container-fluid\">\n    <div class=\"full-width-row\">\n      <div class=\"col-sm-2 d-flex justify-content-center justify-content-md-end content-around\">\n      </div>\n        <p class=\"buttons text-center\">\n          <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://github.com/CADEOS\"\n             target=\"_blank\" ><i class=\"fa fa-github fa-lg\" ></i> Code on Github</a>\n          <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://web.facebook.com/cadeos.io\" target=\"_blank\"><i\n            class=\"fa fa-facebook-official fa-lg\"></i> Facebook</a>\n            <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://twitter.com/cadeosi\" target=\"_blank\"><i\n              class=\"fa fa-twitter fa-lg\"></i> Twitter</a>\n          <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://t.me/cadeos\" target=\"_blank\"><i\n              class=\"fa fa-telegram fa-lg\"></i> Telegram</a>\n         <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" href=\"https://medium.com/cadeos-io\" target=\"_blank\"><i\n             class=\"fa fa-medium fa-lg\"></i> Medium</a>\n         <a class=\"btn btn-outline-primary btn-sm text-center\" style=\"margin:5px;\" routerLink=\"/exchanges\" target=\"_blank\"><i\n              class=\"fa fa-bitcoin fa-lg\"></i> Exchanges</a>\n      </div>\n      </div>\n\n  </div>\n\n        <!--toolbar-->\n        <mat-toolbar [color]=\"color\">\n          <span>DECENTRALIZED CAD.FILES & PROJECT MANAGEMENT PLATFORM</span>\n          <span class=\"fill-remaining\"></span>\n          <ngx-auth-firebaseui-avatar></ngx-auth-firebaseui-avatar>\n        </mat-toolbar>\n\n        <div class=\"mbr-table-cell mbr-valign-center justify-content-center align-items-center text-center backstretch animated \">\n            <div class=\"container justify-content-center align-items-center text-center overlay1\">\n            <div class=\"row\"> \n            <div class=\"col-md-12 text-center justify-content-center align-items-center overlay1\">\n        </div>\n        \n        <div class=\"row col-md-12 align-items-center\" style=\"margin-top: 3%; margin-left: 6%; text-align: center;\">\n          \n\n        <div class=\"col-md-1 justify-content-center align-items-center overlay1\" >\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://newdex.io/trade/cadeositoken-ade-eos\" target=\"_blank\">\n          <img srcset=\"\" alt=\"\" src=\"/assets/Newdex.jpg\" class=\"\" style= \" margin-bottom: 10%;  color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <h2 class=\"padding-bottom-title text-center\"><b>Nedex</b></h2>\n\n        </div>\n        <div class=\"col-md-1\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://findex.pro/trade/cadeositoken_ADE-eosio.token_EOS\" target=\"_blank\">\n          <img srcset=\"\" alt=\"\" src=\"/assets/Findex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <h2 class=\"padding-bottom-title text-center\"><b>Findex</b></h2>\n\n        </div>\n        <div class=\"col-md-1\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://token.store/\" target=\"_blank\">\n          <img srcset=\"\" alt=\"\" src=\"/assets/TokenStore.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <h2 class=\"padding-bottom-title text-center\"><b>TokenStore</b></h2>\n\n\n        </div>\n        <div class=\"col-md-1\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://mydex.win/\" target=\"_blank\">\n          <img srcset=\"\" alt=\"\" src=\"/assets/Mydex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <h2 class=\"padding-bottom-title text-center\"><b>Mydex</b></h2>\n\n        </div> \n        <div class=\"col-md-1 align-items-center\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://akdex.io/trade/ADE_EOS\" target=\"_blank\">\n          <img srcset=\"\" alt=\"\" src=\"/assets/Akkadex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n        </a>\n        <h2 class=\"padding-bottom-title text-center\"><b>Akdex</b></h2>\n\n      </div> \n      <div class=\"col-md-1 align-items-center\">\n      <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://lynxwallet.io/\" target=\"_blank\">\n        <img srcset=\"\" alt=\"\" src=\"/assets/Lynx.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n      </a>\n      <h2 class=\"padding-bottom-title text-center\"><b>Lynx</b></h2>\n\n    </div> \n    <div class=\"col-md-1 align-items-center\">\n    <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://meet.one/\" target=\"_blank\">\n      <img srcset=\"\" alt=\"\" src=\"/assets/meet.one.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n    </a>\n    <h2 class=\"padding-bottom-title text-center\"><b>MEET.one</b></h2>\n        \n\n  </div> \n  <div class=\"col-md-1 align-items-center\">\n  <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://tokenbank.co.kr/\" target=\"_blank\">\n    <img srcset=\"\" alt=\"\" src=\"/assets/tokenbank.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n  </a>\n  <h2 class=\"padding-bottom-title text-center\"><b>TokenBank</b></h2>\n\n</div> \n<div class=\"col-md-1 align-items-center\">\n<a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"http://more.one/\" target=\"_blank\">\n  <img srcset=\"\" alt=\"\" src=\"/assets/moreone.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n</a>\n<h2 class=\"padding-bottom-title text-center\"><b>MoreOne</b></h2>\n\n</div> \n<div class=\"col-md-1 align-items-center\">\n<a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.tokenpocket.pro/\" target=\"_blank\">\n  <img srcset=\"\" alt=\"\" src=\"/assets/tokenpoket.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n</a>\n<h2 class=\"padding-bottom-title text-center\"><b>TokenPoket</b></h2>\n\n    </div>\n\n        </div>\n        </div>\n        </div>\n      </div>\n\n        <div class=\"mbr-table-cell mbr-valign-center content-size backstretch animated\">\n          <div class=\"container \">\n          <div class=\"row\">\n          <div class=\"col-md-12\">\n          <h1 class=\"mbr-section-title padding-top-title text-center\">\n          FROM YOUR IDEA TO YOUR PRODUCT\n          </h1>\n          </div>\n          <div class=\"col-md-3\">\n          <p class=\"padding-top-subtitle text-center\">\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-server material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\n          </p>\n          <h2 class=\"padding-bottom-title text-center\"><b>BlockChain Database</b></h2>\n\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 20%;\">\n          Powered by blockchain resources\n          </h3>\n          </div>\n          <div class=\"col-md-3\">\n          <p class=\"padding-top-subtitle text-center\">\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-user material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\n          </p>\n          <h2 class=\"padding-bottom-title text-center\"><b>User Friendly</b></h2>\n\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 10%;\">\n          Intuintive enviroment multi-tool\n          </h3>\n          </div>\n          <div class=\"col-md-3\">\n          <p class=\"padding-top-subtitle text-center\">\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-rocket material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\n          </p>\n          <h2 class=\"padding-bottom-title text-center\"><b>Product launcher</b></h2>\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 10%;\">\n            Your product promotion\n          </h3>\n          </div>\n          <div class=\"col-md-3\">\n          <p class=\"padding-top-subtitle text-center\">\n            <img srcset=\"\" alt=\"\" src=\"\" class=\" fa fa-pie-chart material-icons md-48\" style= \" margin-bottom: 10%; color:black;\">\n          </p>\n          <h2 class=\"padding-bottom-title text-center\"><b>Economic System</b></h2>\n          <h3 class=\"padding-bottom-title text-center\" style=\" padding-bottom: 10%;\">\n          PLM Economic Workplace  \n          </h3>\n          </div>\n          </div>\n          </div>\n          </div>\n\n        <div>\n        \n\n            <div id=\"slider\" class=\"carousel slide infinite backstretch animated\" data-ride=\"carousel\" data-interval=\"3000\" data-wrap=\"true\">\n                <ol class=\"carousel-indicators align-items-center justify-content-center\">\n                    <li data-target=\"#slider\" data-slide-to=\"0\" class=\"active\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"1\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"2\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"3\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"4\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"5\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"6\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"7\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"8\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"9\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"10\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"11\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"12\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"13\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"14\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"15\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"16\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"17\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"18\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"19\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"20\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"21\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"22\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"23\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"24\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"25\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"26\"></li>\n                    <li data-target=\"#slider\" data-slide-to=\"27\"></li>\n                </ol>\n                <div class=\"carousel-inner\" data-ride=\"carousel\" data-interval=\"50000\" data-pause=\"hover\" data-wrap=\"false\">\n                    <div class=\"carousel-item\"style= \"width: 40%; margin-left: 30%;\">\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper1.png\" title=\"1\" alt=\"1\" href=\"#carousel\" >\n                    </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper2.png\" title=\"2\" alt=\"2\" href=\"#carousel\">\n                    </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper3.png\" title=\"3\" alt=\"3\" href=\"#carousel\" >\n                    </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                        <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper4.png\" title=\"4\" alt=\"4\" href=\"#carousel\" >\n                    </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                        <img class=\"d-block w-100 \" src=\"./assets/CADEOS - Whitepaper5.png\" title=\"5\" alt=\"5\" href=\"#carousel\" >\n                    </div> \n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                      <img class=\"d-block w-100 \" src=\"./assets/ADE EXCHANGES ANNOUNCE.png\" title=\"6\" alt=\"6\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/ADE Token Store.png\" title=\"6\" alt=\"6\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item active\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 (2).png\" title=\"7\" alt=\"7\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 - Dexeos (1).jpg\" title=\"8\" alt=\"8\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 - FINDEX.jpg\" title=\"9\" alt=\"9\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3 - Mydex 3.jpg\" title=\"10\" alt=\"10\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3-newdex2.jpg\" title=\"11\" alt=\"11\" href=\"#carousel\" >\n                  </div>\n                  <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - EOSdaq.jpg\" title=\"12\" alt=\"12\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper1.png\" title=\"13\" alt=\"13\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper2.png\" title=\"14\" alt=\"14\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper3.png\" title=\"15\" alt=\"15\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper4.png\" title=\"16\" alt=\"16\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper5.png\" title=\"17\" alt=\"17\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS - Whitepaper6.png\" title=\"18\" alt=\"18\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS.jpg\" title=\"19\" alt=\"19\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS2.jpg\" title=\"20\" alt=\"20\" href=\"#carousel\" >\n                  </div>          \n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS3.jpg\" title=\"21\" alt=\"21\" href=\"#carousel\" >\n                  </div> \n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS4.jpg\" title=\"22\" alt=\"22\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS5.jpg\" title=\"23\" alt=\"23\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS6.jpg\" title=\"24\" alt=\"24\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                    <img class=\"d-block w-100\" src=\"./assets/CADEOS7.jpg\" title=\"25\" alt=\"25\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                     <img class=\"d-block w-100\" src=\"./assets/CADEOS8.jpg\" title=\"26\" alt=\"26\" href=\"#carousel\" >\n                  </div>\n                    <div class=\"carousel-item\" style= \"width: 40%; margin-left: 30%;\">\n                     <img class=\"d-block w-100\" src=\"./assets/CADEOS9.jpg\" title=\"27\" alt=\"27\" href=\"#carousel\" >\n                  </div>\n\n                    <a class=\"left carousel-control\" role=\"button\" data-slide=\"prev\">\n                        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Previous</span>\n                      </a>\n                      <a class=\"right carousel-control\" role=\"button\" data-slide=\"next\">\n                        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Next</span>\n                      </a>\n                    </div>\n              </div>\n\n\n      <div class=\"backstretch animated\">\n         \n      <div class=\"container\"></div>\n\n      <div class=\"col-sm-2 d-flex justify-content-center justify-content-md-end content-around\" ></div>\n\n         <h1>ELIMINATING OBSTACLES FOR CREATORS</h1>\n\n         <h2>Today one of the biggest consttrains for entrepreneurs and creators are the expensive software licenses and, with CADEOS, we want to facilitate this process to everyone by getting rid of the problem with our decentralised software. We will make the creation process and product launch affordable and very easy within an intuitive and user friendly environment.\n\n\n\n          By tokenising all kind of projects our users can see their ideas and effort successfully implemented. Our platform would will bring an opportunity to those brilliant minds that are stopped by the market barriers.\n          \n          \n          \n          From the first sketch to the manufacture process, the users can monitor the state of your design in our Product Lifecycle Manager (PLM) platform. Factories, suppliers and all the 3rd parties interested will be able to review your Request for Quotation (RfQ) in our platform and send the manufacture price for each component.\n          \n          \n          \n          With CADEOS you can design any mechanical and electronic component with our decentralised CAD software and promote it in our Community, under the watchful eye of thousands of investors looking for the best idea.\n          \n          \n          \n          CADEOS platform will host a large gallery of components from thousands of different brands and will be responsible of providing the most extensive resources as possible for an easy product composition.\n          \n          \n          \n          By creating your portfolio of suppliers you will have the best advice and direct communication with the best professionals in any industry around the world. Each area will have their own communication channels and chatrooms.\n          \n           \n          \n          With every creation within your dynamic user profile, you will add value to all your products, 3D models, 3D printer parts, electronic schemes, etc., favouring the bids and sales which will be a success in CADEOS Platform. Your work will never be lost or forgotten and will be revaluated from time to time with our token ADE.</h2>\n\n        </div>\n\n          <div class=\"mbr-table-cell mbr-valign-center justify-content-center align-items-center text-center backstretch animated overlay1\">\n            <div class=\"container justify-content-center align-items-center text-center overlay1\">\n            <div class=\"row\"> \n            <div class=\"col-md-12 text-center justify-content-center align-items-center overlay1\">\n            <h1 class=\"mbr-section-title text-center justify-content-center align-items-center\" style=\" margin-top: 3%; margin-bottom: 3%;\">\n            TEAM\n          </h1>\n        </div>\n        <div class=\"col-md-3 justify-content-center align-items-center overlay1\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center overlay1\" href=\"https://www.linkedin.com/in/maria-jose-arroyo-gerez-36907991/\" target=\"_blank\" >\n          <img srcset=\"\" alt=\"\" src=\"/assets/majo.jpeg\" class=\"\" href=\"https://newdex.io/trade/cadeositoken-ade-eos\" target=\"_blank\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <p class=\"padding-bottom-title text-center\"><b>Maria Jose Arroyo</b></p>\n\n        <p class=\"padding-bottom-title text-center\">\n        Marketing Director\n        </p>\n        </div>\n        <div class=\"col-md-3 \">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/guillermo-galindo-saeta-749a2557/\" target=\"_blank\" >\n          <img srcset=\"\" alt=\"\" src=\"/assets/guille.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <p class=\"padding-bottom-title text-center\"><b>Guillermo Galindo</b></p>\n\n        <p class=\"padding-bottom-title text-center justify-content-center align-items-center\">\n        CEO & Full Stack Developer\n        </p>\n        </div>\n        <div class=\"col-md-3\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/jes%C3%BAs-moya-galindo-bb24861a/\" target=\"_blank\" >\n          <img srcset=\"\" alt=\"\" src=\"/assets/jesus.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <p class=\"padding-bottom-title text-center\"><b>Jesus Moya</b></p>\n\n        <p class=\"padding-bottom-title text-center\">\n        Program Manager\n        </p>\n        </div>\n        <div class=\"col-md-3\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/javier-saeta-hidalgo/\" target=\"_blank\" >\n          <img srcset=\"\" alt=\"\" src=\"/assets/javi.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n        </a>\n        <p class=\"padding-bottom-title text-center\"><b>Javier Saeta</b></p>\n        <p class=\"padding-bottom-title text-center\">Junior Developer</p>\n        </div> \n\n        <div class=\"row col-md-12 align-items-center\" style=\" margin-left: 13%; text-align: center; margin-top: 5%; margin-bottom: 5%;\">\n\n        <div class=\"col-md-3 align-items-center\">\n        <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/h%C3%A9ctor-garz%C3%B3n-6914ba69/\" target=\"_blank\" >\n          <img srcset=\"\" alt=\"\" src=\"/assets/hector.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n        </a>\n        <p class=\"padding-bottom-title text-center\"><b>Hector Garzon</b></p>\n        <p class=\"padding-bottom-title text-center\">Mobile APP Developer</p> \n        \n      </div>\n      <div class=\"col-md-3\">\n      <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\" href=\"https://www.linkedin.com/in/dgalindosaeta/\" target=\"_blank\" >\n        <img srcset=\"\" alt=\"\" src=\"/assets/diego.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n      </a>\n      <p class=\"padding-bottom-title text-center\"><b>Diego Galindo</b></p>\n      <p class=\"padding-bottom-title text-center\">Advisor</p>\n    </div>\n    <div class=\"col-md-3\">\n    <a class=\"padding-top-subtitle text-center justify-content-center align-items-center\"href=\"https://www.linkedin.com/in/antonio-galindo/\" target=\"_blank\"  >\n      <img srcset=\"\" alt=\"\" src=\"/assets/antonio.jpeg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n    </a>\n    <p class=\"padding-bottom-title text-center\"><b>Antonio Galindo</b></p>\n    <p class=\"padding-bottom-title text-center\">Business Expert</p>\n    </div>\n\n        </div>\n        </div>\n        </div>\n      </div>\n    </div>\n\n            <div class=\"backstretch animated\">\n\n            <h1>TOKENIZING THE WORK</h1>\n\n            <h2>CADEOS.io developing a real time processing Computer Aided Design (CAD) and a Product Lifecycle Management (PLM) platform based on EOS blockchain architecture. It provides the best real time design tools to the community, including data sharing, video calls, instant messenger and screen sharing for the best collaborative experience, showing progress of the project management work and helping to grow your network. \n\n\n\n              All this within an intuitive, user friendly and fast environment where the user can feel that they are part of the Cadeos Community, with interactive galleries and video tutorials that will help you to improve your technical knowledge as you move on in the process.\n              \n              \n              \n              With this great software and product design experience CADEOS platform will be a revolution on how the companies spend their capital, saving time and resources, unifying every daily task in this unique and secure platform.\n              \n              \n              \n              Our roadmap will start with the launch of CADEOS.io platform; then we will build a CAD. file sharing platform for each industrial sector. The Community will be able to upload their models in their own galleries, and the users will be able to download them to be used in their own designs accordingly to their needs.\n              \n              \n              \n              CADEOS.io will support the following extensions in the first release: .stp, .igs, stl.\n              \n              \n              \n              The next releases in our roadmap will be mainly focused on adding new design modules and galleries to the existing platform.\n              \n              \n              \n              As added value to the community we want to create a job network where companies will be able to post their job offers to professionals seeking job in all the areas involved such as CAD, 3D printers parts, software development, etc. Being part of this network will be free for the jobseekers creating a huge benefit to the EOS ecosystem.\n              \n              \n              \n              Companies will just have to pay a fee for the service they will use or the duration. All invoices will be linked to a smart contract associated to their corresponding wallet. Data protection and security are guaranteed by Block.one/EOS reliability.</h2>\n\n            </div>\n      \n\n            <div class=\"mbr-table-cell mbr-valign-center justify-content-center align-items-center text-center backstretch animated overlay1\">\n                <div class=\"container justify-content-center align-items-center text-center overlay1\">\n                <div class=\"row\"> \n                <div class=\"col-md-12 text-center justify-content-center align-items-center overlay1\">\n            <h1 class=\"mbr-section-title text-center justify-content-center align-items-center\" >\n                THANKS TO\n              </h1>\n            </div>\n\n            <div class=\"row col-md-12 align-items-center\" style=\" margin-left: 6%; text-align: center;\">\n              \n    \n            <div class=\"col-md-1 justify-content-center align-items-center overlay1\">\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center overlay1\">\n              <img srcset=\"\" alt=\"\" src=\"/assets/eosnewyork.jpeg\" class=\"\" style= \" margin-bottom: 10%;  color:black; width: 80%; border-radius: 50%;\">\n            </p>\n            <h2 class=\"padding-bottom-title text-center\"><b>EOSNewYork</b></h2>\n    \n            </div>\n            <div class=\"col-md-1\">\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n              <img srcset=\"\" alt=\"\" src=\"/assets/scatter.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n            </p>\n            <h2 class=\"padding-bottom-title text-center\"><b>Scatter</b></h2>\n    \n            </div>\n            <div class=\"col-md-1\">\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n              <img srcset=\"\" alt=\"\" src=\"/assets/bigone.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n            </p>\n            <h2 class=\"padding-bottom-title text-center\"><b>BigOne</b></h2>\n    \n    \n            </div>\n            <div class=\"col-md-1\">\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n              <img srcset=\"\" alt=\"\" src=\"/assets/nebula.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; border-radius: 50%;\">\n            </p>\n            <h2 class=\"padding-bottom-title text-center\"><b>Nebula</b></h2>\n    \n            </div> \n            <div class=\"col-md-1 align-items-center\">\n            <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n              <img srcset=\"\" alt=\"\" src=\"/assets/blocks.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n            </p>\n            <h2 class=\"padding-bottom-title text-center\"><b>Bloks.io</b></h2>\n    \n          </div> \n          <div class=\"col-md-1 align-items-center\">\n          <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n            <img srcset=\"\" alt=\"\" src=\"/assets/eosstudio.png\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n          </p>\n          <h2 class=\"padding-bottom-title text-center\"><b>EOStudio</b></h2>\n    \n        </div> \n        <div class=\"col-md-1 align-items-center\">\n        <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n          <img srcset=\"\" alt=\"\" src=\"/assets/greymass.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n        </p>\n        <h2 class=\"padding-bottom-title text-center\"><b>Greymass</b></h2>\n            \n    \n      </div> \n      <div class=\"col-md-1 align-items-center\">\n      <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n        <img srcset=\"\" alt=\"\" src=\"/assets/eosphere.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n      </p>\n      <h2 class=\"padding-bottom-title text-center\"><b>EOSphere</b></h2>\n    \n    </div> \n    <div class=\"col-md-1 align-items-center\">\n    <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n      <img srcset=\"\" alt=\"\" src=\"/assets/tokenrocket.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n    </p>\n    <h2 class=\"padding-bottom-title text-center\"><b>TokenRocket</b></h2>\n    \n    </div> \n    <div class=\"col-md-1 align-items-center\">\n    <p class=\"padding-top-subtitle text-center justify-content-center align-items-center\">\n      <img srcset=\"\" alt=\"\" src=\"/assets/eosindex.jpg\" class=\"\" style= \" margin-bottom: 10%; color:black; width: 80%; height: 80%; border-radius: 50%;\">\n    </p>\n    <h2 class=\"padding-bottom-title text-center\"><b>EOSindex</b></h2>\n    \n            </div>\n            </div>\n            </div>\n          </div>\n        </div>\n\n            <div class=\"backstretch animated\" style=\"padding-bottom: 5%;\">\n\n              <h1>WHY WE CHOSE EOS BLOCKCHAIN?</h1>\n  \n              <h2>EOS poses an entirely different ideological perspective on blockchain consensus, decentralization, and how smart contracts should be executed and operated. Being a completely new platform, EOS is attempting to not make what it considers to be fundamental mistakes made by its predecessors.\n\n                EOS.IO Software\n                One unique feature of EOS is that it will rely on the users of the platform to make their own blockchains, rather than creating and managing a centralized chain themselves. Each blockchain running the EOS.IO Software is expected to begin its chain with an EOS ‘genesis block’. The genesis block will be a snapshot of the Ethereum blockchain taken on June 1, 2018 at 22:59:59 UTC that will record ownership of the temporary ERC-20 EOS tokens that have been distributed throughout the platform’s ICO. From this point, it is theorized that new blockchains running the EOS.IO software will compete against one another until the most popular chain becomes the main chain used on the platform.\n                \n                Token Cap\n                EOS is its approach to token distribution. block.one has put a one billion token cap on the release of its ERC-20 token on the platform, a significantly higher number than most other cryptocurrency platforms (e.g. Bitcoin’s cap is 21 million).\n                \n                Despite being larger than most, token caps of any size have been argued to serve as an important means of protecting token holders against inflation in ways that unlimited token cap platform’s like Ethereum do not.\n                \n                Programming Language and Dapp Development\n                EOS.IO aims to be a more efficient and easy-to-use platform for dapp developers than those that have come before it. To that end, EOS.IO includes support for C++ programming, which is historically one of the most popular coding languages. C++ is compatible with hundreds of thousands of pre-existing libraries currently on the web for EOS developers to reference while building their dapps. This is a potential advantage over a platform like Ethereum which uses a proprietary language called Solidity.\n                \n                EOS.IO will also come pre-equipped with numerous useful features, including account creation and recovery, multi-signature accounts, account messaging, role-based permissions, and many other commonly used tools in application development.\n                \n                Transaction Speed\n                EOS will have a block time of 0.5 seconds and claims to support a transaction speed of thousands, if not millions, of transactions per second. This is perhaps the most exciting feature of EOS and is a feat yet to be achieved by any other platform on the market.\n                \n                DPoS Algorithm\n                One of the key elements to EOS’s security and speed is Daniel Larimer’s unique consensus algorithm called Delegated Proof of Stake (DPoS). Larimer has been refining DPoS since 2013 and has successfully implemented it in his previous blockchain projects, Bitshares and Steem.\n                \n                Through the use of DPoS, EOS aims to address concerns surrounding decentralization, safety, and scalability by allowing network token holders to cast votes in proportion to the size of their stake in the network to elect 21 block producers. DPoS in effect democratizes the process of whose work is chosen to be added to the network’s blockchain.\n                \n                Because EOS token holders are voting for who is elected into the group of block producers, the block producers are held accountable to the quality of their performance. In theory, the competition between block producers to earn the votes of the stakeholders will spur on increased speed and scalability while creating a barrier for entry that will prevent hackers from acquiring sufficient votes to have their fraudulent work added to the chain.\n                \n                DPoS is built on the idea that the barrier of entry block producers need to get through in order to be elected as adds an additional layer of security that a PoS model doesn’t have, and leads to faster transaction speeds than Ethereum’s overly complex sharding system can deliver.</h2>\n  \n              </div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/badges/badges.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/badges/badges.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--NPM VERSION-->\n<a href=\"https://badge.fury.io/js/ngx-auth-firebaseui\">\n  <img src=\"https://badge.fury.io/js/ngx-auth-firebaseui.svg\" alt=\"npm version\">\n</a>\n\n<!--CIRCLECI-->\n<a href=\"https://badge.fury.io/js/ngx-auth-firebaseui\">\n  <img src=\"https://img.shields.io/circleci/project/github/AnthonyNahas/ngx-auth-firebaseui/master.svg?label=circleci\"\n       alt=\"circleci build status\">\n</a>\n\n<!--DOWNLOADS-->\n<a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\">\n  <img src=\"https://img.shields.io/npm/dt/ngx-auth-firebaseui.svg?style=flat-square\" alt=\"downloads\">\n</a>\n\n<!--FORK-->\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui\">\n  <img alt=\"github forks\"\n       src=\"https://img.shields.io/github/forks/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Fork\">\n</a>\n\n<!--STAR-->\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui\">\n  <img alt=\"github stars\"\n       src=\"https://img.shields.io/github/stars/anthonynahas/ngx-auth-firebaseui.svg?style=social&label=Star\">\n</a>\n\n<!--FOLLOWER-->\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui\">\n  <img alt=\"github followers\"\n       src=\"https://img.shields.io/github/followers/anthonynahas.svg?style=social&label=Follow\">\n</a>\n\n<!--LICENSE-->\n<a href=\"https://github.com/anthonynahas/ngx-auth-firebaseui/blob/master/LICENSE\">\n  <img alt=\"license\"\n       src=\"https://img.shields.io/github/license/anthonynahas/ngx-auth-firebaseui.svg?style=flat-square\">\n</a>\n\n<!--TWITTER-->\n<a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\">\n  <img src=\"https://img.shields.io/twitter/url/http/shields.io.svg?style=social\" alt=\"twitter\">\n</a>\n\n<!--TWITTER FOLLOWERS-->\n<a href=\"https://www.npmjs.com/package/ngx-auth-firebaseui\">\n  <img src=\"https://img.shields.io/twitter/follow/ngAnthonyy.svg?style=social&label=Follow\" alt=\"twitter followers\">\n</a>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/content-wrapper/content-wrapper.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/content-wrapper/content-wrapper.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n\t<div class=\"container\">\n\t\t<h1>{{ component }}</h1>\n\t</div>\n</div>\n<div class=\"container\">\n\t<div class=\"col-md-9 col-md-float-3\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"col-md-3 col-md-push-9\">\n\t\t<!--<ngbd-side-nav></ngbd-side-nav>-->\n\t</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<footer class=\"bd-footer text-muted\">\n\n  <div class=\"container\">\n\n    <p><a routerLink=\"legal/tos\">Terms of services </a><img srcset=\"\" alt=\"\" src=\"/assets/espana.webp\" class=\"\" style= \" margin-left: 70%; width: 10%; \"></p>\n    <p><a routerLink=\"legal/privacy\">Private Policy </a></p>\n    <p> Coded by <a href=\"https://github.com/CADEOS\" target=\"_blank\">CADEOS.io<img srcset=\"\" alt=\"\" src=\"/assets/patentes.webp\" class=\"\" style= \" margin-left: 70%; width: 10%;\"></a></p>\n    <p> Code licensed under <a href=\"https://github.com/CADEOS\"\n                               target=\"_blank\">MIT license conditions.</a></p>\n\n</div>\n</footer>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid\">\n    <div class=”row”>\n  <header class=\"navbar navbar-light navbar-fixed-top navbar-expand-lg full-width-row\">\n      <a class=\"navbar-brand\" style=\" font-family: 'Anton', sans-serif; font-size: 40px; \" routerLink=\"/\"><img src=\"/assets/cadeosico.png\"  />   CADEOS.io</a>\n\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\n            [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n      \n    </button>\n\n    <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/getting-started\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">PLM</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/features\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">TOOLS</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\"> \n          <a class=\"nav-link\" routerLink=\"/examples\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">CAMPUS</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/i18n\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">LOGIN</a>\n        </li>\n        <li class=\"full-width-row\" style=\"object-position: right;\">\n          <a class=\"nav-link\" routerLink=\"/providers\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">WALLET</a>\n        </li>\n        <li class=\"full-width-row\" style=\"object-position: right;\">\n          <a class=\"nav-link\" routerLink=\"/cadeosio3d\" (click)=\"navbarCollapsed = true\" style=\" font-family: 'Anton', sans-serif; font-size: 20px;\">3D</a>\n        </li>\n\n      </ul>\n    </div>\n  </header>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            var routes = [
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'getting-started',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | getting-started-getting-started-module */ "getting-started-getting-started-module").then(__webpack_require__.bind(null, /*! ./getting-started/getting-started.module */ "./src/app/getting-started/getting-started.module.ts")).then(function (m) { return m.GettingStartedModule; }); }
                },
                {
                    path: 'features',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | features-features-module */ "features-features-module").then(__webpack_require__.bind(null, /*! ./features/features.module */ "./src/app/features/features.module.ts")).then(function (m) { return m.FeaturesModule; }); }
                },
                {
                    path: 'i18n',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | i18n-i18n-module */ "i18n-i18n-module").then(__webpack_require__.bind(null, /*! ./i18n/i18n.module */ "./src/app/i18n/i18n.module.ts")).then(function (m) { return m.I18nModule; }); }
                },
                {
                    path: 'legal',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | legal-legal-module */ "legal-legal-module").then(__webpack_require__.bind(null, /*! ./legal/legal.module */ "./src/app/legal/legal.module.ts")).then(function (m) { return m.LegalModule; }); }
                },
                {
                    path: 'providers',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | faq-faq-module */ "faq-faq-module").then(__webpack_require__.bind(null, /*! ./faq/faq.module */ "./src/app/faq/faq.module.ts")).then(function (m) { return m.FaqModule; }); }
                },
                {
                    path: 'exchanges',
                    loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./exchanges/exchanges.module */ "./src/app/exchanges/exchanges.module.ts")).then(function (m) { return m.ExchangesModule; }); },
                },
                {
                    path: 'cadeosio3d',
                    loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./cadeosio3d/cadeosio3d.module */ "./src/app/cadeosio3d/cadeosio3d.module.ts")).then(function (m) { return m.Cadeosio3dModule; }); },
                },
                {
                    path: 'secured',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | faq-faq-module */ "faq-faq-module").then(__webpack_require__.bind(null, /*! ./faq/faq.module */ "./src/app/faq/faq.module.ts")).then(function (m) { return m.FaqModule; }); },
                    canActivate: [ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_3__["LoggedInGuard"]]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, platformId) {
                    var _this = this;
                    this.router = router;
                    this.platformId = platformId;
                    this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                            window.scroll(0, 0);
                        }
                    });
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: hljsLanguages, firebaseAppNameFactory, createTranslateLoader, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function () { return hljsLanguages; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseAppNameFactory", function () { return firebaseAppNameFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () { return createTranslateLoader; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
            /* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angulartics2 */ "./node_modules/angulartics2/fesm2015/angulartics2.js");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./firebase.config */ "./src/app/firebase.config.ts");
            /* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
            /* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
            /* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
            /* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-material-extensions/pages */ "./node_modules/@angular-material-extensions/pages/fesm2015/angular-material-extensions-pages.js");
            /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
            /* harmony import */ var _exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./exchanges/exchanges.module */ "./src/app/exchanges/exchanges.module.ts");
            /* harmony import */ var _cadeosio3d_cadeosio3d_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cadeosio3d/cadeosio3d.module */ "./src/app/cadeosio3d/cadeosio3d.module.ts");
            function hljsLanguages() {
                return [
                    { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_18___default.a },
                    { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_19___default.a },
                    { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_20___default.a }
                ];
            }
            function firebaseAppNameFactory() {
                return "cadeosio";
            }
            function createTranslateLoader(http) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    ],
                    imports: [
                        // Add .withServerTransition() to support Universal rendering.
                        // The application ID can be any identifier which is unique on
                        // the page.
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: '1:260992003477:web:912c91001d96d6053b9a9c' }),
                        angulartics2__WEBPACK_IMPORTED_MODULE_13__["Angulartics2Module"].forRoot(),
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                        _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseKey"]),
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__["NgxAuthFirebaseUIModule"].forRoot(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseKey"], firebaseAppNameFactory, {
                            enableFirestoreSync: true,
                            toastMessageOnAuthSuccess: true,
                            toastMessageOnAuthError: true,
                            authGuardFallbackURL: 'examples/logged-out',
                            authGuardLoggedInURL: 'examples/logged-in',
                        }),
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"],
                                useFactory: (createTranslateLoader),
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                            }
                        }),
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HighlightModule"].forRoot({
                            languages: hljsLanguages
                        }),
                        ngx_markdown__WEBPACK_IMPORTED_MODULE_24__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] }),
                        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__["MatPagesModule"].forRoot(),
                        ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"],
                        _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                        _exchanges_exchanges_module__WEBPACK_IMPORTED_MODULE_25__["ExchangesModule"],
                        _cadeosio3d_cadeosio3d_module__WEBPACK_IMPORTED_MODULE_26__["Cadeosio3dModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_16__["NgxAuthFirebaseUIModule"].forRoot(_firebase_config__WEBPACK_IMPORTED_MODULE_17__["firebaseKey"]),
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: Cadeosio3dRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadeosio3dRoutingModule", function () { return Cadeosio3dRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadeosio3d.component */ "./src/app/cadeosio3d/cadeosio3d.component.ts");
            var Cadeosio3dRoutingModule = /** @class */ (function () {
                function Cadeosio3dRoutingModule() {
                }
                return Cadeosio3dRoutingModule;
            }());
            Cadeosio3dRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: 'cadeosio3d', component: _cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__["Cadeosio3dComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], Cadeosio3dRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/*\n * style.css for index.html of http://OpenJSCAD.org/\n */\nhtml, body {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none black;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  font-family: \"Anton\", sans-serif;\n  /* ensure that the document uses the whole width and height of the browser */\n  min-height: 100%;\n  height: 100%;\n  min-width: 100%;\n  width: 100%;\n  /* viewer/canvas is full screen so when window\n     is resized all remains intact, but we make sure no scrollbar appears */\n  overflow: hidden;\n}\na {\n  text-decoration: none;\n  color: #000000;\n  font-weight: bold;\n  text-align: center;\n  font-family: \"Anton\", sans-serif;\n  font-size: 100%;\n  align-content: center;\n  text-align: center;\n  align-items: center;\n}\na:visited {\n  color: #6020a0;\n}\n#header {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  z-index: 20;\n}\n#editFrame {\n  /*  display: none; */\n  margin: 0;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /*  left: 0; */\n  right: 0;\n  width: 40%;\n  font-weight: normal;\n}\n#editHandle {\n  left: -25px;\n  top: 45%;\n  position: absolute;\n  z-index: 6;\n  opacity: 0.9;\n}\n#editFrame {\n  transition: width 0.4s;\n  -o-transition: width 0.4s;\n  -moz-transition: width 0.4s;\n  -webkit-transition: width 0.4s;\n}\n.ace_gutter {\n  border-left: 1px solid #380042;\n  background: transparent !important;\n}\n#editor {\n  margin: inherit;\n  position: inherit;\n  top: inherit;\n  bottom: inherit;\n  left: inherit;\n  right: inherit;\n  width: 100%;\n  z-index: 6;\n  /*\n     background: transparent;\n  */\n  background: rgba(255, 255, 255, 0.15);\n}\n#viewerContext {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none #4b006e;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  /* ensure that the canvas uses the whole width and height of the document */\n  background: #e5b9fd;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  bottom: 0px;\n}\ncanvas {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none #5c005a;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  /* ensure that the canvas uses the whole width and height of the document */\n  height: 100%;\n  width: 100%;\n  cursor: move;\n  /* show that we can change orientation of view */\n}\n#about {\n  position: absolute;\n  width: 30%;\n  left: 30%;\n  top: 10%;\n  font-size: 0.75em;\n  box-shadow: 0px 0px 20px black;\n  color: #404040;\n  border-radius: 20px;\n  background: white;\n  display: none;\n  padding: 1.5em;\n  text-align: center;\n  z-index: 100;\n}\n.okButton {\n  border: 2px solid #808080;\n  border-radius: 4px;\n  padding: 0.5em;\n  padding-left: 2em;\n  padding-right: 2em;\n  margin-top: 3em;\n  background: #eee;\n}\n.okButton:hover {\n  background: #ccc;\n}\n#footer {\n  font-size: 0.7em;\n  text-align: left;\n  position: absolute;\n  margin-left: 1.5em;\n  bottom: 0.5em;\n  opacity: 0.5;\n  -moz-opacity: 0.5;\n  /* css mess (why do it simple, when we can do it complicate!) */\n}\n#tail {\n  z-index: 4;\n  position: absolute;\n  bottom: 1em;\n  margin: 1em;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 95%;\n}\n#busy {\n  vertical-align: middle;\n}\n#menu, #menu nav a {\n  transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n}\n#menu {\n  background: white;\n  opacity: 0.8;\n  -moz-opacity: 0.8;\n  border-right: 1px solid black;\n  height: inherit;\n  width: 250px;\n  padding-left: 20px;\n  padding-right: 10px;\n  position: fixed;\n  z-index: 5;\n  font-size: 0.9em;\n  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);\n}\n#menu {\n  left: 0;\n}\n#menuHandle {\n  right: -25px;\n  top: 45%;\n  position: absolute;\n  z-index: 6;\n}\n#menu nav {\n  position: relative;\n  top: 50px;\n}\n#menu #examples {\n  font-size: 0.6em;\n}\n#menu #examples .newExample {\n  border-radius: 5px;\n  background: yellow;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n#menu #examples, #menu #examples a {\n  margin-top: 0px;\n}\n#menu .info {\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin-bottom: 0.5em;\n}\n#menu .info td {\n  margin: 0px;\n  padding-left: 2px;\n  padding-right: 2px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  font-size: 0.6em;\n}\n.info .infoView {\n  text-align: center;\n  font-weight: bold;\n  color: #444;\n  background: rgba(0, 0, 0, 0.1);\n}\n.info .infoOperation {\n  font-weight: bold;\n  color: #602080;\n}\n.info .infoKey {\n  font-weight: bold;\n  color: #808080;\n}\n#menuVersion {\n  text-align: center;\n  font-size: 0.6em;\n  color: #666;\n}\n.menuSubInfo {\n  font-size: 0.6em;\n  color: #666;\n}\n#examples {\n  /* width: 60em; */\n  width: auto;\n  z-index: 12;\n  position: absolute;\n  display: none;\n  background: #f8e8ff;\n  border: solid 1px #888;\n  padding: 1em;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px #849;\n}\n#examples td {\n  white-space: nowrap;\n}\n#examples li {\n  list-style-type: none;\n}\n#examplesHandle {\n  bottom: 0px;\n  left: 45%;\n  position: relative;\n  z-index: 10;\n}\n#options {\n  width: auto;\n  z-index: 12;\n  position: absolute;\n  display: none;\n  background: #f8e8ff;\n  border: solid 1px #888;\n  padding: 0.5em;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px #849;\n  font-size: 0.8em;\n}\n.optionGroup {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 0.5em;\n  margin: 0.5em;\n  background: white;\n}\n.optionGroup input, .optionGroup select {\n  background: #fea;\n  border: none;\n}\n.optionInfo {\n  font-size: 0.8em;\n  color: #888;\n}\n/* arrows */\n.shift-scene {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  border: 5px dotted #999;\n  width: 160px;\n  height: 160px;\n  margin-top: -80px;\n  margin-left: -80px;\n  background: transparent;\n  cursor: move;\n  opacity: 0.8;\n  display: none;\n}\n.shift-scene.active {\n  display: block;\n}\n.arrow {\n  width: 0px;\n  height: 0px;\n  border: 50px solid transparent;\n  position: absolute;\n  z-index: 100;\n  margin-left: 30px;\n  margin-top: 30px;\n}\n.arrow-left {\n  border-right-color: #666;\n  margin-left: -90px;\n}\n.arrow-right {\n  border-left-color: #666;\n  margin-left: 150px;\n}\n.arrow-top {\n  border-bottom-color: #666;\n  margin-top: -90px;\n}\n.arrow-bottom {\n  border-top-color: #666;\n  margin-top: 150px;\n}\n.shift-vertical .arrow-left,\n.shift-vertical .arrow-right,\n.shift-horizontal .arrow-top,\n.shift-horizontal .arrow-bottom {\n  display: none;\n}\ntable {\n  display: table;\n  border-collapse: separate;\n  border-spacing: 2px;\n  border-color: #310030;\n}\n/*\n* min.css for OpenJSCAD.org viewer\n*/\n.jscad-container {\n  margin: 5px 15px 5px 5px;\n  /* not inherited */\n  padding: 20px;\n  /* not inherited */\n  color: Black;\n  font-weight: bold;\n  font-family: Helvetica, Arial, Sans;\n  border: thin solid black;\n  min-width: 410px;\n}\n#header {\n  margin: 5px;\n  /* not inherited */\n  font-family: \"Anton\", sans-serif;\n  align-content: center;\n  align-items: center;\n  text-align: center;\n}\n#viewerContext {\n  margin: 5px;\n  /* not inherited */\n  border: thin solid gray;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  background: white;\n  width: 400px;\n  height: 300px;\n  top: 0px;\n  bottom: 0px;\n}\ncanvas {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none gray;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n  width: 100%;\n  height: 100%;\n  cursor: move;\n}\n#parametersdiv {\n  margin: 5px;\n  /* not inherited */\n  border: thin solid #c8c8c8;\n  border-radius: 1em;\n  padding: 10px;\n  background: white;\n  opacity: 0.8;\n}\n#parametersdiv table {\n  margin-bottom: 5px;\n  text-align: left;\n  font-size: 0.8em;\n  font-weight: normal;\n}\n#parametersdiv th {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none gray;\n  /* not inherited */\n  padding: 5px;\n  /* not inherited */\n  font-weight: bold;\n}\n#parametersdiv th.caption {\n  text-decoration: underline;\n}\n#parametersdiv td.caption {\n  text-align: right;\n  font-weight: bold;\n}\n#parametersdiv td {\n  margin: 0px;\n  /* not inherited */\n  border: 0px none gray;\n  /* not inherited */\n  padding: 0px;\n  /* not inherited */\n}\n#parametersdiv input, #parametersdiv textarea, #parametersdiv select {\n  font-size: 0.9em;\n  background: #fea;\n  border: none;\n}\n#updateButton {\n  margin: 5px;\n  /* not inherited */\n  border: thin solid Black;\n  /* not inherited */\n  padding: 2px;\n  /* not inherited */\n  border-radius: 4px;\n  background: white;\n  margin-left: 1em;\n}\n#tail {\n  margin: 5px;\n  /* not inherited */\n}\n#busy {\n  vertical-align: middle;\n}\n/* openjscad.css, originally written by Joost Nieuwenhuijse\n*    few changes made by Rene K. Mueller for OpenSCAD.org\n*/\n#filedropzone {\n  border: 2px dashed #480063;\n  border-radius: 5px;\n  padding: 15px;\n  color: black;\n  width: 100%;\n  background: rgba(255, 255, 255, 0);\n  margin-top: 0.5em;\n}\n#filedropzone_empty {\n  text-align: center;\n  color: #888;\n}\n#filedropzone_filled {\n  color: black;\n  display: none;\n}\n#filebuttons {\n  /* float: right; */\n  margin-left: 2em;\n  display: inline;\n}\ncanvas {\n  cursor: move;\n}\n.downloadOutputFileLink {\n  padding: 2px;\n  padding-left: 8px;\n  padding-right: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n  /* css mess */\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  background: #d8f;\n  background: -moz-linear-gradient(top, #eaf, #c6f);\n  text-decoration: none;\n  color: black;\n  font-size: 0.9em;\n  font-weight: bold;\n  box-shadow: 0px 0px 8px black;\n}\n#parametersdiv {\n  /* display: inline-block;     ineffective since we do control in openjscad.js */\n  position: absolute;\n  bottom: 9em;\n  /* draggable via jQuery cannot move bottom: align, stick at the bottom (bug!!) */\n  left: 1em;\n  /* top: 2em;                if draggable, but must be left/top oriented, cannot be aligned bottom which looks nicer\n     left: 16em;\n   */\n  z-index: 4;\n  border: 1px solid #2c003a;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  /* css mess */\n  -webkit-border-radius: 5px;\n  margin: 5px 0px 5px 0px;\n  padding: 10px;\n  background: #f9d5ff;\n  /* rgba(255,255,255,0.7); */\n  opacity: 0.8;\n  /* box-shadow: 0px 0px 15px black;  no shadow, it would indicate moveable/dragable */\n  /* cursor: move;     moveable now */\n}\n#parametersdiv th {\n  text-align: left;\n  font-size: 1em;\n  font-weight: bold;\n}\n#parametersdiv td {\n  text-align: right;\n  font-size: 0.8em;\n}\n#parametersdiv input, #parametersdiv textarea, #parametersdiv select {\n  font-size: 0.9em;\n  background: #fea;\n  border: none;\n}\n#instantUpdate {\n  margin-left: 1em;\n}\n#instantUpdateLabel {\n  font-size: 0.9em;\n}\n#statusspan {\n  margin-right: 2em;\n}\n#statusbuttons {\n  float: right;\n}\n#selectdiv {\n  position: fixed;\n  top: 0.5em;\n  right: 0.5em;\n  z-index: 4;\n  background: transparent;\n  opacity: 0.8;\n  border: none;\n  display: inline;\n}\n#startRange {\n  margin: 2px;\n  padding: 2px;\n}\n#endRange {\n  margin: 2px;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9jYWRlb3NpbzNkL2NhZGVvc2lvM2QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhZGVvc2lvM2QvY2FkZW9zaW8zZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlDO0VBQ0csV0FBQTtFQUF5QixrQkFBQTtFQUN6QixzQkFBQTtFQUF5QixrQkFBQTtFQUN6QixZQUFBO0VBQXlCLGtCQUFBO0VBQ3pCLGdDQUFBO0VBRUEsNEVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBOzJFQUFBO0VBRUEsZ0JBQUE7QUNDSjtBREVDO0VBQ0cscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUM7RUFDRyxjQUFBO0FDQ0o7QURFQztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7QURFQztFQUNBLG9CQUFBO0VBRUUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDRixjQUFBO0VBQ0UsUUFBQTtFQUVBLFVBQUE7RUFDQSxtQkFBQTtBQ0RIO0FESUM7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNESDtBRElDO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNESDtBRElDO0VBQ0csOEJBQUE7RUFDQSxrQ0FBQTtBQ0RKO0FESUM7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDRjs7R0FBQTtFQUdFLHFDQUFBO0FDREg7QURJQztFQUNHLFdBQUE7RUFBeUIsa0JBQUE7RUFDekIsd0JBQUE7RUFBbUMsa0JBQUE7RUFDbkMsWUFBQTtFQUF5QixrQkFBQTtFQUV6QiwyRUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxRQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0M7RUFDRyxXQUFBO0VBQXdCLGtCQUFBO0VBQ3hCLHdCQUFBO0VBQWlDLGtCQUFBO0VBQ2pDLFlBQUE7RUFBd0Isa0JBQUE7RUFFeEIsMkVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFBcUIsZ0RBQUE7QUNFekI7QURDQztFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFSjtBRENDO0VBQ0cseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7QURDQztFQUNHLGdCQUFBO0FDRUo7QURDQztFQUNHLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUF3QiwrREFBQTtBQ0M1QjtBREVDO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFVBQUE7QUNDSjtBREVDO0VBQ0csc0JBQUE7QUNDSjtBREVDO0VBQ0csb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVDO0VBQ0csaUJBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFFQSwwQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7QUNISjtBRE1DO0VBQ0csT0FBQTtBQ0hKO0FETUM7RUFDRyxZQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0hKO0FETUM7RUFDRyxrQkFBQTtFQUNBLFNBQUE7QUNISjtBRFlDO0VBQ0csZ0JBQUE7QUNUSjtBRFlDO0VBQ0csa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFlDO0VBQ0csZUFBQTtBQ1RKO0FEWUM7RUFDRyxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNUSjtBRFlDO0VBQ0csV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQ1RKO0FEWUM7RUFDRyxpQkFBQTtFQUNBLGNBQUE7QUNUSjtBRFlDO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0FDVEo7QURZQztFQUNHLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDVEo7QURZQztFQUNHLGdCQUFBO0VBQ0EsV0FBQTtBQ1RKO0FEWUM7RUFDRyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDVEo7QURZQztFQUNHLG1CQUFBO0FDVEo7QURZQztFQUNHLHFCQUFBO0FDVEo7QURZQztFQUNHLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDVEo7QURlQztFQUNHLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRGVDO0VBQ0csc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNaSjtBRGVDO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDWkg7QURlQztFQUNHLGdCQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEZUMsV0FBQTtBQUVBO0VBQ0csa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ2JKO0FEZUM7RUFDRyxjQUFBO0FDWko7QURjQztFQUNHLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDWEo7QURhQztFQUNHLHdCQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRFlDO0VBQ0csdUJBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0M7RUFDRyx5QkFBQTtFQUNBLGlCQUFBO0FDUko7QURVQztFQUNHLHNCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFNDOzs7O0VBSUcsYUFBQTtBQ05KO0FEU0M7RUFDRyxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDTko7QURTQzs7Q0FBQTtBQUlEO0VBQ0ksd0JBQUE7RUFBMEIsa0JBQUE7RUFDMUIsYUFBQTtFQUFlLGtCQUFBO0VBQ2YsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDTEo7QURRRTtFQUNFLFdBQUE7RUFBYSxrQkFBQTtFQUNiLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPRTtFQUNFLFdBQUE7RUFBYSxrQkFBQTtFQUNiLHVCQUFBO0VBQXlCLGtCQUFBO0VBQ3pCLFlBQUE7RUFBYyxrQkFBQTtFQUVkLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxRQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUU7RUFDRSxXQUFBO0VBQWEsa0JBQUE7RUFDYixxQkFBQTtFQUF1QixrQkFBQTtFQUN2QixZQUFBO0VBQWMsa0JBQUE7RUFFZCxXQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7QUNGSjtBREtFO0VBQ0UsV0FBQTtFQUFhLGtCQUFBO0VBQ2IsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1FO0VBQ0UsV0FBQTtFQUFjLGtCQUFBO0VBQ2QscUJBQUE7RUFBd0Isa0JBQUE7RUFDeEIsWUFBQTtFQUFjLGtCQUFBO0VBRWQsaUJBQUE7QUNESjtBRElFO0VBQ0UsMEJBQUE7QUNESjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0RKO0FESUU7RUFDRSxXQUFBO0VBQWMsa0JBQUE7RUFDZCxxQkFBQTtFQUF3QixrQkFBQTtFQUN4QixZQUFBO0VBQWMsa0JBQUE7QUNFbEI7QURDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUo7QURDRTtFQUNFLFdBQUE7RUFBYyxrQkFBQTtFQUNkLHdCQUFBO0VBQTJCLGtCQUFBO0VBQzNCLFlBQUE7RUFBYyxrQkFBQTtFQUNkLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtBQ0lKO0FEREU7RUFDRSxXQUFBO0VBQWEsa0JBQUE7QUNLakI7QURGRTtFQUNFLHNCQUFBO0FDS0o7QURERTs7Q0FBQTtBQUlGO0VBQ0ksMEJBQUE7RUFHQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUNFSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRUo7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUo7QURDRTtFQUNFLFlBQUE7QUNFSjtBRENFO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQXFCLGFBQUE7RUFDckIsMEJBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0VBRUEsaURBQUE7RUFFQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNBTDtBREdFO0VBQ0UsK0VBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFBNEIsZ0ZBQUE7RUFDNUIsU0FBQTtFQUNBOztJQUFBO0VBSUEsVUFBQTtFQUNBLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSx1QkFBQTtFQUE0QixhQUFBO0VBQzVCLDBCQUFBO0VBRUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFBZ0MsMkJBQUE7RUFDaEMsWUFBQTtFQUVBLG9GQUFBO0VBRUEsbUNBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRyxnQkFBQTtBQ0FMO0FERUU7RUFDRyxnQkFBQTtBQ0NMO0FESUU7RUFDRyxpQkFBQTtBQ0RMO0FER0U7RUFDRyxZQUFBO0FDQUw7QURHRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY2FkZW9zaW8zZC9jYWRlb3NpbzNkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIHN0eWxlLmNzcyBmb3IgaW5kZXguaHRtbCBvZiBodHRwOi8vT3BlbkpTQ0FELm9yZy9cbiAqL1xuXG4gaHRtbCwgYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7ICAgICAgICAgICAgIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBib3JkZXI6IDBweCBub25lIGJsYWNrOyAgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIHBhZGRpbmc6IDBweDsgICAgICAgICAgICAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XG4gXG4gICAgLyogZW5zdXJlIHRoYXQgdGhlIGRvY3VtZW50IHVzZXMgdGhlIHdob2xlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgKi9cbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gXG4gICAgLyogdmlld2VyL2NhbnZhcyBpcyBmdWxsIHNjcmVlbiBzbyB3aGVuIHdpbmRvd1xuICAgICAgIGlzIHJlc2l6ZWQgYWxsIHJlbWFpbnMgaW50YWN0LCBidXQgd2UgbWFrZSBzdXJlIG5vIHNjcm9sbGJhciBhcHBlYXJzICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG4gXG4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiB9XG4gXG4gYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogIzYwMjBhMDtcbiB9XG4gXG4gI2hlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIGxlZnQ6IDFlbTtcbiAgICB6LWluZGV4OiAyMDtcbiB9XG4gXG4gI2VkaXRGcmFtZSB7XG4gLyogIGRpc3BsYXk6IG5vbmU7ICovXG4gXG4gICBtYXJnaW46IDA7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDA7XG4gICBib3R0b206IDA7XG4gLyogIGxlZnQ6IDA7ICovXG4gICByaWdodDogMDtcbiBcbiAgIHdpZHRoOiA0MCU7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuIH1cbiBcbiAjZWRpdEhhbmRsZSB7XG4gICBsZWZ0OiAtMjVweDtcbiAgIHRvcDogNDUlO1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgei1pbmRleDogNjtcbiAgIG9wYWNpdHk6IDAuOTtcbiB9XG4gXG4gI2VkaXRGcmFtZSB7XG4gICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xuICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC40cztcbiAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC40cztcbiAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cztcbiB9XG4gXG4gLmFjZV9ndXR0ZXIge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDU2LCAwLCA2Nik7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiB9XG4gXG4gI2VkaXRvciB7XG4gICBtYXJnaW46IGluaGVyaXQ7XG4gICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgIHRvcDogICAgaW5oZXJpdDtcbiAgIGJvdHRvbTogaW5oZXJpdDtcbiAgIGxlZnQ6ICAgaW5oZXJpdDtcbiAgIHJpZ2h0OiAgaW5oZXJpdDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgei1pbmRleDogNjtcbiAvKlxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICovXG4gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xuIH1cbiBcbiAjdmlld2VyQ29udGV4dCB7XG4gICAgbWFyZ2luOiAwcHg7ICAgICAgICAgICAgIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBib3JkZXI6IDBweCBub25lIHJnYig3NSwgMCwgMTEwKTsgIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBwYWRkaW5nOiAwcHg7ICAgICAgICAgICAgLyogbm90IGluaGVyaXRlZCAqL1xuIFxuICAgIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI5LCAxODUsIDI1Myk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuIFxuICAgIHRvcDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuIH1cbiBcbiBjYW52YXMge1xuICAgIG1hcmdpbjogMHB4OyAgICAgICAgICAgIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBib3JkZXI6IDBweCBub25lIHJnYig5MiwgMCwgOTApOyAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgcGFkZGluZzogMHB4OyAgICAgICAgICAgLyogbm90IGluaGVyaXRlZCAqL1xuIFxuICAgIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gXG4gICAgY3Vyc29yOiBtb3ZlOyAgICAgICAgLyogc2hvdyB0aGF0IHdlIGNhbiBjaGFuZ2Ugb3JpZW50YXRpb24gb2YgdmlldyAqL1xuIH1cbiBcbiAjYWJvdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICB0b3A6IDEwJTtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDA7XG4gfVxuIFxuIC5va0J1dHRvbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzgwODA4MDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuIH1cbiBcbiAub2tCdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gfVxuIFxuICNmb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gXG4gICAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xuICAgIGJvdHRvbTogMC41ZW07XG4gXG4gICAgb3BhY2l0eTogMC41O1xuICAgIC1tb3otb3BhY2l0eTogMC41OyAgICAgIC8qIGNzcyBtZXNzICh3aHkgZG8gaXQgc2ltcGxlLCB3aGVuIHdlIGNhbiBkbyBpdCBjb21wbGljYXRlISkgKi9cbiB9XG4gXG4gI3RhaWwge1xuICAgIHotaW5kZXg6IDQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiA5NSU7XG4gfVxuIFxuICNidXN5IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbiBcbiAjbWVudSwgI21lbnUgbmF2IGEge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiB9XG4gXG4gI21lbnUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuIFxuICAgIG9wYWNpdHk6IDAuODtcbiAgICAtbW96LW9wYWNpdHk6IDAuODtcbiBcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1O1xuIFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gXG4gICAgYm94LXNoYWRvdzogNHB4IDAgMTBweCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogNHB4IDAgMTBweCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDAgMTBweCByZ2JhKDAsMCwwLDAuMjUpO1xuIH1cbiBcbiAjbWVudSB7XG4gICAgbGVmdDogMDtcbiB9XG4gXG4gI21lbnVIYW5kbGUge1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgICB0b3A6IDQ1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNjtcbiB9XG4gXG4gI21lbnUgbmF2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MHB4O1xuIH1cbiBcbiAjbWVudSBuYXYgLm5hdmxpbmsge1xuIH1cbiBcbiAjbWVudSBuYXYgLm5hdmxpbms6aG92ZXIge1xuIH1cbiBcbiAjbWVudSAjZXhhbXBsZXMge1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gfVxuIFxuICNtZW51ICNleGFtcGxlcyAubmV3RXhhbXBsZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gfVxuIFxuICNtZW51ICNleGFtcGxlcywgI21lbnUgI2V4YW1wbGVzIGEge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiB9XG4gXG4gI21lbnUgLmluZm8ge1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gfVxuIFxuICNtZW51IC5pbmZvIHRkIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gfVxuIFxuIC5pbmZvIC5pbmZvVmlldyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcbiB9XG4gXG4gLmluZm8gLmluZm9PcGVyYXRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNjAyMDgwO1xuIH1cbiBcbiAuaW5mbyAuaW5mb0tleSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gfVxuIFxuICNtZW51VmVyc2lvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC42ZW07XG4gICAgY29sb3I6ICM2NjY7XG4gfVxuIFxuIC5tZW51U3ViSW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICBjb2xvcjogIzY2NjtcbiB9XG4gXG4gI2V4YW1wbGVzIHtcbiAgICAvKiB3aWR0aDogNjBlbTsgKi9cbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhlOGZmO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICM4ODg7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzg0OTtcbiB9XG4gXG4gI2V4YW1wbGVzIHRkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuIH1cbiBcbiAjZXhhbXBsZXMgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiB9XG4gXG4gI2V4YW1wbGVzSGFuZGxlIHtcbiAgICBib3R0b206IDBweDtcbiAgICBsZWZ0OiA0NSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuIH1cbiBcbiAuZXhhbXBsZXNTZXBhcmF0b3Ige1xuIH1cbiBcbiAjb3B0aW9ucyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgei1pbmRleDogMTI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2Y4ZThmZjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjODg4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzg0OTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuIH1cbiBcbiAub3B0aW9uR3JvdXAge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIG1hcmdpbjogMC41ZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gfVxuIFxuIC5vcHRpb25Hcm91cCBpbnB1dCwgLm9wdGlvbkdyb3VwIHNlbGVjdCB7XG4gICBiYWNrZ3JvdW5kOiAjZmVhO1xuICAgYm9yZGVyOiBub25lO1xuIH1cbiBcbiAub3B0aW9uSW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogIzg4ODtcbiB9XG4gXG4gLyogYXJyb3dzICovXG4gXG4gLnNoaWZ0LXNjZW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgIzk5OTtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcbiAgICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBkaXNwbGF5OiBub25lO1xuIH1cbiAuc2hpZnQtc2NlbmUuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiB9XG4gLmFycm93IHtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIGJvcmRlcjogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gfVxuIC5hcnJvdy1sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICM2NjY7XG4gICAgbWFyZ2luLWxlZnQ6IC05MHB4O1xuIH1cbiAuYXJyb3ctcmlnaHQge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiB9XG4gLmFycm93LXRvcCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzY2NjtcbiAgICBtYXJnaW4tdG9wOiAtOTBweDtcbiB9XG4gLmFycm93LWJvdHRvbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzY2NjtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiB9XG4gLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1sZWZ0LFxuIC5zaGlmdC12ZXJ0aWNhbCAuYXJyb3ctcmlnaHQsXG4gLnNoaWZ0LWhvcml6b250YWwgLmFycm93LXRvcCxcbiAuc2hpZnQtaG9yaXpvbnRhbCAuYXJyb3ctYm90dG9tIHtcbiAgICBkaXNwbGF5OiBub25lO1xuIH1cbiBcbiB0YWJsZSB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDQ5LCAwLCA0OCk7XG4gfVxuXG4gLypcbiAqIG1pbi5jc3MgZm9yIE9wZW5KU0NBRC5vcmcgdmlld2VyXG4gKi9cblxuLmpzY2FkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA1cHggMTVweCA1cHggNXB4OyAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgcGFkZGluZzogMjBweDsgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIGNvbG9yOiBCbGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgU2FucztcbiAgICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XG4gICAgbWluLXdpZHRoOiA0MTBweDtcbiAgfVxuICBcbiAgI2hlYWRlciB7XG4gICAgbWFyZ2luOiA1cHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICN2aWV3ZXJDb250ZXh0IHtcbiAgICBtYXJnaW46IDVweDsgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCBncmF5OyAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgcGFkZGluZzogMHB4OyAvKiBub3QgaW5oZXJpdGVkICovXG4gIFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICBcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgfVxuICBcbiAgY2FudmFzIHsgXG4gICAgbWFyZ2luOiAwcHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBib3JkZXI6IDBweCBub25lIGdyYXk7IC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBwYWRkaW5nOiAwcHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgICBjdXJzb3I6IG1vdmU7IFxuICB9XG4gIFxuICAjcGFyYW1ldGVyc2RpdiB7XG4gICAgbWFyZ2luOiA1cHg7IC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgICBib3JkZXI6IHRoaW4gc29saWQgcmdiKDIwMCwyMDAsMjAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07ICAgICBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICBcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgXG4gICNwYXJhbWV0ZXJzZGl2IHRhYmxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAjcGFyYW1ldGVyc2RpdiB0aCB7XG4gICAgbWFyZ2luOiAgMHB4OyAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgYm9yZGVyOiAgMHB4IG5vbmUgZ3JheTsgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIHBhZGRpbmc6IDVweDsgLyogbm90IGluaGVyaXRlZCAqL1xuICBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgI3BhcmFtZXRlcnNkaXYgdGguY2FwdGlvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiAgXG4gICNwYXJhbWV0ZXJzZGl2IHRkLmNhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAjcGFyYW1ldGVyc2RpdiB0ZCB7XG4gICAgbWFyZ2luOiAgMHB4OyAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgYm9yZGVyOiAgMHB4IG5vbmUgZ3JheTsgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIHBhZGRpbmc6IDBweDsgLyogbm90IGluaGVyaXRlZCAqL1xuICB9XG4gIFxuICAjcGFyYW1ldGVyc2RpdiBpbnB1dCwgI3BhcmFtZXRlcnNkaXYgdGV4dGFyZWEsICNwYXJhbWV0ZXJzZGl2IHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmVhO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgI3VwZGF0ZUJ1dHRvbiB7XG4gICAgbWFyZ2luOiAgNXB4OyAvKiBub3QgaW5oZXJpdGVkICovXG4gICAgYm9yZGVyOiAgdGhpbiBzb2xpZCBCbGFjazsgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIHBhZGRpbmc6IDJweDsgLyogbm90IGluaGVyaXRlZCAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgfVxuICBcbiAgI3RhaWwgeyBcbiAgICBtYXJnaW46IDVweDsgLyogbm90IGluaGVyaXRlZCAqL1xuICB9XG4gIFxuICAjYnVzeSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICBcblxuICAvKiBvcGVuanNjYWQuY3NzLCBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgSm9vc3QgTmlldXdlbmh1aWpzZVxuICogICAgZmV3IGNoYW5nZXMgbWFkZSBieSBSZW5lIEsuIE11ZWxsZXIgZm9yIE9wZW5TQ0FELm9yZ1xuICovXG5cbiNmaWxlZHJvcHpvbmUge1xuICAgIGJvcmRlcjogMnB4IGRhc2hlZCByZ2IoNzIsIDAsIDk5KTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgXG4gICAgcGFkZGluZzogMTVweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgfVxuICBcbiAgI2ZpbGVkcm9wem9uZV9lbXB0eSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG4gIFxuICAjZmlsZWRyb3B6b25lX2ZpbGxlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gICNmaWxlYnV0dG9ucyB7XG4gICAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIFxuICBjYW52YXMgeyBcbiAgICBjdXJzb3I6IG1vdmU7IFxuICB9XG4gIFxuICAuZG93bmxvYWRPdXRwdXRGaWxlTGluayB7XG4gICAgIHBhZGRpbmc6IDJweDtcbiAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIFxuICAgICBib3JkZXItcmFkaXVzOiA0cHg7ICAvKiBjc3MgbWVzcyAqL1xuICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIFxuICAgICBiYWNrZ3JvdW5kOiAjZDhmO1xuICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNlYWYpLCB0bygjYzZmKSk7XG4gICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNlYWYsICAjYzZmKTtcbiAgXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgY29sb3I6IGJsYWNrO1xuICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggYmxhY2s7XG4gIH1cbiAgXG4gICNwYXJhbWV0ZXJzZGl2IHtcbiAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgICBpbmVmZmVjdGl2ZSBzaW5jZSB3ZSBkbyBjb250cm9sIGluIG9wZW5qc2NhZC5qcyAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgICBcbiAgXG4gICAgYm90dG9tOiA5ZW07ICAgICAgICAgICAgICAgIC8qIGRyYWdnYWJsZSB2aWEgalF1ZXJ5IGNhbm5vdCBtb3ZlIGJvdHRvbTogYWxpZ24sIHN0aWNrIGF0IHRoZSBib3R0b20gKGJ1ZyEhKSAqL1xuICAgIGxlZnQ6IDFlbTtcbiAgICAvKiB0b3A6IDJlbTsgICAgICAgICAgICAgICAgaWYgZHJhZ2dhYmxlLCBidXQgbXVzdCBiZSBsZWZ0L3RvcCBvcmllbnRlZCwgY2Fubm90IGJlIGFsaWduZWQgYm90dG9tIHdoaWNoIGxvb2tzIG5pY2VyXG4gICAgICAgbGVmdDogMTZlbTtcbiAgICAgKi9cbiAgICBcbiAgICB6LWluZGV4OiA0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig0NCwgMCwgNTgpO1xuICAgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgICAgXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7ICAgIC8qIGNzcyBtZXNzICovXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0OSwgMjEzLCAyNTUpOyAvKiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7ICovXG4gICAgb3BhY2l0eTogMC44O1xuICAgIFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCBibGFjazsgIG5vIHNoYWRvdywgaXQgd291bGQgaW5kaWNhdGUgbW92ZWFibGUvZHJhZ2FibGUgKi9cbiAgICBcbiAgICAvKiBjdXJzb3I6IG1vdmU7ICAgICBtb3ZlYWJsZSBub3cgKi9cbiAgfVxuICAjcGFyYW1ldGVyc2RpdiB0aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAjcGFyYW1ldGVyc2RpdiB0ZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuICAjcGFyYW1ldGVyc2RpdiBpbnB1dCwgI3BhcmFtZXRlcnNkaXYgdGV4dGFyZWEsICNwYXJhbWV0ZXJzZGl2IHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmVhO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgI2luc3RhbnRVcGRhdGUge1xuICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICB9XG4gICNpbnN0YW50VXBkYXRlTGFiZWwge1xuICAgICBmb250LXNpemU6IDAuOWVtO1xuICB9XG4gIFxuICAjc3RhdHVzZGl2IHtcbiAgfVxuICAjc3RhdHVzc3BhbiB7XG4gICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICB9XG4gICNzdGF0dXNidXR0b25zIHtcbiAgICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAjc2VsZWN0ZGl2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwLjVlbTtcbiAgICByaWdodDogMC41ZW07XG4gIFxuICAgIHotaW5kZXg6IDQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgI3N0YXJ0UmFuZ2Uge1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuICAjZW5kUmFuZ2Uge1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuICBcbiAgIiwiLypcbiAqIHN0eWxlLmNzcyBmb3IgaW5kZXguaHRtbCBvZiBodHRwOi8vT3BlbkpTQ0FELm9yZy9cbiAqL1xuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJvcmRlcjogMHB4IG5vbmUgYmxhY2s7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGZvbnQtZmFtaWx5OiBcIkFudG9uXCIsIHNhbnMtc2VyaWY7XG4gIC8qIGVuc3VyZSB0aGF0IHRoZSBkb2N1bWVudCB1c2VzIHRoZSB3aG9sZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBicm93c2VyICovXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogdmlld2VyL2NhbnZhcyBpcyBmdWxsIHNjcmVlbiBzbyB3aGVuIHdpbmRvd1xuICAgICBpcyByZXNpemVkIGFsbCByZW1haW5zIGludGFjdCwgYnV0IHdlIG1ha2Ugc3VyZSBubyBzY3JvbGxiYXIgYXBwZWFycyAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYTp2aXNpdGVkIHtcbiAgY29sb3I6ICM2MDIwYTA7XG59XG5cbiNoZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiAxZW07XG4gIHotaW5kZXg6IDIwO1xufVxuXG4jZWRpdEZyYW1lIHtcbiAgLyogIGRpc3BsYXk6IG5vbmU7ICovXG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgLyogIGxlZnQ6IDA7ICovXG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jZWRpdEhhbmRsZSB7XG4gIGxlZnQ6IC0yNXB4O1xuICB0b3A6IDQ1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA2O1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbiNlZGl0RnJhbWUge1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC40cztcbn1cblxuLmFjZV9ndXR0ZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzODAwNDI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbiNlZGl0b3Ige1xuICBtYXJnaW46IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBpbmhlcml0O1xuICB0b3A6IGluaGVyaXQ7XG4gIGJvdHRvbTogaW5oZXJpdDtcbiAgbGVmdDogaW5oZXJpdDtcbiAgcmlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA2O1xuICAvKlxuICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbn1cblxuI3ZpZXdlckNvbnRleHQge1xuICBtYXJnaW46IDBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBib3JkZXI6IDBweCBub25lICM0YjAwNmU7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cbiAgYmFja2dyb3VuZDogI2U1YjlmZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5jYW52YXMge1xuICBtYXJnaW46IDBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBib3JkZXI6IDBweCBub25lICM1YzAwNWE7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIC8qIGVuc3VyZSB0aGF0IHRoZSBjYW52YXMgdXNlcyB0aGUgd2hvbGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZG9jdW1lbnQgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBtb3ZlO1xuICAvKiBzaG93IHRoYXQgd2UgY2FuIGNoYW5nZSBvcmllbnRhdGlvbiBvZiB2aWV3ICovXG59XG5cbiNhYm91dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDEwJTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCBibGFjaztcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5va0J1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLm9rQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuI2Zvb3RlciB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xuICBib3R0b206IDAuNWVtO1xuICBvcGFjaXR5OiAwLjU7XG4gIC1tb3otb3BhY2l0eTogMC41O1xuICAvKiBjc3MgbWVzcyAod2h5IGRvIGl0IHNpbXBsZSwgd2hlbiB3ZSBjYW4gZG8gaXQgY29tcGxpY2F0ZSEpICovXG59XG5cbiN0YWlsIHtcbiAgei1pbmRleDogNDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFlbTtcbiAgbWFyZ2luOiAxZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogOTUlO1xufVxuXG4jYnVzeSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNtZW51LCAjbWVudSBuYXYgYSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuI21lbnUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xuICAtbW96LW9wYWNpdHk6IDAuODtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNoYWRvdzogNHB4IDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDRweCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiNtZW51IHtcbiAgbGVmdDogMDtcbn1cblxuI21lbnVIYW5kbGUge1xuICByaWdodDogLTI1cHg7XG4gIHRvcDogNDUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDY7XG59XG5cbiNtZW51IG5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MHB4O1xufVxuXG4jbWVudSAjZXhhbXBsZXMge1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4jbWVudSAjZXhhbXBsZXMgLm5ld0V4YW1wbGUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHllbGxvdztcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuI21lbnUgI2V4YW1wbGVzLCAjbWVudSAjZXhhbXBsZXMgYSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuI21lbnUgLmluZm8ge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbiNtZW51IC5pbmZvIHRkIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbi5pbmZvIC5pbmZvVmlldyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDQ0O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pbmZvIC5pbmZvT3BlcmF0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjAyMDgwO1xufVxuXG4uaW5mbyAuaW5mb0tleSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzgwODA4MDtcbn1cblxuI21lbnVWZXJzaW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLm1lbnVTdWJJbmZvIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbiNleGFtcGxlcyB7XG4gIC8qIHdpZHRoOiA2MGVtOyAqL1xuICB3aWR0aDogYXV0bztcbiAgei1pbmRleDogMTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Y4ZThmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzg4ODtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjODQ5O1xufVxuXG4jZXhhbXBsZXMgdGQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4jZXhhbXBsZXMgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbiNleGFtcGxlc0hhbmRsZSB7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiA0NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG5cbiNvcHRpb25zIHtcbiAgd2lkdGg6IGF1dG87XG4gIHotaW5kZXg6IDEyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmOGU4ZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICM4ODg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjODQ5O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ub3B0aW9uR3JvdXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW46IDAuNWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm9wdGlvbkdyb3VwIGlucHV0LCAub3B0aW9uR3JvdXAgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2ZlYTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ub3B0aW9uSW5mbyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjODg4O1xufVxuXG4vKiBhcnJvd3MgKi9cbi5zaGlmdC1zY2VuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDVweCBkb3R0ZWQgIzk5OTtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlmdC1zY2VuZS5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYXJyb3ctbGVmdCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IC05MHB4O1xufVxuXG4uYXJyb3ctcmlnaHQge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzY2NjtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuXG4uYXJyb3ctdG9wIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzY2NjtcbiAgbWFyZ2luLXRvcDogLTkwcHg7XG59XG5cbi5hcnJvdy1ib3R0b20ge1xuICBib3JkZXItdG9wLWNvbG9yOiAjNjY2O1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1sZWZ0LFxuLnNoaWZ0LXZlcnRpY2FsIC5hcnJvdy1yaWdodCxcbi5zaGlmdC1ob3Jpem9udGFsIC5hcnJvdy10b3AsXG4uc2hpZnQtaG9yaXpvbnRhbCAuYXJyb3ctYm90dG9tIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxudGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjMzEwMDMwO1xufVxuXG4vKlxuKiBtaW4uY3NzIGZvciBPcGVuSlNDQUQub3JnIHZpZXdlclxuKi9cbi5qc2NhZC1jb250YWluZXIge1xuICBtYXJnaW46IDVweCAxNXB4IDVweCA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBjb2xvcjogQmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgU2FucztcbiAgYm9yZGVyOiB0aGluIHNvbGlkIGJsYWNrO1xuICBtaW4td2lkdGg6IDQxMHB4O1xufVxuXG4jaGVhZGVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgZm9udC1mYW1pbHk6IFwiQW50b25cIiwgc2Fucy1zZXJpZjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN2aWV3ZXJDb250ZXh0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiB0aGluIHNvbGlkIGdyYXk7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuY2FudmFzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiAwcHggbm9uZSBncmF5O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIHBhZGRpbmc6IDBweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbiNwYXJhbWV0ZXJzZGl2IHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiB0aGluIHNvbGlkICNjOGM4Yzg7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuI3BhcmFtZXRlcnNkaXYgdGFibGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbiNwYXJhbWV0ZXJzZGl2IHRoIHtcbiAgbWFyZ2luOiAwcHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgYm9yZGVyOiAwcHggbm9uZSBncmF5O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIHBhZGRpbmc6IDVweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3BhcmFtZXRlcnNkaXYgdGguY2FwdGlvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB0ZC5jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB0ZCB7XG4gIG1hcmdpbjogMHB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJvcmRlcjogMHB4IG5vbmUgZ3JheTtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBwYWRkaW5nOiAwcHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbn1cblxuI3BhcmFtZXRlcnNkaXYgaW5wdXQsICNwYXJhbWV0ZXJzZGl2IHRleHRhcmVhLCAjcGFyYW1ldGVyc2RpdiBzZWxlY3Qge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kOiAjZmVhO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiN1cGRhdGVCdXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgLyogbm90IGluaGVyaXRlZCAqL1xuICBib3JkZXI6IHRoaW4gc29saWQgQmxhY2s7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbiAgcGFkZGluZzogMnB4O1xuICAvKiBub3QgaW5oZXJpdGVkICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbiN0YWlsIHtcbiAgbWFyZ2luOiA1cHg7XG4gIC8qIG5vdCBpbmhlcml0ZWQgKi9cbn1cblxuI2J1c3kge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBvcGVuanNjYWQuY3NzLCBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgSm9vc3QgTmlldXdlbmh1aWpzZVxuKiAgICBmZXcgY2hhbmdlcyBtYWRlIGJ5IFJlbmUgSy4gTXVlbGxlciBmb3IgT3BlblNDQUQub3JnXG4qL1xuI2ZpbGVkcm9wem9uZSB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNDgwMDYzO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbiNmaWxlZHJvcHpvbmVfZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4jZmlsZWRyb3B6b25lX2ZpbGxlZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2ZpbGVidXR0b25zIHtcbiAgLyogZmxvYXQ6IHJpZ2h0OyAqL1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmNhbnZhcyB7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmRvd25sb2FkT3V0cHV0RmlsZUxpbmsge1xuICBwYWRkaW5nOiAycHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8qIGNzcyBtZXNzICovXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2Q4ZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZWFmKSwgdG8oI2M2ZikpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNlYWYsICNjNmYpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IGJsYWNrO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB7XG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgIGluZWZmZWN0aXZlIHNpbmNlIHdlIGRvIGNvbnRyb2wgaW4gb3BlbmpzY2FkLmpzICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5ZW07XG4gIC8qIGRyYWdnYWJsZSB2aWEgalF1ZXJ5IGNhbm5vdCBtb3ZlIGJvdHRvbTogYWxpZ24sIHN0aWNrIGF0IHRoZSBib3R0b20gKGJ1ZyEhKSAqL1xuICBsZWZ0OiAxZW07XG4gIC8qIHRvcDogMmVtOyAgICAgICAgICAgICAgICBpZiBkcmFnZ2FibGUsIGJ1dCBtdXN0IGJlIGxlZnQvdG9wIG9yaWVudGVkLCBjYW5ub3QgYmUgYWxpZ25lZCBib3R0b20gd2hpY2ggbG9va3MgbmljZXJcbiAgICAgbGVmdDogMTZlbTtcbiAgICovXG4gIHotaW5kZXg6IDQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzAwM2E7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGNzcyBtZXNzICovXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2Y5ZDVmZjtcbiAgLyogcmdiYSgyNTUsMjU1LDI1NSwwLjcpOyAqL1xuICBvcGFjaXR5OiAwLjg7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCBibGFjazsgIG5vIHNoYWRvdywgaXQgd291bGQgaW5kaWNhdGUgbW92ZWFibGUvZHJhZ2FibGUgKi9cbiAgLyogY3Vyc29yOiBtb3ZlOyAgICAgbW92ZWFibGUgbm93ICovXG59XG5cbiNwYXJhbWV0ZXJzZGl2IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcGFyYW1ldGVyc2RpdiB0ZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4jcGFyYW1ldGVyc2RpdiBpbnB1dCwgI3BhcmFtZXRlcnNkaXYgdGV4dGFyZWEsICNwYXJhbWV0ZXJzZGl2IHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJhY2tncm91bmQ6ICNmZWE7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI2luc3RhbnRVcGRhdGUge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4jaW5zdGFudFVwZGF0ZUxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuI3N0YXR1c3NwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cblxuI3N0YXR1c2J1dHRvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNzZWxlY3RkaXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMC41ZW07XG4gIHJpZ2h0OiAwLjVlbTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDAuODtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbiNzdGFydFJhbmdlIHtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI2VuZFJhbmdlIHtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d.component.ts ***!
          \****************************************************/
        /*! exports provided: Cadeosio3dComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadeosio3dComponent", function () { return Cadeosio3dComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Cadeosio3dComponent = /** @class */ (function () {
                function Cadeosio3dComponent() {
                }
                Cadeosio3dComponent.prototype.ngOnInit = function () {
                };
                return Cadeosio3dComponent;
            }());
            Cadeosio3dComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cadeosio3d',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cadeosio3d.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cadeosio3d/cadeosio3d.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cadeosio3d.component.scss */ "./src/app/cadeosio3d/cadeosio3d.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], Cadeosio3dComponent);
            /***/ 
        }),
        /***/ "./src/app/cadeosio3d/cadeosio3d.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/cadeosio3d/cadeosio3d.module.ts ***!
          \*************************************************/
        /*! exports provided: Cadeosio3dModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cadeosio3dModule", function () { return Cadeosio3dModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadeosio3d.component */ "./src/app/cadeosio3d/cadeosio3d.component.ts");
            /* harmony import */ var _cadeosio3d_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadeosio3d-routing.module */ "./src/app/cadeosio3d/cadeosio3d-routing.module.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            var Cadeosio3dModule = /** @class */ (function () {
                function Cadeosio3dModule() {
                }
                return Cadeosio3dModule;
            }());
            Cadeosio3dModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _cadeosio3d_routing_module__WEBPACK_IMPORTED_MODULE_4__["Cadeosio3dRoutingModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"]
                    ],
                    declarations: [_cadeosio3d_component__WEBPACK_IMPORTED_MODULE_3__["Cadeosio3dComponent"]]
                })
            ], Cadeosio3dModule);
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/exchanges/exchanges-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: ExchangesRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesRoutingModule", function () { return ExchangesRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _exchanges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchanges.component */ "./src/app/exchanges/exchanges.component.ts");
            var ExchangesRoutingModule = /** @class */ (function () {
                function ExchangesRoutingModule() {
                }
                return ExchangesRoutingModule;
            }());
            ExchangesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: 'exchanges', component: _exchanges_component__WEBPACK_IMPORTED_MODULE_3__["ExchangesComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], ExchangesRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/exchanges/exchanges.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-button {\n  white-space: normal !important;\n}\n\nvideo {\n  max-width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9leGNoYW5nZXMvZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGNoYW5nZXMvZXhjaGFuZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2V4Y2hhbmdlcy9leGNoYW5nZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWJ1dHRvbiB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBidXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgIiwiLm1hdC1idXR0b24ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/exchanges/exchanges.component.ts ***!
          \**************************************************/
        /*! exports provided: ExchangesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesComponent", function () { return ExchangesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ExchangesComponent = /** @class */ (function () {
                function ExchangesComponent() {
                }
                ExchangesComponent.prototype.ngOnInit = function () {
                };
                return ExchangesComponent;
            }());
            ExchangesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-exchanges',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exchanges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exchanges/exchanges.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exchanges.component.scss */ "./src/app/exchanges/exchanges.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ExchangesComponent);
            /***/ 
        }),
        /***/ "./src/app/exchanges/exchanges.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/exchanges/exchanges.module.ts ***!
          \***********************************************/
        /*! exports provided: ExchangesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangesModule", function () { return ExchangesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _exchanges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchanges.component */ "./src/app/exchanges/exchanges.component.ts");
            /* harmony import */ var _exchanges_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchanges-routing.module */ "./src/app/exchanges/exchanges-routing.module.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            var ExchangesModule = /** @class */ (function () {
                function ExchangesModule() {
                }
                return ExchangesModule;
            }());
            ExchangesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _exchanges_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExchangesRoutingModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"]
                    ],
                    declarations: [_exchanges_component__WEBPACK_IMPORTED_MODULE_3__["ExchangesComponent"]]
                })
            ], ExchangesModule);
            /***/ 
        }),
        /***/ "./src/app/firebase.config.ts": 
        /*!************************************!*\
          !*** ./src/app/firebase.config.ts ***!
          \************************************/
        /*! exports provided: firebaseKey */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseKey", function () { return firebaseKey; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var firebaseKey = {
                apiKey: 'AIzaSyAF4ENpoY_9Dyaj6pQez2WnxrWmpGBJD98',
                authDomain: 'cadeosio.firebaseapp.com',
                databaseURL: 'https://cadeosio.firebaseio.com',
                projectId: 'cadeosio',
                storageBucket: 'cadeosio.appspot.com',
                messagingSenderId: '260992003477',
                appId: '1:260992003477:web:912c91001d96d6053b9a9c',
                measurementId: 'G-K8B7064RJY'
            };
            /***/ 
        }),
        /***/ "./src/app/home/home-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/home-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: HomeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () { return HomeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            var HomeRoutingModule = /** @class */ (function () {
                function HomeRoutingModule() {
                }
                return HomeRoutingModule;
            }());
            HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                            { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
                        ])],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], HomeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/home/home.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".logo {\n  width: 256px;\n  height: 256px;\n  margin-top: 0rem;\n}\n\n.home {\n  margin-top: 0rem;\n}\n\nbutton:focus {\n  outline: none;\n}\n\nmat-toolbar {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.stand-alone-providers ngx-auth-firebaseui-providers:not(:last-child) {\n  margin-bottom: 2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURHRTtFQUNFLDhCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIHdpZHRoOiAyNTZweDtcbiAgaGVpZ2h0OiAyNTZweDtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cblxuLmhvbWUge1xuICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3RhbmQtYWxvbmUtcHJvdmlkZXJzIHtcbiAgbmd4LWF1dGgtZmlyZWJhc2V1aS1wcm92aWRlcnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuXG4iLCIubG9nbyB7XG4gIHdpZHRoOiAyNTZweDtcbiAgaGVpZ2h0OiAyNTZweDtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cblxuLmhvbWUge1xuICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3RhbmQtYWxvbmUtcHJvdmlkZXJzIG5neC1hdXRoLWZpcmViYXNldWktcHJvdmlkZXJzOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(titleService, auth, router, snackbar) {
                    this.titleService = titleService;
                    this.auth = auth;
                    this.router = router;
                    this.snackbar = snackbar;
                    this.title = 'app';
                    this.userComponent = "<ngx-auth-firebaseui-user></ngx-auth-firebaseui-user>";
                    this.registerComponent = "<ngx-auth-firebaseui-register></ngx-auth-firebaseui-register>";
                    this.loginComponent = "<ngx-auth-firebaseui-login></ngx-auth-firebaseui-login>";
                    this.element = "<ngx-auth-firebaseui></ngx-auth-firebaseui>";
                    this.providersRow = "<ngx-auth-firebaseui-providers></ngx-auth-firebaseui-providers>";
                    this.providersColumn = "<ngx-auth-firebaseui-providers layout=\"column\"></ngx-auth-firebaseui-providers>";
                    this.providersThemes = "\n              <ngx-auth-firebaseui-providers [theme]=\"themes.CLASSIC\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.STROKED\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.RAISED\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.FAB\"></ngx-auth-firebaseui-providers>\n              <ngx-auth-firebaseui-providers [theme]=\"themes.MINI_FAB\"></ngx-auth-firebaseui-providers>";
                    this.code = "\n  import {Component} from '@angular/core';\n\n  @Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n  })\n  export class AppComponent {\n\n   printUser(event) {\n     console.log(event);\n   }\n\n   printError(event) {\n    console.error(event);\n   }\n  }";
                    this.appComponentTS = "\n  import {Component} from '@angular/core';\n  import {AuthProvider, Theme} from 'ngx-auth-firebaseui';\n\n  @Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n  })\n  export class AppComponent {\n\n  themes = Theme;\n  }";
                    this.html = "<ngx-auth-firebaseui\n             (onSuccess)=\"printUser($event)\"\n             (onError)=\"printError($event)\">\n        </ngx-auth-firebaseui>";
                    this.providers = [ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"].Facebook];
                    this.themes = ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_4__["Theme"];
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.titleService.setTitle('CADEOS.io - Home');
                };
                Object.defineProperty(HomeComponent.prototype, "color", {
                    get: function () {
                        return this.error ? 'warn' : 'primary';
                    },
                    enumerable: true,
                    configurable: true
                });
                HomeComponent.prototype.printUser = function (event) {
                    console.log('onSuccess event ->', event);
                    this.error = false;
                    this.index = 2;
                };
                HomeComponent.prototype.printError = function (event) {
                    console.error('onError event --> ', event);
                    this.error = true;
                    // this.snackbar.open(event.message, 'OK', {duration: 5000});
                };
                HomeComponent.prototype.onTabChange = function (event) {
                    console.log('on tab change: ', event);
                };
                HomeComponent.prototype.showMessage = function () {
                    var _this = this;
                    console.log('on show message');
                    var snackbarReference = this.snackbar.open('onConfirmActionButtonClicked\'s event has been emitted', 'See more examples', {
                        duration: 3000
                    });
                    this.snackbarSubscription = snackbarReference
                        .onAction().subscribe(function () { return _this.router.navigate(['/examples']); });
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    if (this.snackbarSubscription) {
                        this.snackbarSubscription.unsubscribe();
                    }
                };
                HomeComponent.prototype.onSignOut = function () {
                    console.log('Sign-out successful!');
                };
                HomeComponent.prototype.onAccountDeleted = function () {
                    console.log('Account Delete successful!');
                };
                HomeComponent.prototype.createAccount = function () {
                    console.log('create account has beeen requested');
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
            HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_5__["AppSharedModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    ],
                    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
                })
            ], HomeModule);
            /***/ 
        }),
        /***/ "./src/app/shared/badges/badges.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/badges/badges.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0.5em;\n  flex-wrap: wrap;\n}\n:host > * {\n  margin: 0 3px;\n  height: 20px;\n}\n:host iframe {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9zaGFyZWQvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2JhZGdlcy9iYWRnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0U7RUFDRSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgPiAqIHtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG46aG9zdCA+ICoge1xuICBtYXJnaW46IDAgM3B4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG46aG9zdCBpZnJhbWUge1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/shared/badges/badges.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/badges/badges.component.ts ***!
          \***************************************************/
        /*! exports provided: BadgesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () { return BadgesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BadgesComponent = /** @class */ (function () {
                function BadgesComponent() {
                }
                return BadgesComponent;
            }());
            BadgesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-badges',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./badges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/badges/badges.component.html")).default,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./badges.component.scss */ "./src/app/shared/badges/badges.component.scss")).default]
                })
            ], BadgesComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/content-wrapper/content-wrapper.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/shared/content-wrapper/content-wrapper.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250ZW50LXdyYXBwZXIvY29udGVudC13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/content-wrapper/content-wrapper.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/shared/content-wrapper/content-wrapper.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ContentWrapperComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapperComponent", function () { return ContentWrapperComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContentWrapperComponent = /** @class */ (function () {
                function ContentWrapperComponent() {
                }
                ContentWrapperComponent.prototype.ngOnInit = function () {
                };
                return ContentWrapperComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
            ], ContentWrapperComponent.prototype, "component", void 0);
            ContentWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-content-wrapper',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/content-wrapper/content-wrapper.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-wrapper.component.scss */ "./src/app/shared/content-wrapper/content-wrapper.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ContentWrapperComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/footer/footer.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/footer/footer.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("footer {\n  padding: 3rem 0;\n  font-size: 85%;\n  background-color: #000000;\n  text-align: left;\n}\nfooter p {\n  margin-bottom: 0;\n}\nfooter a {\n  font-weight: 500;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxufSAgICIsImZvb3RlciB7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5mb290ZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5mb290ZXIgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/shared/footer/footer.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/footer/footer.component.ts ***!
          \***************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/header/header.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/header/header.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  background: #f2a6fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhZGVvc2lvL0VzY3JpdG9yaW8vY2FkZW9zaW8vc3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAxNjYsIDI1Mik7XG59XG4iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogI2YyYTZmYztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/shared/header/header.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shared/header/header.component.ts ***!
          \***************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                    this.navbarCollapsed = true;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/index.ts": 
        /*!*********************************!*\
          !*** ./src/app/shared/index.ts ***!
          \*********************************/
        /*! exports provided: AppSharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSharedModule", function () { return _shared_module__WEBPACK_IMPORTED_MODULE_1__["AppSharedModule"]; });
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: AppSharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSharedModule", function () { return AppSharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
            /* harmony import */ var _content_wrapper_content_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-wrapper/content-wrapper.component */ "./src/app/shared/content-wrapper/content-wrapper.component.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./badges/badges.component */ "./src/app/shared/badges/badges.component.ts");
            /* harmony import */ var ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-auth-firebaseui */ "./node_modules/ngx-auth-firebaseui/esm2015/ngx-auth-firebaseui.js");
            /* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
            /* harmony import */ var _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-material-extensions/pages */ "./node_modules/@angular-material-extensions/pages/fesm2015/angular-material-extensions-pages.js");
            /* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
            var AppSharedModule = /** @class */ (function () {
                function AppSharedModule() {
                }
                return AppSharedModule;
            }());
            AppSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapseModule"],
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__["HighlightModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_19__["NgxAuthFirebaseUIModule"],
                        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__["MatPagesModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                    ],
                    exports: [
                        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                        _content_wrapper_content_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ContentWrapperComponent"],
                        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_20__["HighlightModule"],
                        ngx_auth_firebaseui__WEBPACK_IMPORTED_MODULE_19__["NgxAuthFirebaseUIModule"],
                        _angular_material_extensions_pages__WEBPACK_IMPORTED_MODULE_21__["MatPagesModule"],
                        _badges_badges_component__WEBPACK_IMPORTED_MODULE_18__["BadgesComponent"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"]
                    ],
                    declarations: [
                        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                        _content_wrapper_content_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ContentWrapperComponent"],
                        _badges_badges_component__WEBPACK_IMPORTED_MODULE_18__["BadgesComponent"]
                    ],
                    providers: [],
                })
            ], AppSharedModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `angular-cli.json`.
            var environment = {
                production: false,
                hmr: false
            };
            /***/ 
        }),
        /***/ "./src/hmr.ts": 
        /*!********************!*\
          !*** ./src/hmr.ts ***!
          \********************/
        /*! exports provided: hmrBootstrap */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function () { return hmrBootstrap; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angularclass/hmr */ "./node_modules/@angularclass/hmr/dist/index.js");
            /* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__);
            var hmrBootstrap = function (module, bootstrap) {
                var ngModule;
                module.hot.accept();
                bootstrap().then(function (mod) { return ngModule = mod; });
                module.hot.dispose(function () {
                    var appRef = ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
                    var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
                    var makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__["createNewHosts"])(elements);
                    ngModule.destroy();
                    makeVisible();
                });
            };
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hmr */ "./src/hmr.ts");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]); };
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
                if (false) { }
                else {
                    console.error('HMR is not enabled for webpack-dev-server!');
                    console.log('Are you using the --hmr flag for ng serve?');
                }
            }
            else {
                bootstrap().catch(function (err) { return console.log(err); });
            }
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/cadeosio/Escritorio/cadeosio/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map