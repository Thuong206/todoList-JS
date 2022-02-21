const ip = document.querySelector('input[type=text]')
const btn = document.getElementsByTagName('button')[0]
const todo = document.querySelector('.content ul')

todos = ['code first', 'hi']
function show(){
    todo.innerHTML = todos.map( (todo, index)=>{
        return `<li data-index = ${index}>
        ${index + 1}. ${todo}
        <span class='delete' data-index= ${index}>
        &times
        </span>
                </li>`
    }).join('')
}
show()

btn.addEventListener('click', function(){
    if(ip.value != ''){
        todos.push(ip.value)
        ip.value = ''
        ip.focus()
        show()
    }else{
        alert('press anything you want')
    }
    // if(!ip.value == ''){
    //     todos.push(ip.value)
    //     ip.value = ''
    //     ip.focus()
    //     show()
    // }
})
document.onkeydown = (e)=>{
    if(e.key === 'Enter'){
        if(!ip.value == ''){
        todos.push(ip.value)
        ip.value = ''
        ip.focus()
        show()
    }
    }
}

// const btnDelete = document.querySelector('.content ul li span').closest('.delete')
// btnDelete.addEventListener('click', ()=>{
//     const index = btnDelete.dataset.index
//     console.log(index);
// })
document.onclick = e =>{
    const deleteBtn = e.target.closest('.delete')
    if(deleteBtn){
        const index = deleteBtn.dataset.index
        todos.splice(index, 1)
        show()
    }
}
    
const list = document.querySelectorAll('.content ul li')
list.forEach( item=>{
    item.onclick = ()=>{
        item.classList.toggle('line-through')
    }
})