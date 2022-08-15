import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(element => {
	const galleryItems = document.createElement('li')
	galleryItems.className = 'gallery__item'
	
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description
    
	galleryItems.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItems)
})
gallery.append(...items)

new SimpleLightbox('.gallery a', {
	captionsData: 'alt', captionDelay: 250,
})




