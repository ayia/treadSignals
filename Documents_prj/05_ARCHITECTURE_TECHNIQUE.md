# 🏗️ SOFTWARE ARCHITECTURE DOCUMENT (SAD)

## Plateforme de Signaux Trading IA

---

## Document Control

| Version | Date | Auteur | Modifications |
|---------|------|--------|---------------|
| 1.0 | 2026-01-19 | [CTO] | Création initiale |

---

## 1. INTRODUCTION

### 1.1 Objectif du Document
Ce document décrit l'architecture technique complète de la plateforme de signaux trading IA, incluant les choix technologiques, les patterns architecturaux, et les considérations de sécurité et de scalabilité.

### 1.2 Scope
- Architecture système globale
- Stack technique
- Flux de données
- Infrastructure cloud
- Sécurité
- Monitoring et observabilité

### 1.3 Audience
- Équipe de développement
- DevOps / SRE
- Architectes
- Investisseurs techniques
- Auditeurs

---

## 2. VUE D'ENSEMBLE DE L'ARCHITECTURE

### 2.1 Architecture Globale

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              CLIENTS                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│   │   Web    │    │   iOS    │    │ Android  │    │   API    │        │
│   │   App    │    │   App    │    │   App    │    │ Clients  │        │
│   └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘        │
│        │               │               │               │               │
└────────┼───────────────┼───────────────┼───────────────┼───────────────┘
         │               │               │               │
         └───────────────┴───────┬───────┴───────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           CDN (CloudFlare)                              │
│                     SSL Termination / DDoS Protection                   │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        LOAD BALANCER (ALB)                              │
│                      Health Checks / Routing                            │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   API Gateway   │    │   WebSocket     │    │   Static        │
│   (REST/GraphQL)│    │   Server        │    │   Assets (S3)   │
└────────┬────────┘    └────────┬────────┘    └─────────────────┘
         │                      │
         └──────────┬───────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         MICROSERVICES LAYER                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │    Auth     │  │   Signals   │  │   Market    │  │   Users     │   │
│  │   Service   │  │   Service   │  │   Data Svc  │  │   Service   │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  Payments   │  │Notifications│  │  Analytics  │  │     ML      │   │
│  │   Service   │  │   Service   │  │   Service   │  │   Engine    │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   PostgreSQL    │    │     Redis       │    │  TimescaleDB    │
│   (Primary DB)  │    │   (Cache/Queue) │    │  (Time Series)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        MESSAGE BROKER (Kafka)                           │
│                     Event Streaming / Pub-Sub                           │
└─────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      EXTERNAL DATA SOURCES                              │
├─────────────────────────────────────────────────────────────────────────┤
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│   │ Polygon  │    │  Finage  │    │CoinGecko │    │  Trading │        │
│   │   API    │    │   API    │    │   API    │    │ Economics│        │
│   └──────────┘    └──────────┘    └──────────┘    └──────────┘        │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Principes Architecturaux

| Principe | Description |
|----------|-------------|
| **Microservices** | Services indépendants, déployables séparément |
| **API-First** | Toute fonctionnalité exposée via API |
| **Event-Driven** | Communication asynchrone via événements |
| **Cloud-Native** | Conçu pour le cloud, containerisé |
| **Security by Design** | Sécurité intégrée dès la conception |
| **Scalability** | Horizontal scaling par défaut |
| **Observability** | Logs, metrics, traces centralisés |

---

## 3. STACK TECHNIQUE

### 3.1 Frontend

```yaml
Web Application:
  Framework: Next.js 14 (React)
  Language: TypeScript 5.x
  State Management: Zustand / React Query
  Styling: Tailwind CSS + Radix UI
  Charts: TradingView Lightweight Charts + Recharts
  Real-time: Socket.io client
  Build: Turbo + Webpack 5
  Testing: Jest + React Testing Library + Playwright

Mobile Applications:
  Framework: React Native 0.73+
  Language: TypeScript
  Navigation: React Navigation 6
  State: Zustand
  Push: Firebase Cloud Messaging
  Build: EAS Build (Expo)
```

### 3.2 Backend

```yaml
API Layer:
  Runtime: Node.js 20 LTS
  Framework: Fastify 4.x (ou NestJS)
  Language: TypeScript 5.x
  API Style: REST + GraphQL (Apollo Server)
  Validation: Zod
  Documentation: OpenAPI 3.0 / Swagger
  Testing: Vitest + Supertest

ML/AI Engine:
  Language: Python 3.11+
  Framework: FastAPI
  ML Libraries:
    - TensorFlow 2.x
    - PyTorch 2.x
    - Scikit-learn
    - Pandas / NumPy
  Model Serving: TensorFlow Serving / TorchServe
  Feature Store: Feast

Real-time:
  WebSocket: Socket.io
  Message Queue: Apache Kafka
  Stream Processing: Kafka Streams
```

### 3.3 Data Layer

```yaml
Databases:
  Primary: PostgreSQL 16
    - Extensions: pg_partman, pg_stat_statements
    - Pooling: PgBouncer

  Time Series: TimescaleDB
    - Market data, signals history
    - Hypertables avec compression

  Cache: Redis 7
    - Session store
    - Rate limiting
    - Real-time data cache
    - Pub/Sub

  Search: Elasticsearch 8 (optionnel)
    - Full-text search
    - Log aggregation

Object Storage:
  Provider: AWS S3 / CloudFlare R2
  Usage: Static assets, backups, model artifacts
```

### 3.4 Infrastructure

```yaml
Cloud Provider: AWS (primary) / Azure (DR)

Compute:
  Orchestration: Kubernetes (EKS)
  Containers: Docker
  Serverless: AWS Lambda (background jobs)

Networking:
  CDN: CloudFlare
  DNS: Route 53
  VPC: Private subnets for services
  Load Balancer: AWS ALB

CI/CD:
  Repository: GitHub
  Pipeline: GitHub Actions
  Registry: Amazon ECR
  IaC: Terraform + Terragrunt
  Secrets: AWS Secrets Manager / HashiCorp Vault
```

---

## 4. MICROSERVICES DÉTAILLÉS

### 4.1 Auth Service

```
┌─────────────────────────────────────────┐
│              AUTH SERVICE               │
├─────────────────────────────────────────┤
│                                         │
│  Responsabilités:                       │
│  • Inscription / Connexion              │
│  • JWT Token management                 │
│  • OAuth 2.0 (Google, Apple)           │
│  • 2FA / MFA                           │
│  • Session management                   │
│  • Password reset                       │
│                                         │
│  Endpoints:                             │
│  POST /auth/register                    │
│  POST /auth/login                       │
│  POST /auth/refresh                     │
│  POST /auth/logout                      │
│  POST /auth/forgot-password             │
│  POST /auth/verify-2fa                  │
│                                         │
│  Stack: Node.js + Fastify               │
│  DB: PostgreSQL (users table)           │
│  Cache: Redis (sessions, tokens)        │
│                                         │
└─────────────────────────────────────────┘
```

### 4.2 Signals Service

```
┌─────────────────────────────────────────┐
│            SIGNALS SERVICE              │
├─────────────────────────────────────────┤
│                                         │
│  Responsabilités:                       │
│  • Génération des signaux               │
│  • Gestion du cycle de vie signal       │
│  • Calcul performance                   │
│  • Historique des signaux               │
│                                         │
│  Endpoints:                             │
│  GET  /signals                          │
│  GET  /signals/:id                      │
│  GET  /signals/active                   │
│  GET  /signals/history                  │
│  GET  /signals/performance              │
│  POST /signals (internal)               │
│                                         │
│  Events émis:                           │
│  • signal.created                       │
│  • signal.updated                       │
│  • signal.closed                        │
│                                         │
│  Stack: Node.js + Fastify               │
│  DB: PostgreSQL + TimescaleDB           │
│                                         │
└─────────────────────────────────────────┘
```

### 4.3 Market Data Service

```
┌─────────────────────────────────────────┐
│          MARKET DATA SERVICE            │
├─────────────────────────────────────────┤
│                                         │
│  Responsabilités:                       │
│  • Ingestion données temps réel         │
│  • Normalisation multi-sources          │
│  • Stockage time series                 │
│  • Diffusion WebSocket                  │
│                                         │
│  Data Sources:                          │
│  • Polygon.io (Stocks)                  │
│  • Finage (Forex)                       │
│  • CoinGecko (Crypto)                   │
│  • Trading Economics (Calendar)         │
│                                         │
│  Endpoints:                             │
│  GET  /market/quotes/:symbol            │
│  GET  /market/history/:symbol           │
│  GET  /market/calendar                  │
│  WS   /market/stream                    │
│                                         │
│  Stack: Node.js + Python workers        │
│  DB: TimescaleDB + Redis                │
│                                         │
└─────────────────────────────────────────┘
```

### 4.4 ML Engine

```
┌─────────────────────────────────────────┐
│              ML ENGINE                  │
├─────────────────────────────────────────┤
│                                         │
│  Responsabilités:                       │
│  • Prédiction de prix                   │
│  • Pattern recognition                  │
│  • Signal generation                    │
│  • Model training (batch)               │
│  • Feature engineering                  │
│                                         │
│  Models:                                │
│  • LSTM (price prediction)              │
│  • Random Forest (classification)       │
│  • CNN (pattern recognition)            │
│  • Ensemble methods                     │
│                                         │
│  Endpoints:                             │
│  POST /ml/predict                       │
│  POST /ml/patterns                      │
│  GET  /ml/model/status                  │
│  POST /ml/train (internal)              │
│                                         │
│  Stack: Python + FastAPI                │
│  ML: TensorFlow / PyTorch               │
│  Serving: TensorFlow Serving            │
│                                         │
└─────────────────────────────────────────┘
```

### 4.5 Autres Services

| Service | Responsabilités | Stack |
|---------|-----------------|-------|
| **Users Service** | Profils, préférences, subscriptions | Node.js + PostgreSQL |
| **Payments Service** | Stripe integration, invoices, plans | Node.js + Stripe SDK |
| **Notifications Service** | Email, push, SMS, in-app | Node.js + Redis + Firebase |
| **Analytics Service** | Tracking, reporting, dashboards | Python + ClickHouse |

---

## 5. FLUX DE DONNÉES

### 5.1 Flux de Génération de Signal

```
┌──────────────┐
│ Market Data  │
│   Sources    │
└──────┬───────┘
       │ Real-time quotes
       ▼
┌──────────────┐
│ Market Data  │
│   Service    │◄─────────────────────┐
└──────┬───────┘                      │
       │ Normalized data              │
       ▼                              │
┌──────────────┐                      │
│    Kafka     │                      │
│market.quotes │                      │
└──────┬───────┘                      │
       │                              │
       ▼                              │
┌──────────────┐                      │
│  ML Engine   │                      │
│   Workers    │                      │
└──────┬───────┘                      │
       │ Predictions                  │
       ▼                              │
┌──────────────┐    ┌──────────────┐  │
│   Signals    │───►│    Kafka     │  │
│   Service    │    │signal.created│  │
└──────┬───────┘    └──────┬───────┘  │
       │                   │          │
       │                   ▼          │
       │            ┌──────────────┐  │
       │            │Notifications │  │
       │            │   Service    │  │
       │            └──────┬───────┘  │
       │                   │          │
       ▼                   ▼          │
┌──────────────┐    ┌──────────────┐  │
│  PostgreSQL  │    │ Push / Email │  │
│ TimescaleDB  │    │   to Users   │  │
└──────────────┘    └──────────────┘  │
       │                              │
       └──────────────────────────────┘
              Feedback loop
```

### 5.2 Flux Utilisateur (Signup to Trade)

```
User                  Frontend            API Gateway         Services              Database
 │                       │                    │                   │                    │
 │  1. Register          │                    │                   │                    │
 ├──────────────────────►│                    │                   │                    │
 │                       │  2. POST /register │                   │                    │
 │                       ├───────────────────►│                   │                    │
 │                       │                    │  3. Create user   │                    │
 │                       │                    ├──────────────────►│                    │
 │                       │                    │                   │  4. INSERT user    │
 │                       │                    │                   ├───────────────────►│
 │                       │                    │                   │◄───────────────────│
 │                       │                    │  5. Send email    │                    │
 │                       │                    ├──────────────────►│                    │
 │◄──────────────────────┼────────────────────┼───────────────────│                    │
 │  6. Verification email│                    │                   │                    │
 │                       │                    │                   │                    │
 │  7. Login             │                    │                   │                    │
 ├──────────────────────►│  8. POST /login    │                   │                    │
 │                       ├───────────────────►│  9. Validate      │                    │
 │                       │                    ├──────────────────►│                    │
 │                       │                    │◄──────────────────│                    │
 │                       │◄───────────────────│  10. JWT Token    │                    │
 │◄──────────────────────│  11. Dashboard     │                   │                    │
 │                       │                    │                   │                    │
 │  12. View signals     │                    │                   │                    │
 ├──────────────────────►│  13. GET /signals  │                   │                    │
 │                       ├───────────────────►│  14. Fetch        │                    │
 │                       │                    ├──────────────────►│                    │
 │                       │                    │◄──────────────────│                    │
 │◄──────────────────────┼────────────────────┼───────────────────│                    │
 │  15. Signals list     │                    │                   │                    │
```

---

## 6. BASE DE DONNÉES

### 6.1 Schéma PostgreSQL Principal

```sql
-- Users & Authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    avatar_url TEXT,
    email_verified BOOLEAN DEFAULT FALSE,
    two_factor_enabled BOOLEAN DEFAULT FALSE,
    two_factor_secret VARCHAR(255),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE user_preferences (
    user_id UUID PRIMARY KEY REFERENCES users(id),
    notification_email BOOLEAN DEFAULT TRUE,
    notification_push BOOLEAN DEFAULT TRUE,
    notification_sms BOOLEAN DEFAULT FALSE,
    preferred_instruments TEXT[],
    risk_level VARCHAR(20) DEFAULT 'medium',
    timezone VARCHAR(50) DEFAULT 'UTC',
    language VARCHAR(10) DEFAULT 'en',
    theme VARCHAR(20) DEFAULT 'light'
);

-- Subscriptions & Billing
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    plan_id VARCHAR(50) NOT NULL,
    stripe_subscription_id VARCHAR(255),
    status VARCHAR(20) NOT NULL,
    current_period_start TIMESTAMPTZ,
    current_period_end TIMESTAMPTZ,
    cancel_at_period_end BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE plans (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price_monthly DECIMAL(10,2),
    price_yearly DECIMAL(10,2),
    features JSONB,
    limits JSONB,
    stripe_price_id_monthly VARCHAR(255),
    stripe_price_id_yearly VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE
);

-- Signals
CREATE TABLE signals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instrument VARCHAR(20) NOT NULL,
    direction VARCHAR(10) NOT NULL, -- 'buy' or 'sell'
    entry_price DECIMAL(20,8) NOT NULL,
    stop_loss DECIMAL(20,8),
    take_profit_1 DECIMAL(20,8),
    take_profit_2 DECIMAL(20,8),
    take_profit_3 DECIMAL(20,8),
    strategy VARCHAR(50),
    timeframe VARCHAR(10),
    confidence DECIMAL(5,2),
    status VARCHAR(20) DEFAULT 'active',
    result_pips DECIMAL(10,2),
    closed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_signals_instrument ON signals(instrument);
CREATE INDEX idx_signals_status ON signals(status);
CREATE INDEX idx_signals_created_at ON signals(created_at DESC);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
```

### 6.2 Schéma TimescaleDB (Time Series)

```sql
-- Market Data (Hypertable)
CREATE TABLE market_quotes (
    time TIMESTAMPTZ NOT NULL,
    symbol VARCHAR(20) NOT NULL,
    bid DECIMAL(20,8),
    ask DECIMAL(20,8),
    mid DECIMAL(20,8),
    volume DECIMAL(20,4)
);

SELECT create_hypertable('market_quotes', 'time');
CREATE INDEX idx_quotes_symbol_time ON market_quotes(symbol, time DESC);

-- Enable compression for older data
ALTER TABLE market_quotes SET (
    timescaledb.compress,
    timescaledb.compress_segmentby = 'symbol'
);

SELECT add_compression_policy('market_quotes', INTERVAL '7 days');

-- OHLCV Candles
CREATE TABLE candles (
    time TIMESTAMPTZ NOT NULL,
    symbol VARCHAR(20) NOT NULL,
    timeframe VARCHAR(10) NOT NULL,
    open DECIMAL(20,8),
    high DECIMAL(20,8),
    low DECIMAL(20,8),
    close DECIMAL(20,8),
    volume DECIMAL(20,4)
);

SELECT create_hypertable('candles', 'time');

-- Signal Performance History
CREATE TABLE signal_performance (
    time TIMESTAMPTZ NOT NULL,
    signal_id UUID NOT NULL,
    current_price DECIMAL(20,8),
    pnl_pips DECIMAL(10,2),
    pnl_percent DECIMAL(8,4)
);

SELECT create_hypertable('signal_performance', 'time');
```

---

## 7. API SPECIFICATION

### 7.1 REST API Overview

```yaml
openapi: 3.0.3
info:
  title: Trading Signals Platform API
  version: 1.0.0
  description: API for AI-powered trading signals platform

servers:
  - url: https://api.example.com/v1
    description: Production
  - url: https://api.staging.example.com/v1
    description: Staging

security:
  - BearerAuth: []

paths:
  /auth/register:
    post:
      summary: Register new user
      tags: [Authentication]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RegisterRequest'
      responses:
        '201':
          description: User created
        '400':
          description: Validation error
        '409':
          description: Email already exists

  /signals:
    get:
      summary: Get signals list
      tags: [Signals]
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [active, closed, all]
        - name: instrument
          in: query
          schema:
            type: string
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
        - name: offset
          in: query
          schema:
            type: integer
            default: 0
      responses:
        '200':
          description: Signals list
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SignalsList'

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

  schemas:
    RegisterRequest:
      type: object
      required: [email, password]
      properties:
        email:
          type: string
          format: email
        password:
          type: string
          minLength: 8
        firstName:
          type: string
        lastName:
          type: string

    Signal:
      type: object
      properties:
        id:
          type: string
          format: uuid
        instrument:
          type: string
        direction:
          type: string
          enum: [buy, sell]
        entryPrice:
          type: number
        stopLoss:
          type: number
        takeProfit1:
          type: number
        takeProfit2:
          type: number
        confidence:
          type: number
        status:
          type: string
        createdAt:
          type: string
          format: date-time
```

### 7.2 WebSocket API

```javascript
// Connection
const socket = io('wss://api.example.com', {
  auth: { token: 'JWT_TOKEN' }
});

// Subscribe to market data
socket.emit('subscribe', {
  channel: 'market',
  symbols: ['EURUSD', 'BTCUSD', 'AAPL']
});

// Receive quotes
socket.on('quote', (data) => {
  // { symbol: 'EURUSD', bid: 1.0850, ask: 1.0852, time: '...' }
});

// Subscribe to signals
socket.emit('subscribe', {
  channel: 'signals'
});

// Receive new signals
socket.on('signal:new', (signal) => {
  // { id: '...', instrument: 'EURUSD', direction: 'buy', ... }
});

// Receive signal updates
socket.on('signal:update', (update) => {
  // { id: '...', status: 'closed', resultPips: 45.2 }
});
```

---

## 8. SÉCURITÉ

### 8.1 Architecture de Sécurité

```
┌─────────────────────────────────────────────────────────────────┐
│                     SECURITY LAYERS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Layer 1: Network Security                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ • CloudFlare DDoS Protection                            │   │
│  │ • WAF (Web Application Firewall)                        │   │
│  │ • Rate Limiting (per IP, per user)                      │   │
│  │ • Geo-blocking (if needed)                              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Layer 2: Transport Security                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ • TLS 1.3 everywhere                                    │   │
│  │ • Certificate pinning (mobile)                          │   │
│  │ • HSTS (HTTP Strict Transport Security)                 │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Layer 3: Application Security                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ • JWT Authentication (RS256)                            │   │
│  │ • RBAC (Role-Based Access Control)                      │   │
│  │ • Input validation (Zod schemas)                        │   │
│  │ • SQL injection prevention (parameterized queries)      │   │
│  │ • XSS prevention (CSP headers)                          │   │
│  │ • CSRF protection                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Layer 4: Data Security                                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ • Encryption at rest (AES-256)                          │   │
│  │ • Encryption in transit (TLS)                           │   │
│  │ • Password hashing (Argon2id)                           │   │
│  │ • PII encryption                                        │   │
│  │ • Database encryption                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Authentication Flow

```
┌──────────┐                                    ┌──────────┐
│  Client  │                                    │  Server  │
└────┬─────┘                                    └────┬─────┘
     │                                               │
     │  1. POST /auth/login                          │
     │  { email, password }                          │
     ├──────────────────────────────────────────────►│
     │                                               │
     │                              2. Validate credentials
     │                              3. Generate tokens
     │                                               │
     │  4. Response                                  │
     │  { accessToken, refreshToken, expiresIn }    │
     │◄──────────────────────────────────────────────│
     │                                               │
     │  5. Store tokens securely                     │
     │  (httpOnly cookies / secure storage)          │
     │                                               │
     │  6. API Request                               │
     │  Authorization: Bearer <accessToken>          │
     ├──────────────────────────────────────────────►│
     │                                               │
     │                              7. Validate JWT
     │                              8. Process request
     │                                               │
     │  9. Response                                  │
     │◄──────────────────────────────────────────────│
     │                                               │
     │  10. Token expired? Refresh                   │
     │  POST /auth/refresh                           │
     │  { refreshToken }                             │
     ├──────────────────────────────────────────────►│
     │                                               │
     │  11. New tokens                               │
     │◄──────────────────────────────────────────────│
```

### 8.3 Security Checklist

- [ ] HTTPS everywhere (TLS 1.3)
- [ ] JWT with short expiration (15min access, 7d refresh)
- [ ] Password policy (min 8 chars, complexity)
- [ ] Rate limiting (100 req/min per user)
- [ ] Input validation all endpoints
- [ ] SQL injection prevention
- [ ] XSS prevention (CSP, sanitization)
- [ ] CORS properly configured
- [ ] Secrets in Vault/Secrets Manager
- [ ] Regular security audits
- [ ] Penetration testing
- [ ] Dependency vulnerability scanning
- [ ] Logging & monitoring security events

---

## 9. INFRASTRUCTURE & DÉPLOIEMENT

### 9.1 Architecture Kubernetes

```yaml
# Namespace structure
namespaces:
  - production
  - staging
  - monitoring

# Deployments
deployments:
  api-gateway:
    replicas: 3
    resources:
      requests:
        cpu: 500m
        memory: 512Mi
      limits:
        cpu: 1000m
        memory: 1Gi
    autoscaling:
      minReplicas: 2
      maxReplicas: 10
      targetCPU: 70%

  signals-service:
    replicas: 2
    resources:
      requests:
        cpu: 250m
        memory: 256Mi

  ml-engine:
    replicas: 2
    resources:
      requests:
        cpu: 1000m
        memory: 2Gi
        nvidia.com/gpu: 1  # Optional GPU
```

### 9.2 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t $ECR_REGISTRY/app:$GITHUB_SHA .
      - name: Push to ECR
        run: docker push $ECR_REGISTRY/app:$GITHUB_SHA

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to EKS Staging
        run: |
          kubectl set image deployment/api api=$ECR_REGISTRY/app:$GITHUB_SHA

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to EKS Production
        run: |
          kubectl set image deployment/api api=$ECR_REGISTRY/app:$GITHUB_SHA
```

### 9.3 Environnements

| Environnement | Usage | Ressources | URL |
|---------------|-------|------------|-----|
| Development | Local dev | Docker Compose | localhost |
| Staging | Testing, QA | 50% prod | staging.example.com |
| Production | Live | Full | api.example.com |
| DR (Disaster Recovery) | Failover | Minimal | dr.example.com |

---

## 10. MONITORING & OBSERVABILITÉ

### 10.1 Stack de Monitoring

```
┌─────────────────────────────────────────────────────────────────┐
│                    OBSERVABILITY STACK                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Metrics   │  │    Logs     │  │   Traces    │             │
│  │  (Datadog)  │  │  (Datadog)  │  │  (Datadog)  │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
│         │                │                │                     │
│         └────────────────┼────────────────┘                     │
│                          │                                      │
│                          ▼                                      │
│                 ┌─────────────────┐                            │
│                 │    Dashboards   │                            │
│                 │    & Alerts     │                            │
│                 └─────────────────┘                            │
│                                                                 │
│  Alternatives:                                                  │
│  • Prometheus + Grafana (metrics)                              │
│  • ELK Stack (logs)                                            │
│  • Jaeger (traces)                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 10.2 Métriques Clés

| Catégorie | Métrique | Seuil Alerte |
|-----------|----------|--------------|
| **Disponibilité** | Uptime | < 99.9% |
| **Performance** | p95 latency | > 500ms |
| **Performance** | p99 latency | > 1000ms |
| **Erreurs** | Error rate | > 1% |
| **Saturation** | CPU usage | > 80% |
| **Saturation** | Memory usage | > 85% |
| **Business** | Signaux générés/h | < 10 |
| **Business** | Active users | Trend down |

### 10.3 Alerting

```yaml
# Datadog monitors example
monitors:
  - name: High Error Rate
    type: metric alert
    query: "sum:http.errors{env:production} / sum:http.requests{env:production} > 0.01"
    message: "Error rate above 1% - @pagerduty"

  - name: API Latency High
    type: metric alert
    query: "p95:http.request.duration{env:production} > 500"
    message: "P95 latency above 500ms - @slack-alerts"

  - name: Database Connection Pool
    type: metric alert
    query: "avg:postgresql.connections{env:production} > 80"
    message: "DB connections near limit - @oncall"
```

---

## 11. DISASTER RECOVERY

### 11.1 RPO/RTO Targets

| Tier | Services | RPO | RTO |
|------|----------|-----|-----|
| Tier 1 | Auth, Payments | 1 min | 15 min |
| Tier 2 | Signals, Market Data | 5 min | 30 min |
| Tier 3 | Analytics, Notifications | 1 hour | 2 hours |

### 11.2 Backup Strategy

| Data | Méthode | Fréquence | Rétention |
|------|---------|-----------|-----------|
| PostgreSQL | pg_dump + WAL | Continue + Daily | 30 jours |
| TimescaleDB | Native backup | Hourly | 7 jours |
| Redis | RDB + AOF | Hourly | 24 heures |
| S3 | Cross-region replication | Continue | Infinie |
| Secrets | Vault snapshots | Daily | 90 jours |

### 11.3 Failover Procedure

```
1. Détection incident (automatique via monitoring)
   └── Temps: 0-2 minutes

2. Évaluation et décision
   └── Temps: 2-5 minutes

3. Activation DR site
   ├── DNS failover (Route 53)
   ├── Database promotion (RDS Multi-AZ)
   └── Temps: 5-15 minutes

4. Validation services
   └── Temps: 15-20 minutes

5. Communication utilisateurs
   └── Status page update

Total RTO cible: < 30 minutes
```

---

## 12. ANNEXES

### 12.1 Glossaire Technique

| Terme | Définition |
|-------|------------|
| **API Gateway** | Point d'entrée unique pour toutes les requêtes API |
| **CDN** | Content Delivery Network - distribution de contenu |
| **CQRS** | Command Query Responsibility Segregation |
| **JWT** | JSON Web Token - authentification stateless |
| **K8s** | Kubernetes - orchestration de containers |
| **LSTM** | Long Short-Term Memory - type de réseau neuronal |
| **RTO** | Recovery Time Objective |
| **RPO** | Recovery Point Objective |
| **WAF** | Web Application Firewall |

### 12.2 Références

- [12 Factor App](https://12factor.net/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [OWASP Security Guidelines](https://owasp.org/)
- [Kubernetes Best Practices](https://kubernetes.io/docs/concepts/configuration/overview/)

---

*Document à réviser: Trimestriellement*
*Dernière mise à jour: [DATE]*
