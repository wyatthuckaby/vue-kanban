// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 4050,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'kanbanpublic',
	DBPASSWORD: 'PQwQOwWQ3VUrLeh9y7bQDZ5KhdStoT4VBTmrV8MuBnAEWCZjmF',
	DBHOST: 'ds151963.mlab.com:51963',
	DBNAME: 'continue',
	SERVERNAME: 'dev-server'
}

// MAPS env TO ACTUAL ENVIRONMENT
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 


// MongoDb Connection String Builder
env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env