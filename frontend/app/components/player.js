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
*/

class Player extends GameObject {
  isRemovable = false

  velocity = 0

  maxVelocity = 200

  bounceDirection = null

  update() {
    this.rotate(undefined, -0.15)

    // this.velocity = Smooth(this.velocity, this.maxVelocity, 500)
    // this.body.position.y += this.velocity * 0.8

    this.body.position.y = Ease(
      EasingFunctions.easeOutCubic,
      4,
      this.body.position.y,
      this.body.position.y,
      1000
    )

    if (this.wentOutOfFrame()) {
      this.isRemovable = true
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
    if (this.bounceDirection === 'left') {
      this.body.position.x -= 20
    }
    if (this.bounceDirection === 'right') {
      this.body.position.x += 20
    }
  }
}
