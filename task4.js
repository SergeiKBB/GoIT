// 4 - Раскрывающийся список


const rootTreeRef = document.querySelector('.tree');


rootTreeRef.addEventListener('click', event => {
    console.log(event.target);
    if (!event.target.classList.contains('tree__item')) return;

    const subTreeRef = event.target.querySelector('.tree__sub-tree');

    if(!subTreeRef) return;

    subTreeRef.classList.toggle('tree__sub-tree_open');
})
