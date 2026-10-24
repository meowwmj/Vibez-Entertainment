import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory + disk storage for real inquiry persistence
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface Inquiry {
  id: string;
  referenceCode: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  division?: string;
  preferredDate?: string;
  experienceLevel?: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'reviewed' | 'contacted';
}

function getStoredInquiries(): Inquiry[] {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const data = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading inquiries:', err);
  }
  return [];
}

function saveInquiries(inquiries: Inquiry[]) {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving inquiries:', err);
  }
}

// Initial seed if empty
if (!fs.existsSync(INQUIRIES_FILE)) {
  saveInquiries([]);
}

// POST /api/inquiries
app.post('/api/inquiries', (req: Request, res: Response) => {
  const { name, email, phone, service, division, preferredDate, experienceLevel, message } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Please provide your full name.' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
    return res.status(400).json({ error: 'Please provide a valid contact phone number.' });
  }

  if (!service || typeof service !== 'string') {
    return res.status(400).json({ error: 'Please select a service or training program.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 3) {
    return res.status(400).json({ error: 'Please share a brief message or describe your requirements.' });
  }

  const hexSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const referenceCode = `VBZ-${new Date().getFullYear()}-${hexSuffix}`;

  const newInquiry: Inquiry = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    referenceCode,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    service: service.trim(),
    division: division || 'Vibez Entertainment',
    preferredDate: preferredDate || '',
    experienceLevel: experienceLevel || 'Not Specified',
    message: message.trim(),
    submittedAt: new Date().toISOString(),
    status: 'new'
  };

  const current = getStoredInquiries();
  current.unshift(newInquiry);
  saveInquiries(current);

  return res.status(201).json({
    success: true,
    message: 'Your inquiry has been received by our training and production team. We will review it promptly and get back to you.',
    referenceCode,
    inquiry: newInquiry
  });
});

// GET /api/inquiries
app.get('/api/inquiries', (_req: Request, res: Response) => {
  const list = getStoredInquiries();
  return res.json({
    total: list.length,
    inquiries: list
  });
});

// GET /api/health
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Vibez Entertainment server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
