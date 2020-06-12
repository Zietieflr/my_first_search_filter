const searchParams = new URLSearchParams (window.location.search)
const searchId = searchParams.get('dogId')

fetch(`http://localhost:3000/dogs/${searchId}`)
  .then(response => response.json())
  .then(result => subPage(result))

function generatePageTitle(title) {
  const $title = document.getElementById('title')
  $title.innerText = title 
  console.log(title)
}

const displayResultInfo = (result => {
  console.log('displayResultInfo', result)
})

const SubCategoryFormat = (result, $dl => {
  const $dt = document.createElement('dt')
  const $dd = document.createElement('dd')
  
  $dt.innerText = result.name
  $dd.innerText = `Rating: ${result.quality}`

  $dl.append($dt, $dd)
})

const listSubCategory = (results => {
  const $dl = document.createElement('dl')
  $dl.innerText = 'Their bones:'
  results.forEach(result => SubCategoryFormat(result, $dl))
})

function subPage(result) {
  generatePageTitle(result.name)
  displayResultInfo(result)
  listSubCategory(result.bones)
}
