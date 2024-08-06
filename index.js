import 'dotenv/config' // load .env file
import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

async function connectToMongo() {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(MONGO_URI)

    // List all collections in the database
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log('Successfully connected to MongoDB')
    console.log('Database contains', collections.length, 'collections:')
    console.log(collections.map((c) => c.name))

    // * Perform additional read/write operations here
    // Example: Get all posts from the "posts" collection
    // const posts = await mongoose.connection.db
    //   .collection('posts')
    //   .find()
    //   .toArray()
    // console.log(
    //   'Posts:',
    //   posts.map((p) => p.content)
    // )

    // Close the connection
    await mongoose.connection.close()
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

connectToMongo()
