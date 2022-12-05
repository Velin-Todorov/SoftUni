let main;
let section;

export function setupLogin(mainTarget, sectionTarget){
    main = mainTarget
    section = sectionTarget
}

export async function showLogin(){
    main.innerHTML='';
    main.appendChild(section)
}