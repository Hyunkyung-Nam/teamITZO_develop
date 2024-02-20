window.onload = function () {
    //nav에 해당페이지 표시되게하기
    const location = document.location.href.split('/')[3];
    console.log('location11', location);
    resetNav();
    if (location == '') {
        document.querySelectorAll('a')[1].classList.add('seledted');
    } else if (location === 'theme') {
        document.querySelectorAll('a')[2].classList.add('seledted');
    } else if (location === 'map') {
        document.querySelectorAll('a')[3].classList.add('seledted');
    } else if (location === 'random') {
        document.querySelectorAll('a')[4].classList.add('seledted');
    } else if (location === 'community') {
        document.querySelectorAll('a')[5].classList.add('seledted');
    }
    const token = localStorage.getItem('token');
    if (token) {
        document.querySelector('button').classList.add('login');
        document.querySelector('button').textContent = '로그아웃';
        document.querySelectorAll('a')[6].classList.add('hidden');
    } else {
        document.querySelector('button').classList.add('login');
        document.querySelector('button').textContent = '로그인';
        document.querySelectorAll('a')[6].classList.remove('hidden');
    }
};

function resetNav() {
    for (let i = 1; i < 6; i++) {
        document.querySelectorAll('a')[i].classList.remove('seledted');
    }
}

function loginout() {
    if (document.querySelector('button').textContent === '로그인') {
        document.location.href = '/user/login';
    } else {
        localStorage.clear();
        document.location.href = '/';
    }
}
