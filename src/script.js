abaclock(".abaclock");

function abaclock(selector){
  const abaclockRows = document.querySelectorAll(selector + '>[data-beads]');
  const timeEl = document.querySelector(selector + '>time');
  if(!abaclockRows) return
  const digitEls = [];
  abaclockRows.forEach(digitEl => {
    const beads = Number(digitEl.dataset.beads);
    digitEl.style.setProperty("--beads", beads);
    const beadEls = [];
    digitEls.push(beadEls)
    for(let i = 0; i < beads; i++) {
      const beadEl = document.createElement("i")
      digitEl.append(beadEl);
      beadEls.push(beadEl);
    }
  })

  time();

  function time(){
    const options = { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"};
    const str = new Date().toLocaleTimeString([], options);
    str.match(/\d/g).forEach((d, di) => digitEls[di].forEach((b, bi) => b.dataset.active = bi < d));
    timeEl.dateTime = timeEl.innerHTML = str;
    window.requestAnimationFrame(time);
  }
}
