import {NextResponse} from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    // Mengambil created_at sebagai tanggal bergabung, sesuai struktur tabel.
    const [rows] = await db.query('SELECT id, name, email, created_at FROM users_mst ORDER BY created_at DESC;');
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
  }
}
