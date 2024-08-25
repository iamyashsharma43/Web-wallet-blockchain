# Secret Phrase and Account Management

## Overview

This project provides functionality for generating and managing secret phrases, as well as creating accounts for different blockchain networks (Ethereum, Solana, and Polygon). The application allows users to generate a secret phrase, confirm it, and create accounts with specific network keys.

## Features

- **Generate Secret Phrase:** Generates a random 12-word secret phrase.
- **Confirm Secret Phrase:** Allows users to confirm their generated secret phrase.
- **Create Accounts:** Generates public and private key pairs for Ethereum, Solana, and Polygon networks.
- **Display Accounts:** Shows a list of created accounts with public keys, private keys (toggle visibility), and balance.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Open the HTML File:**
   Open the `index.html` file in a web browser to view and interact with the application.

## Usage

### Generating a Secret Phrase

- Click the "Generate Secret Phrase" button to generate a new 12-word phrase.
- The generated phrase will be displayed in boxes.

### Confirming the Secret Phrase

- After generating a secret phrase, click the "Confirm Secret Phrase" button to confirm it.
- The secret phrase section will be hidden, and the account section will be displayed.

### Creating Accounts

- Select a network (Ethereum, Solana, or Polygon) from the dropdown menu.
- Click the "Create Account" button to generate a new account for the selected network.
- The account will be added to the list with its public key, private key (toggle visibility), and balance.

### Toggling Private Key Visibility

- Click the eye icon next to the private key to toggle its visibility.

## Code Explanation

- **Secret Phrase Generation:**
  - Generates a 12-word secret phrase using a predefined list of words.
  
- **Account Creation:**
  - Uses predefined public and private keys for Solana.
  - Generates random keys for Ethereum and Polygon.
  
- **Display Functions:**
  - `displaySecretPhrase` shows the generated secret phrase in boxes.
  - `displayAccounts` displays a list of created accounts.
  - `togglePrivateKey` toggles the visibility of the private key.

## Dependencies

No external dependencies are used.

## License

This project is licensed under the MIT License.

---

Feel free to modify any sections to better fit your project specifics or additional requirements!
