/*----- constants -----*/
const LOOKUP = {
    '1': '#5af287',
    '-1': '#C600EB',
    '0': 'white'
};



/*----- app's state (variables) -----*/
let board;
let turn;
let winner;
let result;
/*----- cached element references -----*/
const slots = [...document.querySelectorAll('td')];
const currentTurn = document.querySelector('aside > div');
const rows = document.querySelectorAll('tr');
const markerEls = [...document.querySelectorAll('#markers> div')];
/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', init);
/*----- functions -----*/
init();

function init() {
    board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    turn = 1;
    result = null;
    render();
    
}

function render() {
    board.forEach(function(colArr, colIdx){
        // console.log('colArr', colArr);
        colArr.forEach(function(cellVal, rowIdx) {
            // console.log('cellVall', cellVal);
            // console.log('rowIdx', rowIdx);
            const cellEl = document.getElementById(`cl${colIdx}r${rowIdx}`)
            // console.log('cellEl', cellEl);
            cellEl.style.backgroundColor = LOOKUP[cellVal];
            
        });
    });

}
function handleMove(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    if (colIdx === -1) return;
    const colArr = board[colIdx];
    // console.log(colIdx);
    // console.log(colArr);
    const rowIdx = colArr.indexOf(0);
    colArr[rowIdx] = turn;
    turn *= -1;
    render();
    
}
