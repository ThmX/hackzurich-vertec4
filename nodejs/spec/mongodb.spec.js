const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

describe("Sanity check for MongoDB", () => {
    it("connects, write and read", (done) => {

        const url = 'mongodb://localhost:32768';
        const dbName = 'test';

        MongoClient.connect(url, (err, client) => {
            const db = client.db(dbName);
            const col = db.collection('tasks');

            col.insertOne({
                id: 0,
                name: 'abc'
            }, (err, r) => {
                expect(err).toBe(null);
                expect(r.insertedCount).toBe(1);

                col.findOne({
                    id: 0
                }, (err, task0) => {
                    console.log(task0);
                    expect(task0.id).toBe(0);

                    col.deleteOne({id: 0}, (err, r) => {
                        client.close();
                        done();
                    });
                });
            });
        });

    });
});
