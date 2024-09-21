const validateAdmin = (req, res, next) => {
    console.log("validating admin");
    const headers = req.headers;
    if (headers.token === "abc") {
        console.log("admin authorized");
        next();
    } else {
        res.status(401).send("unauthorized admin")
    }
};

const validateUser = (req, res, next) => {
    console.log("validating user");
    const headers = req.headers;
    if (headers.token === "pqr") {
        console.log("user authorized");
        next();
    } else {
        console.log("authorized user");
        res.status(401).send("unauthorized user")
    }
};

module.exports = {
    validateAdmin,
    validateUser
};