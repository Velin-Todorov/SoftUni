let main;
let section;

export function setupEdit(mainTarget, sectionTarget){
    main = mainTarget
    section = sectionTarget
}

export async function showEdit(){
    main.innerHTML='';
    main.appendChild(section)
}