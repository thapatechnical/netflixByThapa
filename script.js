const users = ['vinod', 'thapa', 'bahadur'];
const image=["url('./image//user1.png')","url('./image//user2.png')","url('./image//user3.png')"]


const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
    })
};

addIcon.addEventListener('click', () => {
    let userName = prompt('please enter your name');

    if(userName != null && !users.includes(userName)){
        const button=document.createElement("button");
        var span = document.createElement('span');
        span.innerHTML = `${userName}`;
        button.className = 'btn';
        button.appendChild(span);
        const random = Math.floor(Math.random() * image.length);
        button.style.backgroundImage=image[random];

        addIcon.parentNode.insertBefore(button,addIcon);
    }else{
        alert('username already exist');
    }
})


userIcons();
