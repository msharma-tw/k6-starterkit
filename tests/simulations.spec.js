import http from 'k6/http';
import { check, group } from 'k6';

export default function () {

  group('generate login token', function () {

    var url = 'https://test-api.k6.io/auth/token/login/';
    var payload = JSON.stringify({
      username: `${__ENV.USERNAME}`,
      password: `${__ENV.PASSWORD}`,
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
  });

}
