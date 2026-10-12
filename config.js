/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
    name: "Khải An",
  photo: "./img/image.jpg",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Chuẩn bị xem gì nè ->",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Là sinh nhật của An đó! :D",
    },
    {
      type: "chatbox",
      message:
        "Chúc mừng sinh nhật An, chúc An skibidi toilet tung tung tung sahur.",
      buttonText: "Gửi",
    },
    {
      type: "ideas",
      lines: [
        "Đó là những gì mình định làm.",
        "Nhưng rồi mình nghĩ lại..",
        "Mình nhận ra mình muốn làm gì đó thật <strong>đặc biệt</strong>.",
        "Vì,",
        "An ĐẶC BIỆT mà <span>:)</span>",
      ],
      bigLetters: "Vậy nên",
    },
    {
      type: "quote",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Chúc mừng sinh nhật!",
      wishText: "Chúc An sinh nhật vui vẻ, học giỏi và nghe lời bố mẹ nhé!",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, giờ thì hãy nhắn mình nếu thấy hay nhé",
      replayText: "Hoặc bấm vào, nếu muốn xem lại.",
    },
  ],
};
