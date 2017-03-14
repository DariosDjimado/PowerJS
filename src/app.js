var create=document.querySelector('#create');
var nextPage=document.querySelector('#next-page');
var prevPage=document.querySelector('#prev-page');
var numberOfPage=0;


create.addEventListener('click', function(e){
	e.preventDefault();
	createPage();
})


prevPage.addEventListener('click',function(e){
	e.preventDefault();

	let view=document.querySelector('.view');
	let currentPageId=view.dataset.currentPageId;
	let prevId=parseInt(currentPageId)-1;
	if(prevId<0){
		return alert('fin');
	}
	let currentPage=document.querySelector('#page'+currentPageId);
	let goTo=document.querySelector('#page'+prevId);

	currentPage.style.transform="translate(100%)";
	goTo.style.transform="translateX(0)";
	view.setAttribute('data-current-page-id',prevId);
})

nextPage.addEventListener('click',function(e){
	e.preventDefault();

	let view=document.querySelector('.view');
	let currentPageId=view.dataset.currentPageId;
	let nextId=parseInt(currentPageId)+1;
	if(nextId>numberOfPage){
		return alert('fin');
	}if(currentPageId==0){
		currentPageId=1;
	}
	let currentPage=document.querySelector('#page'+currentPageId);
	let goTo=document.querySelector('#page'+nextId);

	currentPage.style.transform="translate(-100%)";
	goTo.style.transform="translateX(0)";

	view.setAttribute('data-current-page-id',nextId);


})

function createPage(){
	let body=document.querySelector('body');
	let div=document.createElement('div');
	numberOfPage+=1;

	div.setAttribute('class','page');
	div.setAttribute('id', 'page'+numberOfPage);
	div.style.transform="translateX(100%)";
	div.style.color="#fff";
	div.innerHTML="page"+numberOfPage;

	body.appendChild(div);

}