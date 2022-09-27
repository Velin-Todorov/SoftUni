function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let namingConvention = document.getElementById('naming-convention').value;
  let result = '';
  let data = text.split(' ');
  let word = '';

  if (namingConvention == 'Pascal Case'){
    for (let n of data){
      word = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      result += word;
    }

  } else if (namingConvention == 'Camel Case'){
    result += data[0];
    for (let i = 1; i < data.length; i++){
      word = data[i].charAt(0).toUpperCase() + data[i].slice(1).toLowerCase();
      result += word;
    }

  }else{
    result += 'Error!'
  }

  document.getElementById('result').innerText = result;

}