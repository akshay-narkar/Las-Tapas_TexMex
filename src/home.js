function homefunc() {
          
    const content = document.getElementById('content');
    content.innerHTML = '';

        const mainbody = document.createElement('div');
        content.appendChild(mainbody);
        const image = document.createElement('div');
        image.setAttribute('class','image');
        content.appendChild(image);
        const textonimage = document.createElement('div');
        image.appendChild(textonimage);
        textonimage.setAttribute('class','pt-5 px-3');
        const header1 = document.createElement('h1');
        textonimage.appendChild(header1);
        header1.setAttribute('class','text-center font-weight-bold text-white header1 mt-5')
        header1.innerHTML = "Your Favorite Mexican Food Now In Mumbai!";
}

export {homefunc}; 