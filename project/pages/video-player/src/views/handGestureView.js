export default class HandGestureView {
  #videoElement = document.querySelector('#video')

  playVideo() {
    this.#videoElement.play()
  }

  pauseVideo() {
    this.#videoElement.pause()
  }

  loop(fn) {
    requestAnimationFrame(fn)
  }

  scrollPage(top) {
    scroll({
      top,
      behavior: "smooth"
    })
  }

}