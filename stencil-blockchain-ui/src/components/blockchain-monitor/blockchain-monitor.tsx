import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'blockchain-monitor',
  styleUrl: 'blockchain-monitor.css',
  shadow: true
})
export class BlockchainMonitor {
  @State() transactionStatus: string = "Fetching blockchain data...";

  analyzeBlockchain() {
    const transactions = [
      "✅ Transaction Confirmed - Block added to chain",
      "🔍 Smart Contract Executed - No anomalies detected",
      "⚠️ Suspicious Activity Detected - Verifying nodes",
      "🚀 High Network Activity - Scaling required",
      "🔐 Secure Ledger - No threats detected"
    ];
    this.transactionStatus = transactions[Math.floor(Math.random() * transactions.length)];
  }

  render() {
    return (
      <div class="blockchain-box">
        <h2>AI Blockchain Monitor</h2>
        <button onClick={() => this.analyzeBlockchain()}>Check Blockchain Status</button>
        <p>{this.transactionStatus}</p>
      </div>
    );
  }
}
