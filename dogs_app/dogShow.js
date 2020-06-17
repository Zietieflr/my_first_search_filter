const searchParams = new URLSearchParams (window.location.search)
const searchId = searchParams.get('dogId')

const main = document.querySelector('main')

fetch(`http://localhost:3000/dogs/${searchId}`)
  .then(response => response.json())
  .then(result => subPage(result))

function subPage(result) {
  generatePageTitle(result.name)
  main.append(displayResultInfo(result), listSubCategory(result.bones), updateInfo(result))
}

function generatePageTitle(title) {
  const $title = document.getElementById('title')
  $title.innerHTML = `<a href="http://localhost:3001">${title}</a>` 
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

function updateInfo(result) {
  const $p = document.createElement('p')
  $p.innerHTML = `
    <form method="POST" action="http://localhost:3000/dogs/${result.id}" id="update">
    <label for="name">Filter to the dog to update:</label> <br>
    <input type="hidden" name="_method" value="PATCH" />
    <input name="name" placeholder="What's their name?" /><br>
    <input name="age" placeholder="What's their age?" />
    <input type="submit" value="Add dog!" />
    </form>
  `

  return $p
}
