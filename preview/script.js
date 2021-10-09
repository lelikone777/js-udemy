// console.log(document.body.firstChild);
// console.log(document.body.childNodes);

// console.log(document.querySelector('#current').parentElement.parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue;
    }
    console.log(node);
}
