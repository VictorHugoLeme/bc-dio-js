var wrapper = document.querySelector('.wrapper');
var imgDiv = document.createElement('div');
var avatarTag = document.createElement('img');
var button = document.getElementById('btn');


imgDiv.setAttribute('class', 'img-div');


var red = document.getElementById('red');

const url = 'https://api.github.com/users/VictorHugoLeme'

const getUser = async () => {
    try {
        const data = await fetch(url)
            .then(res => res.json());

        return data.avatar_url;
    } catch (error) {
        console.log(error.message);
    }
}

const loadImg = async () => {
    return await getUser().then(function (result) {
        avatarTag.src = result;
        button.remove();
        imgDiv.appendChild(avatarTag);
        wrapper.appendChild(imgDiv);
    });
}

button.addEventListener('click', loadImg);