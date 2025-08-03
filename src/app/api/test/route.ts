import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    // Contoh query: Mengambil semua data dari tabel 'users'.
    // Ganti 'users' dengan nama tabel Anda.
    const [rows] = await db.query('SELECT NOW() as currentTime;');
    
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error(error);
    // Pastikan error adalah instance dari Error untuk mengakses properti message
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ message: 'Internal Server Error', error: errorMessage }, { status: 500 });
  }
}
