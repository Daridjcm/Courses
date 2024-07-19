let title = document.getElementById('title');
let desc = document.getElementById('description');
let lang = document.getElementById('language');
let release = document.getElementById('release');
let btn = document.getElementById('btn');
let img = document.getElementById('poster');

const callAPI = () => {
    const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=fad44e01';
    return fetch(API)
        .then(res => res.json())
        .then(response => {
            const { Title: resTitle, Poster: resImg, Plot: resDesc, Language: resLang, Released: resRelease } = response;
            return { resTitle, resImg, resDesc, resLang, resRelease };
        });
}

btn.addEventListener('click', async function() {
    btn.innerHTML = 'Showed movie';
    const { resTitle, resImg, resDesc, resLang, resRelease } = await callAPI();
    title.innerText = resTitle || ' ';
    img.src = resImg;
    desc.innerText = resDesc;
    lang.innerText = resLang;
    release.innerText = resRelease;
});