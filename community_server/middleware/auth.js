import jwt from 'jsonwebtoken';

// This middleware protects routes.
// It verifies the Supabase JWT sent by the React client.
const protect = (req, res, next) => {
  let token;

  // Check for the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header (e.g., "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];

      // CRITICAL: Verify the token using the secret
      // This is why we need your SUPABASE_JWT_SECRET
      const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET);

      // Supabase stores the user ID in the 'sub' (subject) field
      // We attach the user ID to the request object
      req.user = {
        id: decoded.sub, // This is the Supabase User UUID
      };

      // Move to the next function (the controller)
      next();
    } catch (error) {
      console.error('Token verification failed:', error.message);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export { protect };
