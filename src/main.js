// Typed effect on splash page

let typedSplashSubtitle = new Typed(".typed-words-splash-subtitle", {
  strings: ["I'm a Fullstack Developer."],
  startDelay: 1500,
  typeSpeed: 120,
  backSpeed: 50,
  loop: false,
  shuffle: false,
});

// Typed effect on about me page

let typedAboutMe = new Typed(".typed-words-about-me", {
  strings: [
    `<span style='color: var(--code-purple'>const </span><span style='color: var(--code-white'> name <span style='color: var(--code-equals-blue'>= <span style='color: var(--code-green'>'Matt'<span style='color: var(--code-white'>;<br><span style='color: var(--code-purple'>let <span style='color: var(--code-white'>age <span style='color: var(--code-equals-blue'>= <span style='color: var(--code-orange'> 33<span style='color: var(--code-white'>;<br><span style='color: var(--code-purple'>let <span style='color: var(--code-white'>experience <span style='color: var(--code-equals-blue'>= <span style='color: var(--code-yellow'>{<br><span style='color: var(--code-green'>coding<span style='color: var(--code-equals-blue'>: <span style='color: var(--code-green'>"school_of_code"<span style='color: var(--code-white'>,<br><span style='color: var(--code-green'>previous<span style='color: var(--code-equals-blue'>: <span style='color: var(--code-green'> "project_management"<br><span style='color: var(--code-yellow'>}<br><br><span style='color: var(--code-purple'>function <span style='color: var(--code-function-blue'>newDeveloper<span style='color: var(--code-yellow'>(<span style='color: var(--code-white'>name<span style='color: var(--code-yellow'>) {<br><span style='color: var(--code-purple'>let <span style='color: var(--code-white'>startProgrammingCareer <span style='color: var(--code-equals-blue'>=<br><span style='color: var(--code-purple'>(<span style='color: var(--code-white'>age <span style='color: var(--code-equals-blue'>* <span style='color: var(--code-white'>experience<span style='color: var(--code-equals-blue'>.<span style='color: var(--code-red'>previous<span style='color: var(--code-purple'>) <span style='color: var(--code-equals-blue'>* <span style='color: var(--code-white'>experience<span style='color: var(--code-equals-blue'>.<span style='color: var(--code-red'>coding<span style='color: var(--code-white'>;<br><span style='color: var(--code-purple'>return <span style='color: var(--code-white'>name <span style='color: var(--code-equals-blue'>+ <span style='color: var(--code-white'>startProgrammingCareer;<br><span style='color: var(--code-yellow'>}<br><br><span style='color: var(--code-function-blue'>newDeveloper<span style='color: var(--code-yellow'>(<span style='color: var(--code-white'>name<span style='color: var(--code-yellow'>)<span style='color: var(--code-white'>;`,
  ],
  startDelay: 5000,
  typeSpeed: 50,
  loop: false,
  shuffle: false,
});
