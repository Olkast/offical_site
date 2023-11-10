/**
 * Функция для ховер эффекта
 * кнопке нужно добавить класс roseBtn или blueBtn,
 * текст обернуть в span
 * @param {string} type
 */
const hoverFromBtn = (type) => {
    let buttons = document.getElementsByClassName(type),
        forEach = Array.prototype.forEach;
    forEach.call(buttons, function (b) {
        b.addEventListener('mouseenter', addElementD);
    });
    forEach.call(buttons, function (b) {
        b.addEventListener('mouseleave', removeElementD);
    });

    function addElementD(e) {
        let addDiv = document.createElement('div'),
            mValue = Math.max(this.clientWidth, this.clientHeight),
            rect = this.getBoundingClientRect();
        sDiv = addDiv.style;
        px = 'px';
        this.classList.add(type === 'roseBtn' ? 'blueBackground' : 'roseBackground')
        sDiv.width = sDiv.height = mValue + px;
        sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
        sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

        addDiv.classList.add(type === 'roseBtn' ? 'bluePulse' : 'rosePulse');
        this.appendChild(addDiv);
    }

    function removeElementD(e) {
        for (let i = 1; i <= e.target.children.length; i++) {
            e.target.children[i].remove()
        }
        this.classList.remove(type === 'roseBtn' ? 'blueBackground' : 'roseBackground')
    }
}