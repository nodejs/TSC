# Node.js GitHub Organization Management Policy

The Node.js Foundation Github Organization (https://github.com/nodejs) is
provided as a development resource by the Node.js Foundation under the
joint operational direction of the Node.js Technical Steering Committee (TSC)
and Node.js Foundation Community Committee (CommComm).

## Node.js Admin Repository

The Node.js Admin Repository (nodejs/admin) will serve the central location for
managing Node.js GitHub Organization administrative activities. Only Node.js
GitHub Organization owners, TSC members, and Community Committee members will
have write permissions to the nodejs/admin repository.

## Organization Roles

### Owners

The Node.js Foundation Executive Director, Node.js TSC Director, TSC Chair,
Community Committee Chair, and Node.js Foundation Education Manager shall be
the only individuals granted Owner permissions within the Node.js GitHub
Organization. Should, at any point in the future, the Node.js Foundation
Board establish a Community Committee Director position equivalent to the
TSC Director, that individual would also be automatically granted Owner
permissions within the organization.

Upon the completion of the terms of service for each of these individuals,
their Owner permissions within the GitHub organization shall be removed.

### Members

GitHub users are added as members to the Node.js GitHub Organization when they
are added to any Working Group. Organization Owners should add new members
to the organization when requested by a Working Group.

## Repositories

Any organization member may request the creation of a new repository within the
Node.js Foundation GitHub Organization. Provided there are no objections from
any voting TSC or CommComm member, such requests are approved automatically
after 72 hours. If any objection is made, the request may be moved to a vote in
each of the Technical Steering and Community Committees.  A simple majority of
each group *rejecting* the creation of the repository is required to block
creating the repository. Such requests must be posted as issues in the
nodejs/admin repository.

Any repository created under the Node.js GitHub Organization is considered to be
a project under the ownership of the Node.js Foundation, and thereby subject
to the Intellectual Property and Governance policies of the Foundation.

No repository may be deleted, transferred in to, or transferred out of, the
Node.js Foundation GitHub Organization without a simple majority of both
the TSC and CommComm in *favor* of the action. In certain cases, Node.js
Foundation Board of Directors approval may also be required.

All repositories must have a README that clearly identifies the purpose of the
repository, governance documentation that details how the repository is managed,
and an indication of whether the repository falls under the operational
direction of either the TSC or CommComm. 

Repositories that are under the operational direction of the TSC are subject to
TSC oversight.

Repositories that are under the operational direction of the Community Committee
are subject to CommComm oversight.

## Removing or Banning Individuals

Only Node.js GitHub Organization owners may remove an individual from the
Node.js Foundation membership or ban individuals. This is due largely to
limitations in the way GitHub permissions are structured.

To remove any current member from the GitHub organization, an issue must be
opened in the nodejs/admin repository. If, after 72 hours, there are no
objections from any TSC or Community Committee members, removal becomes automatic.
If there are objections, then a simple majority vote of each of the Technical
Steering and Community Committees in *favor* of removal is required.

Banning an individual who is not currently a member of the GitHub organization
may occur at any time subject to the policies outlined in the Moderation
Guidelines.

## Use of Bots and Services

Automation tools such as bots and third-party services on any repository must
be approved by the TSC and are subject to regular security audits. Bots that
perform actions on behalf of the project (such as moderation or membership
management actions) are required to maintain a log, accessible to both the
TSC and Community Committee members, of all actions taken.
