# Railway Setup

## f1-dash-api service
- Docker image: `ghcr.io/slowlydev/f1-dash-api:latest`
- Environment Variables:
  - `ADDRESS` = `0.0.0.0:8080`
- Railway Settings → Networking → set port to `8080`

## f1-dash-realtime service  
- Docker image: `ghcr.io/slowlydev/f1-dash-realtime:latest`
- Environment Variables:
  - `ADDRESS` = `0.0.0.0:8080`
- Railway Settings → Networking → set port to `8080`
