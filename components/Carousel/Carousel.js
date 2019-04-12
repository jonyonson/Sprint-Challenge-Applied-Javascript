class Carousel {
  constructor(element) {
    this.element = element;
    this.currentImageIndex = 0;
    this.images = element.querySelectorAll('img');
    this.displayCurrentImage();

    this.leftButton = element.querySelector('.left-button');
    this.rightButton = element.querySelector('.right-button');

    this.leftButton.addEventListener('click', () => this.decrementImageIndex());
    this.rightButton.addEventListener('click', () =>
      this.incrementImageIndex()
    );
  }

  decrementImageIndex() {
    // if index === 0 then move index to end of array
    this.currentImageIndex === 0
      ? (this.currentImageIndex = 3)
      : (this.currentImageIndex -= 1);

    this.displayCurrentImage();
  }

  incrementImageIndex() {
    // if index === 3 then move index to beginning of array
    this.currentImageIndex === 3
      ? (this.currentImageIndex = 0)
      : (this.currentImageIndex += 1);

    this.displayCurrentImage();
  }

  displayCurrentImage() {
    this.images.forEach(img => (img.style.display = 'none'));
    const currentImage = this.images[this.currentImageIndex];
    currentImage.style.display = 'flex';
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));
