const { GestureDescription, Finger, FingerCurl } = window.fp

const ScrollDownGesture = new GestureDescription('scroll-down') // ✊️
const ScrollUpGesture = new GestureDescription('scroll-up') // 🖐
const ClickGesture = new GestureDescription('click') // 🤏🏻

// Challenges
const RockGesture = new GestureDescription('rock') // 🤘

// Extras
const VictoryGesture = new GestureDescription('victory') // ✌️
const HangLooseGesture = new GestureDescription('hang-loose') // 🤙
const ThumbsGesture = new GestureDescription('thumbs') // 👍

// Victory
// -----------------------------------------------------------------------------
VictoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1)
VictoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1)
VictoryGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1)
VictoryGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1)
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1)

// Hangs Loose
// -----------------------------------------------------------------------------
HangLooseGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)
HangLooseGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  HangLooseGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  HangLooseGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

// // Thumbs
// // -----------------------------------------------------------------------------
ThumbsGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)
// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ThumbsGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  ThumbsGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

// Rock
// -----------------------------------------------------------------------------
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1)
RockGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1)
RockGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1)
RockGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1)
RockGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1)


// Scroll Down
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
// ScrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ScrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  // ScrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}


// ScrollUp
// -----------------------------------------------------------------------------
ScrollUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1)
ScrollUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1)
ScrollUpGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1)
ScrollUpGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1)
ScrollUpGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1)


// Click
// -----------------------------------------------------------------------------
ClickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)
ClickGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5)

ClickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8)
ClickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4)

ClickGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1)
ClickGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1)
ClickGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1)


const knownGestures = [
  ScrollDownGesture,
  ScrollUpGesture,
  RockGesture,
  VictoryGesture,
  HangLooseGesture,
  ThumbsGesture,
  ClickGesture,
]

const gestureStrings = {
  'scroll-up': '🖐',
  'scroll-down': '✊️',
  'rock': '🤘',
  'victory': '✌️',
  'hang-loose': '🤙',
  'thumbs': '👍',
  'click': '🤏🏻'
}

export {
  knownGestures,
  gestureStrings
}