module.exports = function (nodecg) {
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('bundles/nodecg-lastfm-bundle/db/last_fm.db');

    nodecg.db = db;

    class Config {
        
        constructor () {
            this.checkConfigTable()
        }
    
        getApiKey () {
            const sql = `SELECT api_key FROM config LIMIT 1`
            var res = '';
            nodecg.db.get(sql, (err, row) => {
                if (!err) {
                    res = row
                } else {
                    nodecg.log.error(err)
                }
            })
            return res
        }

        getUsername() {
            const sql = `SELECT username FROM config LIMIT 1`
            var res = '';
            nodecg.db.get(sql, (err, row) => {
                if (!err) {
                    res = row
                } else {
                    nodecg.log.error(err)
                }
            })
            return res
        }

        setApiKey(api_key) {
            const sql = `INSERT OR REPLACE INTO config (api_key) 
                VALUES ('`+api_key+`')`
            return nodecg.db.run(sql)
        }

        setUsername(username) {
            const sql = `INSERT OR REPLACE INTO config (username) 
                VALUES ('`+username+`')`
            return nodecg.db.run(sql)
        }

        checkConfigTable() {
            const sql = `
                CREATE TABLE IF NOT EXISTS config (
                api_key TEXT,
                username TEXT
            )`
            nodecg.db.run(sql)

            const sql2 = 
                `INSERT OR REPLACE INTO config (api_key, username) 
                VALUES ('','')`
            nodecg.db.run(sql2)
        }
    }

    return new Config
}