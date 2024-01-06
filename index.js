let string = "";
let buttons = document.querySelectorAll('button');
 Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
        string = eval(string)
        document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === 'C'){
            string = ""
            document.querySelector('input').value = string;
            }
        else{
            console.log(e.terget);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
 })