<div align="center">

<img src="banner.png" alt="NeuroFleetX Banner" width="100%" />

<br/>
<br/>

# NeuroFleetX
### AI-Driven Urban Mobility Optimization Platform

<br/>

[![Java](https://img.shields.io/badge/Java-17-blue)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)](https://spring.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)](https://www.mysql.com/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-06b6d4)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Modern-black)](https://ui.shadcn.com)

<br/>

**A scalable urban mobility platform designed to optimize fleet operations,  
AI-based routing, bookings, and vehicle health analytics.**

</div>

---

## Overview

**NeuroFleetX** is a full-stack urban mobility management system that enables administrators and drivers to efficiently manage fleets, optimize routes, monitor vehicle health, and handle bookings through intelligent, data-driven insights.

The system integrates AI-assisted routing APIs and predictive analytics while providing elegant, role-based dashboards built with modern UI technologies.

---

## Core Objectives

- Centralized fleet and driver management  
- AI-assisted route and load optimization  
- Predictive vehicle health and maintenance tracking  
- Secure, role-based dashboards (Admin & Driver)  
- Clean, modern UI using Tailwind CSS and shadcn/ui  

---

## Functional Modules

### 1. Authentication & Role Management
- Secure login and registration  
- Role-based access control (ADMIN, DRIVER)  
- JWT-based authentication  
- Protected frontend routes  

---

### 2. Fleet Inventory & Vehicle Telemetry
- Vehicle registration and assignment  
- Vehicle type, model, and capacity tracking  
- Real-time vehicle location and status  
- Telemetry-ready architecture via APIs  

---

### 3. AI Route & Load Optimization Engine
- External map and routing API integration  
- Traffic-aware route optimization  
- Distance and duration calculation  
- Driver-specific route visualization  

---

### 4. Predictive Maintenance & Health Analytics
- Vehicle health score computation  
- Maintenance alerts and recommendations  
- Historical health log analysis  
- Admin-level monitoring dashboard  

---

### 5. Customer Booking & Smart Recommendations
- Ride request and booking management  
- Smart driver and vehicle assignment  
- AI-assisted route and fare estimation  
- Booking lifecycle tracking  

---

### 6. Admin Dashboard & Urban Mobility Insights
- Fleet utilization analytics  
- Booking trends and demand analysis  
- Vehicle health overview  
- Driver performance insights  

---

## Technology Stack

### Backend
- Java 17  
- Spring Boot  
- Spring Security (JWT)  
- JPA / Hibernate  
- MySQL  

### Frontend
- React 18  
- Tailwind CSS  
- shadcn/ui  
- Axios  
- React Router  

### AI & External APIs
- Route optimization APIs (Google Maps / OpenRouteService)  
- Predictive analytics (rule-based, ML-ready design)  

---

## Database Design (MySQL)

### Users Table
| Column | Type | Description |
|------|------|-------------|
| id | BIGINT (PK) | Unique user identifier |
| name | VARCHAR(100) | User full name |
| email | VARCHAR(100) | Unique email |
| password | VARCHAR(200) | Encrypted password |
| role | VARCHAR(20) | ADMIN / DRIVER |
| created_at | TIMESTAMP | Account creation time |

---

### Vehicles Table
| Column | Type | Description |
|------|------|-------------|
| id | BIGINT (PK) | Vehicle identifier |
| vehicle_no | VARCHAR(50) | Registration number |
| model | VARCHAR(100) | Vehicle model |
| type | VARCHAR(50) | Vehicle type |
| driver_id | BIGINT (FK) | Assigned driver |
| status | VARCHAR(20) | Active / Repair / Offline |
| lat | DOUBLE | Latitude |
| lng | DOUBLE | Longitude |
| health_status | VARCHAR(20) | Overall health status |

---

### Vehicle Health Logs
| Column | Type | Description |
|------|------|-------------|
| id | BIGINT (PK) | Health log ID |
| vehicle_id | BIGINT (FK) | Related vehicle |
| engine_temp | DOUBLE | Engine temperature |
| battery_level | DOUBLE | Battery level |
| tire_pressure | DOUBLE | Tire pressure |
| health_score | DOUBLE | Computed score |
| created_at | TIMESTAMP | Log time |

---

### Maintenance Logs
| Column | Type | Description |
|------|------|-------------|
| id | BIGINT (PK) | Maintenance ID |
| vehicle_id | BIGINT (FK) | Vehicle reference |
| issue | VARCHAR(200) | Identified issue |
| severity | VARCHAR(20) | Severity level |
| recommended_action | VARCHAR(200) | Suggested fix |
| created_at | TIMESTAMP | Log time |

---

### Bookings Table
| Column | Type | Description |
|------|------|-------------|
| id | BIGINT (PK) | Booking ID |
| customer_name | VARCHAR(100) | Customer name |
| pickup_lat | DOUBLE | Pickup latitude |
| pickup_lng | DOUBLE | Pickup longitude |
| drop_lat | DOUBLE | Drop latitude |
| drop_lng | DOUBLE | Drop longitude |
| driver_id | BIGINT (FK) | Assigned driver |
| vehicle_id | BIGINT (FK) | Assigned vehicle |
| status | VARCHAR(20) | Scheduled / Completed / Cancelled |
| created_at | TIMESTAMP | Booking time |

---

## Role-Wise Dashboards

### Admin Dashboard
- Fleet overview and availability  
- Booking analytics and trends  
- Vehicle health monitoring  
- Maintenance alerts and reports  

### Driver Dashboard
- Assigned vehicle details  
- AI-optimized route display  
- Booking schedule  
- Vehicle health status  

---

## UI Design Philosophy
- Minimal and professional visual design  
- Consistent spacing and typography  
- Fully responsive layouts  
- Enterprise-grade UI using shadcn/ui  
- Clean dashboards with cards and charts  

---

<div align="center">

**NeuroFleetX – Optimizing Urban Mobility Through Intelligence**

</div>
