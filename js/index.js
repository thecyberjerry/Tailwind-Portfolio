
// Desktop
var typed1 = new Typed("#auto-input", {
    strings: ["Developer", "Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})
// Mobile
var typed2 = new Typed(".auto-input", {
    strings: ["Developer", "Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})


document.getElementById('nav-con').addEventListener('click', function()
{
    
    let elem= document.getElementById('contact')
    elem.scrollIntoView({behavior:"smooth"})
})
document.getElementById('nav-about').addEventListener('click', function()
{
    
    let elem= document.getElementById('aboutme')
    elem.scrollIntoView({behavior:"smooth"})
})
document.getElementById('nav-con').addEventListener('click', function()
{
    
    let elem= document.getElementById('contact')
    elem.scrollIntoView({behavior:"smooth"})
})
document.getElementById('nav-con').addEventListener('click', function()
{
    
    let elem= document.getElementById('contact')
    elem.scrollIntoView({behavior:"smooth"})
})
document.getElementById("success-tick").style.display = 'none';
var form = document.getElementById("form");
var btn = document.getElementById("btnSubmit")
form.addEventListener("submit",(e) =>
{
    e.preventDefault()
    let name = document.getElementById("name")
    let phone = document.getElementById("phone")
    let email = document.getElementById("email")
    let msg = document.getElementById("msg")
    console.log(name.value,phone.value,email.value,msg.value)
    document.getElementById("form").style.display = 'none';
    document.getElementById("success-tick").style.display = 'flex';
    form.reset()
    setTimeout(function()
    {
        window.location.reload()
    },6500)
})
if(performance.navigation.type = performance.navigation.TYPE_RELOAD)
{
    form.reset()
}

// async function weather()
// {
//     let delhiweather = new Promise((resolve,reject)=>
//     {
//        setTimeout(() => {
//         resolve("20 Degree Delhi Weather")
//        }, 5000); 
//     })
//     let mumbaiweather = new Promise((resolve,reject)=>
//     {
//         setTimeout(() => {
//             resolve("50 Degree Bangalore Weather")
//         }, 7000);
//     })
//     console.log("Fetching Delhi Weather")
//     let delhiw = await delhiweather
//     console.log("Fetched Delhi weather" + delhiw)
//     console.log("Fetching Mumbai Weather" )
//     let mumbaiw = await mumbaiweather
//     console.log("fetched Mumbai Weather" + mumbaiw)
//     return [delhiw,mumbaiw]
// }
// weather()