function fromJSONToHTMLTable(input){
    let objArray = JSON.parse(input);
    let result = '<table>\n    ';
    let obj1 = objArray[0];
    let objkeys = Object.keys(obj1);
    
    let tableHeadings = `<tr><th>${objkeys[0]}</th>`;

    for (let i = 1; i < objkeys.length; i++){
        tableHeadings += `<th>${escapeHtml(objkeys[i].trim())}</th>`

    };

    tableHeadings += '</tr>'
    result += tableHeadings;

    let row = '';
    let tableRows = '';


    for (let i = 0; i < objkeys.length; i++){
        let data = objArray[i];
        row += '<tr>'
        for (let key of objkeys){
            row += `<td>${escapeHtml(data[key])}</td>`
        }
        tableRows += `${row}`;
        tableRows += '</tr>\n    ';
        row = '';
    }

    result += `\n    ${tableRows}`;

    let text = result.trim();

    text += '\n</table>';
    
    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.toString().replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }

    console.log(text)
}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`)