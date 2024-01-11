const express = require('express');
const app = express();

require('dotenv').config()

const UserRouter = require('./API/USER/router')
const ProjectGroup = require('./API/ProjectGroup/router')
const ProjectFile = require('./API/ProjectFile/router')
const GroupHead = require('./API/GroupHead/router')
const SubHead = require('./API/SubHead/router')
const ChartOFAcc = require('./API/ChartOFAcc/router')
const Voucher = require('./API/Voucher/router')
const port = process.env.PORT || 2500;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api', UserRouter);
app.use('/api', ProjectFile)
app.use('/api', ProjectGroup)
app.use('/api', GroupHead)
app.use('/api', SubHead)
app.use('/api', ChartOFAcc)
app.use('/api', Voucher)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})