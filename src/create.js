let creates=document.querySelectorAll('.create');

creates.forEach(create =>{
	create.addEventListener('click',e =>{
		e.preventDefault();
		
		// create element
		let newElement=document.createElement(e.target.innerHTML);
		newElement.innerHTML="new "+e.target.innerHTML +' double click to edit | drag to move';
		newElement.setAttribute('draggable',true);
		newElement.setAttribute('ondragstart',"event.dataTransfer.setData('text/plain',null)");
		newElement.style.position="absolute";
		newElement.style.display="flex";
		newElement.style.justifyContent="center";
		newElement.style.alignItems="center";
		newElement.style.top="0";
		newElement.style.width="200px";
		newElement.style.height="100px";
		newElement.style.backgroundColor="#369";
		newElement.style.right="0";
		newElement.style.resize="both";
		newElement.style.overflow="auto";
		newElement.addEventListener('dblclick', e =>{
			e.target.setAttribute('contenteditable',true);
			e.target.style.boxShadow="0 0 2px 2px #000";
			e.target.focus();

		},true);
		newElement.addEventListener('blur',e =>{
			e.target.setAttribute("contenteditable",false);
			e.target.style.boxShadow="";
		})


		// do not create a zone on the main page
	    let view=document.querySelector('#view');
		let currentPageId=view.dataset['currentPageId'];

		if(currentPageId==0){
			return false;
		}

		// select the current page
		let currentPage=document.querySelector('#page'+currentPageId);

		currentPage.appendChild(newElement);
		})
})

