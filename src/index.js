let html = `
<div class="text-center bg-warning my-0">
        <h1 class="text-dark my-0 font-weight-bold">Las Tapas - Tex Mex</h1>
      </div>

      <div class="container-fluid px-0">
        <div class="btn-group d-flex">
          <a href="#" id="home" class="btn btn-dark btn-block mt-0 border font-weight-bold">Home</a>
          <a href="#" id="about" class="btn btn-dark btn-block mt-0 border font-weight-bold">About Us</a>
          <a href="#" id="menu" class="btn btn-dark btn-block mt-0 border font-weight-bold">Menu</a>
          <a href="#" id="contact" class="btn btn-dark btn-block mt-0 border font-weight-bold">Contact</a>
        </div>
      </div>

      <div class="mainbody">
        <div class="image">
          <div class="pt-5 px-3">
            <h1 class="text-center font-weight-bold text-white header1 mt-5">Your Favorite Mexican Food Now In Mumbai!</h1>
          </div>
        </div>
      </div>
    `
let newDiv = document.createElement('div');
newDiv.innerHTML = html;
// console.log(html);
 document.getElementById('content').insertBefore(newDiv, null);
// content.appendChild(html);
