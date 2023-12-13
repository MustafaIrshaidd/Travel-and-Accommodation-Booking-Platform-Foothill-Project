export const HTTP_STATUS_MESSAGES: Record<number, string> = {
  // 2xx Success
  200: "Request successful.",
  201: "Resource created successfully.",
  204: "Request successful, but no content returned.",

  // 3xx Redirection
  300: "Multiple choices available, please follow a specific link.",
  301: "Resource has been moved permanently. Redirecting...",
  304: "Resource not modified, using cached version.",

  // 4xx Client Errors
  400: "Bad request. Please check your input and try again.",
  401: "Unauthorized. Please log in to access this resource.",
  403: "Access forbidden. You don't have permission to access this resource.",
  404: "Resource not found. The requested page does not exist.",
  408: "Request timed out. Please try again later.",
  429: "Too many requests. Please try again later.",
  422: "Unprocessable entity. Please check your input for errors.",

  // 5xx Server Errors
  500: "Internal server error. Something went wrong on our end. Please try again later.",
  502: "Bad gateway. There's a problem with the server. Please try again later.",
  503: "Service unavailable. The server is temporarily down. Please try again later.",
  504: "Gateway timeout. The server is taking too long to respond. Please try again later.",
};
