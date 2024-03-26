// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

let perimeter;
let s;
const sq = 4;

document.getElementById("myBtn").onclick = function(){
s = document.getElementById("myInput2").value;
s = Number(s);
const perimeter = s * sq;
document.getElementById("myH3").textContent = perimeter + " cm";
}
