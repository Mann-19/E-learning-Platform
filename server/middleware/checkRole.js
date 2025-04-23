const checkRole = (allowedRoles = []) => {
    return async(req, res, next) => {
        try {
            const user = req.user;
            console.log(user);

            if(!user || !allowedRoles.includes(user.role)) {
                return res.status(403).json({ error: "Access Denied!"});
            }

            next();
        } catch(error) {
            return res.status(500).json({ error: "Role check failed"});
        }
    } 
}

export default checkRole;