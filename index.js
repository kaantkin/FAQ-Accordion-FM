function getElementByClass(id, selector) {
    return document.getElementById(id).querySelector(selector);
}

function hideAnswer(ans, btn) {
    ans.classList.remove("show-ans");
    ans.classList.add("hide-ans");
    btn.src = "./assets/images/icon-plus.svg";
}

function showAnswer(ans, btn) {
    ans.classList.remove("hide-ans");
    ans.classList.add("show-ans");
    btn.src = "./assets/images/icon-minus.svg";
}

/* For mouse click on element */
function handleClick(ev) {
    let element = ev.currentTarget;
    let answer = getElementByClass(element.id, '.answer');
    let button = getElementByClass(element.id, '.q-btn');
    
    answer.classList.contains("show-ans") ? hideAnswer(answer, button) : showAnswer(answer, button);
}

/* For keyboard key press on element (accessibility) */
function handleKeyPress(ev) {
    let keycode = ev.which;
    // 13 = Enter key, 32 = Space key
    if (keycode === 13 || keycode === 32) {
        handleClick(ev);
    }
}