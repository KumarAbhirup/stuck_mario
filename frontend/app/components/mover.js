/* eslint-disable no-unused-vars */
/*
  global
  GameObject
  cos
  sin
  radians
  visibleCircle
  map
*/

class Mover extends GameObject {
  moveDir = 0 // 0 not moving, -1 left, 1 for right.

  revolveAngle = 90

  update() {
    // set moving arc postion
    this.body.position.x =
      visibleCircle.body.position.x +
      cos(radians(this.revolveAngle)) * visibleCircle.sizing.radius
    this.body.position.y =
      visibleCircle.body.position.y +
      sin(radians(this.revolveAngle)) * visibleCircle.sizing.radius

    const rotateAngle = map(
      radians(this.revolveAngle - 90),
      radians(0),
      radians(360),
      radians(0),
      radians(360)
    )
    this.rotate(rotateAngle, null, 'degrees')
  }
}
