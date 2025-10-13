  const express = require('express');
  const app = express();
  const bodyparser = require('body-parser');
  const router = require('./route/auth');
  const taskRouter=require('./route/taskRoute')
  const cors = require('cors');

  app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true
  }));

  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(bodyparser.json());

  app.use('/', router);
  app.use('/task',taskRouter)

  app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
  });
