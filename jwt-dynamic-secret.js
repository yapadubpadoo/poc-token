const jwt = require('jsonwebtoken');

const main = async () => {
    const next10Seconds = Math.floor(Date.now() / 1000) + (10)
    
    const secret = 'a-secret-between-you-and-me';
    const data = { hello: "world", transactionTime: new Date() }

    // we will use a part of data to make the secret dynamic
    const dynamicSecret = Buffer.from(JSON.stringify(data)).toString('base64').slice(7, 21)
    
    const token = jwt.sign({
        exp: next10Seconds,
        data
    }, `${secret}-${dynamicSecret}`, { algorithm: 'HS256' });
    console.log("Token:", token)
    console.log('Decoded', jwt.verify(token, `${secret}-${dynamicSecret}`)); // this will be OK
    console.log('Decoded', jwt.verify(token, `${secret}`)); // Error
}

main()
