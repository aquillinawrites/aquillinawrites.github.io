const phrases = [
  'Lover of Words & Language.',
  'Storyteller. Linguist. Wordsmith.',
  'Writing that makes you feel something.'
];
let i = 0, j = 0, deleting = false;
const el = document.getElementById('typewriter-text');

function type() {
  const current = phrases[i];
  el.textContent = deleting
    ? current.substring(0, j--)
    : current.substring(0, j++);
  if (!deleting && j === current.length + 1) {
    setTimeout(() => deleting = true, 2000);
  } else if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % phrases.length;
  }
  setTimeout(type, deleting ? 50 : 100);
}
type();

