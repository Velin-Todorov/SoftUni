let main;
let section;

export function setupDetails(mainTarget, sectionTarget){
    main = mainTarget
    section = sectionTarget
}

export async function showDetails(){
    main.innerHTML='';
    main.appendChild(section)
}