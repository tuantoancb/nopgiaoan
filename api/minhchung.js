const UPSTREAM = 'https://minhchunggiaoan.vercel.app/api/data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const refresh = req.query && String(req.query.refresh || '') === '1';
    const url = UPSTREAM + (refresh ? '?refresh=1' : '');
    const upstream = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'user-agent': 'nopgiaoan-sync/5.1'
      },
      cache: 'no-store'
    });

    const text = await upstream.text();
    res.setHeader('Cache-Control', 'no-store, max-age=0');

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(502).json({
        ok: false,
        error: `Nguồn Minh chứng trả dữ liệu không phải JSON (HTTP ${upstream.status}).`
      });
    }

    if (!upstream.ok) {
      return res.status(upstream.status).json({
        ok: false,
        error: data?.error || `Nguồn Minh chứng lỗi HTTP ${upstream.status}`
      });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(502).json({
      ok: false,
      error: 'Không kết nối được Minh chứng giáo án từ máy chủ Nộp giáo án.',
      detail: String(err && err.message ? err.message : err)
    });
  }
}
