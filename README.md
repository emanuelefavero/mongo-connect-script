# MongoDB Connect Script

This Node.js script is used to establish a connection to a MongoDB database. It can be useful to prevent the database from pausing due to inactivity.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the root directory and add the following environment variables:
   - `MONGO_URI`: The URI of the MongoDB database
4. Run `npm start` to start the script
5. The script will connect to the database thus preventing it from pausing due to inactivity

> Tip: You could add this script to a cron job or a scheduled task to run it at regular intervals

## License

- [MIT](LICENSE.md)
