function animate(animRenderF, time) {
  let animStart = null
  const animStep = timestamp => {
    if (!animStart) animStart=timestamp
    const animCurrentTime = timestamp - animStart
    animRenderF(animCurrentTime)
    if (animCurrentTime<time) window.requestAnimationFrame(animStep)
  }      
  window.requestAnimationFrame(animStep)
}
export {animate}