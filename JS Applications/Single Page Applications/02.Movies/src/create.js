let main;
let section;

async function onSubmit(ev){
    ev.preventDefault();
    const formData = new FormData(ev.target)
    const movie = {
        title: formData.get('title'), 
        description: formData.get('description'),
        img: formData.get('imageUrl')
    };

    if (movie.title == '' || movie.description == '' || movie.img == ''){
        return alert('All fields are required!')
    }

    const response = await fetch('http://localhost:3030/data/movies', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    })

    if(response.ok){
        const movie = await response.json();
    }

}


export function setupCreate(mainTarget, sectionTarget){
    main = mainTarget
    section = sectionTarget

    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit)

}

export async function showCreate(){
    main.innerHTML='';
    main.appendChild(section)
}