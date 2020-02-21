//создание игрового поля

let field = [[],[],[],[],[],[],[],[],[],[]];
let userField = [[],[],[],[],[],[],[],[],[],[]];



let containerForGame = document.querySelector(".containerForGame");



function makeGameField(size) {
    for (let i=1; i<=size; i++) {
        makeGameField[`containerNum${i}`] = document.createElement('div');
        makeGameField[`containerNum${i}`].classList.add('string',`containerNum${i}`); 
        containerForGame.append(makeGameField[`containerNum${i}`]);
            for (let j = 0; j<=size-1;j++) {
                field[i-1][j] = document.createElement('div');
                field[i-1][j].classList.add('square',`x${i}y${j+1}`);
                field[i-1][j].label=false;
                field[i-1][j].shipIsHere=false;
                makeGameField[`containerNum${i}`].append(field[i-1][j]);
                }
    }
}

makeGameField(10);

//функция для генерации случайного числа
function getRandom (min,max) {
    return Math.floor(Math.random ()*(max+1-min)+min);
}

//функция для генерации случайного булева значения
function getRandomBoolean() {
    let x = getRandom(0,1);
    if (x==1) {
        return true;
    }
    else {
        return false;
    }
}

//генерация кораблей

function autoPlasing(lengthOfShip) {
    let I = getRandom (0,9);
    let J = getRandom (0,9);
    let direction = getRandomBoolean();
    let bad = false;

    //функция для проверки на возможность установки в данном месте корабля
    function checkByLabel(shipLength) {
        if (direction==true && (I+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I+k][J].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==true && (I+(shipLength-1))>9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I-k][J].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;                  
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))<=9) {
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J+k].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;
                }

            }
        }
        else if (direction==false && (J+(shipLength-1))>9){
            for (let k=0;k<=shipLength-1;k++){
                if (field[I][J-k].label==true) {
                    autoPlasing(lengthOfShip);
                    bad = true;
                    return;
                }

            }
        }
    } 

checkByLabel(lengthOfShip);

//функция для различных цветов кораблей
function colorShip(i,j,length) {
    if (length==4){
        field[i][j].classList.add('ship4');
    }
    else if (length==3){
        field[i][j].classList.add('ship3');
    }
    else if (length==2){
        field[i][j].classList.add('ship2');
    }
    else if (length==1){
        field[i][j].classList.add('ship1');
    }
}

if (bad==false){

    autoPlasingInt();

}

function autoPlasingInt() {
    
    colorShip(I,J,lengthOfShip);
    field[I][J].shipIsHere=true;
    intLabel(I,J);

    if (direction==true) {
        for (let i=1;i<=lengthOfShip-1;i++) {
            if ((I+(lengthOfShip-1))<=9) {
                colorShip((I+i),J,lengthOfShip);
                field[I+i][J].shipIsHere=true;
                intLabel(I+i,J);
            }
            else {
                colorShip((I-i),J,lengthOfShip);
                field[I-i][J].shipIsHere=true;
                intLabel(I-i,J);
            }
        }
    }
    else {
        for (let j=1;j<=lengthOfShip-1;j++) {
            if ((J+(lengthOfShip-1))<=9) {
                colorShip(I,(J+j),lengthOfShip);
                field[I][J+j].shipIsHere=true;
                intLabel(I,J+j);
            }
            else {
                colorShip(I,(J-j),lengthOfShip);
                field[I][J-j].shipIsHere=true;
                intLabel(I,J-j);
            }
        }
    }
}
}


autoPlasing(4); 
autoPlasing(3); 
autoPlasing(3); 
autoPlasing(2); 
autoPlasing(2); 
autoPlasing(2); 
autoPlasing(1); 
autoPlasing(1); 
autoPlasing(1); 
autoPlasing(1);

//функция для создания метки (чтоб корабль не ставился)

function intLabel(i,j) {

field[i][j].label = true;
try {field[i+1][j].label = true;} 
catch (a) {console.log ("не поставилось");}
try {field[i+1][j+1].label = true;} 
catch (a) {console.log ("не поставилось");}
try {   field[i+1][j-1].label = true;}
catch (a) {console.log ("не поставилось");}
try   {field[i][j+1].label = true;} 
catch (a) {console.log ("не поставилось");}
try {field[i][j-1].label = true;}
catch (a) {console.log ("не поставилось");}
try {field[i-1][j].label = true;}
catch (a) {console.log ("не поставилось");}
try    {field[i-1][j+1].label = true;}
catch (a) {console.log ("не поставилось");}
try    {field[i-1][j-1].label = true;}
catch (a) {console.log ("не поставилось");}
  
}

let containerForUserField = document.querySelector(".containerForUserField");


function makeGameUserField(size) {
    for (let i=1; i<=size; i++) {
        makeGameUserField[`containerNum${i}`] = document.createElement('div');
        makeGameUserField[`containerNum${i}`].classList.add('string',`containerNum${i}`); 
        containerForUserField.append(makeGameUserField[`containerNum${i}`]);
            for (let j = 0; j<=size-1;j++) {
                userField[i-1][j] = document.createElement('div');
                userField[i-1][j].classList.add('square',`x${i}y${j+1}`);
                userField[i-1][j].label=false;
                userField[i-1][j].shipIsHere=false;
                makeGameUserField[`containerNum${i}`].append(userField[i-1][j]);
                }
    }
}

makeGameUserField(10);