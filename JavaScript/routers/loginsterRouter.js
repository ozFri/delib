//
//
//
// NOTE: this router has its Handler Functions APART of its HTTP-METHODS definitions,
// all handler function is being stored inside "/JavaScript/handlers".
// Each router has its own Handler Functions .JS file, and each .JS file
// exports (module.exports) a JSON contains all the relevant Handler Functions as properties.
//
// Out of modulation considerations:
// Though each handler function is USUALLY correlating with a *specific* HTTP-METHOD definition,
// each handler function can be re-used (with care) and re-arranged at any fashion if needed.
//
//              PLEASE COPY THIS SECTION TO ANY NEW ROUTER FILE CREATED.

"use strict";

var express = require('express');
var loginsterHandler = require('../handlers/loginsterHandlers');
var loginsterRouter = express.Router();

loginsterRouter.get('connection', loginsterHandler.loadRegistrationPage);

loginsterRouter.post('/register', loginsterHandler.registerUser);

loginsterRouter.get('/login/', loginsterHandler.loadLoginPage);

loginsterRouter.post('/login/User=:userUuid', loginsterHandler.authanticateUser);

module.exports = {
        actualRouter: loginsterRouter,
        routerPath: '/loginster',
        Name: "loginsterRouter"
};