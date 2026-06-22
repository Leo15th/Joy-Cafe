import './style.css'

// import photots from image-data.js
import { photos } from "./image-data"
// import text-data from text-data.js
import { heroTexts } from "./text-data";

// nav section
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileMenu = document.getElementById("mobile-menu")
mobileMenuIcon.addEventListener("click",()=>{
    mobileMenuIcon.classList.toggle("fa-bars")
    mobileMenuIcon.classList.toggle("fa-x")
    if(mobileMenuIcon.classList.contains("fa-x")){
        mobileMenu.classList.remove("hidden")
        requestAnimationFrame(()=>{
            mobileMenu.classList.remove("translate-x-full", "opacity-0", "pointer-events-none")
            mobileMenu.classList.add("translate-x-0", "opacity-100", "pointer-events-auto")
        })
    } else{
        mobileMenu.classList.remove("translate-x-0", "opacity-100", "pointer-events-auto")
        mobileMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none")
        setTimeout(() => {
            mobileMenu.classList.add("hidden")
        }, 300);
    }
})

// hero section
//find hero image
const heroImg = photos.find(p => p.title === "heroImg");
//get hero section
const heroSection = document.getElementById("hero")
// inset hero background
heroSection.style.backgroundImage = `url(${heroImg.url})`;
const heroTitle = document.getElementById("heroTitle")
const heroPara = document.getElementById("heroParagraph")
const heroCtaBtn = document.getElementById("heroCtaBtn")

// change hero text every 3seconds 
let currentIndex = 0;
function changeHeroText(){
    heroTitle.textContent = heroTexts[currentIndex].title
    heroPara.textContent = heroTexts[currentIndex].paragraph
}
setInterval(()=>{
    heroTitle.classList.remove("show")
    heroPara.classList.remove("show")
    setTimeout(() => {
        heroTitle.classList.add("show")
        heroPara.classList.add("show")
        currentIndex ++;
        if(currentIndex >= heroTexts.length){
            currentIndex = 0
        }
        changeHeroText()
    }, 1000);
},10000)

//featured menu section
//get featured menu container div
const featuredMenuContainer = document.getElementById("featured-menu-container")

const signaturePhotos = photos.filter(p => p.category === "signature")
signaturePhotos.forEach(item =>{
    featuredMenuContainer.innerHTML +=`
    <div class="image-card w-3/4 mx-auto rounded-3xl overflow-hidden backdrop-blur-sm shadow-md shadow-slate-300 md:w-full">
            <img src="${item.url}" alt="${item.title}" class="image aspect-square object-cover object-center w-full">
            <div class="px-4 py-2">
              <h3 class="image-title text-2xl font-bold text-slate-100 text-shadow-md text-shadow-black md:mb-4">${item.title}</h3>
              <p class="imgage-description text-lg text-slate-100 text-shadow-sm text-shadow-black">${item.description}</p>
            </div>
          </div>
    `
})

//contact section
const form = document.getElementById("message-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fullName = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()
    if(!fullName || !email || !message){
        window.alert("Please fill in all fields.")
    }
    console.log({fullName, email, message})
    window.alert("send message successful")
    form.reset();
})