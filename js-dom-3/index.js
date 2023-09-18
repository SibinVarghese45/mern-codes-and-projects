// adding 100para
const t1 = performance.now();
for(let i=1; i<=100; i++){
    let newELement = document.createElement('p');
    newELement.textContent = 'THis is Para ' +i;

    document.body.appendChild(newELement);

}

const t2 = performance.now();

console.log("this took" + (t2-t1) + "ms")

// optimising
const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=1; i<=100; i++){

    let element = document.createElement('p')
    element.textContent = 'THis is a para' +i;

    myDiv.appendChild(element);

}
document.body.appendChild(myDiv);
const t4 = performance.now();

console.log("this took" + (t4-t3) + "ms")




