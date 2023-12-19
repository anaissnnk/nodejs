const checkKey = (req, res, next) => {
    if(req.body.key !== process.env.API_KEY) {
        res.status(403).send({error: 403, msg: "Forbidden"})
    }
    next()
}

export default checkKey;