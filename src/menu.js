import '../assets/menu.jpeg';

function menufunc() {

    const content = document.getElementById('content');
    content.innerHTML = '';

        const mainbody = document.createElement('div');
        content.appendChild(mainbody);
        const image = document.createElement('div');
        image.setAttribute('class','image');
        content.appendChild(image);
        const textonimage = document.createElement('div');
        image.appendChild(textonimage);
        textonimage.setAttribute('class','p-3');
        const img = document.createElement('img');
        textonimage.appendChild(img);
        img.setAttribute('class','container d-flex');
        img.setAttribute('src','../assets/menu.jpeg');
        
}

export {menufunc}