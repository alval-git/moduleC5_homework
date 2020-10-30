
const btnSmbt = document.querySelector(".btn-sumbit");
const resultNode = document.querySelector(".gallery");
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
	
	resultNode.innerHTML = cards;
	console.log(cards)
}
btnSmbt.onclick = function(){
	const inputVal = Number(document.querySelector(".input-num").value);
	if (inputVal<1 || inputVal>10){
		resultNode.innerHTML = "<p>число вне диапазона от 1 до 10</p>"
	}else{
	UseRequest(`https://picsum.photos/v2/list?limit=${inputVal}`,displayResult)
	}
}