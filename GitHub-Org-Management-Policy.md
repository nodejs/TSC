# Node.js GitHub Organization Management Policy

The Node.js Foundation GitHub Organization (https://github.com/nodejs) is
provided as a development resource by the Node.js Foundation under the direction
of the Node.js Technical Steering Committee (TSC) and Node.js Foundation
Community Committee (CommComm).

## Node.js Admin Repository

The [Node.js admin repository](https://github.com/nodejs/admin) serves as the
central location for managing Node.js GitHub Organization administrative
activities. Only Node.js GitHub Organization owners, TSC members, and Community
Committee members have write permissions to the Node.js admin repository.

## Organization Roles

### Owners

Whether to grant Owner permissions is determined by optimizing
for the following conflicting requirements:

* Limiting access to reduce risk
* Enabling individuals to move community work forward without undue delay

When possible, automation and tools should be used to reduce the breadth of
access that needs to be provided in order to enable individuals to move
community work forward. As these tools are created, the groups to which
Owner permissions are granted will be reduced.

The following groups are granted Ownership permissions:

* TSC members
* Chair of the Community Committee
* Moderation team members. The Moderation Team members
will limit their use of the access granted to that required to carry out
moderation across the existing repositories.

### Members

GitHub users are added as members to the Node.js GitHub Organization when they
are added to any Working Group or team. Organization Owners should add new
members to the organization when requested by a Working Group or team.

## Repositories

Any organization member may request the creation of a new repository within the
Node.js Foundation GitHub Organization by opening an issue in the Node.js admin
repository. Provided there are no objections from any TSC or CommComm members,
such requests are approved automatically after 72 hours. If any objection is
made, the request may be moved to a vote in each of the Technical Steering and
Community Committees.  A simple majority of each group *rejecting* the creation
of the repository is required to block creating the repository. Such requests
must be posted as issues in the Node.js admin repository.

Any repository created under the Node.js GitHub Organization is considered to be
a project under the ownership of the Node.js Foundation, and thereby subject
to the Intellectual Property and Governance policies of the Foundation.

No repository may be deleted, transferred into, or transferred out of the
Node.js Foundation GitHub Organization without a simple majority of both the
TSC and CommComm in favor of the action. In certain cases, Node.js Foundation
Board of Directors approval may also be required.

## Removing or Banning Individuals

Only Node.js GitHub Organization owners may remove an individual from the
Node.js Foundation membership or ban individuals. This is due largely to
limitations in the way GitHub permissions are structured.

To remove any current member from the GitHub organization, an issue must be
opened in the Node.js admin repository. If, after 72 hours, there are no
objections from any TSC or Community Committee members, removal becomes
automatic. If there are objections, then simple majority votes of each of the
Technical Steering and Community Committees in favor of removal are required.

Banning an individual who is not currently a member of the GitHub organization
may occur at any time subject to the policies outlined in the Moderation
Guidelines.

## Use of Bots and Services

Automation tools such as bots and third-party services on any repository must
be approved by the TSC and CommComm and are subject to regular security audits.
Bots that perform actions on behalf of the project (such as moderation or membership
management actions) are required to maintain a log, accessible to all individuals
granted Owner permissions, of all actions taken.
