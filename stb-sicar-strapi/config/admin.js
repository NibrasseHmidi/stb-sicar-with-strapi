module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4af8ab040288ab187cfdac0e6f8cf1c4'),
  },
});
