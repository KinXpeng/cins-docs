class MoveBall {
  constructor({
    startDom,
    endDom,
    width = 30,
    height = 30,
    color = 'red',
    customStyle = {},
  }) {
    this.startXy = MoveBall.getCenterCoordinates(startDom);
    this.endXy = MoveBall.getCenterCoordinates(endDom);
    this.verticalDom = MoveBall.createVerticalDom(startDom, width, height);
    this.horizontalDom = MoveBall.createHorizontalDom(
      width,
      height,
      color,
      customStyle,
    );
    this.verticalDom.appendChild(this.horizontalDom);
  }
  static getCenterCoordinates(domElement) {
    const rect = domElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return { x: centerX, y: centerY };
  }
  static createVerticalDom(startDom, width, height) {
    const startXy = MoveBall.getCenterCoordinates(startDom);
    const verticalDom = document.createElement('div');
    verticalDom.style.position = 'fixed';
    verticalDom.style.top = `${startXy.y - height / 2}px`;
    verticalDom.style.left = `${startXy.x - width / 2}px`;
    verticalDom.style.zIndex = '999';
    return verticalDom;
  }
  static createHorizontalDom(width, height, color, customStyle) {
    const horizontalDom = document.createElement('div');
    horizontalDom.style.width = `${width}px`;
    horizontalDom.style.height = `${height}px`;
    horizontalDom.style.borderRadius = '50%';
    horizontalDom.style.backgroundColor = color;
    if (Object.keys(customStyle).length) {
      for (const key in customStyle) {
        horizontalDom.style[key] = customStyle[key];
      }
    }
    return horizontalDom;
  }
  getOffsetXy() {
    return {
      x: this.endXy.x - this.startXy.x,
      y: this.endXy.y - this.startXy.y,
    };
  }
  freeThrow() {
    document.body.appendChild(this.verticalDom);
    const verticalEasing =
      this.startXy.y < this.endXy.y
        ? 'cubic-bezier(.44,-1.43,1,1)'
        : 'cubic-bezier(0,0,.76,1.92)';
    const verticalAnimate = this.verticalDom.animate(
      [{ transform: `translate3d(0, ${this.getOffsetXy().y}px, 0)` }],
      {
        easing: verticalEasing,
        duration: 800,
        iterations: 1,
      },
    );
    this.horizontalDom.animate(
      [{ transform: `translate3d(${this.getOffsetXy().x}px, 0, 0)` }],
      {
        easing: 'linear',
        duration: 800,
        iterations: 1,
      },
    );
    verticalAnimate.onfinish = () => {
      this.verticalDom.remove();
    };
  }
}

export { MoveBall };
