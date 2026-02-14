const pswitch = document.querySelector(".pswitch");
const pswitchpressed = ("../ItemsImages/PSwitchPressed.png");
const pswitchoriginal = ("../ItemsImages/PSwitch.png");
const pblock = document.querySelector(".pblock");
const pblockon = ("../ItemsImages/PBlock.png");
const pblockoff = ("../ItemsImages/EmptyPBlock.png");
const coin = document.querySelector(".coin");
const brick = ("../BlocksImages/Brick.png");
const coinoriginal = ("../ItemsImages/Coin.png")
const psound = new Audio ("../Sounds/PSwitch.ogg");
const psoundinitial = new Audio ("../Sounds/Pressed.wav");
const buttons  = document.querySelectorAll(".OFbutton");
const switches = document.querySelectorAll(".OFswitch");
const blocks   = document.querySelectorAll(".OFblock");
const buttonOn  = "../GizmosImages/OnBlock.gif";
const buttonOff = "../GizmosImages/OffBlock.gif";
const switchOn  = "../GizmosImages/ONOFFSwitchPressed.png";
const switchOff = "../GizmosImages/ONOFFSwitch.gif";
const blockOn   = "../GizmosImages/RedDottedBlockOn.png";
const blockOff  = "../GizmosImages/RedDottedBlockOff.png";
const toggleSound = new Audio("../Sounds/OnOffSwitch.wav");
const SECOND_STATE = false;
toggleSound.volume = 0.3;
let isOn = true;
function updateAll() {

  const bImg = isOn ? buttonOn : buttonOff;
  const sImg = isOn ? switchOn : switchOff;
  const blImg = isOn ? blockOn : blockOff;

  buttons.forEach(b => b.src = bImg);
  switches.forEach(s => s.src = sImg);
  blocks.forEach(bl => bl.src = blImg);
}
function toggleSystem() {
  isOn = !isOn;

  toggleSound.currentTime = 0;
  toggleSound.play();

  updateAll();
}
buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    /* grow smoothly */
    btn.style.transition = "transform 0.18s ease";
    btn.style.transform = "scale(1.12)";

    /* shrink back */
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 180);

    toggleSystem();
  });

});
switches.forEach(sw => {
  sw.addEventListener("click", () => {
    if (isOn !== SECOND_STATE) return;
    toggleSystem();
  });

});

updateAll();
psound.volume = 0.3;
psoundinitial.volume = 0.1;
let PClicked = false;
pswitch.addEventListener("click",()=>{
if (!PClicked) {
PClicked = true;
pswitch.src = pswitchpressed;
coin.src = brick;
pblock.src = pblockoff;
psound.currentTime = 0;
psoundinitial.currentTime = 0;
psoundinitial.play();
psound.play();
setTimeout(()=> {
pswitch.src = pswitchoriginal;
pblock.src = pblockon;
coin.src = coinoriginal;
PClicked = false;
},12700);
}
});
