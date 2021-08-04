const jwt = require('jsonwebtoken');

const sleepSec = async (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

const main = async () => {
    const next10Seconds = Math.floor(Date.now() / 1000) + (10)
    
    const secret = 'a-secret-between-you-and-me';
    const data = { hello: "world" }
    
    const token = jwt.sign({
        exp: next10Seconds,
        data
    }, secret, { algorithm: 'HS256' });

    console.log(token)
    for(let i = 1; i<100; i++) {
        const decoded = jwt.verify(token, secret); // It will expire after 10 seconds and error
        const now = new Date()
        const tokenExpire = new Date(decoded.exp * 1000)
        console.log(now, tokenExpire, now >= tokenExpire, decoded)
        await sleepSec(1)
    }
}

main()
