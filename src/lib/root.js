const root = () =>
  process.env.NODE_ENV === 'production'
    ? 'https://radiant-taiga-58264.herokuapp.com'
    : 'http://localhost:8000';

export default root;
