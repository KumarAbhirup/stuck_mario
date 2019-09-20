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

  rotateAngle = 90

  rotateAngleRadian = radians(this.rotateAngle)

  update() {
    // set moving arc postion
    this.body.position.x =
      visibleCircle.body.position.x +
      cos(this.revolveAngle) * visibleCircle.sizing.radius
    this.body.position.y =
      visibleCircle.body.position.y +
      sin(this.revolveAngle) * visibleCircle.sizing.radius

    this.rotateAngle = map(this.revolveAngle - 90, 0, 360, 0, 360)
    this.rotateAngleRadian = radians(this.rotateAngle)
    this.rotate(this.rotateAngle, null, 'degrees')
  }
}
