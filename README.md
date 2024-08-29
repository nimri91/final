
```mermaid
---
title: ER Diagram
---
erDiagram
    USER ||--o{ BLOG : writes
    USER ||--o{ COMMENT : comments
    USER {
        int id PK
        string email
        integer role
    }
    BLOG ||--|{ COMMENT : contains
    BLOG {
        int id PK
        string title
        string body
    }
    COMMENT {
        int id PK
        integer blog_id
        string text
    }
    BLOG }|--|{ TAG : tagged-with
    TAG {
        int id PK
        string name
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

* ...