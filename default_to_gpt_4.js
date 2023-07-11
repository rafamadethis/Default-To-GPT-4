// ==UserScript==
// @name         Default to GPT-4
// @version      0.1
// @description  Automatically select GPT-4 in ChatGPT Plus.
// @author       Rafa Martinez-Avial
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

function clickButton() {
    var button = document.getElementById("radix-:ri:");
    if (button) {
        button.click();
    } else {
        // If the button isn't available yet, check again in 500 ms.
        setTimeout(clickButton, 1000);
    }

}

window.addEventListener('load', clickButton, false);