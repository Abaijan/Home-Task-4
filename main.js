


let countBlocks = document.querySelectorAll(".inner");

for(let i = 0; i < countBlocks.length; i++) {
    countBlocks[i].onclick = function() {
        let plusBtn = this.querySelector(".button1");
        let minusBtn = this.querySelector('.button2');
        let textField = this.querySelector('input');
        let textFieldVal = +textField.value;

        plusBtn.onclick = function() {
            textField.value = textFieldVal + 1;
        }
        minusBtn.onclick = function() {
            textField.value = textFieldVal - 1;
        }
    }
}  

const wrapper = document.querySelector('.wrapper');
wrapper.style.cssText  = `
padding: 0;
margin: 0;
box-sizing: border-box;
position:relative;
perspective: 1000px;
`;
const inner = document.querySelector('.inner');
inner.style.cssText = `
padding-top: 30px;
width: 200px;
height: 200px;
border-radius: 10px;
background-color: rgb(33, 95, 188);
box-shadow:  4px 3px 2px(rgb(158, 123, 58) );
position:absolute;
position: relative;
left:220px;
top:20px;
`;
const input = document.querySelector('.input');
input.style.cssText = `
position:absolute;
width: 120px;
height: 50px;
left:40px;
top:90px;
text-align: center;
font-size: 30px;
`;
const h1 = document.querySelector('h1');
h1.style.cssText = `
position:absolute;
left: 40px;
top:10px;
font-family: 'Roboto';
font-weight: 400;
` ;
const button1 = document.querySelector('.button1');
button1.style.cssText = `
background-color: green;
left:18px;
top:160px ;
box-shadow: 5px 3px 2px rgb(57, 94, 57) ;
position:absolute;
width: 80px;
height: 50px;
border-radius: 10px;
font-size:40px;
padding: 0  auto;
border-color: rgb(166, 231, 231);
color:  rgb(166, 231, 231);
text-align: center;
`;
const button2 = document.querySelector('.button2');
button2.style.cssText = `
position:absolute;
width: 80px;
height: 50px;
border-radius: 10px;
font-size:40px;
padding: 0  auto;
border-color: rgb(166, 231, 231);
color:  rgb(166, 231, 231);
text-align: center;
background-color: red;
left: 104px;
top: 160px;
box-shadow: 5px 3px 2px rgb(109, 54, 54);
`;
 




