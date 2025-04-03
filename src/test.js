const axios = require('axios');

const server1Url = 'https://back1-jlgc.onrender.com/api/getInfo';
const totalRequests = 110; // Hacer 110 solicitudes para superar el límite

async function testRateLimit() {
  for (let i = 1; i <= totalRequests; i++) {
    try {
      console.log(`Request ${i}: Sending request to server1...`);
      const response = await axios.get(server1Url);
      console.log(`Request ${i}: Success - Status: ${response.status}, URL: ${response.request.res.responseUrl}`);
    } catch (error) {
      if (error.response) {
        console.log(`Request ${i}: Failed - Status: ${error.response.status}, URL: ${error.response.request.res.responseUrl}`);
      } else {
        console.log(`Request ${i}: Failed - ${error.message}`);
      }
    }
  }
}

testRateLimit();