# 🚀 Node Todo App CI/CD + Kubernetes

## 🧠 Prerequisites
- Docker Hub or GHCR account
- Kubernetes cluster with `kubectl` access
- Secrets added to GitHub repository:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`
  - `KUBECONFIG` (base64 encoded)

## ⚙️ Steps to Run Locally
1. Clone this repo:
   ```bash
   git clone <your-repo-url>
   cd node_todo_cicd_project
   ```

2. Build and run Docker container locally:
   ```bash
   docker build -t node-todo .
   docker run -p 3000:3000 node-todo
   ```

3. Test in browser: [http://localhost:3000](http://localhost:3000)

4. Deploy via CI/CD:
   - Push changes to `main` branch
   - GitHub Actions will automatically:
     - Build Docker image
     - Push to registry
     - Deploy to Kubernetes
