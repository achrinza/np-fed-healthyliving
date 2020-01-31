(function() {
    'use strict';
    let prompt = document.querySelector('.block-feedback-prompt');
    let promptBody = prompt.querySelector('.block-feedback-prompt__body');

    prompt.style.bottom = `-${promptBody.clientHeight}px`;
}());
