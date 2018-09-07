/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function () {


    var allLi = document.querySelectorAll('.gallery li');
    var body = document.querySelector('body');

    for (var i = 0; i < allLi.length; i++) {
        var singlePhoto = allLi[i];

        singlePhoto.addEventListener('click', function () {
            // console.log(this.firstElementChild.getAttribute('src'));

            var newDiv = document.createElement('div');
            newDiv.classList.add('fullScreen');
            body.appendChild(newDiv);

            var newImgSrc = document.createElement('img');
            newImgSrc.src = this.firstElementChild.src;
            newDiv.appendChild(newImgSrc);

            var btn = document.createElement('button');
            btn.classList.add('close');
            btn.innerText = 'close';
            newDiv.appendChild(btn);


            btn.addEventListener('click', function () {
                newDiv.parentElement.removeChild(newDiv);
            });
        });

    }
});