const btnSmbt = document.querySelector(".btn-sumbit");
const ResultNode = document.querySelector(".gallery")
const UseRequest = () => {
	const photoWidth = Number(document.querySelector(".input-width").value);
	const photoHeight = Number(document.querySelector(".input-height").value);
	if ((photoWidth<100 || photoWidth>300) || (photoHeight<100 || photoHeight>300)){
		return "одно из чисел вне диапазона от 100 до 300"
	}else{
		return fetch(`https://picsum.photos/${photoWidth}/${photoHeight}`)
			.then((response) => {
	        	return response.url;
	    	})
	    	.then((data) => {
	        	return data;
	    	})
	    	.catch((response) => { console.log('error') });
   		}
}
btnSmbt.addEventListener('click', async () =>{
	const requestResult = await UseRequest();
	const card = `<image class="photo" src="${requestResult}"></image>`
	if (requestResult == "одно из чисел вне диапазона от 100 до 300" ){
		const card = "<p>одно из чисел вне диапазона от 100 до 300</p>"
		ResultNode.innerHTML = card;
	}else{
		const card = `<image class="photo" src="${requestResult}"></image>`
		ResultNode.innerHTML = card;
	}
}) 


