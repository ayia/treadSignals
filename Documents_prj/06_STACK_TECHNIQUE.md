# 🔧 STACK TECHNIQUE DÉTAILLÉ

## Plateforme de Signaux Trading IA

---

## 1. VUE D'ENSEMBLE DU STACK

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           TECH STACK OVERVIEW                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  FRONTEND                    BACKEND                    DATA            │
│  ─────────                   ───────                    ────            │
│  • Next.js 14               • Node.js 20               • PostgreSQL 16 │
│  • React 18                 • Fastify 4                • TimescaleDB   │
│  • TypeScript               • Python 3.11              • Redis 7       │
│  • Tailwind CSS             • FastAPI                  • Kafka         │
│  • TradingView              • GraphQL                  • S3            │
│                                                                         │
│  MOBILE                      ML/AI                      INFRA          │
│  ──────                      ─────                      ─────          │
│  • React Native             • TensorFlow 2             • AWS/Azure    │
│  • Expo                     • PyTorch                  • Kubernetes   │
│  • TypeScript               • Scikit-learn             • Docker       │
│                             • Pandas                   • Terraform    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. FRONTEND STACK

### 2.1 Web Application

#### Core Framework
```json
{
  "name": "trading-signals-web",
  "dependencies": {
    "next": "^14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.0"
  }
}
```

#### Composants et UI
| Package | Usage | Version |
|---------|-------|---------|
| `@radix-ui/react-*` | Composants accessibles | ^1.0.0 |
| `tailwindcss` | Styling utility-first | ^3.4.0 |
| `class-variance-authority` | Variants de composants | ^0.7.0 |
| `lucide-react` | Icônes | ^0.300.0 |
| `framer-motion` | Animations | ^10.0.0 |

#### State Management & Data Fetching
| Package | Usage | Version |
|---------|-------|---------|
| `zustand` | State management global | ^4.5.0 |
| `@tanstack/react-query` | Server state / caching | ^5.0.0 |
| `axios` | HTTP client | ^1.6.0 |
| `socket.io-client` | WebSocket | ^4.7.0 |

#### Charts & Visualisation
| Package | Usage | Version |
|---------|-------|---------|
| `lightweight-charts` | TradingView charts | ^4.1.0 |
| `recharts` | Charts généraux | ^2.10.0 |
| `d3` | Visualisations custom | ^7.8.0 |

#### Forms & Validation
| Package | Usage | Version |
|---------|-------|---------|
| `react-hook-form` | Form handling | ^7.49.0 |
| `zod` | Schema validation | ^3.22.0 |
| `@hookform/resolvers` | Zod integration | ^3.3.0 |

#### Testing
| Package | Usage | Version |
|---------|-------|---------|
| `vitest` | Unit tests | ^1.0.0 |
| `@testing-library/react` | Component tests | ^14.0.0 |
| `playwright` | E2E tests | ^1.40.0 |
| `msw` | API mocking | ^2.0.0 |

### 2.2 Structure du Projet Frontend

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Routes auth (login, register)
│   ├── (dashboard)/       # Routes dashboard protégées
│   │   ├── signals/
│   │   ├── charts/
│   │   ├── calendar/
│   │   └── settings/
│   ├── api/               # API routes (BFF)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                # Composants UI réutilisables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── features/          # Composants métier
│   │   ├── signals/
│   │   ├── charts/
│   │   └── ...
│   └── layouts/           # Layouts
├── hooks/                 # Custom hooks
│   ├── useSignals.ts
│   ├── useMarketData.ts
│   └── useAuth.ts
├── lib/                   # Utilitaires
│   ├── api.ts
│   ├── socket.ts
│   └── utils.ts
├── stores/                # Zustand stores
│   ├── authStore.ts
│   └── signalsStore.ts
├── types/                 # TypeScript types
└── styles/               # Global styles
```

### 2.3 Mobile Application

#### React Native Setup
```json
{
  "name": "trading-signals-mobile",
  "dependencies": {
    "expo": "~50.0.0",
    "react-native": "0.73.0",
    "react": "18.2.0",
    "typescript": "^5.3.0",

    "expo-router": "~3.4.0",
    "@react-navigation/native": "^6.1.0",

    "zustand": "^4.5.0",
    "@tanstack/react-query": "^5.0.0",

    "expo-notifications": "~0.27.0",
    "expo-secure-store": "~12.8.0",

    "react-native-reanimated": "~3.6.0",
    "react-native-gesture-handler": "~2.14.0"
  }
}
```

#### Structure Mobile
```
mobile/
├── app/                   # Expo Router
│   ├── (tabs)/
│   │   ├── index.tsx     # Dashboard
│   │   ├── signals.tsx
│   │   ├── charts.tsx
│   │   └── profile.tsx
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── register.tsx
│   └── _layout.tsx
├── components/
├── hooks/
├── services/
└── stores/
```

---

## 3. BACKEND STACK

### 3.1 Node.js API (Primary)

#### Core Dependencies
```json
{
  "name": "trading-signals-api",
  "dependencies": {
    "fastify": "^4.25.0",
    "@fastify/cors": "^8.5.0",
    "@fastify/helmet": "^11.1.0",
    "@fastify/jwt": "^8.0.0",
    "@fastify/rate-limit": "^9.1.0",
    "@fastify/swagger": "^8.12.0",

    "typescript": "^5.3.0",
    "zod": "^3.22.0",

    "@prisma/client": "^5.7.0",
    "ioredis": "^5.3.0",

    "socket.io": "^4.7.0",
    "kafkajs": "^2.2.0",

    "stripe": "^14.0.0",
    "nodemailer": "^6.9.0",

    "winston": "^3.11.0",
    "pino": "^8.17.0"
  },
  "devDependencies": {
    "vitest": "^1.0.0",
    "supertest": "^6.3.0",
    "@types/node": "^20.10.0",
    "prisma": "^5.7.0"
  }
}
```

#### Structure Backend Node.js
```
api/
├── src/
│   ├── app.ts                 # Fastify app setup
│   ├── server.ts              # Entry point
│   │
│   ├── modules/               # Feature modules
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.schema.ts
│   │   │   └── auth.routes.ts
│   │   ├── signals/
│   │   ├── users/
│   │   ├── payments/
│   │   └── notifications/
│   │
│   ├── common/
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── logging.middleware.ts
│   │   ├── decorators/
│   │   ├── guards/
│   │   └── utils/
│   │
│   ├── config/
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   ├── kafka.ts
│   │   └── env.ts
│   │
│   ├── jobs/                  # Background jobs
│   │   ├── signalCleanup.ts
│   │   └── notifications.ts
│   │
│   └── types/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── docker/
    ├── Dockerfile
    └── docker-compose.yml
```

### 3.2 Python ML Engine

#### Dependencies (requirements.txt)
```
# Web Framework
fastapi==0.109.0
uvicorn[standard]==0.27.0
pydantic==2.5.0

# ML/AI
tensorflow==2.15.0
torch==2.1.0
scikit-learn==1.4.0
xgboost==2.0.0

# Data Processing
pandas==2.2.0
numpy==1.26.0
ta-lib==0.4.28

# Database
sqlalchemy==2.0.25
asyncpg==0.29.0
redis==5.0.0

# Message Queue
confluent-kafka==2.3.0

# Utilities
python-dotenv==1.0.0
httpx==0.26.0
pydantic-settings==2.1.0

# Testing
pytest==7.4.0
pytest-asyncio==0.23.0
```

#### Structure ML Engine
```
ml-engine/
├── app/
│   ├── main.py                # FastAPI entry
│   ├── config.py              # Settings
│   │
│   ├── api/
│   │   ├── routes/
│   │   │   ├── predictions.py
│   │   │   ├── patterns.py
│   │   │   └── health.py
│   │   └── deps.py
│   │
│   ├── models/                # ML Models
│   │   ├── lstm/
│   │   │   ├── model.py
│   │   │   ├── train.py
│   │   │   └── predict.py
│   │   ├── patterns/
│   │   │   ├── detector.py
│   │   │   └── harmonics.py
│   │   └── ensemble/
│   │       └── combiner.py
│   │
│   ├── features/              # Feature Engineering
│   │   ├── technical.py
│   │   ├── sentiment.py
│   │   └── builder.py
│   │
│   ├── data/                  # Data Pipeline
│   │   ├── loaders.py
│   │   ├── preprocessors.py
│   │   └── validators.py
│   │
│   ├── services/
│   │   ├── signal_generator.py
│   │   ├── market_analyzer.py
│   │   └── kafka_consumer.py
│   │
│   └── utils/
│       ├── metrics.py
│       └── helpers.py
│
├── notebooks/                 # Jupyter notebooks
│   ├── exploration.ipynb
│   ├── model_training.ipynb
│   └── backtesting.ipynb
│
├── models/                    # Saved models
│   └── artifacts/
│
├── tests/
└── Dockerfile
```

---

## 4. DATA LAYER

### 4.1 PostgreSQL Configuration

```sql
-- postgresql.conf optimizations
shared_buffers = 4GB
effective_cache_size = 12GB
maintenance_work_mem = 1GB
checkpoint_completion_target = 0.9
wal_buffers = 64MB
default_statistics_target = 100
random_page_cost = 1.1
effective_io_concurrency = 200
work_mem = 52428kB
min_wal_size = 1GB
max_wal_size = 4GB
max_worker_processes = 8
max_parallel_workers_per_gather = 4
max_parallel_workers = 8
max_parallel_maintenance_workers = 4
```

### 4.2 TimescaleDB Setup

```sql
-- Enable TimescaleDB extension
CREATE EXTENSION IF NOT EXISTS timescaledb;

-- Create hypertable for market quotes
CREATE TABLE market_quotes (
    time TIMESTAMPTZ NOT NULL,
    symbol TEXT NOT NULL,
    bid DOUBLE PRECISION,
    ask DOUBLE PRECISION,
    volume DOUBLE PRECISION
);

SELECT create_hypertable('market_quotes', 'time',
    chunk_time_interval => INTERVAL '1 day'
);

-- Create continuous aggregate for OHLCV
CREATE MATERIALIZED VIEW ohlcv_1m
WITH (timescaledb.continuous) AS
SELECT
    time_bucket('1 minute', time) AS bucket,
    symbol,
    first(bid, time) AS open,
    max(bid) AS high,
    min(bid) AS low,
    last(bid, time) AS close,
    sum(volume) AS volume
FROM market_quotes
GROUP BY bucket, symbol;

-- Retention policy
SELECT add_retention_policy('market_quotes', INTERVAL '90 days');

-- Compression
ALTER TABLE market_quotes SET (
    timescaledb.compress,
    timescaledb.compress_segmentby = 'symbol'
);

SELECT add_compression_policy('market_quotes', INTERVAL '7 days');
```

### 4.3 Redis Configuration

```yaml
# redis.conf
maxmemory 2gb
maxmemory-policy allkeys-lru
appendonly yes
appendfsync everysec

# Cluster mode for production
cluster-enabled yes
cluster-config-file nodes.conf
cluster-node-timeout 5000
```

#### Redis Usage Patterns
```typescript
// Cache patterns
const CACHE_TTL = {
  QUOTES: 5,           // 5 seconds
  SIGNALS: 60,         // 1 minute
  USER_SESSION: 3600,  // 1 hour
  RATE_LIMIT: 60,      // 1 minute window
};

// Rate limiting
await redis.set(`rate:${userId}`, count, 'EX', 60);

// Pub/Sub for real-time
await redis.publish('signals:new', JSON.stringify(signal));

// Session store
await redis.hset(`session:${sessionId}`, userData);
```

### 4.4 Kafka Topics

```yaml
topics:
  # Market data
  - name: market.quotes.raw
    partitions: 12
    replication: 3
    retention: 24h

  - name: market.quotes.normalized
    partitions: 12
    replication: 3
    retention: 24h

  # Signals
  - name: signals.generated
    partitions: 6
    replication: 3
    retention: 7d

  - name: signals.closed
    partitions: 6
    replication: 3
    retention: 30d

  # Notifications
  - name: notifications.email
    partitions: 3
    replication: 3

  - name: notifications.push
    partitions: 3
    replication: 3

  # Analytics
  - name: events.user
    partitions: 6
    replication: 3
    retention: 30d
```

---

## 5. INFRASTRUCTURE

### 5.1 Docker Compose (Development)

```yaml
version: '3.8'

services:
  # API
  api:
    build:
      context: ./api
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/trading
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./api:/app
      - /app/node_modules
    depends_on:
      - db
      - redis

  # ML Engine
  ml-engine:
    build:
      context: ./ml-engine
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/trading
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./ml-engine:/app
    depends_on:
      - db
      - redis

  # Frontend
  web:
    build:
      context: ./web
      dockerfile: Dockerfile.dev
    ports:
      - "3001:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:3000
    volumes:
      - ./web:/app
      - /app/node_modules

  # PostgreSQL
  db:
    image: timescale/timescaledb:latest-pg16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=trading
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Redis
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  # Kafka
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    depends_on:
      - zookeeper

volumes:
  postgres_data:
  redis_data:
```

### 5.2 Kubernetes Manifests

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
        - name: api
          image: ${ECR_REGISTRY}/api:${VERSION}
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: 500m
              memory: 512Mi
            limits:
              cpu: 1000m
              memory: 1Gi
          env:
            - name: NODE_ENV
              value: production
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: db-credentials
                  key: url
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
---
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: api
  namespace: production
spec:
  selector:
    app: api
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP
---
# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

### 5.3 Terraform Infrastructure

```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "terraform-state-trading"
    key    = "production/terraform.tfstate"
    region = "eu-west-1"
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.0.0"

  name = "trading-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = false

  enable_dns_hostnames = true
  enable_dns_support   = true
}

# EKS Cluster
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.0.0"

  cluster_name    = "trading-cluster"
  cluster_version = "1.28"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  eks_managed_node_groups = {
    general = {
      desired_size = 3
      min_size     = 2
      max_size     = 10

      instance_types = ["t3.large"]
      capacity_type  = "ON_DEMAND"
    }

    ml = {
      desired_size = 2
      min_size     = 1
      max_size     = 5

      instance_types = ["g4dn.xlarge"]
      capacity_type  = "SPOT"

      labels = {
        workload = "ml"
      }

      taints = [{
        key    = "nvidia.com/gpu"
        value  = "true"
        effect = "NO_SCHEDULE"
      }]
    }
  }
}

# RDS PostgreSQL
module "rds" {
  source  = "terraform-aws-modules/rds/aws"
  version = "6.0.0"

  identifier = "trading-db"

  engine               = "postgres"
  engine_version       = "16.1"
  family               = "postgres16"
  major_engine_version = "16"
  instance_class       = "db.r6g.large"

  allocated_storage     = 100
  max_allocated_storage = 500

  db_name  = "trading"
  username = "postgres"
  port     = 5432

  multi_az               = true
  db_subnet_group_name   = module.vpc.database_subnet_group
  vpc_security_group_ids = [module.security_group_rds.security_group_id]

  maintenance_window      = "Mon:00:00-Mon:03:00"
  backup_window           = "03:00-06:00"
  backup_retention_period = 30

  performance_insights_enabled = true

  deletion_protection = true
}

# ElastiCache Redis
module "elasticache" {
  source = "terraform-aws-modules/elasticache/aws"

  cluster_id           = "trading-redis"
  engine               = "redis"
  engine_version       = "7.0"
  node_type            = "cache.r6g.large"
  num_cache_nodes      = 2
  parameter_group_name = "default.redis7"
  port                 = 6379

  subnet_group_name    = module.vpc.elasticache_subnet_group_name
  security_group_ids   = [module.security_group_redis.security_group_id]
}
```

---

## 6. OUTILS DE DÉVELOPPEMENT

### 6.1 IDE & Extensions

#### VS Code Extensions
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "prisma.prisma",
    "ms-python.python",
    "ms-python.vscode-pylance",
    "ms-azuretools.vscode-docker",
    "hashicorp.terraform",
    "redhat.vscode-yaml",
    "github.copilot",
    "eamodio.gitlens",
    "streetsidesoftware.code-spell-checker"
  ]
}
```

### 6.2 Linting & Formatting

#### ESLint Configuration
```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "prefer-const": "error"
  }
}
```

#### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

### 6.3 Git Hooks (Husky)

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

---

## 7. EXTERNAL SERVICES & APIS

### 7.1 Data Providers

| Provider | Usage | Pricing |
|----------|-------|---------|
| **Polygon.io** | US Stocks real-time | $199-999/mo |
| **Finage** | Forex real-time | $99-499/mo |
| **CoinGecko** | Crypto data | $129-499/mo |
| **Alpha Vantage** | Backup data | Free-$299/mo |
| **Trading Economics** | Economic calendar | $99-299/mo |

### 7.2 Third-Party Services

| Service | Usage | Integration |
|---------|-------|-------------|
| **Stripe** | Payments | SDK + Webhooks |
| **SendGrid** | Transactional emails | API |
| **Firebase** | Push notifications | SDK |
| **Twilio** | SMS alerts | API |
| **Cloudflare** | CDN, DDoS protection | DNS |
| **Datadog** | Monitoring | Agent |
| **Sentry** | Error tracking | SDK |

---

## 8. VERSIONING & RELEASES

### 8.1 Semantic Versioning

```
MAJOR.MINOR.PATCH

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes
```

### 8.2 Git Branching Strategy

```
main (production)
├── develop (staging)
│   ├── feature/signals-v2
│   ├── feature/mobile-app
│   └── feature/api-graphql
├── release/1.2.0
├── hotfix/critical-bug
└── Tags: v1.0.0, v1.1.0, v1.2.0
```

### 8.3 Release Checklist

- [ ] All tests passing
- [ ] Code review approved
- [ ] Changelog updated
- [ ] Version bumped
- [ ] Database migrations ready
- [ ] Feature flags configured
- [ ] Monitoring alerts set
- [ ] Rollback plan documented

---

*Document mis à jour: [DATE]*
*Prochaine révision: Trimestrielle*
