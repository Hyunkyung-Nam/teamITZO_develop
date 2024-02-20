(async function () {
    const title = document.querySelector('.title');
    const content = document.querySelector('.content');
    const contentImg = document.querySelector('.content-img');

    const id = document.location.href.split('y/')[1];
    try {
        const res = await axios({
            method: 'GET',
            url: `/api/community/${id}`,
        });

        const { success, result } = res.data;
        console.log(result);
        if (success) {
            title.textContent = result.title;
            content.textContent = result.content;
            contentImg.src = `../../public/uploads/${result.imgPath}`;
            //js파일 기준이 아니라 ejs파일 기준 경로 적어야함
        } else {
            alert(result);
        }
    } catch (error) {
        alert('페이지 열기에 실패하였습니다.');
    }
})();
