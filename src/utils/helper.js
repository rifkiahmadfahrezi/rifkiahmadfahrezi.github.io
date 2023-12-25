export function getRandomImg(keyword){
const randomNumber = Math.round(Math.random() * 20 )
  return `https://source.unsplash.com/random/1000x5${randomNumber + 10}/?${keyword}`
}