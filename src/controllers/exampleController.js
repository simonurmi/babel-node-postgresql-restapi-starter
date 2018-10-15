const exampleController = (router, db) => {
  router.get('/api/example', async (req, res) => {
    try {
      const { rows } = await db.query('SELECT NOW()');
      res.send(rows[0]);
    } catch (error) {
      throw error;
    }
  });
};

export default exampleController;
