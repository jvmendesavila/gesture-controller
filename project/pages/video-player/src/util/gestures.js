const { GestureDescription, Finger, FingerCurl } = window.fp

// Extras
const ThumbsGesture = new GestureDescription('thumbs') // 👍
const VictoryGesture = new GestureDescription('victory') // ✌️

// // Thumbs
// // -----------------------------------------------------------------------------
ThumbsGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)
// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ThumbsGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ThumbsGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

// Victory
// -----------------------------------------------------------------------------
VictoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1)
VictoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1)
for (let finger of [Finger.Thumb, Finger.Ring, Finger.Pinky]) {
  VictoryGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  VictoryGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

for (let finger of [Finger.Middle, Finger.Ring]) {
  ThumbsGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ThumbsGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

const knownGestures = [
  ThumbsGesture,
  VictoryGesture
]

const gestureStrings = {
  'thumbs': '👍',
  'victory': '✌️'
}

export {
  knownGestures,
  gestureStrings
}