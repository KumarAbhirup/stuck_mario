/* eslint-disable no-unused-vars */
/*
  global
  GameObject
  Smooth
  player
  width
  height
  circleRadius
  imgPlayer
  player
  particlesEffect
  imgExplosion
  Ease
  EasingFunctions
  p5
  movingArc
  createVector
*/

class Player extends GameObject {
  isRemovable = false

  startVelocity = 0

  maxVelocity = 200

  velocity = createVector(1, 1)

  bounceDirection = null

  isStartPosition = true

  isProjecting = false

  dir = p5.Vector.sub(this.body.position, movingArc.body.position).normalize()

  update() {
    this.rotate(undefined, -0.15)

    if (this.isStartPosition) {
      this.body.position.x += this.dir.x * -4
      this.body.position.y += this.dir.y * -4
    } else {
      this.project()
    }

    if (this.wentOutOfFrame()) {
      this.isRemovable = true
      this.isStartPosition = true
      this.reload()
    }
  }

  reload = () => {
    // eslint-disable-next-line no-global-assign
    player = new Player(
      { x: width / 2, y: height / 2 },
      { radius: circleRadius * 0.175 },
      { shape: 'circle', image: imgPlayer, rotate: true }
    )

    particlesEffect(
      imgExplosion,
      {
        x: player.body.position.x,
        y: player.body.position.y,
      },
      15
    )
  }

  // Here's how the bounce is done
  project() {
    this.velocity.x = this.dir.x * this.velocity.x
    this.velocity.y = this.dir.y * this.velocity.y

    this.body.position.x += this.dir.x * 4
    this.body.position.y += this.dir.y * 4
  }
}
