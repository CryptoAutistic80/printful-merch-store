import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3333/api';

export async function POST(request: Request) {
  const payload = await request.json();
  const response = await fetch(`${API_BASE_URL}/payments/checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    return NextResponse.json({ message }, { status: response.status });
  }

  return NextResponse.json(await response.json());
}
