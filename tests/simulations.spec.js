import http from 'k6/http';
import { check, group } from 'k6';

export let options = {
  vus: 1,
  duration: '30s',
};

// ramping up users
// export let options = {
//   stages: [
//     { duration: '30s', target: 20 },
//     { duration: '1m30s', target: 10 },
//     { duration: '20s', target: 0 },
//   ],
// };

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
