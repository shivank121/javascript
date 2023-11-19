const btn = document.querySelectorAll('.button')
// lett body = document.getElementsByTagName('body')
// body.style.backgroundColor = "red"
// 

btn.forEach((button)=>{
      button.addEventListener('click', (event) =>{
            // console.log(event.target.id)
            if (event.target.id === 'gray') {
                  document.body.style.backgroundColor = "gray"
            } 
            if (event.target.id === 'white') {
                  document.body.style.backgroundColor = event.target.id 
            } 
            if (event.target.id === 'blue') {
                  document.body.style.backgroundColor = event.target.id
            } 
            if (event.target.id === 'yellow') {
                  document.body.style.backgroundColor = "yellow"
            } 

            if(event.target.id === 'reset'){
                  document.body.style.backgroundColor = 'white'
            }
      })
})