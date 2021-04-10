# Performance Testing with K6

## Getting started:

- `docker-compose up -d influxdb grafana`
- Load http://localhost:3000, and import the `grafana_dashboard.json` config to a new dashboard.
- `docker-compose run k6 run tests/details.spec.js`

## To use cloud run

- Create an account with LoadImpact here to use the cloud run: [https://app.loadimpact.com/account/login](https://app.loadimpact.com/account/login)
- Replace `LI_TOKEN` in the `Dockerfile` with your account token.
- `docker-compose run k6 cloud tests/details.spec.js` to run the test in the cloud

Look through the k6 docs here: https://k6.io/docs/