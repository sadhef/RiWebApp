// server/middleware/errorHandler.js

export const errorHandler = (err, req, res, next) => {
    console.error('Error:', {
      message: err.message,
      stack: err.stack,
      body: req.body,
      path: req.path,
      method: req.method
    });
  
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  };