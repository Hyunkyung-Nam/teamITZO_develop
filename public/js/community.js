(async function () {
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/community/all',
        });

        const { success, result } = res.data;
        const ul = document.querySelector('ul');
        if (success) {
            for (let i = 0; i < result.length; i++) {
                const html = `<li>
                     <dl>
                         <dt class="photo">
                            <a href="/community/${result[i].id}">
                                <img src="../../public/uploads/${result[i].imgPath}"/>
                            </a>
                         </dt>
                         <dd>
                             <a href="/community/${result[i].id}">
                                ${result[i].title}
                            </a></dd>
                     </dl>
                 </li>
               `;
                ul.insertAdjacentHTML('afterend', html);
            }
            console.log('끝');
        } else {
            //로그인 안되어있는경우 글쓰기 및 삭제권한 주지 말기
        }
    } catch (error) {
        console.log(error);
    }
})();
