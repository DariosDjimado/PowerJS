let dragger=document.querySelectorAll('.dragger');

function draggerInit(mainDivId){
	// Variables
	let element;
	let initialeX;
	let initialeY;
	let main=document.querySelector(mainDivId);
	
	// init z-index and click event
	dragger.forEach( element => {
		element.style.zIndex=parseInt(element.getAttribute('dragger-index'))+999;
		element.addEventListener('click', e =>{
			setVisible(e.target);
		})
	})

	/* Drag */
	main.addEventListener('drag', e =>{
		// action
	}, false);

	/* Drag Start */
	main.addEventListener("dragstart", e => {
		// action
		// get positions
		element = e.target;
		initialeX= e.layerX;
		initialeY= e.layerY;
		element.style.boxShadow=" 0 0 1px 2px rgba(0,0,0,.3)";
		element.style.zIndex="999";

	}, false);

	/* Drag End */
	main.addEventListener("dragend", e => {
		// action
		element.style.boxShadow= "";
		
	}, false);

	/* Drag Over */
	main.addEventListener("dragover", e => {
		// prevent default to allow drop
		e.preventDefault();
	}, false);

	/* Drag Enter */
	main.addEventListener("dragenter", e => {
	 	// action
	}, false);

	/* Drag Leave */
	main.addEventListener("dragleave", e => {
	  	// action 
	}, false);

	/* Drop */
	main.addEventListener("drop", e => {
	  // prevent default action (open as link for some elements)
	   e.preventDefault();

	   let xpos;
	   let ypos;

	   if (e.clientX-initialeX<0){
			element.style.left=0;
			element.style.right='auto';
	   } else {
	   		xpos=e.clientX-initialeX;
	   		element.style.left=xpos+'px';
	   }

	   if(e.clientY+initialeY>window.screen.availHeight){
	   		element.style.top='auto';
	   		element.style.bottom=0;
	   } else {
	   		ypos=e.clientY-initialeY;
	   		element.style.top=ypos+'px';
	   }

	   setVisible(element);

	   if(editSection.style.display!="none"){
	   		globalEdit(element, element.getAttribute('id'));
	   }
	   

	}, false);

}

function setVisible(element){
	// Step back from a step
	dragger.forEach( el => {
		el.style.zIndex=String(parseInt(el.style.zIndex)-1);
	})
	// set z-index of element
	element.style.zIndex="999";

}
