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
	
	// go on the page
	goToPage(prevId);
});

/* Next Button */
nextPage.addEventListener('click',function(e){
	e.preventDefault();

	// variables
	let view=document.querySelector('#view');
	let currentPageId=view.dataset['currentPageId'];
	let nextId=parseInt(currentPageId)+1;

	// go on the page
	goToPage(nextId);
});

/* go to a specific page */
function goToPage(pageId){
	// variables
	let view=document.querySelector('#view');
	let currentPageId=view.dataset['currentPageId'];
	let goTo;

	// stop on the last page or on the main page
	if(pageId>numberOfPage || pageId==-1){
		return alert('fin');
	}

	// do not translate the main page
	

		if(currentPageId<pageId){
			// select all the pages before translate them at left
			for(let pageBeforeId=1; pageBeforeId<pageId; pageBeforeId++){
				let pageBefore=document.querySelector('#page'+pageBeforeId);
				pageBefore.style.transform="translate(-100%)";
			}
		} else {
			// select all the pages after translate them at right
			for(let pageAfterId=currentPageId; pageAfterId>pageId; pageAfterId--){
				let pageAfter=document.querySelector('#page'+pageAfterId);
				pageAfter.style.transform="translate(100%)";
			}
		}
	

	// select the goto page and translate it
	if(pageId!=0){
		goTo=document.querySelector('#page'+pageId);
		goTo.style.transform="translateX(0)";
	}
	
	

	// set view attribute 
	view.setAttribute('data-current-page-id',String(pageId));
}

/* create a new page */
function createPage(){
	let body=document.querySelector('body');
	let div=document.createElement('div');
	numberOfPage+=1;

	div.setAttribute('class','page');
	div.setAttribute('id', 'page'+numberOfPage);
	div.style.transform="translateX(100%)";
	div.innerHTML="page"+numberOfPage;
	// tmp
	//createParagraphButton(div);
	// tmp
	body.appendChild(div);

	// go on the new page
	goToPage(numberOfPage);
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
});

/* action */

// new link
let link=document.querySelector('#link');
link.addEventListener('click', e =>{
	e.preventDefault();

	// do not create a link on the main page
    let view=document.querySelector('#view');
	let currentPageId=view.dataset['currentPageId'];

	if(currentPageId==0){
		return false;
	}
	
	// create the link
	let newA=createDomElement('a');
	newA.setAttribute('class','newlink');
	// select the current page
	let currentPage=document.querySelector('#page'+currentPageId);

	currentPage.appendChild(newA);

});

// new paragraph

let paragraph=document.querySelector('#paragraph');
paragraph.addEventListener('click', e =>{
	e.preventDefault();

	// do not create a link on the main page
    let view=document.querySelector('#view');
	let currentPageId=view.dataset['currentPageId'];

	if(currentPageId==0){
		return false;
	}

	// create the paragraph
	let p=createDomElement('p');
	p.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	// select the current page
	let currentPage=document.querySelector('#page'+currentPageId);

	currentPage.appendChild(p)
});