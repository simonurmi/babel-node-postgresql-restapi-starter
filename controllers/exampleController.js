const exampleController = (router, db) => {
  router.get('/api/example', async (req, res) => {
    const { rows } = await db.query('SELECT NOW()');
    res.send(rows[0]);
  });
};

export default exampleController;
