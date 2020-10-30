
const btnSmbt = document.querySelector(".btn-sumbit");
const resultNode = document.querySelector(".images");
const firstSvg = document.querySelector(".first-svg");
const secondSvg = document.querySelector(".second-svg");
 function UseRequest(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,true)
	xhr.onload = function() {
		if (xhr.status!=200){
			console.log(xhr.status)
		}else{
			const result = JSON.parse(xhr.response);
			if (callback){
				callback(result);
				console.log(xhr.status)
			}

		};
	}
	xhr.send();
};
function displayResult(apiData){
	let cards = ""
	apiData.forEach(item => {
		const card = `<image class="photo" src="${item.download_url}"></image>`
		cards = cards + card;
	});
	resultNode.innerHTML =  cards;
	localStorage.setItem('photo',cards)
}
window.onload = function(){
	resultNode.innerHTML = localStorage.getItem('photo');
}
let i = 1;
btnSmbt.onclick = function(){
	i++;
	if (i% 2 == 0){
		secondSvg.style.display = "inline";
		firstSvg.style.display = "none";
	}else{
		firstSvg.style.display = "inline";
		secondSvg.style.display = "none";
	}
	const inputList = Number(document.querySelector(".input-page").value);
	const inputLimit = Number(document.querySelector(".input-limit").value);
	if ((1>inputList || inputList>10) && (1>inputLimit || inputLimit>10)){
		resultNode.innerHTML = "<p>«Лимит и номер страницы вне диапазона от 1 до 10»<p>";
	}else if (1>inputLimit || inputLimit>10){
		resultNode.innerHTML = "<p>«Лимит вне диапазона от 1 до 10»<p>";
	}else if(1>inputList || inputList>10){	
		resultNode.innerHTML = "<p>«Номер страницы вне диапазона от 1 до 10»<p>";
	}else{
		UseRequest(`https://picsum.photos/v2/list?page=${inputList}&limit=${inputLimit}`,displayResult)
	}
}