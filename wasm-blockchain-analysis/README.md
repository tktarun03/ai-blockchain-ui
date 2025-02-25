# WebAssembly AI Blockchain Analysis

This WebAssembly module powers AI-driven blockchain transaction monitoring, smart contract validation, and decentralized security analysis.

## Build Instructions

1. Install Rust and WebAssembly target:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```

2. Build the WebAssembly module:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```

3. Integrate with frontend applications.