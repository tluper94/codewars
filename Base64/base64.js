function base64toBase10(base64) {
  const order =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const base = order.length;
  let num = 0,
    r;
  while (base64.length) {
    r = order.indexOf(base64.charAt(0));
    base64 = base64.substr(1);
    num *= base;
    num += r;
  }

  return num;
}

base64toBase10('ABDGRE');
