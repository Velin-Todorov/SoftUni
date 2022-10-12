function solve(){
	let input = document.getElementById('text')
	let text = document.getElementById('naming-convention')
  	let result = document.getElementById('result')
	let resString = ''
	let word = input.value.split(' ');

  	if (text.value == 'Camel Case'){
		
		resString += word[0].toLowerCase();

		for (let i = 1; i < word.length; i++){
			let n = word[i];
			resString += n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
			
		}
		result.textContent = resString

  	}else if (text.value == 'Pascal Case'){
		for (let i = 0; i < word.length; i++){
			let n = word[i];
			resString += n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()
		}

		result.textContent = resString;

  	}else{
		result.textContent = 'Error!';
  	}
  
}