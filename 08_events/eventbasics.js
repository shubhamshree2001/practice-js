// project 6 = generating random colours
let intervalId
const generateRandomColour = function (){
    const hex = '0123456789ABCDEF'
    let colour = '#'
    for(let i =0; i<6; i++){
        colour = colour + hex[Math.floor(Math.random() * 16)];
    }
    return colour;
} 

const startChangingColour = function(){
    if(!intervalId){  // if interval id is null then set 
    intervalId = setInterval(() => {
    document.body.style.backgroundColor = generateRandomColour();
    }, 1000, )
}

}
const stopChangingColour = function(){
    clearInterval(intervalId)
    intervalId = null // clearing the interval id so that nothing stores in memory 
}

document.querySelector('#start').addEventListener('click', startChangingColour)

document.querySelector('#stop').addEventListener('click', stopChangingColour)


// project 5 = when we press any key that value should come

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

