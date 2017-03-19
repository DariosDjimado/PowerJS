let creates=document.querySelectorAll('.create');
let editSection=document.querySelector('#edit-section');
let editSectionSubmit=document.querySelector('#edit_section_submit');
let editInput=document.querySelectorAll('.edit-input');

creates.forEach(create =>{
	create.addEventListener('click',e =>{
		e.preventDefault();
		
		// do not create a zone on the main page
	    let view=document.querySelector('#view');
		let currentPageId=view.dataset['currentPageId'];
		if(currentPageId==0){
			return false;
		}

		// create element
		let newElement=document.createElement(e.target.innerHTML);
		newElement.innerHTML="new "+e.target.innerHTML +' double click to edit | drag to move';

		/* Attribute */
		newElement.setAttribute('id','id'+Date.now());
		newElement.setAttribute('draggable',true);
		newElement.setAttribute('ondragstart',"event.dataTransfer.setData('text/plain',null)");

		/* style */

		// common
		newElement.style.position="absolute";
		newElement.style.top="0";
		newElement.style.right="0";

		newElement.style.resize="both";
		newElement.style.overflow="auto";

		newElement.style.display="flex";
		newElement.style.justifyContent="center";
		newElement.style.alignItems="center";
		

		newElement.style.width="200px";
		newElement.style.height="100px";
		newElement.style.color="#000";
		newElement.style.backgroundColor="#369";
		newElement.style.opacity=1;
		
		

		/* Event listener */
		// click event
		newElement.addEventListener('click',e =>{
			globalEdit(e.target, e.target.getAttribute('id'));
		},true)
		// Double click event
		newElement.addEventListener('dblclick', e =>{
			e.target.setAttribute('contenteditable',true);
			e.target.style.boxShadow="0 0 2px 2px #000";
			e.target.focus(); // autofocus

		},true);

		// Blur Event
		newElement.addEventListener('blur',e =>{
			e.target.setAttribute("contenteditable",false);
			e.target.style.boxShadow="";
		})

		// select the current page
		let currentPage=document.querySelector('#page'+currentPageId);

		currentPage.appendChild(newElement);
		})
})

editInput.forEach(input =>{
	input.addEventListener('change',e =>{
		let element=document.querySelector('#'+editSection.getAttribute('ref-id'));
		if(e.target.classList.contains('pixel')){
			element.style[e.target.getAttribute('name')]=e.target.value+'px';
		}
		element.style[e.target.getAttribute('name')]=e.target.value;
	})
})

editSectionSubmit.addEventListener('click',e =>{
	editSection.style.display="none";
})

function globalEdit(element,elementId){
	let editSection=document.querySelector('#edit-section');

	/* attributes */
	editSection.setAttribute('ref-id',elementId);
	editSection.style.display="block";
	
	for(let i=0; i<editSection.children.length; i++){
		for(let j=0; j<editSection.children[i].children.length; j++){
			let input=editSection.children[i].children[j];
			let name=input.getAttribute('name');
			
			// specify the type
			if(input.type=="number"){
				editSection.children[i].children[j].value=parseInt(element.style[name]);
			}
			if(input.type=="color"){
				editSection.children[i].children[j].value=rgb2hex(element.style[name]);
			}
		}
	}
}




/* source http://wowmotty.blogspot.fr/2009/06/convert-jquery-rgb-output-to-hex-color.html */

let hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
//Function to convert rgb color to hex format
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }