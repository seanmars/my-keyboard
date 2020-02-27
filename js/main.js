const keyboardWidth = 1200;
const halfKeyboardWidth = keyboardWidth / 2;
const keyboardHeight = 480;
const keyWidth = 50;
const keyHeight = 50;
const rowGap = 8;
const columnGap = 5;
const maxColumn = 10;
const margin = 15;

/**
 * Generate the key element
 * @param {Object} opt
 * @param {number} opt.hand Hand: 0 is left, other is right
 * @param {number} opt.size Size of key
 * @param {string} opt.key Text of key
 * @param {string} opt.key2 Text of key2(shift-key)
 * @param {number} opt.row Row of key
 * @param {number} opt.col Column of key
 * @param {number} opt.idx Column Index of key
 * @param {number} opt.rotate Rotate of key
 * <div class="key-base key-125">
        <div class="key-inside">
            <div class="key-text">~</div>
        </div>
    </div>
 * @returns {HTMLDivElement}
 */
function genKey(opt) {
    opt = opt || {};
    opt.hand = opt.hand !== undefined ? opt.hand : 0;
    opt.size = opt.size !== undefined ? opt.size : 1;
    opt.key = opt.key !== undefined ? opt.key : 'null';
    opt.key2 = opt.key2 !== undefined ? opt.key2 : undefined;
    opt.row = opt.row !== undefined ? opt.row : 1;
    opt.col = opt.col !== undefined ? opt.col : 1;
    opt.idx = opt.idx !== undefined ? opt.idx : 0;
    console.log(opt);

    let root = document.createElement('div');
    root.classList.add('key-base');
    let size = opt.size * 100;
    root.classList.add(`key-${size}`);

    let inside = document.createElement('div');
    inside.classList.add('key-inside');

    let text = document.createElement('div');
    text.classList.add('key-text');
    text.innerHTML = opt.key2 === undefined ?
        opt.key :
        opt.key + '<br/>' + opt.key2;

    let textRotate = opt.rotate == 0 ? 0 : opt.rotate * -1;
    text.style.transform = `rotate(${textRotate}deg)`;

    inside.appendChild(text);
    root.appendChild(inside);

    // setting key position by row and column
    let baseTop = 0;
    let baseLeft = 0;
    if (opt.hand == 0) {
        baseTop = 10;
        baseLeft = margin;

        let top = (baseTop
            + opt.row * (keyHeight + rowGap)
        );
        root.style.top = `${top}px`;

        let left = baseLeft
            + opt.idx * keyWidth
            + opt.col * columnGap;
        root.style.left = `${left}px`;
    } else {
        baseTop = 10;
        baseLeft = halfKeyboardWidth
            - ((maxColumn * keyWidth) +
                ((maxColumn - 2) * columnGap) +
                margin);

        let top = (baseTop
            + opt.row * (keyHeight + rowGap)
        );
        root.style.top = `${top}px`;

        let left = baseLeft
            + opt.idx * keyWidth
            + opt.col * columnGap;
        root.style.left = `${left}px`;
    }

    root.style.transform = `rotate(${opt.rotate}deg)`;
    root.style.transformOrigin = 'left bottom';
    root.dataset.hand = opt.hand;
    return root;
}

/**
 *
 * @param {HTMLElement} left
 * @param {HTMLElement} right
 * @param {Array} keys
 */
function generateAllKeys(left, right, keys) {
    left.innerHTML = '';
    right.innerHTML = '';

    let keyElements = {};
    keys.forEach((x, index) => {
        keyElements[index] = genKey(x);
    })

    Object.keys(keyElements).forEach(x => {
        /** @type {HTMLDivElement} */
        let key = keyElements[x];
        if (key.dataset.hand == 0) {
            left.appendChild(key);
        }
        else {
            right.appendChild(key);
        }
    });
}

docReady(function () {
    let layoutDiv = document.getElementById('layoutDiv');
    layoutDiv.style.width = `${keyboardWidth}px`;
    layoutDiv.style.height = `${keyboardHeight}px`;
    let left = document.getElementById('left');
    left.style.width = `${halfKeyboardWidth - 2}px`;
    left.style.height = `${keyboardHeight - 2}px`;
    let right = document.getElementById('right');
    right.style.width = `${halfKeyboardWidth - 2}px`;
    right.style.height = `${keyboardHeight - 2}px`;
    right.style.left = `${halfKeyboardWidth}px`;

    let layerDiv = document.getElementById('layerDiv');
    layerDiv.style.width = `${keyboardWidth}px`;

    /** @type {HTMLSelectElement} */
    let layerSelector = document.getElementById('layer');
    layerSelector.addEventListener('change', (ev) => {
        /** @type {HTMLSelectElement} */
        let l = ev.target;
        let idx = parseInt(l.options[l.selectedIndex].value);
        generateAllKeys(left, right, AllKeys[idx]);
    });

    AllKeys.forEach((x, index) => {
        var option = document.createElement('option');
        option.value = index;
        option.text = `Layer ${index}`;
        option.selected = index == 0;
        layerSelector.appendChild(option);
    });

    var selectedIndex = parseInt(layerSelector.options[layerSelector.selectedIndex].value);
    generateAllKeys(left, right, AllKeys[selectedIndex]);
});