import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Blockchain UI Dashboard</h1>
    <div class="dashboard">
      <blockchain-monitor></blockchain-monitor>
      <wasm-blockchain-analysis></wasm-blockchain-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }