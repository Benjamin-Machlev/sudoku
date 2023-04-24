
function checkLogin() {
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (userName != 'abcd') {
        document.getElementById('errorUN').innerHTML = 'Invalid User Name';
    }
    if (password != '1234') {
        document.getElementById('errorPA').innerHTML = 'Invalid Password';
    }
    else{
        location.href='level.html';
    }
}

// טבלה מספר 0

let board = [[[1, 8, 9, 7, 6, 5, 4, 3, 2]
, [7, 6, 5, 4, 3, 2, 9, 8, 1]
, [4, 3, 2, 9, 8, 1, 7, 6, 5]
, [9, 7, 8, 2, 1, 6, 5, 4, 3]
, [6, 5, 4, 8, 9, 3, 2, 1, 7]
, [3, 2, 1, 5, 7, 4, 8, 9, 6]
, [8, 9, 6, 3, 5, 7, 1, 2, 4]
, [5, 4, 3, 1, 2, 9, 6, 7, 8]
, [2, 1, 7, 6, 4, 8, 3, 5, 9]],

//טבלה מספר 1

[[1, 3, 7, 6, 9, 8, 5, 4, 2]
, [9, 4, 8, 7, 5, 2, 6, 3, 1]
, [6, 5, 2, 4, 3, 1, 9, 8, 7]
, [8, 9, 6, 5, 7, 4, 2, 1, 3]
, [7, 2, 5, 9, 1, 3, 8, 6, 4]
, [4, 1, 3, 8, 2, 6, 7, 9, 5]
, [5, 8, 9, 1, 4, 7, 3, 2, 6]
, [3, 7, 4, 2, 6, 9, 1, 5, 8]
, [2, 6, 1, 3, 8, 5, 4, 7, 9]],

// טבלה מספר 2

[[6, 8, 4, 3, 2, 9, 7, 5, 1]
, [9, 1, 7, 8, 6, 5, 4, 3, 2]
, [5, 3, 2, 7, 4, 1, 9, 8, 6]
, [8, 9, 6, 5, 7, 4, 2, 1, 3]
, [7, 5, 3, 9, 1, 2, 8, 6, 4]
, [4, 2, 1, 6, 8, 3, 5, 9, 7]
, [3, 7, 9, 4, 5, 6, 1, 2, 8]
, [2, 6, 8, 1, 9, 7, 3, 4, 5]
, [1, 4, 5, 2, 3, 8, 6, 7, 9]],

//טבלה מספר 3

[[9, 2, 8, 6, 7, 1, 3, 4, 5]
, [7, 6, 5, 9, 3, 4, 8, 2, 1]
, [4, 3, 1, 8, 5, 2, 9, 7, 6]
, [8, 9, 7, 5, 6, 3, 4, 1, 2]
, [6, 5, 4, 2, 1, 9, 7, 8, 3]
, [3, 1, 2, 7, 4, 8, 6, 5, 9]
, [5, 8, 9, 3, 2, 7, 1, 6, 4]
, [1, 7, 6, 4, 9, 5, 2, 3, 8]
, [2, 4, 3, 1, 8, 6, 5, 9, 7]]];

let randomTable = getRandomNumber(0,3);// הגרלה בין 0-3 (כולל) לבחירת אחת מטבלאות הסודוקו שנשחק
let numbers = board[randomTable]; 
function easy() {
        //   בחירה רנדומלית של 2 שורות שבהן ירדו 3 תאים - בשאר שורות ירדו רק 2 תאים
    let row1 = getRandomNumber(0,4); // 0-4
    let row2 = getRandomNumber(5,8); // 5-8
    // התאים שנבחרו רנדומלית שאותן נסתיר
    let cell1, cell2, cell3 =-1;
    for (let i = 0; i < numbers.length; i++) {
        // remove 3 numbers from each row
        if (i==row1 || i==row2) {
            cell1 = getRandomNumber(0,2); // 0-2
            cell2 = getRandomNumber(3,5); // 3-5
            cell3 = getRandomNumber(6,8); // 6-8
            numbers[i][cell1] = 0;
            numbers[i][cell2] = 0;
            numbers[i][cell3] = 0;
        }
        // remove only 2 numbers from each row
        else{
            cell1 = getRandomNumber(0,8); // 0-8
            cell2 = getRandomNumber(0,8); // 0-8
            // וידוא ששני התאים אינם זהים
            while (cell1 == cell2) {
                cell2 = getRandomNumber(0,8); // 0-8
            }
            numbers[i][cell1] = 0;
            numbers[i][cell2] = 0;
        }
    }
    renderBoard();
}

function medium() {
    let row1 = getRandomNumber(0,2); 
    let row2 = getRandomNumber(3,4); 
    let row3 = getRandomNumber(5,6); 
    let row4 = getRandomNumber(7,8); 
    
    let cell1, cell2, cell3, cell4, cell5 = -1;
    for (let i = 0; i < numbers.length; i++) {
        // remove 5 numbers from each row - 4 rows
        if (i==row1 || i==row2 || i==row3 || i==row4) {
            cell1 = getRandomNumber(0,1); 
            cell2 = getRandomNumber(2,3);
            cell3 = getRandomNumber(4,5);
            cell4 = getRandomNumber(6,7);
            cell5 = getRandomNumber(8,8);
            numbers[i][cell1] = 0;
            numbers[i][cell2] = 0;
            numbers[i][cell3] = 0;
            numbers[i][cell4] = 0;
            numbers[i][cell5] = 0;
        }
        // remove only 4 numbers from each row - 5 rows
        else{
            cell1 = getRandomNumber(0,1); 
            cell2 = getRandomNumber(2,3);
            cell3 = getRandomNumber(4,5);
            cell4 = getRandomNumber(6,8);
            numbers[i][cell1] = 0;
            numbers[i][cell2] = 0;
            numbers[i][cell3] = 0;
            numbers[i][cell4] = 0;
        }
        
    }

    renderBoard();
}

function hard() {

    let row1 = getRandomNumber(0,2); 
    let row2 = getRandomNumber(3,5); 
    let row3 = getRandomNumber(6,8); 
    let cell1, cell2, cell3;
    
    for (let i = 0; i < numbers.length; i++) {
        cell1, cell2, cell3 = -1; 
        // select 3 cells from 3 rows that will remain
        if (i==row1 || i==row2 || i==row3) {
            cell1 = getRandomNumber(0,2); 
            cell2 = getRandomNumber(3,5);
            cell3 = getRandomNumber(6,8);
        }
         // select 2 cells from 6 rows that will remain
        else{
            cell1 = getRandomNumber(0,4); 
            cell2 = getRandomNumber(5,8);
        }        
        for (let j = 0; j < numbers[i].length; j++) {
            if( j != cell1 && j != cell2 && j != cell3 ){
                numbers[i][j] = 0;
            }
        }
        
    }
    renderBoard();
}

// כל התאים ששונים מ0 בהם נכניס ערכים לפי הטבלה שנבחרה
function renderBoard() {
    let cellObj;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            if (numbers[i][j] !=0) {
                cellObj= document.getElementById('cell' + i + j);
                cellObj.value = numbers[i][j];
                cellObj.disabled = true;
            }
        }
    }
}

// always returns a random number between min and max (both included)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min+1))+min;
}


function checkSudoku() {
    let compare = to_check[randomTable];
    let real;
    let inputs = document.querySelectorAll('input[type="text"]');
    let isComplete = true;
    let counter = 0;
    for (let i = 0; i < compare.length; i++) {
        for (let j = 0; j < compare[i].length; j++) {
            real = compare[i][j];
            if (real != inputs[counter].value) {
                inputs[counter].style.background = 'red';
                isComplete = false;
            }
            else {
                inputs[counter].style.background = 'blanchedalmond';
            }
            counter++;
        }

    }
    if (isComplete==true) {
        
        let element =  document.getElementById('welldone');
        element.innerHTML = 'Well Done! You Finished The Game Successfully';
        timeFunction();
    }
}

// במידה והסודוקו שמילאנו חוקי... נחזור למסך בחירת הרמה אחרי 5 שניות
function timeFunction(){
    setTimeout(function(){location.href = 'level.html'},5000);
}




let to_check =
// טבלה מספר 0
    [[[1, 8, 9, 7, 6, 5, 4, 3, 2]
    , [7, 6, 5, 4, 3, 2, 9, 8, 1]
    , [4, 3, 2, 9, 8, 1, 7, 6, 5]
    , [9, 7, 8, 2, 1, 6, 5, 4, 3]
    , [6, 5, 4, 8, 9, 3, 2, 1, 7]
    , [3, 2, 1, 5, 7, 4, 8, 9, 6]
    , [8, 9, 6, 3, 5, 7, 1, 2, 4]
    , [5, 4, 3, 1, 2, 9, 6, 7, 8]
    , [2, 1, 7, 6, 4, 8, 3, 5, 9]],

//טבלה מספר 1

[[1, 3, 7, 6, 9, 8, 5, 4, 2]
    , [9, 4, 8, 7, 5, 2, 6, 3, 1]
    , [6, 5, 2, 4, 3, 1, 9, 8, 7]
    , [8, 9, 6, 5, 7, 4, 2, 1, 3]
    , [7, 2, 5, 9, 1, 3, 8, 6, 4]
    , [4, 1, 3, 8, 2, 6, 7, 9, 5]
    , [5, 8, 9, 1, 4, 7, 3, 2, 6]
    , [3, 7, 4, 2, 6, 9, 1, 5, 8]
    , [2, 6, 1, 3, 8, 5, 4, 7, 9]],

// טבלה מספר 2

[[6, 8, 4, 3, 2, 9, 7, 5, 1]
    , [9, 1, 7, 8, 6, 5, 4, 3, 2]
    , [5, 3, 2, 7, 4, 1, 9, 8, 6]
    , [8, 9, 6, 5, 7, 4, 2, 1, 3]
    , [7, 5, 3, 9, 1, 2, 8, 6, 4]
    , [4, 2, 1, 6, 8, 3, 5, 9, 7]
    , [3, 7, 9, 4, 5, 6, 1, 2, 8]
    , [2, 6, 8, 1, 9, 7, 3, 4, 5]
    , [1, 4, 5, 2, 3, 8, 6, 7, 9]],

//טבלה מספר 3

[[9, 2, 8, 6, 7, 1, 3, 4, 5]
    , [7, 6, 5, 9, 3, 4, 8, 2, 1]
    , [4, 3, 1, 8, 5, 2, 9, 7, 6]
    , [8, 9, 7, 5, 6, 3, 4, 1, 2]
    , [6, 5, 4, 2, 1, 9, 7, 8, 3]
    , [3, 1, 2, 7, 4, 8, 6, 5, 9]
    , [5, 8, 9, 3, 2, 7, 1, 6, 4]
    , [1, 7, 6, 4, 9, 5, 2, 3, 8]
    , [2, 4, 3, 1, 8, 6, 5, 9, 7]]];
    

console.log(to_check[randomTable]);








