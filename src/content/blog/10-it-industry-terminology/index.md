---
title: "IT industry terminology"
summary: "Short definitions for common terms in the IT industry: engineering, business, management"
date: "July 3 2024"
draft: false
tags:
- terminology
---

## Introduction

The IT industry has a huge amount of terminology. In this document, I will collect terminology that is found and used by programmers and not only, also by people from different roles and specializations.

Although many new words and expressions are coming from the world of technology to the world of business, there will also be some that relate only to business, such as Monthly Recurring Revenue (MRR).

It is important for us, as developers and programmers, to be able to speak the same language to each other and with all representatives of the IT industry: company founders, marketers, management, or representatives of other industries in which the same words may be understood differently. Therefore, there may be many intersections and references to other dictionaries.

This post will be updated from time to time as I come across something new that I think is important to add here. The structure of the document can also change, if I see that terms are being formed that can be combined under one heading, this will be done. But initially, let it be a flat structure.

By the way, please note that this is just terminology. That is, in this post I am not trying to agree with you on how it is correct (although, of course, you need to strive for accuracy), I am rather trying to figure out how a certain word or phrase is most likely understood in the IT industry and what we may have options for understanding. See the article:
<a href="https://contentrules.com/glossary-versus-terminology-whats-difference/" target="_blank">Glossary Versus Terminology: What’s the Difference?</a>

<br/><br/>

## Common

### STEM 
STEM is a common abbreviation for four closely connected areas of study: **S** - science, **T** - technology, **E** - engineering and **M** - mathematics.

<br/><br/>

### The RADIO Framework (abbreviation)

The RADIO framework helps to answer front end system design questions.

The RADIO framework is also helpful when working on new front end projects at work, especially when writing design documentation. It's a good framework to learn.

1. **Requirements exploration:** Understand the problem thoroughly and determine the scope by asking a number of clarifying questions.
2. **Architecture / High-level design:** Identify the key components of the product and how they are related to each other.
3. **Data model:** Describe the various data entities, the fields they contain and which component(s) they belong to.
4. **Interface definition (API):** Define the interface (API) between components in the product, functionality of each API, their parameters and responses.
5. **Optimizations and deep dive:** Discuss about possible optimization opportunities and specific areas of interest when building the product.


**Links:**
- <a href="https://www.greatfrontend.com/system-design/framework" target="_blank">The RADIO Framework</a>
- <a href="https://www.frontendinterviewhandbook.com/front-end-system-design" target="_blank">Front End System Design Interview Overview</a>

<br/><br/>

## Database

### ACID (Atomicity, Consistency, Isolation, Durability)

**Atomicity:** All operations (to read, write, update or delete data) in a transaction must be completed successfully or none of them will be completed. If any part of the transaction cannot be completed, the entire transaction is rolled back.

Example: When transferring money between accounts, the transaction must either complete completely (the amount is debited from one account and credited to another) or not occur at all (if there is a failure, the funds should not be debited).

**Consistency**: Consistency guarantees that changes made within a transaction are consistent with database constraints. This includes all rules, constraints, and triggers. If the data gets into an illegal state, the whole transaction fails.

Example: let’s say there is a constraint that the balance should be a positive integer. If we try to overdraw money, then the balance won’t meet the constraint. Because of that, the consistency of the ACID transaction will be violated and the transaction will fail.

**Isolation**: When multiple users are reading and writing from the same table all at once, isolation of their transactions ensures that the concurrent transactions don't interfere with or affect one another. Each request can occur as though they were occurring one by one, even though they're actually occurring simultaneously.

Example: let’s say that our account balance is $200. Two transactions for a $100 withdrawal start at the same time. The transactions run in isolation which guarantees that when they both complete, we’ll have a balance of $0 instead of $100.

**Durability** ensures that changes to your data made by successfully executed transactions will be saved, even in the event of system failure.

Example: If a user makes a purchase and the money is debited from the account, this information must be securely stored so that if the system fails, the purchase data is not lost.

