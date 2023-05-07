

const router = require('express').Router();

const pool = require('../modules/pool')

router.get('/', (req, res) =>{

    pool.query('SELECT * FROM "feedback" ').then((response)=>{
        res.send(response.rows)
    }).catch((error)=>{
        console.log('trying to GET "feedback" is not working---> ',error);
    })
})


router.post('/', (req,res)=>{

    let feeling = req.body.feeling;
    let understanding = req.body.understanding;
    let support = req.body.support;
    let comments = req.body.comments;
    let flagged = req.body.flagged
       
    let sqlText= `
    INSERT INTO "feedback"
    ("feeling","understanding","support","comments","flagged")
    VALUES
    ($1,$2,$3,$4,$5);
    `

    let sqlValues= [feeling,understanding,support,comments,flagged]

    pool.query(sqlText, sqlValues)
    .then((dbres)=>{
        res.sendStatus(201);
    }).catch((dberr)=>{
        console.log('Post /feedback isnt working', dberr);
        res.sendStatus(500)
    })
});

module.exports = router;