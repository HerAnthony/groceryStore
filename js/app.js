// const storeName = 'Rotten To The Core';
// document.title = `${storeName} Grocery Store`;
// console.log('what is in document:', document.all);

// console.log(document.getElementsByTagName('p'));

// let h1_OfHeader = document.getElementById('mainIntro');
// console.log(h1_OfHeader); check method

// h1_OfHeader.innerHTML = "Welcome";

// const getAllNavListClasses = document.querySelectorAll('.nav_list_item');
// console.log('headers', getAllNavListClasses);

// const getIconCredit = document.querySelector('#iconsCredit');
// const testDifference = document.getElementById('iconsCredit');
// console.log('get the id: ', getIconCredit);
// console.log(testDifference);

// const example = document.querySelector('.nav_list_item');
// console.log(example);

// const getClasses = document.getElementsByClassName('nav_list_item');
// console.log(getClasses);

// const imageExample = document.querySelector('img[alt="breast-milk"]');
// console.log(imageExample);

const magicButton = document.getElementById('magic');
magic.style.backgroundColor = '#0000';
console.log(magicButton);

magicButton.addEventListener('mouseover', () => {
	magicButton.className = 'myPoint'
	console.log('enter', magicButton);
});

magicButton.addEventListener('mouseleave', () => {
	magicButton.className = ''
	console.log('leaving: ', magicButton);
});

document.addEventListener('keyup', () => {
	console.log('I am pressed');
});
