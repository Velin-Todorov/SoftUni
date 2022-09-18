function LastKElements(n, k){
// n - length, k - how many numbers to sum

    function sum(array=XPathResult, k)){
        
    }

    let myarr = [];
    myarr.length = n;
    myarr[0] = 1;
    myarr.fill(0, 1)

    for (let i = 1; i <= n; i ++){

        let temp_array = myarr.slice(i - 1, k - i + 1) 
        myarr[i] = sum(temp_array)
        console.log(temp_array)
        console.log(myarr)
    }
    console.log(myarr)
}
LastKElements(6, 3)