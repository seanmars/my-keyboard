/**
 * Generate the key element
 * @param {Object} opt
 * @param {number} opt.size Size of key on keyboard
 * @param {string} opt.key Text of key
 * <div class="key-base key-125">
        <div class="key-inside">
            <div class="key-text">~</div>
        </div>
    </div>
 * @returns {HTMLDivElement}
 */
function genKey(opt) {
    opt = opt || {};
    let size = opt.size !== undefined ? opt.size : 1;
    let key = opt.key !== undefined ? opt.key : 'null';
    console.log('generate ', key, size);

    let root = document.createElement('div');
    root.classList.add('key-base');
    let sizeName = size * 100;
    root.classList.add(`key-${sizeName}`);

    let inside = document.createElement('div');
    inside.classList.add('key-inside');

    let text = document.createElement('div');
    text.classList.add('key-text');
    text.textContent = key;

    inside.appendChild(text);
    root.appendChild(inside);
    return root;
}

docReady(function () {
    let keys = [
        { size: 1, key: '`' },
        { size: 1, key: 1 },
        { size: 1, key: 2 },
        { size: 1, key: 3 },
        { size: 1, key: 4 },
        { size: 1, key: 5 },
        { size: 1, key: 6 },
        { size: 1, key: 7 },
        { size: 1, key: 8 },
        { size: 1, key: 9 },
        { size: 1, key: 0 },
        { size: 1, key: '-' },
        { size: 1, key: '\'' },
        { size: 2, key: '\u232b' },
    ];

    let layout = document.getElementById('layout');

    let keyElements = {};
    keys.forEach((x, index) => {
        keyElements[index] = genKey(x);
    })

    Object.keys(keyElements).forEach(x => {
        layout.appendChild(keyElements[x]);
    });
});