const experss = require('express');
const cors = require('cors');
const app = experss();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(experss.json());
// parctic-sever
// f5rmmesZQvtJrq2t

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://parctic-sever:f5rmmesZQvtJrq2t@cluster0.m5ccm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('pacticDB').collection('pactic');

    app.post('/post', async (req, res) => {
      const x = {
        name: 'mahfuz',
        age: '20',
      };
      console.log(x);
      const result = await database.insertOne(x);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  const x = 'hello worldaaa';
  res.send(x);
});

app.listen(port, () => {
  console.log('server is running ', port);
});
