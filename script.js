// to show and hide search bar
Firsticon = document.getElementById('first-icon')
search = document.getElementById('search')
Firsticon.addEventListener('click', function () {

  search.classList.toggle('show')
})

// To slides header images
image = document.getElementById('bg-img')
nextImageButton = document.getElementById('btn-2')
previousImageButton = document.getElementById('btn-1')
nextImageButton.addEventListener('click', function () {
  image.style.backgroundImage = 'url("images/home-bg-2.png")'
  document.getElementById('merry').innerText = 'Ho-ho-ho'
  document.getElementById('discount').innerText = 'Happy Holiday'

})

previousImageButton.addEventListener('click', function () {
  image.style.backgroundImage = 'url("images/home-bg-1.png")'
  document.getElementById('merry').innerText = 'Merry Christmas'
  document.getElementById('discount').innerText = 'UP TO 60% OFF'

})


//show gallery items on hover

box1 = document.getElementById('box1')
box1.addEventListener('mouseover', function () {
  hideShow = document.getElementById('hide-show')
  hideShow.classList.toggle('active-deactive')
  hideShow.style.backgroundColor = 'rgba(255, 255, 255, 0.795)'
})


box1.addEventListener('mouseout', function () {
  hideShow = document.getElementById('hide-show')
  hideShow.classList.toggle('active-deactive')

})

box2 = document.getElementById('box2')
box2.addEventListener('mouseover', function () {
  hideShow = document.getElementById('hide-show2')
  hideShow.classList.toggle('active-deactive')
  hideShow.style.backgroundColor = 'rgba(255, 255, 255, 0.795)'
})


box2.addEventListener('mouseout', function () {
  hideShow = document.getElementById('hide-show2')
  hideShow.classList.toggle('active-deactive')

})

box3 = document.getElementById('box3')
box3.addEventListener('mouseover', function () {
  hideShow = document.getElementById('hide-show3')
  hideShow.classList.toggle('active-deactive')
  hideShow.style.backgroundColor = 'rgba(255, 255, 255, 0.795)'
})


box3.addEventListener('mouseout', function () {
  hideShow = document.getElementById('hide-show3')
  hideShow.classList.toggle('active-deactive')

})

box4 = document.getElementById('box4')
box4.addEventListener('mouseover', function () {
  hideShow = document.getElementById('hide-show4')
  hideShow.classList.toggle('active-deactive')
  hideShow.style.backgroundColor = 'rgba(255, 255, 255, 0.795)'
})


box4.addEventListener('mouseout', function () {
  hideShow = document.getElementById('hide-show4')
  hideShow.classList.toggle('active-deactive')

})

box5 = document.getElementById('box5')
box5.addEventListener('mouseover', function () {
  hideShow = document.getElementById('hide-show5')
  hideShow.classList.toggle('active-deactive')
  hideShow.style.backgroundColor = 'rgba(255, 255, 255, 0.795)'
})


box5.addEventListener('mouseout', function () {
  hideShow = document.getElementById('hide-show5')
  hideShow.classList.toggle('active-deactive')

})

box6 = document.getElementById('box6')
box6.addEventListener('mouseover', function () {
  hideShow = document.getElementById('hide-show6')
  hideShow.classList.toggle('active-deactive')
  hideShow.style.backgroundColor = 'rgba(255, 255, 255, 0.795)'
})


box6.addEventListener('mouseout', function () {
  hideShow = document.getElementById('hide-show6')
  hideShow.classList.toggle('active-deactive')

})

// hide or show stickers
var wrapper = document.getElementById('wrapper')
product = document.getElementById('product')
product.addEventListener('mouseover', function () {

  wrapper.classList.toggle('wrapper-fade')
})

product.addEventListener('mouseout', function () {
  wrapper.classList.toggle('wrapper-fade')
})


// shows a dropdown menu in mobile devices
var navigate = document.getElementById('navigate')
var menu = document.getElementById('menu')
menu.addEventListener('click', function () {
  navigate.classList.toggle('switch')
})