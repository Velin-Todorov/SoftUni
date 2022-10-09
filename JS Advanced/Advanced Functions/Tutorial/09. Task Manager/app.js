function solve() {
    let buttonAdd = document.getElementById('add');

    function addTask(){
        let taskField = document.getElementById('task').textContent
        let descriptionField = document.getElementById('id').textContent
        let dateField = document.getElementById('date').textContent

        let dateRegex = new RegExp(/\d+\.\d+\.\d+/, 'gm')
        
        if (buttonAdd.click()){
            
            if (taskField === '' || 
                descriptionField === '' ||
                dateField === ''){
                return;
            }else{
                let section = document.querySelectorAll('.section:nth-child(2)')[1];
                console.log(section);
                section.firstElementChild.innerHTML += `<article>${taskField}${descriptionField}${dateField}</article>`;
            }
        }
        
    }

    return addTask;
}