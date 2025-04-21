import supabase from "../config/database.js";

async function requireAuth(req, res, next) {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }

    const token = authorization.split(" ")[1];

    try{
        const { data, error } = await supabase.auth.getUser(token);

        if(error || !data) return res.status(401).json({ error: "Unauthorized" });

        req.user = data;
        next();
    } catch(error) {
        console.log(error);
        res.status(401).json({error: "Request is not authorized"});   
    }
}

export default requireAuth;