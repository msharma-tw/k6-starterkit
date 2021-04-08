import http from 'k6/http';
import { check } from 'k6';

export default function () {
  var url = 'https://test-api.k6.io/auth/token/login/';
  var payload = JSON.stringify({
    username: 'msharma',
    password: 'Test135@',
  });
  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  const result = check(res, {
    'status is 200': (r) => r.status == 200,
  });
}
