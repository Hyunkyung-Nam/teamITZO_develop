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
                             <img src="../../public/uploads/${result[i].imgPath}"/>
                         </dt>
                         <dd>${result[i].title}</dd>
                     </dl>
                 </li>
               `;
                ul.insertAdjacentHTML('beforeend', html);
            }
        }
    } catch (error) {
        console.log(error);
    }
})();
