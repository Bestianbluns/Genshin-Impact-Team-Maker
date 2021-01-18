let backup = document.querySelector(".characters").innerHTML;
let selecteds = [];
document.querySelectorAll('.character').forEach(item => {
    item.addEventListener('click', event => {
        char = item.lastElementChild.textContent;
        if (selecteds.indexOf(char) === -1){
            var select = document.getElementById(char);
            select.style.border = "1px solid #d1d8e0";
            select.style.boxShadow = "0px 0px 7px 1px #d1d8e0";
            selecteds.push(char);
        }
        else{
            var select = document.getElementById(char);
            select.style.border = "1px solid #0f0f0f";
            select.style.boxShadow = "0px 0px 7px 1px #1e272e";
            selecteds.splice(selecteds.indexOf(char), 1)
        }
    })
})

let dps = ["Diluc", "Klee", "Tartaglia", "Keqing", "Venti", "Ningguang", "Noelle", "Fischl", "Razor", "Mona", "Jean", "Beidou", "Chongyun", "Xiangling", "Xinyan", "Lisa", "Kaeya"];
let subDPS = ["Ganyu", "Mona", "Venti", "Xingqiu", "Tartaglia", "Albedo", "Jean", "Xiangling", "Fischl", "Chongyun", "Beidou", "Kaeya", "Zhongli", "Sucrose", "Bennett", "Lisa", "TravelerAnemo", "Xinyan", "Amber"];
let support = ["Venti", "Bennett", "Jean", "Sucrose", "Zhongli", "Qiqi", "Diona", "Barbara", "Albedo", "Noelle", "TravelerGeo", "Chongyun", "Xingqiu", "Xinyan", "Ningguang"];

document.querySelector(".generate").addEventListener("click", function(){
    console.log(selecteds);
    myDps = [];
    mySubDps = [];
    mySupport = [];
    for(i of dps){
        if(selecteds.includes(i)){
            myDps.push(i);
        }
    }
    for(i of subDPS){
        if(selecteds.includes(i)){
            mySubDps.push(i);
        }
    }
    for(i of support){
        if(selecteds.includes(i)){
            mySupport.push(i);
        }
    }
    document.querySelector(".back").style.display = "block";

    chara = document.querySelectorAll('.character');
    for (i = 0; i < chara.length; i++){
        chara[i].style.display = "none";
    }
    document.querySelector(".test").style.display = "block";
    
    document.querySelector(".generate").style.display = "none";


    // Team make
    let teams = [];
    // console.log("dps:",myDps);
    // console.log("subdps:",mySubDps);
    // console.log("supp:",mySupport);
    // organize team
    let contDps = 0;
    let contSubDps = 0;
    let contSupp = 0;
    while(true){
        let end = false;
        while(true){
            if(myDps[contDps] === undefined){
                end = true;
                break;
            }
            if(!teams.includes(myDps[contDps])){
                teams.push(myDps[contDps]);
                break;
            }
            else{
                contDps++;
            }
        }
        while(true){
            if(mySubDps[contSubDps] === undefined){
                end = true;
                break;
            }
            if(!teams.includes(mySubDps[contSubDps])){
                teams.push(mySubDps[contSubDps]);
                break;
            }
            else{
                contSubDps++;
            }
        }
        while(true){
            if(mySubDps[contSubDps] === undefined){
                end = true;
                break;
            }
            if(!teams.includes(mySubDps[contSubDps])){
                teams.push(mySubDps[contSubDps]);
                break;
            }
            else{
                contSubDps++;
            }
        }
        while(true){
            if(mySupport[contSupp] === undefined){
                end = true;
                break;
            }
            if(!teams.includes(mySupport[contSupp])){
                teams.push(mySupport[contSupp]);
                break;
            }
            else{
                contSupp++;
            }
        }
        if(end){
            break;
        }
        
    }
    while(teams.length%4 !== 0){
        teams.pop();
    }
    //console.log(teams);
    
    //Generate Team - Visual
    document.querySelector(".test").innerHTML = ``;
    let contTeam = 0;
    for(i = 0; i<teams.length; i += 4){
        console.log(teams[i],teams[i+1],teams[i+2],teams[i+3]);
        titleTeam = contTeam === 0? ("God Tier Team"):("Team Tier: " + contTeam);
        document.querySelector(".test").innerHTML += `<h3 class="title-team">${titleTeam}</h3>`;
        document.querySelector(".test").innerHTML += `<div class="team">`+setCharacter(teams[i], "DPS")+setCharacter(teams[i+1], "Sub DPS")+setCharacter(teams[i+2], "Sub DPS")+setCharacter(teams[i+3], "Support");
        document.querySelector(".test").innerHTML += `</div>`;
        contTeam++;
    }
    document.querySelector(".title-team").style.color = "#FFC312";
})

document.querySelector(".back").addEventListener("click", () =>{
    // console.log("lol");
    document.querySelector(".back").style.display = "none";
    chara = document.querySelectorAll('.character');
    for (i = 0; i < chara.length; i++){
        chara[i].style.display = "block";
    }
    document.querySelector(".test").style.display = "none";
    document.querySelector(".generate").style.display = "block";
    console.clear();
})

function setCharacter(name, role){
    if (name === "TravelerAnemo"){
        return (`<div class="character" id="${name}">
        <img src="Characters/${name}/${name}.png" alt="${name}" class="char">
        <img src="Characters/${name}/${name}Element.png" class="element">
        <h2>Traveler<br>Anemo<br>(${role})</h2>
        </div>`)
    }
    else if (name === "TravelerGeo"){
        return (`<div class="character" id="${name}">
        <img src="Characters/${name}/${name}.png" alt="${name}" class="char">
        <img src="Characters/${name}/${name}Element.png" class="element">
        <h2>Traveler<br>Geo<br>(${role})</h2>
        </div>`)
    }
    else {
        return (`<div class="character" id="${name}">
    <img src="Characters/${name}/${name}.png" alt="${name}" class="char">
    <img src="Characters/${name}/${name}Element.png" class="element">
    <h2>${name}<br>(${role})</h2>
    </div>`)
    }
}