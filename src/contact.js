function contactfunc() {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const mainbody = document.createElement('div');
  content.appendChild(mainbody);
  const image = document.createElement('div');
  image.setAttribute('class', 'image1');
  content.appendChild(image);
  const textonimage = document.createElement('div');
  image.appendChild(textonimage);
  textonimage.setAttribute('class', 'pt-5 px-3');
  const header1 = document.createElement('h1');
  textonimage.appendChild(header1);
  header1.setAttribute('class', 'text-center font-weight-bold text-white header1 mt-5');
  header1.innerHTML = 'Contact Us!';
  const deet1 = document.createElement('h3');
  textonimage.appendChild(deet1);
  deet1.innerHTML = 'Las Tapas, Shop 4, Jharna Kutir CHS, Subhash Road, Vile Parle East, Mumbai';
  deet1.setAttribute('class', 'text-center font-weight-bold text-white mt-5');
  const deet2 = document.createElement('h4');
  deet2.innerHTML = '+91 9123456780';
  deet2.setAttribute('class', 'text-center font-weight-bold text-white');

  textonimage.appendChild(deet2);
}

export default contactfunc;
