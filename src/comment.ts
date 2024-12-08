// @ts-nocheck
const kingOfTheHillUrl = "https://frontend-api-v2.pump.fun/coins/king-of-the-hill?includeNsfw=true";
const commentUrl = "https://client-proxy-server.pump.fun/comment";

const proxyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyQWhVTEhCcmYyeUd1QU5EdUFHTHVVVEt1TENXMTd0ODZUOFQ2dkdjdW9rIiwib3JpZ2luIjoiMjQwOTo0MDkwOjNiOjI2MDA6NzVhOTpiZDFmOmE2MTQ6OTkxOCIsImlhdCI6MTczMzYzNDU1NCwiZXhwIjoxNzM2MjI2NTU0fQ.dEg04aDBspoP8MDrM5QJniW6RdbIWpJRykr6LvcyuiQ";
const wafToken = "0daa19fb-ab72-4b90-a4bc-f33106240187:BQoAaR4h9EYCAAAA:kOH2AzWA71CAE8llskp/bMVnL9sgvjlWGvqxcZD1EyDDLYv5jGRqwsPykWBcgB2qYJVS8ANG66d6hla0Q8vPps8aAsZvpHEAaw3uREod/T4q5OS7WwmMlxouiXtKbeA9f6dly6mSbEiZOD7Gpj9+S/d8rMR1CdbfxhLZZiQsoapAOa6/Og67NBQy42ghF31XJNrXTQ248Z1WAR2P7QLMMyOHfIiVOaKESY2eTJloocRnqQVwHfV5DI4fQ787Xms=";

let currentMintAddress = null;

// Fetch King of the Hill data
async function fetchKingOfTheHill() {
  console.log("[INFO] Fetching King of the Hill data...");
  try {
    const response = await fetch(kingOfTheHillUrl);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    const mintAddress = data.mint;
    console.log("[SUCCESS] King of the Hill mint address fetched:", mintAddress);
    return mintAddress;
  } catch (error) {
    console.error("[ERROR] Failed to fetch King of the Hill data:", error.message);
  }
}

// Post comment
async function postComment(mintAddress) {
  const payload = {
    text: "Excited to share that a new token, lgbtc, is coming soon! Check out our updates on X: @lgbtcOnSol. Let's build something amazing together!"
   , mint: mintAddress,
  };

  console.log(`[INFO] Posting comment for mint address: ${mintAddress}`);
  try {
    const response = await fetch(commentUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
        "x-aws-proxy-token": proxyToken,
        "x-aws-waf-token": wafToken,
        "Origin": "https://pump.fun",
        "Referer": "https://pump.fun/",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    console.log("[SUCCESS] Comment posted successfully:", data);
  } catch (error) {
    console.error("[ERROR] Failed to post comment:", error.message);
  }
}

// Main logic
async function main() {
  console.log("[START] Bot initialized...");

  // Fetch King of the Hill mint address every 30 seconds
  setInterval(async () => {
    const mintAddress = await fetchKingOfTheHill();
    if (mintAddress) currentMintAddress = mintAddress;
  }, 30000);

  // Post comment every 5 seconds
  setInterval(async () => {
    if (currentMintAddress) {
      await postComment(currentMintAddress);
    } else {
      console.log("[INFO] Waiting for a valid mint address...");
    }
  }, 30000);
}

main();
