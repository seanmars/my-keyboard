// extension width for right hand
let _w = 2;
const AllKeys = [
    /** left hand(0) */
    // row 1
    { hand: 0, size: 2, row: 0, col: 0, idx: 0, rotate: 0, key: 'ESC' },
    { hand: 0, size: 1, row: 0, col: 1, idx: 2, rotate: 0, key: 1 },
    { hand: 0, size: 1, row: 0, col: 2, idx: 3, rotate: 0, key: 2 },
    { hand: 0, size: 1, row: 0, col: 3, idx: 4, rotate: 0, key: 3 },
    { hand: 0, size: 1, row: 0, col: 4, idx: 5, rotate: 0, key: 4 },
    { hand: 0, size: 1, row: 0, col: 5, idx: 6, rotate: 0, key: 5 },
    { hand: 0, size: 1, row: 0, col: 6, idx: 7, rotate: 0, key: '`' },

    // row 2
    { hand: 0, size: 2, row: 1, col: 0, idx: 0, rotate: 0, key: 'TAB' },
    { hand: 0, size: 1, row: 1, col: 1, idx: 2, rotate: 0, key: 'Q' },
    { hand: 0, size: 1, row: 1, col: 2, idx: 3, rotate: 0, key: 'W' },
    { hand: 0, size: 1, row: 1, col: 3, idx: 4, rotate: 0, key: 'E' },
    { hand: 0, size: 1, row: 1, col: 4, idx: 5, rotate: 0, key: 'R' },
    { hand: 0, size: 1, row: 1, col: 5, idx: 6, rotate: 0, key: 'T' },

    // row 3
    { hand: 0, size: 2, row: 2, col: 0, idx: 0, rotate: 0, key: 'CTRL' },
    { hand: 0, size: 1, row: 2, col: 1, idx: 2, rotate: 0, key: 'A' },
    { hand: 0, size: 1, row: 2, col: 2, idx: 3, rotate: 0, key: 'S' },
    { hand: 0, size: 1, row: 2, col: 3, idx: 4, rotate: 0, key: 'D' },
    { hand: 0, size: 1, row: 2, col: 4, idx: 5, rotate: 0, key: 'F' },
    { hand: 0, size: 1, row: 2, col: 5, idx: 6, rotate: 0, key: 'G' },

    // row 4
    { hand: 0, size: 2, row: 3, col: 0, idx: 0, rotate: 0, key: 'ALT' },
    { hand: 0, size: 1, row: 3, col: 1, idx: 2, rotate: 0, key: 'Z' },
    { hand: 0, size: 1, row: 3, col: 2, idx: 3, rotate: 0, key: 'X' },
    { hand: 0, size: 1, row: 3, col: 3, idx: 4, rotate: 0, key: 'C' },
    { hand: 0, size: 1, row: 3, col: 4, idx: 5, rotate: 0, key: 'V' },
    { hand: 0, size: 1, row: 3, col: 5, idx: 6, rotate: 0, key: 'B' },

    // row 5
    { hand: 0, size: 1, row: 4, col: 0, idx: 1, rotate: 0, key: 'WIN' },
    { hand: 0, size: 1, row: 4, col: 1, idx: 2, rotate: 0, key: ' ' },
    { hand: 0, size: 1, row: 4, col: 2, idx: 3, rotate: 0, key: ' ' },
    { hand: 0, size: 1, row: 4, col: 3, idx: 4, rotate: 0, key: ' ' },
    { hand: 0, size: 1, row: 4, col: 4, idx: 5, rotate: 0, key: ' ' },

    // col 7-2, 7-3
    { hand: 0, size: 1.5, row: 1.25 - 1.05, col: 6, idx: 7, rotate: 90, key: ' ' },
    { hand: 0, size: 1.5, row: 2.75 - 1.2, col: 6, idx: 7, rotate: 90, key: ' ' },

    // extension block
    { hand: 0, size: 1, row: 4, col: 8, idx: 9, rotate: 0, key: '1' },
    { hand: 0, size: 1, row: 5, col: 8, idx: 9, rotate: 0, key: '2' },
    { hand: 0, size: 1, row: 6, col: 8, idx: 9, rotate: 0, key: '3' },
    { hand: 0, size: 1, row: 4, col: 7, idx: 8, rotate: 0, key: '4' },
    { hand: 0, size: 2, row: 4.1, col: 7, idx: 8, rotate: 90, key: '5' },
    { hand: 0, size: 2, row: 4.1, col: 6, idx: 7, rotate: 90, key: '6' },

    /** right hand(1) */
    // row 1
    { hand: 1, size: 1, row: 0, col: _w + 0, idx: _w + 0, rotate: 0, key: '+' },
    { hand: 1, size: 1, row: 0, col: _w + 1, idx: _w + 1, rotate: 0, key: 6 },
    { hand: 1, size: 1, row: 0, col: _w + 2, idx: _w + 2, rotate: 0, key: 7 },
    { hand: 1, size: 1, row: 0, col: _w + 3, idx: _w + 3, rotate: 0, key: 8 },
    { hand: 1, size: 1, row: 0, col: _w + 4, idx: _w + 4, rotate: 0, key: 9 },
    { hand: 1, size: 1, row: 0, col: _w + 5, idx: _w + 5, rotate: 0, key: 0 },
    { hand: 1, size: 2, row: 0, col: _w + 6, idx: _w + 6, rotate: 0, key: '\u232b' },

    // row 2
    { hand: 1, size: 1, row: 1, col: _w + 1, idx: _w + 1, rotate: 0, key: 'Y' },
    { hand: 1, size: 1, row: 1, col: _w + 2, idx: _w + 2, rotate: 0, key: 'U' },
    { hand: 1, size: 1, row: 1, col: _w + 3, idx: _w + 3, rotate: 0, key: 'I' },
    { hand: 1, size: 1, row: 1, col: _w + 4, idx: _w + 4, rotate: 0, key: 'O' },
    { hand: 1, size: 1, row: 1, col: _w + 5, idx: _w + 5, rotate: 0, key: 'P' },
    { hand: 1, size: 2, row: 1, col: _w + 6, idx: _w + 6, rotate: 0, key: '\\', key2: '|' },

    // row 3
    { hand: 1, size: 1, row: 2, col: _w + 1, idx: _w + 1, rotate: 0, key: 'H' },
    { hand: 1, size: 1, row: 2, col: _w + 2, idx: _w + 2, rotate: 0, key: 'J' },
    { hand: 1, size: 1, row: 2, col: _w + 3, idx: _w + 3, rotate: 0, key: 'K' },
    { hand: 1, size: 1, row: 2, col: _w + 4, idx: _w + 4, rotate: 0, key: 'L' },
    { hand: 1, size: 1, row: 2, col: _w + 5, idx: _w + 5, rotate: 0, key: ';', key2: ':' },
    { hand: 1, size: 2, row: 2, col: _w + 6, idx: _w + 6, rotate: 0, key: '\'', key2: '"' },

    // row 4
    { hand: 1, size: 1, row: 3, col: _w + 1, idx: _w + 1, rotate: 0, key: 'N' },
    { hand: 1, size: 1, row: 3, col: _w + 2, idx: _w + 2, rotate: 0, key: 'M' },
    { hand: 1, size: 1, row: 3, col: _w + 3, idx: _w + 3, rotate: 0, key: ',', key2: '<' },
    { hand: 1, size: 1, row: 3, col: _w + 4, idx: _w + 4, rotate: 0, key: '.', key2: '>' },
    { hand: 1, size: 1, row: 3, col: _w + 5, idx: _w + 5, rotate: 0, key: '/', key2: '?' },
    { hand: 1, size: 2, row: 3, col: _w + 6, idx: _w + 6, rotate: 0, key: 'SHIFT' },

    // row 5
    { hand: 1, size: 1, row: 4, col: _w + 2, idx: _w + 2, rotate: 0, key: ' ' },
    { hand: 1, size: 1, row: 4, col: _w + 3, idx: _w + 3, rotate: 0, key: ' ' },
    { hand: 1, size: 1, row: 4, col: _w + 4, idx: _w + 4, rotate: 0, key: ' ' },
    { hand: 1, size: 1, row: 4, col: _w + 5, idx: _w + 5, rotate: 0, key: ' ' },
    { hand: 1, size: 1, row: 4, col: _w + 6, idx: _w + 6, rotate: 0, key: ' ' },

    // col 7-2, 7-3
    { hand: 1, size: 1.5, row: 1.25 - 1.05, col: _w + 0, idx: _w + 0, rotate: 90, key: ' ' },
    { hand: 1, size: 1.5, row: 2.75 - 1.2, col: _w + 0, idx: _w + 0, rotate: 90, key: ' ' },

    // extension block
    { hand: 1, size: 1, row: 4, col: 0, idx: 0, rotate: 0, key: '1' },
    { hand: 1, size: 1, row: 5, col: 0, idx: 0, rotate: 0, key: '2' },
    { hand: 1, size: 1, row: 6, col: 0, idx: 0, rotate: 0, key: '3' },
    { hand: 1, size: 1, row: 4, col: 1, idx: 1, rotate: 0, key: '4' },
    { hand: 1, size: 2, row: 4.1, col: 1, idx: 1, rotate: 90, key: '5' },
    { hand: 1, size: 2, row: 4.1, col: 2, idx: 2, rotate: 90, key: '6' },

];