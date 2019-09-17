/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/*
  global
  GameObject
  arc
  push
  pop
  translate
  fill
  stroke
  PI
  rotate
  image
  imageMode
  CENTER
  strokeWeight
  noFill
  noStroke
*/

class Arc {
  constructor(
    cordinates = { x: null, y: null }, // positioning
    sizing = { width: null, height: null, startRadian: null, stopRadian: null },
    settings = {
      image: null,
      color: { r: 0, g: 255, b: 255, a: 1 },
      mode: null,
      stroke: null,
      strokeColor: null,
      translateWithVector: false,
      rotate: false,
      rotateAngle: PI / 2,
    } // shape can either be a circle or a rectangle
  ) {
    this.cordinates = cordinates
    this.sizing = sizing
    this.settings = settings
  }

  show() {
    push()
    translate(this.cordinates.x, this.cordinates.y)

    // translate at a vector if needed
    this.settings.translateWithVector
      ? translate(this.settings.translateWithVector)
      : null

    this.settings.rotate ? rotate(this.settings.rotateAngle) : null

    // Determine if use the image or color
    this.settings.image
      ? (() => {
          imageMode(CENTER)
          image(
            this.settings.image,
            0,
            0,
            this.sizing.width,
            this.sizing.height
          )
        })()
      : (() => {
          if (this.settings.color) {
            if (typeof this.settings.color === 'object') {
              fill(
                this.settings.color.r,
                this.settings.color.g,
                this.settings.color.b
              )
            } else {
              fill(this.settings.color)
            }
          } else {
            noFill()
          }
        })()

    if (this.settings.strokeColor) {
      if (typeof this.settings.strokeColor === 'object') {
        stroke(
          this.settings.strokeColor.r,
          this.settings.strokeColor.g,
          this.settings.strokeColor.b
        )
      } else {
        stroke(this.settings.strokeColor)
      }

      strokeWeight(this.settings.stroke || 1)
    } else {
      noStroke()
    }
    arc(
      null,
      null,
      this.sizing.width,
      this.sizing.height,
      this.sizing.startRadian,
      this.sizing.stopRadian,
      this.settings.mode
    )
    pop()
  }
}
