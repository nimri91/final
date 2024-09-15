
```mermaid
---
title: ER Diagram
---
erDiagram
    USER ||--o{ BLOG : writes
    USER {
        int id PK
        string email UK
        integer role "enum(0:admin, 1:user)"
    }
    BLOG {
        int id PK
        int user_id FK
        string title
        string body
    }
    BLOG }|--|{ TAG : tagged-with
    TAG {
        int id PK
        string name UK
    }
```
# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...# finalTask
