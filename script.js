// Sample secret phrase generation
const generateSecretPhrase = () => {
    const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine"];
    let phrase = [];
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        phrase.push(words[randomIndex]);
    }
    return phrase;
};

// State variables
let confirmedSecretPhrase = null;
let accounts = [];

// DOM Elements
const secretPhraseContainer = document.getElementById("secretPhraseContainer");
const generatePhraseBtn = document.getElementById("generatePhraseBtn");
const confirmPhraseBtn = document.getElementById("confirmPhraseBtn");
const accountSection = document.getElementById("accountSection");
const accountsList = document.getElementById("accountsList");
const createAccountBtn = document.getElementById("createAccountBtn");
const networkSelect = document.getElementById("networkSelect");
const phraseSection = document.getElementById("phraseSection");

let currentSecretPhrase = null;

// Event Listeners
generatePhraseBtn.addEventListener("click", () => {
    currentSecretPhrase = generateSecretPhrase();
    displaySecretPhrase(currentSecretPhrase);
    confirmPhraseBtn.disabled = false;
    confirmPhraseBtn.style.display = "inline"; // Ensure the button is displayed
});

confirmPhraseBtn.addEventListener("click", () => {
    confirmedSecretPhrase = currentSecretPhrase.join(" ");
    alert("Secret Phrase Confirmed!");
    phraseSection.style.display = "none"; // Hide the secret phrase section
    accountSection.style.display = "block"; // Show the account section
    currentSecretPhrase = null; // Clear the current secret phrase
    secretPhraseContainer.innerHTML = ""; // Remove the displayed secret phrase
    checkAndHideContainer(); // Ensure container is hidden if empty
});

// Function to display the secret phrase in boxes with numbering
const displaySecretPhrase = (phrase) => {
    secretPhraseContainer.innerHTML = "";
    phrase.forEach((word, index) => {
        const wordBox = document.createElement("div");
        wordBox.className = "phrase-box";
        wordBox.textContent = word;
        wordBox.setAttribute("data-index", index + 1); // Add the index for numbering
        secretPhraseContainer.appendChild(wordBox);
    });
    checkAndHideContainer(); // Ensure container visibility is correct
};

// Function to check if the container is empty and hide it if so
const checkAndHideContainer = () => {
    if (secretPhraseContainer.children.length === 0) {
        secretPhraseContainer.style.display = "none";
    } else {
        secretPhraseContainer.style.display = "grid";
    }
};

createAccountBtn.addEventListener("click", () => {
    const network = networkSelect.value;
    const newAccount = createAccount(network);
    accounts.push(newAccount);
    displayAccounts();
});

// Generate Public/Private Key pairs (Simplified)
const createAccount = (network) => {
    // Generate random key pairs for demonstration
    const generateRandomKey = () => Math.random().toString(36).substring(2, 66); // 256-bit equivalent (64 chars)

    const publicKey = generateRandomKey();
    const privateKey = generateRandomKey();
    let balance = "0";

    if (network === "solana") {
        balance = "0 SOL";
    } else if (network === "ethereum") {
        balance = "0 ETH";
    } else if (network === "polygon") {
        balance = "0 POL";
    }

    return { network, publicKey, privateKey, balance };
};

// Display Accounts
const displayAccounts = () => {
    accountsList.innerHTML = "";
    accounts.forEach((account, index) => {
        const accountElement = document.createElement("div");
        accountElement.className = "account-item";
        accountElement.innerHTML = `
            <h3>Account ${index + 1} (${account.network})</h3>
            <p><strong>Public Key:</strong> ${account.publicKey}</p>
            <p><strong>Private Key:</strong> <span class="hidden-key" id="privateKey${index}">**********</span> <button onclick="togglePrivateKey(${index})">👁️</button></p>
            <p><strong>Balance:</strong> ${account.balance}</p>
        `;
        accountsList.appendChild(accountElement);
    });
};

// Toggle visibility of private key
const togglePrivateKey = (index) => {
    const privateKeyElement = document.getElementById(`privateKey${index}`);
    if (privateKeyElement.textContent === "**********") {
        privateKeyElement.textContent = accounts[index].privateKey;
    } else {
        privateKeyElement.textContent = "**********";
    }
};
