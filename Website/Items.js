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
