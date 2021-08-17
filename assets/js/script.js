import Data from './data.js'

const loader = document.querySelector('.bx-loader-alt')

const images = ['0.webp', '1.jpg', '2.jpg']

window.addEventListener('load', () => {

Data.getRepos('https://api.github.com/search/repositories?q=user:rifkiahmadfahrezi+sort:updated-desc')
.then(results => results.json())
.then(results => {

	for(let i = 0; i < 3; i++) {
		// reposId.push(results[i].id)
	loader.remove()
	document.querySelector('.projects-wrapper').innerHTML += `<div class="content-wrapper d-flex justify-content-between">
					<div class="text-wrapper">
						<div class="position-relative">
							<h1 class="title">${results.items[i].name.split('-').join(' ')}</h1>
						</div>
						<div class="wrapper d-block mt-3">
							<p>
								${results.items[i].description == null ? 'No description' : results.items[i].description}
							</p>

							<div>
								<a href="${results.items[i].html_url}" class="link-light" target="_blank"><i class="me-1 bx bxl-github"></i>Github</a>
							</div>
						</div>
					</div>

					<div class="img-wrapper">
						<img  src="assets/images/${images[i]}" alt="bg image">
					</div>
				</div>`
	}





const wrappers = gsap.utils.toArray('.content-wrapper')


wrappers.forEach( wrapper => {
	// animation for reveal the images
	gsap.utils.toArray('.img-wrapper').forEach( img => {
		gsap.to( img , {
			scrollTrigger: {
				trigger: img,
				start: 'top 85%',
	 			end: 'top 35%'
			},
			x: 0
		})
	})
	// animation for reveal the texts
	gsap.utils.toArray('.text-wrapper').forEach( text => {
		gsap.to( text , {
			scrollTrigger: {
				trigger: text,
				start: 'top 85%',
	 			end: 'top 35%'
			},
			y: 0
		})
	})
})


})
.catch(err => {
	console.error('Something went wrong :(,please refresh the website')
	alert('please refresh the website')
})
})

gsap.registerPlugin(ScrollTrigger)
window.addEventListener('load', () => {
	const fadeUpText = document.querySelectorAll('.fade-up')
	const fadeDownText = document.querySelectorAll('.fade-down')

	fadeUpText.forEach(text => {
		fadeUp(text, text.getAttribute('data-duration'))
	})

	fadeDownText.forEach(text => {
		fadeDown(text, text.getAttribute('data-duration'))
	})
})


function fadeUp(target = null, duration = 0){
	gsap.fromTo(target,{
		bottom: -150,
	},{	
		duration: duration,
		opacity: 1,
		bottom: 0,
		ease: 'power1.inOut',
	})
}


function fadeDown(target = null, duration = 0){
	gsap.fromTo(target,{
		top: -150,
	},{	
		duration: duration,
		opacity: 1,
		top: 0,
		ease: 'power1.inOut',
	})
}


const navbarToggler = document.querySelector('#toggler')
const navbarMenu = document.querySelector('#navbar-menu')
navbarToggler.addEventListener('click', (e) => {
	navbarMenu.classList.toggle('active')
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navbarMenu.classList.remove('active')
	})
})