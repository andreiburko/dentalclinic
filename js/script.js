'use strict';

function showMenu() {
    let menuEle;
    menuEle = document.querySelector(".menu");
    if (menuEle.classList.contains("menu")) {
        menuEle.classList.toggle("menu__hiden");
        console.dir(menuEle);
    }

    let btnEle;
    btnEle = document.querySelector(".menu-button");
    btnEle.classList.toggle("menu-button__active");
}

function openModal() {
    let shadow = document.querySelector(".shadow");
    let modal = document.querySelector(".modal");
    shadow.classList.add("shadow__visible");
    modal.classList.add("modal__visible");
}

function closeModal() {
    let shadow = document.querySelector(".shadow");
    let modal = document.querySelector(".modal");
    shadow.classList.remove("shadow__visible");
    modal.classList.remove("modal__visible");
}

function openModalRec() {
    let shadow = document.querySelector(".shadow");
    let modal = document.querySelector(".modal-rec");
    shadow.classList.add("shadow__visible");
    modal.classList.add("modal__visible");
}

function closeModalRec() {
    let shadow = document.querySelector(".shadow");
    let modal = document.querySelector(".modal-rec");
    shadow.classList.remove("shadow__visible");
    modal.classList.remove("modal__visible");
}



function showSurgeon() {
    let item = document.querySelector("#osokin");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#anisimov");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#vardanan");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#soha");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#ivanova");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#sinelschikova");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#chernov");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#eremin");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#sudorgina");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#ponamarev");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }
}

function showTherapy() {
    let item = document.querySelector("#osokin");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#anisimov");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#vardanan");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#soha");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#ivanova");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#sinelschikova");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#chernov");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#eremin");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#sudorgina");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#ponamarev");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }
}

function showOrthopedics() {
    let item = document.querySelector("#osokin");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#anisimov");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#vardanan");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#soha");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#ivanova");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#sinelschikova");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#chernov");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#eremin");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#sudorgina");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#ponamarev");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }
}

function showOrthodontics() {
    let item = document.querySelector("#osokin");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#anisimov");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#vardanan");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#soha");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#ivanova");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#sinelschikova");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#chernov");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#eremin");
    if (item.classList.contains("doctor-item__disable")) {
        item.classList.remove("doctor-item__disable");
    }

    item = document.querySelector("#sudorgina");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }

    item = document.querySelector("#ponamarev");
    if (item.classList.contains("doctor-item__disable")) {
        ;
    }
    else {
        item.classList.add("doctor-item__disable");
    }
}