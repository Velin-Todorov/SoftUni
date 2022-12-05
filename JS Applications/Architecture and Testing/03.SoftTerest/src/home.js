let main;
let section

export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
}

export async function showHome() {
    main.innerHTML = '';
    main.appendChild(section)
}