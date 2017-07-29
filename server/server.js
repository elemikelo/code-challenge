import Express from 'express';
import GraphHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import Schema from './schema';
import config from './config'

const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.end();
  }
  next();
});
app.use('/graphql', GraphHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true,
}));

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`); // eslint-disable-line no-console
});
