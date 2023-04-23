let URL;
if (process.env.NODE_ENV === "production") {
  URL = "https://rajdhani-backend-vspm.onrender.com";
} else {
  URL = "http://localhost:8008";
}

module.exports = {
  URL: URL,
};
