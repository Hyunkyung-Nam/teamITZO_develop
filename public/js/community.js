(async function () {
    console.log('hi');
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/community/all',
        });

        const { success, result } = res.data;
        console.log(success, result);
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
        }
    } catch (error) {
        console.log(error);
    }
})();
