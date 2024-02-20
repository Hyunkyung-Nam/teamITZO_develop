const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.json());
//이거 안쓰면 서버에서 json데이터로 보내주는거 못받아온다.

const pageRouter = require('./routes/');
app.use('/', pageRouter);

const userRouter = require('./routes/user');
app.use('/api/user', userRouter);

const communityRouter = require('./routes/community');
app.use('/api/community', communityRouter);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
