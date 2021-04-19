const ce = x => document.createElement(x);
const qs = x => document.querySelector(x);
const pr = x => console.log(x);
const ac = (x, _class_) => x.classList.add(_class_);
const create = (tag, className='', textContent='') => {
    const elem = ce(tag);
    ac(elem, className);
    elem.textContent = textContent;
    return elem;
};

export {ce, qs, pr, ac, create};