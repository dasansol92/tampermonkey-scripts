// ==UserScript==
// @name         Hide jira header
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide jira header with a button that allows you to show/hide header
// @author       dss
// @match        https://launchmetrics.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var btn = document.createElement("BUTTON");
    btn.innerText = "Hide header";
    btn.setAttribute('style', "position:fixed;top: 0px;right: 0px;z-index: 100000;");
    btn.setAttribute('id', 'hideShowButto');
    btn.addEventListener('click', function(){
        document.querySelector("#ghx-operations").hidden = !document.querySelector("#ghx-operations").hidden;
        document.querySelector(".ghx-top-header").hidden = !document.querySelector(".ghx-top-header").hidden;
        document.querySelector(".ghx-top-header").setAttribute('style', document.querySelector(".ghx-top-header").hidden ? 'display:none' : 'display:innherit');
        document.querySelector("#hideShowButto").innerText = document.querySelector(".ghx-top-header").hidden ? 'Show header' : 'Hide header'
    })
    document.querySelector("body").appendChild(btn);
    document.getElementById("hideShowButto").click();
})();
