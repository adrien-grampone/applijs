const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin382@improveyourself-db.8dtyn.mongodb.net/improveYourself-db?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();

        await getThemes(client);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createTheme(client, theme){
    const result = await client.db("improveYourself-db").collection("theme").insertOne(theme);
    
    console.log(`Nouveau theme ajouté avec l'id: ${result.insertedId}`);
};
async function createManyThemes(client, themes){
    const result = await client.db("improveYourself-db").collection("theme").insertMany(themes);
    
    console.log(`${result.insertedCount} nouveaux themes ajoutés avec les id: `);
    console.log(result.insertedIds);
};

async function getThemes(client){
    const cursor = await client.db("improveYourself-db").collection("theme").find();

    const results = await cursor.toArray();
    
    results.forEach((result) => {
        console.log(result.name);
    })

    return results;
};