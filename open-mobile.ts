import open from 'open';

const url = 'http://localhost:3000';

// Buka Chrome ukuran mobile 390x844 (iPhone 12 prop)
open(url, { app: { name: 'chrome', arguments: ['--window-size=390,844'] } });