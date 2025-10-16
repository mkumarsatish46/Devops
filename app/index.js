import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Node Todo App running via CI/CD and Kubernetes!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
