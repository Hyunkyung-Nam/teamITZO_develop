let isCheckedId = false;

//로그인
async function userLogin() {
    const form = document.forms['login-form'];
    const data = {
        userid: form.userid.value,
        userpw: form.userpw.value,
    };
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/user/login',
            data,
        });

        const { success, message, token } = res.data;
        if (success) {
            alert(message);
            localStorage.setItem('token', token);
            document.location.href = '/';
        } else {
            alert(message);
        }
    } catch (error) {
        alert('오류가 발생하였습니다. 다시시도하여주십시오');
    }
}
//아이디 중복확인
async function userCheckId() {
    const form = document.forms['signup-form'];

    if (form.userid.value === '') {
        alert('아이디를 입력하세요');
        return;
    }
    const data = {
        userid: form.userid.value,
    };
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/user/checkid',
            data,
        });
        const { success, message } = res.data;
        if (success) {
            isCheckedId = true;
            alert(message);
        } else {
            isCheckedId = false;
            alert(message);
        }
    } catch (error) {
        alert('오류가 발생하였습니다. 다시시도하여주십시오');
    }
}
//회원가입
async function userSignup() {
    if (!isCheckedId) {
        alert('아이디 중복체크를 해주세요');
        return;
    }
    const form = document.forms['signup-form'];
    const data = {
        userid: form.userid.value,
        userpw: form.userpw.value,
        username: form.username.value,
        address: form.address.value,
        age: form.age.value,
    };
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/user/signup',
            data,
        });
        const { success, message } = res.data;
        if (success) {
            alert(message);
            document.location.href = '/';
        } else {
            alert(message);
        }
    } catch (error) {
        alert('오류가 발생하였습니다. 다시시도하여주십시오');
    }
}
