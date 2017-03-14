let create=document.querySelector('#create');
let nextPage=document.querySelector('#next-page');
let prevPage=document.querySelector('#prev-page');
let numberOfPage=0;


create.addEventListener('click', function(e){
	e.preventDefault();
	createPage();
});

/* Prev Button */
prevPage.addEventListener('click',function(e){
	e.preventDefault();

	// variables 
	let view=document.querySelector('#view');
	let currentPageId=view.dataset['currentPageId'];
	let prevId=parseInt(currentPageId)-1;
	let currentPage;
	let goTo;

	if(currentPageId==0){ // stop if the current page is the main page
		return alert('fin');
	}

	// select the current page and translate it
	currentPage=document.querySelector('#page'+currentPageId);
	currentPage.style.transform="translate(100%)";

	// set currentPageId to the viex at prevId
	view.setAttribute('data-current-page-id',String(prevId));

	if(prevId>0){ // do not move the main page
		goTo=document.querySelector('#page'+prevId);
		goTo.style.transform="translateX(0)";
	}
});

/* Next Button */
nextPage.addEventListener('click',function(e){
	e.preventDefault();

	// variables
	let view=document.querySelector('#view');
	let currentPageId=view.dataset['currentPageId'];
	let nextId=parseInt(currentPageId)+1;
	let currentPage;
	let goTo;

	// do not translate the last page
	if(nextId>numberOfPage){
		return alert('fin');
	}

	// if the current page is the main then set current page Id to 1
	if(currentPageId==0){
		currentPageId=1;
	}

	// select the current page end translate it
	currentPage=document.querySelector('#page'+currentPageId);
	currentPage.style.transform="translate(-100%)";

	// select the next page and translate it
	goTo=document.querySelector('#page'+nextId);
	goTo.style.transform="translateX(0)";

	// set view attribute 
	view.setAttribute('data-current-page-id',String(nextId));
});

/* create a new page */
function createPage(){
	let body=document.querySelector('body');
	let div=document.createElement('div');
	numberOfPage+=1;

	div.setAttribute('class','page');
	div.setAttribute('id', 'page'+numberOfPage);
	div.style.transform="translateX(100%)";
	div.style.color="#fff";
	div.innerHTML="page"+numberOfPage;
	// tmp
	//createParagraphButton(div);
	// tmp
	body.appendChild(div);
}

/* create a new paragraph */
function createParagraphButton(elm){
	let a=document.createElement('a');
	let p;
	a.setAttribute('class','edit');
	a.style.display='block';
	a.style.position='fixed';
	a.style.bottom='50px';

	a.innerHTML="Create a new paragrapgh";
	a.setAttribute('href','#');
	elm.appendChild(a);

	//let edit=document.querySelector('.edit');
	a.addEventListener('click', e =>{
		e.preventDefault();
		p=createDomElement('p');
		p.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		elm.appendChild(p)
	});
}

/* create dom element */
function createDomElement(element,content="new element"){
	// varibles
	let newElement=document.createElement(element);

	// content
	newElement.innerHTML=content;
	return newElement;
}

/* header */
let toheader=document.querySelector('#toheader');
let header=document.querySelector('header');
let headerIsVisible=false;

toheader.addEventListener('click',e =>{
	e.preventDefault();

	if(!headerIsVisible){
		header.style.transform="translateY(0)";
		headerIsVisible=true;
	}else{
		header.style.transform="translateY(-100%)";
		headerIsVisible=false;
	}
})

/* action */

// new link
let link=document.querySelector('#link');
link.addEventListener('click', e =>{
	e.preventDefault();

	// do not create a link on the main page
	let currentPageId=view.dataset['currentPageId'];

	if(currentPageId==0){
		return false;
	}
	
	// create the link
	let newA=createDomElement('a');
	newA.setAttribute('class','newlink')
	// select the current page
	currentPage=document.querySelector('#page'+currentPageId);

	currentPage.appendChild(newA);

})

// new paragraph

let paragraph=document.querySelector('#paragraph');
paragraph.addEventListener('click', e =>{
	e.preventDefault();

	// do not create a link on the main page
	let currentPageId=view.dataset['currentPageId'];

	if(currentPageId==0){
		return false;
	}

	// create the paragraph
	let=p=createDomElement('p');
	p.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	// select the current page
	currentPage=document.querySelector('#page'+currentPageId);

	currentPage.appendChild(p)
})