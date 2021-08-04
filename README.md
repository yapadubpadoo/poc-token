# poc-token


## JWT witn expire
This is a normal JWT signed with fixed secret
```bash
node jwt.js
```

## JWT with expire using dynamic secret

The idea
- we have `SHARE_SECRET` both Sender and Reciever side

Sender
- Use a part of data to append the `SHARE_SECRET` to make it dynamic
- `SHARE_SECRET + Data Part`
- sign the token with that secret

Reciever
- Use a part of data to append the `SHARE_SECRET` to make identical with Sender's
- verify token with that secret

```bash
jwt-dynamic-secret.js
```
