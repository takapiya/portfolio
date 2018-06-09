export default function(date = new Date(), format='YYYY-MM-DD(W) hh:mm:ss'){

  const _date = Object.prototype.toString(date).indexOf("Date")== -1 ? new Date(date) : date;
  const weekday = ["日", "月", "火", "水", "木", "金", "土"];

  format = format.replace(/YYYY/g, _date.getFullYear());
  format = format.replace(/MM/g, ('0' + (_date.getMonth() + 1)).slice(-2));
  format = format.replace(/M/g, (_date.getMonth() + 1));
  format = format.replace(/DD/g, ('0' + _date.getDate()).slice(-2));
  format = format.replace(/D/g,  _date.getDate());
  format = format.replace(/W/g, weekday[_date.getDay()]);
  format = format.replace(/hh/g, ('0' + _date.getHours()).slice(-2));
  format = format.replace(/h/g, _date.getHours());
  format = format.replace(/mm/g, ('0' + _date.getMinutes()).slice(-2));
  format = format.replace(/m/g, _date.getMinutes());
  format = format.replace(/ss/g, ('0' + _date.getSeconds()).slice(-2));

  return format;
}
