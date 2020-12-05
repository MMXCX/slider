let slider2 = {
    imageUrls: [],
    currentImageIndex: 0,
    showPrevButton: null,
    showNextButton: null,
    slideImage: null,

    init: function () {
        //initialize elements
        let el = document.querySelector('#mmxcx-slider2');
        this.showPrevButton = el.querySelector('.prev-button');
        this.showNextButton = el.querySelector('.next-button');
        this.slideImage = el.querySelector('.img-slider');

        let that = this;

        //add event listeners
        this.showPrevButton.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextButton.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });


        this.imageUrls.push('/img/1.jpg');
        this.imageUrls.push('/img/2.jpg');
        this.imageUrls.push('/img/3.jpg');
        this.imageUrls.push('/img/4.jpg');
        this.imageUrls.push('/img/5.jpg');
        this.imageUrls.push('/img/6.jpg');
        this.imageUrls.push('/img/7.jpg');
        this.imageUrls.push('/img/8.jpg');

        //set start slider src
        this.slideImage.setAttribute('src', this.imageUrls[0]);
        this.showPrevButton.disabled = true;

    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showNextButton.disabled = false;

        //disable prev button if need
        if (this.currentImageIndex === 0) {
            this.showPrevButton.disabled = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showPrevButton.disabled = false;

        //disable next button if need
        if (this.currentImageIndex === this.imageUrls.length - 1) {
            this.showNextButton.disabled = true;
        }
    }
}
