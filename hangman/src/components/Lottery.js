import React from "react";

let alapszotar = ['alma', 'körte', 'finom', 'erős', 'iskola'];
let szotar = [];


reset = () => szotar = alapszotar;
reset();

sorsol = ()=>{
    if (szotar.length > 0) {
        kiiras = [];
        megoldando = szotar[parseInt(Math.random() * szotar.length, 10)];
        szotar = szotar.filter((item)=>item != megoldando);
        megoldando.split('').forEach((item)=>kiiras.push('_'));
        return [megoldando, kiiras];
    } else {
        return 'Mindent kitaláltál már!';
    }
}

ujszo = (szo)=>{
    if (typeof szo === 'string' && szo.length >= 2) {
        if (alapszotar.indexOf(szo) < 0) {
            alapszotar.push(szo);
            valasz = `Köszi szépen az új bejegyzést a szótárba: ${szo}`;
        } else {
            valasz = `Ez a szó: "${szo}" már létezik a szótárban`;
        }
    } else {
        valasz = `Ez nem volt megfelelő!`;
    }

    return valasz;
}

run = ()=>{
    [szo, jatek] = sorsol();
    console.log(jatek);
}
