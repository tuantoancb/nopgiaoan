const SHEET_ID = '1ZSi9YK2hqCYSCZZkLGt4kVcMYtxxCIUjTwnplA2RL4A';
const SHEET_NAME = 'Câu trả lời biểu mẫu 1';

function norm(v){
  return String(v ?? '').trim().replace(/\s+/g,' ');
}
function normName(v){
  return norm(v).toLocaleLowerCase('vi-VN');
}
function rawVal(c){
  return c && c.v != null ? c.v : '';
}
function displayVal(c){
  if(!c) return '';
  return c.f != null && c.f !== '' ? c.f : rawVal(c);
}

module.exports = async function handler(req, res){
  try{
    const url =
      `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?` +
      `tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}&headers=1&t=${Date.now()}`;

    const r = await fetch(url, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/plain,application/json;q=0.9,*/*;q=0.8'
      }
    });

    if(!r.ok){
      return res.status(502).json({ok:false,error:`Google Sheet HTTP ${r.status}`});
    }

    const text = await r.text();
    const m = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\);?\s*$/);
    if(!m){
      return res.status(502).json({ok:false,error:'Không đọc được phản hồi GViz'});
    }

    const payload = JSON.parse(m[1]);
    if(!payload || payload.status === 'error' || !payload.table){
      return res.status(502).json({ok:false,error:'GViz trả về lỗi'});
    }

    const cols = (payload.table.cols || []).map(c => norm(c.label));
    const findCol = needles =>
      cols.findIndex(x => needles.some(n => normName(x).includes(normName(n))));

    const iTime = findCol(['Dấu thời gian']);
    const iName = findCol(['Họ và tên']);
    const iSubject = findCol(['Môn/HĐGD']);
    const iLesson = findCol(['Tên bài học']);
    const iGrade = findCol(['Lớp']);
    const iPeriods = findCol(['Số tiết']);
    const iRange = findCol(['Từ tiết đến tiết']);
    const iFile = findCol(['Tải file giáo án']);
    const iApprover = findCol(['Tên người duyệt']);
    const iApproval = findCol(['Duyệt giáo án']);
    const iNote = findCol(['Ghi chú']);

    if(iName < 0 || iTime < 0){
      return res.status(502).json({
        ok:false,
        error:'Không tìm thấy cột bắt buộc',
        columns:cols
      });
    }

    const rows = (payload.table.rows || []).map(row => {
      const c = row.c || [];
      return {
        rawTime: rawVal(c[iTime]),
        time: displayVal(c[iTime]),
        name: displayVal(c[iName]),
        subject: iSubject >= 0 ? displayVal(c[iSubject]) : '',
        lesson: iLesson >= 0 ? displayVal(c[iLesson]) : '',
        grade: iGrade >= 0 ? displayVal(c[iGrade]) : '',
        periods: iPeriods >= 0 ? displayVal(c[iPeriods]) : '',
        range: iRange >= 0 ? displayVal(c[iRange]) : '',
        file: iFile >= 0 ? displayVal(c[iFile]) : '',
        approver: iApprover >= 0 ? displayVal(c[iApprover]) : '',
        approval: iApproval >= 0 ? displayVal(c[iApproval]) : '',
        note: iNote >= 0 ? displayVal(c[iNote]) : ''
      };
    }).filter(x => norm(x.name));

    res.setHeader('Cache-Control','no-store, max-age=0, must-revalidate');
    return res.status(200).json({
      ok:true,
      source:'google-sheet',
      total:rows.length,
      updatedAt:new Date().toISOString(),
      rows
    });
  }catch(err){
    return res.status(500).json({
      ok:false,
      error: err && err.message ? err.message : 'Unknown error'
    });
  }
};
