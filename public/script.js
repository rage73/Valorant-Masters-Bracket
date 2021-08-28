// let draw = $('.draw');
// let listA = $('.grpA .grpList');
// let listB = $('.grpB .grpList');
// let listC = $('.grpC .grpList');
// let listD = $('.grpD .grpList');

let NA = ['Sentinels', '100 Thieves', 'Envy'];
let EMEA = ['Gambit Esports', 'SuperMassive Blaze', 'Acend', 'G2 Esports'];
let KR = ['Vision Strikers', 'F4Q'];
let BR = ['Vivo Keyd', 'Havan Liberty'];
let SEA = ['Bren Esports', 'Paper Rex'];
let LATAM = ['KRÜ Esports'];
let JP = ['ZETA DIVISION', 'Crazy Raccoon'];

let pool1 = [{r:'NA',p:0,s:false}, {r:'EMEA',p:0,s:false}, {r:'KR',p:0,s:false}, {r:'BR',p:0,s:false}];
let pool2 = [{r:'NA',p:1,s:false}, {r:'EMEA',p:1,s:false}, {r:'LATAM',p:0,s:false}, {r:'SEA',p:0,s:false}];
let pool3 = [{r:'JP',p:0,s:false}, {r:'BR',p:1,s:false}, {r:'KR',p:1,s:false}, {r:'EMEA',p:2,s:false}];
let pool4 = [{r:'NA',p:2,s:false}, {r:'SEA',p:1,s:false}, {r:'JP',p:1,s:false}, {r:'EMEA',p:3,s:false}];

// console.log(pool1);

function getReg(reg) {
    switch (reg) {
        case 'NA': return NA;
        case 'EMEA': return EMEA;
        case 'KR': return KR;
        case 'BR': return BR;
        case 'SEA': return SEA;
        case 'LATAM': return LATAM;
        case 'JP': return JP;
    }
}

function getRandVal(size) {
    return Math.floor(Math.random() * size);
}


function getTeam(pool,regCnt) {
    
    var team = {};
    do {
        if(team)
        {
            regCnt[team.r]--;
        }
        var idx = getRandVal(pool.length);
        team.r = pool[idx].r;
        team.name = getReg(team.r)[pool[idx].p];
        regCnt[team.r]++;
    }
    while(isItNotOk(regCnt));

    pool.splice(idx,1);

    return team;
}

function isItNotOk(regCnt) {
    for(r in regCnt) {
        if(r=='EMEA') {
            if(regCnt[r]>2) {
                return true;
            }
        }
        else {
            if(regCnt[r]>1)
            {
                return true;
            }
        }
    }
    return false;
}

function randGrps() {
    let regCnt = {'NA':0, 'EMEA':0, 'KR':0, 'BR':0, 'SEA':0, 'LATAM':0, 'JP':0 };
    var group = [];

    let t1,t2,t3,t4;
    t1=getTeam(pool1,regCnt);
    t2=getTeam(pool2,regCnt);
    t3=getTeam(pool3,regCnt);
    t4=getTeam(pool4,regCnt);

    
    group.push(t1.name,t2.name,t3.name,t4.name);
    console.log(group);
    // console.log(regCnt);

    return group;
}

function getGrps() {
    let g1=randGrps();
    let g2=randGrps();
    let g3=randGrps();
    let g4=randGrps();
}

getGrps();