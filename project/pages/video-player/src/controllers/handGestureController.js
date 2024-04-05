export default class HandGestureController {
  #view
  #service
  #camera

  constructor({ view, service, camera }) {
    this.#service = service
    this.#view = view
    this.#camera = camera
  }

  async init() {
    return this.#loop()
  }

  printHand(hands) {
    const leftHand = Boolean(hands.filter(h => h.handedness === 'Left').length)
    const rightHand = Boolean(hands.filter(h => h.handedness === 'Right').length)
    if (leftHand) console.log('Left Hand ✋');
    if (rightHand) console.log('Right Hand 🤚');
  }

  async #estimateHands() {
    try {
      const hands = await this.#service.estimateHands(this.#camera.video)


      for await (const { event, x, y } of this.#service.detectGestures(hands)) {
        // Play vídeo
        if (event === 'thumbs') {
          this.printHand(hands)
          this.#view.playVideo()
          continue
        }

        // Pause vídeo
        if (event === 'victory') {
          this.printHand(hands)
          this.#view.pauseVideo()
          continue
        }
      }

    } catch (error) {
      console.error('deu ruim**', error)
    }
  }

  async #loop() {
    await this.#service.initializeDetector()
    await this.#estimateHands()
    this.#view.loop(this.#loop.bind(this))

  }

  static async initialize(deps) {
    const controller = new HandGestureController(deps)
    return controller.init()
  }
}