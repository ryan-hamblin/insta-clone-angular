module.exports = {
	db: process.env.db || 'mongodb://localhost/27017',
	clientSecret: process.env.clientSecret || '412cdf8974cc4e72be969221fe2f3190',
	tokenSecret: process.env.tokenSecret || 'this will be our secret'
};