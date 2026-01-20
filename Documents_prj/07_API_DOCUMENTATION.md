# 📡 API DOCUMENTATION

## Trading Signals Platform REST API v1.0

---

## 1. INTRODUCTION

### 1.1 Base URL
```
Production: https://api.tradingsignals.com/v1
Staging:    https://api.staging.tradingsignals.com/v1
```

### 1.2 Authentication
Toutes les requêtes API (sauf auth) nécessitent un token JWT dans le header:
```
Authorization: Bearer <access_token>
```

### 1.3 Rate Limiting
| Plan | Requests/minute | Requests/day |
|------|-----------------|--------------|
| Free | 30 | 1,000 |
| Basic | 60 | 10,000 |
| Pro | 120 | 50,000 |
| Enterprise | 300 | Unlimited |

Headers de réponse:
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640000000
```

### 1.4 Response Format
```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### 1.5 Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ]
  }
}
```

### 1.6 HTTP Status Codes
| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

## 2. AUTHENTICATION

### 2.1 Register
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (201)**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "createdAt": "2026-01-19T10:00:00Z"
    },
    "message": "Verification email sent"
  }
}
```

### 2.2 Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJSUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJSUzI1NiIs...",
    "expiresIn": 900,
    "tokenType": "Bearer",
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "plan": "basic"
    }
  }
}
```

### 2.3 Refresh Token
```http
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJSUzI1NiIs..."
}
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJSUzI1NiIs...",
    "expiresIn": 900
  }
}
```

### 2.4 Logout
```http
POST /auth/logout
Authorization: Bearer <token>
```

**Response (204)** - No Content

### 2.5 Forgot Password
```http
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### 2.6 Reset Password
```http
POST /auth/reset-password
Content-Type: application/json

{
  "token": "reset_token_from_email",
  "password": "NewSecurePass123!"
}
```

### 2.7 Verify Email
```http
GET /auth/verify-email?token=verification_token
```

### 2.8 Enable 2FA
```http
POST /auth/2fa/enable
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "secret": "JBSWY3DPEHPK3PXP",
    "qrCode": "data:image/png;base64,..."
  }
}
```

### 2.9 Verify 2FA
```http
POST /auth/2fa/verify
Authorization: Bearer <token>
Content-Type: application/json

{
  "code": "123456"
}
```

---

## 3. SIGNALS

### 3.1 List Signals
```http
GET /signals
Authorization: Bearer <token>
```

**Query Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| status | string | active | active, closed, all |
| instrument | string | - | Filter by instrument (EURUSD, BTCUSD) |
| direction | string | - | buy, sell |
| strategy | string | - | scalping, intraday, swing |
| from | datetime | - | Start date (ISO 8601) |
| to | datetime | - | End date (ISO 8601) |
| page | integer | 1 | Page number |
| limit | integer | 20 | Items per page (max 100) |
| sort | string | -createdAt | Sort field (prefix - for desc) |

**Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "instrument": "EURUSD",
      "direction": "buy",
      "entryPrice": 1.0850,
      "currentPrice": 1.0875,
      "stopLoss": 1.0820,
      "takeProfit1": 1.0900,
      "takeProfit2": 1.0950,
      "takeProfit3": 1.1000,
      "strategy": "intraday",
      "timeframe": "H4",
      "confidence": 85.5,
      "status": "active",
      "pnlPips": 25,
      "pnlPercent": 0.23,
      "createdAt": "2026-01-19T10:00:00Z",
      "updatedAt": "2026-01-19T12:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "totalPages": 3
  }
}
```

### 3.2 Get Signal by ID
```http
GET /signals/:id
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "instrument": "EURUSD",
    "direction": "buy",
    "entryPrice": 1.0850,
    "stopLoss": 1.0820,
    "takeProfit1": 1.0900,
    "takeProfit2": 1.0950,
    "takeProfit3": 1.1000,
    "strategy": "intraday",
    "timeframe": "H4",
    "confidence": 85.5,
    "status": "active",
    "analysis": {
      "technical": "Strong bullish momentum...",
      "fundamental": "USD weakness expected...",
      "patterns": ["Double Bottom", "Bullish Engulfing"]
    },
    "performance": {
      "currentPrice": 1.0875,
      "pnlPips": 25,
      "pnlPercent": 0.23,
      "maxDrawdown": -15,
      "maxProfit": 30
    },
    "history": [
      {
        "time": "2026-01-19T10:00:00Z",
        "event": "created",
        "price": 1.0850
      },
      {
        "time": "2026-01-19T11:30:00Z",
        "event": "tp1_hit",
        "price": 1.0900
      }
    ],
    "createdAt": "2026-01-19T10:00:00Z"
  }
}
```

### 3.3 Get Active Signals Count
```http
GET /signals/count
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "active": 12,
    "closedToday": 5,
    "totalPipsToday": 145
  }
}
```

### 3.4 Get Signal Performance
```http
GET /signals/performance
Authorization: Bearer <token>
```

**Query Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| period | string | 30d | 7d, 30d, 90d, 1y, all |
| instrument | string | - | Filter by instrument |

**Response (200)**
```json
{
  "success": true,
  "data": {
    "period": "30d",
    "totalSignals": 156,
    "winRate": 72.4,
    "totalPips": 2450,
    "avgPipsPerSignal": 15.7,
    "maxWin": 120,
    "maxLoss": -45,
    "profitFactor": 2.3,
    "byInstrument": [
      {
        "instrument": "EURUSD",
        "signals": 45,
        "winRate": 75.5,
        "pips": 680
      }
    ],
    "byStrategy": [
      {
        "strategy": "intraday",
        "signals": 80,
        "winRate": 70.0,
        "pips": 1200
      }
    ],
    "monthly": [
      {
        "month": "2026-01",
        "signals": 156,
        "pips": 2450
      }
    ]
  }
}
```

---

## 4. MARKET DATA

### 4.1 Get Quote
```http
GET /market/quote/:symbol
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "symbol": "EURUSD",
    "bid": 1.0850,
    "ask": 1.0852,
    "mid": 1.0851,
    "spread": 2,
    "change": 0.0025,
    "changePercent": 0.23,
    "high": 1.0880,
    "low": 1.0820,
    "volume": 125000,
    "timestamp": "2026-01-19T12:00:00Z"
  }
}
```

### 4.2 Get Multiple Quotes
```http
GET /market/quotes?symbols=EURUSD,GBPUSD,BTCUSD
Authorization: Bearer <token>
```

### 4.3 Get Historical Data (OHLCV)
```http
GET /market/history/:symbol
Authorization: Bearer <token>
```

**Query Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| timeframe | string | H1 | M1, M5, M15, M30, H1, H4, D1, W1, MN |
| from | datetime | -30d | Start date |
| to | datetime | now | End date |
| limit | integer | 500 | Max candles (max 5000) |

**Response (200)**
```json
{
  "success": true,
  "data": {
    "symbol": "EURUSD",
    "timeframe": "H1",
    "candles": [
      {
        "time": "2026-01-19T10:00:00Z",
        "open": 1.0840,
        "high": 1.0860,
        "low": 1.0835,
        "close": 1.0855,
        "volume": 12500
      }
    ]
  }
}
```

### 4.4 Get Available Instruments
```http
GET /market/instruments
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "forex": [
      {
        "symbol": "EURUSD",
        "name": "Euro / US Dollar",
        "digits": 5,
        "spread": 1.2
      }
    ],
    "crypto": [...],
    "indices": [...],
    "commodities": [...],
    "stocks": [...]
  }
}
```

---

## 5. ECONOMIC CALENDAR

### 5.1 Get Events
```http
GET /calendar/events
Authorization: Bearer <token>
```

**Query Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| from | datetime | today | Start date |
| to | datetime | +7d | End date |
| currencies | string | - | Filter by currency (USD,EUR,GBP) |
| impact | string | - | high, medium, low |

**Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Non-Farm Payrolls",
      "country": "US",
      "currency": "USD",
      "impact": "high",
      "datetime": "2026-01-19T13:30:00Z",
      "previous": "223K",
      "forecast": "180K",
      "actual": null,
      "description": "The Non-Farm Payrolls...",
      "affectedPairs": ["EURUSD", "USDJPY", "GBPUSD"]
    }
  ]
}
```

### 5.2 Get Event by ID
```http
GET /calendar/events/:id
Authorization: Bearer <token>
```

---

## 6. USER

### 6.1 Get Current User
```http
GET /users/me
Authorization: Bearer <token>
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "avatarUrl": "https://...",
    "emailVerified": true,
    "twoFactorEnabled": false,
    "subscription": {
      "plan": "pro",
      "status": "active",
      "currentPeriodEnd": "2026-02-19T00:00:00Z"
    },
    "preferences": {
      "notificationEmail": true,
      "notificationPush": true,
      "preferredInstruments": ["EURUSD", "BTCUSD"],
      "timezone": "Europe/Paris",
      "language": "en"
    },
    "createdAt": "2025-06-01T00:00:00Z"
  }
}
```

### 6.2 Update User
```http
PATCH /users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Smith",
  "phone": "+1234567890"
}
```

### 6.3 Update Preferences
```http
PATCH /users/me/preferences
Authorization: Bearer <token>
Content-Type: application/json

{
  "notificationEmail": true,
  "notificationPush": false,
  "preferredInstruments": ["EURUSD", "GBPUSD"],
  "timezone": "America/New_York"
}
```

### 6.4 Change Password
```http
POST /users/me/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "OldPass123!",
  "newPassword": "NewPass456!"
}
```

### 6.5 Upload Avatar
```http
POST /users/me/avatar
Authorization: Bearer <token>
Content-Type: multipart/form-data

file: <image_file>
```

### 6.6 Delete Account
```http
DELETE /users/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "password": "CurrentPass123!",
  "reason": "No longer needed"
}
```

---

## 7. SUBSCRIPTIONS

### 7.1 Get Plans
```http
GET /subscriptions/plans
```

**Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "basic",
      "name": "Basic",
      "description": "For casual traders",
      "priceMonthly": 29,
      "priceYearly": 290,
      "features": [
        "Unlimited signals",
        "30 instruments",
        "Email alerts"
      ],
      "limits": {
        "signalsPerDay": 100,
        "instruments": 30,
        "apiCalls": 10000
      }
    },
    {
      "id": "pro",
      "name": "Pro",
      "description": "For active traders",
      "priceMonthly": 99,
      "priceYearly": 990,
      "features": [
        "All Basic features",
        "70+ instruments",
        "API access",
        "Priority support"
      ]
    }
  ]
}
```

### 7.2 Get Current Subscription
```http
GET /subscriptions/current
Authorization: Bearer <token>
```

### 7.3 Create Subscription
```http
POST /subscriptions
Authorization: Bearer <token>
Content-Type: application/json

{
  "planId": "pro",
  "interval": "monthly",
  "paymentMethodId": "pm_xxx"
}
```

### 7.4 Cancel Subscription
```http
POST /subscriptions/cancel
Authorization: Bearer <token>
Content-Type: application/json

{
  "reason": "Too expensive",
  "feedback": "Great product but..."
}
```

### 7.5 Get Invoices
```http
GET /subscriptions/invoices
Authorization: Bearer <token>
```

---

## 8. NOTIFICATIONS

### 8.1 Get Notifications
```http
GET /notifications
Authorization: Bearer <token>
```

**Query Parameters**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| read | boolean | - | Filter by read status |
| type | string | - | signal, system, promo |
| page | integer | 1 | Page number |
| limit | integer | 20 | Items per page |

### 8.2 Mark as Read
```http
PATCH /notifications/:id/read
Authorization: Bearer <token>
```

### 8.3 Mark All as Read
```http
POST /notifications/read-all
Authorization: Bearer <token>
```

### 8.4 Register Push Token
```http
POST /notifications/push-token
Authorization: Bearer <token>
Content-Type: application/json

{
  "token": "fcm_token_xxx",
  "platform": "ios"
}
```

---

## 9. WEBSOCKET API

### 9.1 Connection
```javascript
const socket = io('wss://api.tradingsignals.com', {
  auth: {
    token: 'your_jwt_token'
  },
  transports: ['websocket']
});

socket.on('connect', () => {
  console.log('Connected');
});

socket.on('error', (error) => {
  console.error('Error:', error);
});
```

### 9.2 Subscribe to Market Data
```javascript
// Subscribe
socket.emit('subscribe', {
  channel: 'market',
  symbols: ['EURUSD', 'BTCUSD']
});

// Receive quotes
socket.on('quote', (data) => {
  // { symbol: 'EURUSD', bid: 1.0850, ask: 1.0852, time: '...' }
});

// Unsubscribe
socket.emit('unsubscribe', {
  channel: 'market',
  symbols: ['EURUSD']
});
```

### 9.3 Subscribe to Signals
```javascript
socket.emit('subscribe', {
  channel: 'signals'
});

// New signal
socket.on('signal:new', (signal) => {
  // Full signal object
});

// Signal update (price change, TP hit)
socket.on('signal:update', (update) => {
  // { id, currentPrice, pnlPips, status }
});

// Signal closed
socket.on('signal:closed', (data) => {
  // { id, resultPips, closeReason }
});
```

### 9.4 Subscribe to Notifications
```javascript
socket.emit('subscribe', {
  channel: 'notifications'
});

socket.on('notification', (notif) => {
  // { id, type, title, message, data }
});
```

### 9.5 Heartbeat
```javascript
// Server sends ping every 25 seconds
socket.on('ping', () => {
  socket.emit('pong');
});
```

---

## 10. WEBHOOKS

### 10.1 Available Events
| Event | Description |
|-------|-------------|
| signal.created | New signal generated |
| signal.updated | Signal TP/SL hit |
| signal.closed | Signal closed |
| subscription.created | New subscription |
| subscription.cancelled | Subscription cancelled |
| payment.succeeded | Payment successful |
| payment.failed | Payment failed |

### 10.2 Webhook Payload
```json
{
  "id": "evt_xxx",
  "type": "signal.created",
  "created": "2026-01-19T10:00:00Z",
  "data": {
    "id": "uuid",
    "instrument": "EURUSD",
    "direction": "buy",
    "entryPrice": 1.0850
  }
}
```

### 10.3 Webhook Signature
Verify webhook authenticity:
```
X-Webhook-Signature: sha256=xxx
```

```javascript
const crypto = require('crypto');

function verifySignature(payload, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return `sha256=${expected}` === signature;
}
```

### 10.4 Configure Webhooks
```http
POST /webhooks
Authorization: Bearer <token>
Content-Type: application/json

{
  "url": "https://yourapp.com/webhooks",
  "events": ["signal.created", "signal.closed"],
  "secret": "your_webhook_secret"
}
```

---

## 11. SDK & CODE EXAMPLES

### 11.1 JavaScript/TypeScript SDK
```typescript
import { TradingSignalsClient } from '@tradingsignals/sdk';

const client = new TradingSignalsClient({
  apiKey: 'your_api_key',
  baseUrl: 'https://api.tradingsignals.com/v1'
});

// Get signals
const signals = await client.signals.list({
  status: 'active',
  limit: 10
});

// Subscribe to real-time
client.realtime.subscribe('signals', (signal) => {
  console.log('New signal:', signal);
});
```

### 11.2 Python SDK
```python
from tradingsignals import Client

client = Client(api_key='your_api_key')

# Get signals
signals = client.signals.list(status='active', limit=10)

# Get quote
quote = client.market.get_quote('EURUSD')
print(f"EURUSD: {quote.bid}/{quote.ask}")
```

### 11.3 cURL Examples
```bash
# Login
curl -X POST https://api.tradingsignals.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123"}'

# Get signals
curl https://api.tradingsignals.com/v1/signals \
  -H "Authorization: Bearer <token>"

# Get quote
curl https://api.tradingsignals.com/v1/market/quote/EURUSD \
  -H "Authorization: Bearer <token>"
```

---

## 12. ERROR CODES

| Code | Description | HTTP Status |
|------|-------------|-------------|
| AUTH_INVALID_CREDENTIALS | Invalid email or password | 401 |
| AUTH_TOKEN_EXPIRED | Access token expired | 401 |
| AUTH_TOKEN_INVALID | Invalid token | 401 |
| AUTH_2FA_REQUIRED | 2FA verification required | 403 |
| USER_NOT_FOUND | User does not exist | 404 |
| USER_EMAIL_EXISTS | Email already registered | 409 |
| SUBSCRIPTION_REQUIRED | Premium subscription required | 403 |
| SUBSCRIPTION_LIMIT | Plan limit exceeded | 403 |
| RATE_LIMIT_EXCEEDED | Too many requests | 429 |
| VALIDATION_ERROR | Invalid request data | 422 |
| INTERNAL_ERROR | Server error | 500 |

---

## 13. CHANGELOG

### v1.0.0 (2026-01-19)
- Initial API release
- Authentication endpoints
- Signals CRUD
- Market data endpoints
- WebSocket real-time
- Webhooks support

---

*Documentation générée automatiquement via OpenAPI*
*Dernière mise à jour: 2026-01-19*
