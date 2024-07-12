const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

const dbPath = path.resolve(__dirname, './db/labo.db3');
const db = new sqlite3.Database(dbPath);

app.use(express.static(path.join(__dirname, 'Home')));

// ニュースデータを取得
app.get('/news/items', (req, res) => {
    const order = req.query.order || 'id';
    const display = req.query.display || 'DESC'; 
    const limit = parseInt(req.query.limit) || 100;

    const query = `SELECT * FROM newsdata ORDER BY ${order} ${display} LIMIT ?`;
    db.all(query, [limit], (err, rows) => {
        if (err) {
            res.status(500).send('database get error');
        } else {
            res.json(rows);
        }
    });
});

// 研究制作データを取得
app.get('/gararry/items', (req, res) => {
    const query_g = 'SELECT * FROM study ORDER BY id DESC';
    db.all(query_g, [], (err, rows) => {
        if (err) {
            res.status(500).send('database get error');
        } else {
            res.json(rows);
        }
    });
});

// メンバーデータを取得
app.get('/member/items', (req, res) => {
    const order = req.query.order || 'id';
    const display = req.query.display || 'DESC'; 

    const query_m = `SELECT * FROM member ORDER BY ${order} ASC`;
    db.all(query_m, [], (err, rows) => {
        if (err) {
            res.status(500).send('database get error');
        } else {
            res.json(rows);
        }
    });
});

// 成果を取得
app.get('/event/items', (req, res) => {

    const query_m = `SELECT * FROM work ORDER BY id`;
    db.all(query_m, [], (err, rows) => {
        if (err) {
            res.status(500).send('database get error');
        } else {
            res.json(rows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`サーバーがhttp://localhost:${PORT}で動作中`);
});


