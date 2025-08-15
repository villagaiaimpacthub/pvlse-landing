import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path: logoPath } = req.query;
  
  if (!logoPath || Array.isArray(logoPath) === false) {
    return res.status(400).json({ error: 'Invalid path' });
  }
  
  const filePath = path.join(process.cwd(), 'logos', ...logoPath);
  
  // Security check - ensure the path is within the logos directory
  const normalizedPath = path.normalize(filePath);
  const logosDir = path.join(process.cwd(), 'logos');
  
  if (!normalizedPath.startsWith(logosDir)) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  try {
    if (!fs.existsSync(normalizedPath)) {
      return res.status(404).json({ error: 'File not found' });
    }
    
    const stat = fs.statSync(normalizedPath);
    if (!stat.isFile()) {
      return res.status(404).json({ error: 'Not a file' });
    }
    
    const fileBuffer = fs.readFileSync(normalizedPath);
    const ext = path.extname(normalizedPath).toLowerCase();
    
    // Set appropriate content type
    let contentType = 'application/octet-stream';
    switch (ext) {
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        contentType = 'image/jpeg';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
      case '.webp':
        contentType = 'image/webp';
        break;
    }
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    res.send(fileBuffer);
  } catch (error) {
    console.error('Error serving logo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}