
let friutslist = ["Bananas,Orange,Pomegrante"]
console.log(friutslist);


function add(){
  friutslist.push('Apples')
  console.log(friutslist);
}
add();

function remove(){
    friutslist.pop()
    console.log(friutslist);
}
remove();

function lastC(str){
return str[str.length -1]
}
console.log(lastC('Pomegrante'));

function reverse(str){
    return str.split('').reverse().join('')
    }
    console.log(reverse('banana'));
    console.log(reverse(reverse('banana')));