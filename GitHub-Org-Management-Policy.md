# Node.js GitHub Organization Management Policy

The Node.js Foundation GitHub Organization (https://github.com/nodejs) is
provided as a development resource by the Node.js Foundation under the direction
of the Node.js Technical Steering Committee (TSC) and Node.js Foundation
Community Committee (CommComm).

## Node.js Admin Repository

The Node.js Admin Repository (nodejs/admin) will serve as the central location
for managing Node.js GitHub Organization administrative activities. Only Node.js
GitHub Organization owners, TSC members, and Community Committee members will
have write permissions to the nodejs/admin repository.

## Organization Roles

### Owners

TSC members are the only individuals granted Owner permissions within the
Node.js GitHub Organization.

### Members

GitHub users are added as members to the Node.js GitHub Organization when they
are added to any Working Group. Organization Owners should add new members
to the organization when requested by a Working Group.

## Repositories

Any organization member may request the creation of a new repository within the
Node.js Foundation GitHub Organization. Provided there are no objections from
any TSC member, such requests are approved automatically
after 72 hours. If any objection is made, the request may be moved to a vote in
each of the Technical Steering and Community Committees.  A simple majority of
each group *rejecting* the creation of the repository is required to block
creating the repository. Such requests must be posted as issues in the
nodejs/admin repository.

Any repository created under the Node.js GitHub Organization is considered to be
a project under the ownership of the Node.js Foundation, and thereby subject
to the Intellectual Property and Governance policies of the Foundation.

No repository may be deleted, transferred in to, or transferred out of the
Node.js Foundation GitHub Organization without a simple majority of the TSC in
favor of the action. In certain cases, Node.js Foundation Board of Directors
approval may also be required.

## Removing or Banning Individuals

Only Node.js GitHub Organization owners may remove an individual from the
Node.js Foundation membership or ban individuals. This is due largely to
limitations in the way GitHub permissions are structured.

To remove any current member from the GitHub organization, an issue must be
opened in the nodejs/admin repository. If, after 72 hours, there are no
objections from any TSC or Community Committee members, removal becomes
automatic. If there are objections, then simple majority votes of each of the
Technical Steering and Community Committees in favor of removal are required.

Banning an individual who is not currently a member of the GitHub organization
may occur at any time subject to the policies outlined in the Moderation
Guidelines.

## Use of Bots and Services

Automation tools such as bots and third-party services on any repository must
be approved by the TSC and are subject to regular security audits. Bots that
perform actions on behalf of the project (such as moderation or membership
management actions) are required to maintain a log, accessible to the TSC, of
all actions taken.
