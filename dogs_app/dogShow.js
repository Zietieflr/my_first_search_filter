const searchParams = new URLSearchParams (window.location.search)
const searchId = searchParams.get('dogId')

const main = document.querySelector('main')

fetch(`http://localhost:3000/dogs/${searchId}`)
  .then(response => response.json())
  .then(result => subPage(result))

function subPage(result) {
  generatePageTitle(result.name)
  main.append(displayResultInfo(result), listSubCategory(result.bones))
}

function generatePageTitle(title) {
  const $title = document.getElementById('title')
  $title.innerHTML = `
    <a href="http://localhost:3001">${title}</a>
  ` 
  console.log(title)
}

function displayResultInfo(result) {
  const $about = document.createElement('p')
  $about.innerText = result.age
  return $about
}

function listSubCategory(results) {
  const $dl = document.createElement('dl')
  $dl.innerText = 'Their bones:'
  noContent(results, $dl) 
  return $dl
}

function noContent(results, $dl) {
  if (results[0]) {
    results.forEach(result => SubCategoryFormat(result, $dl))
  } else { 
    const $dt = document.createElement('dt')
    $dt.innerText = `THEY DON'T HAVE ANY BONES!?!?!!`
    $dl.append($dt)
  }
}

function SubCategoryFormat(result, $dl) {
  const $dt = document.createElement('dt')
  const $dd = document.createElement('dd')
  
  $dt.innerText = result.name
  $dd.innerText = `Rating: ${result.quality}`
  $dl.append($dt, $dd)
}
