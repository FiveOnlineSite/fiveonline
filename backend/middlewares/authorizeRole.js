const authorizeRole = (requiredRole) => {
  return (req, res, next) => {
    try {
      const userRole = req.user.role;

      if (!userRole || userRole !== requiredRole) {
        return res.status(403).json({ message: "Access denied." });
      }

      next(); // User has the required role, proceed to the route
    } catch (error) {
      res
        .status(500)
        .json({ message: `Role authorization failed: ${error.message}` });
    }
  };
};

module.exports = authorizeRole;
