let inputValue = document.querySelector("#inputValue");
let addBtn = document.querySelector("#addBtn");
let noValue = document.querySelector("#noValue");
let listContent = document.querySelector("#listContent");



addBtn.addEventListener('click',function(){
	if(inputValue.value ==''){
		noValue.innerHTML="You must add text!";
		dataSave();
	}else{
		noValue.innerHTML="";
		
		let li = document.createElement('li');
		li.innerHTML = inputValue.value;
		listContent.appendChild(li);
		
		let span = document.createElement('span');
		span.innerHTML = '&#10006;';
		li.appendChild(span);
		dataSave();
		
		
	};
	dataSave();
	inputValue.value ='';
	
})


listContent.addEventListener('click',function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("clicked");
		dataSave();
	}else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		dataSave();
	}
})





function dataSave(){
	localStorage.setItem('data',listContent.innerHTML)
}

function showData(){
	listContent.innerHTML = localStorage.getItem('data');
}

showData();