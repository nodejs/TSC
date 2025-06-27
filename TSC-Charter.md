# Technical Steering Committee (TSC) Charter

## Section 1. Guiding Principle

The Node.js project is part of the OpenJS Foundation. The project
operates transparently, openly, collaboratively, and ethically.
Project proposals, timelines, and status must not merely be
open, but also easily visible to outsiders.

## Section 2. Evolution of OpenJS Foundation Governance

Most large, complex open source communities have both a business and a
technical governance model. Technical leadership for the projects
within the OpenJS Foundation is delegated to the projects through
their project charters by the OpenJS Cross Project Council (CPC).
In the case of the Node.js project, it is delegated to the Node.js
Technical Steering Committee (“TSC”). OpenJS Foundation’s business
leadership is the Board of Directors (the “Board”).

This charter can only be amended with the approval of the CPC.

## Section 3. Establishment of the TSC

TSC members can be either _regular_ members or _voting_ members. Regular
members can attend meetings and participate in TSC discussions, but do not
vote. Voting members can do everything regular members can do, and also have
the ability to cast votes when consensus is not reached on an issue.

TSC memberships are not time-limited. There is no maximum size of the TSC.
The TSC must have at least four voting members.

There is no specific set of requirements or qualifications for TSC
membership beyond these rules. The TSC may add additional voting members to the
TSC by a standard TSC motion. A TSC member can be removed from the
TSC by voluntary resignation or by a standard TSC motion. A standard TSC motion
can be used to change a regular TSC member to a voting TSC member, or to change
a voting TSC member to a regular TSC member.

In order to ensure adequate representation of the interests of diverse stakeholders,
no more than one-fourth of the TSC voting membership may be affiliated with the same
company/entity.
If a change in TSC voting membership or a change of affiliation by a TSC voting member
creates a situation where more than one-fourth of the TSC voting membership are
affiliated with the same company/entity, then the situation must be immediately remedied
by the removal of voting member status from one or more TSC voting members affiliated
with the over-represented company.

The TSC shall meet regularly using tools that enable participation by the
community (e.g. weekly on a Google Hangout On Air, or through any other
appropriate means selected by the TSC). The meeting shall be directed by
the TSC Chairperson. Responsibility for directing individual meetings may be
delegated by the TSC Chairperson to any other TSC voting member. Minutes or an
appropriate recording shall be taken and made available to the community
through accessible public postings.

TSC voting members are expected to regularly participate in TSC activities.

A TSC voting member is automatically converted to a TSC regular member if
they do not participate in three consecutive TSC votes.

## Section 4. Responsibilities of the TSC

Subject to such policies as may be set by the CPC, the TSC is
responsible for all technical development within the Node.js project,
including:

* Setting release dates.
* Release quality standards.
* Technical direction.
* Project governance and process.
* GitHub repository hosting.
* Conduct guidelines.
* Maintaining the list of additional Collaborators.
* Development process and any coding standards.
* Mediating technical conflicts between Collaborators or Foundation
  projects.
* Communication about the above that would be considered official, and the development process of said communication.

The TSC will define Node.js project’s release vehicles.

## Section 5. Node.js Project Operations

The TSC will establish and maintain a development process for the
Node.js project. The development process will establish guidelines
for how the developers and community will operate. It will, for example,
establish appropriate timelines for TSC review (e.g. agenda items must be
published at least a certain number of hours in advance of a TSC
meeting).

The TSC and entire technical community will follow any processes as may
be specified by the OpenJS Foundation Board relating to the intake and license
compliance review of contributions, including the OpenJS Foundation IP Policy.

## Section 6. Elections

Leadership roles in the Node.js project will be peer elected
representatives of the community.

For election of persons (such as the TSC Chairperson), a multiple-candidate
method should be used, such as:

* [Condorcet][] or
* [Single Transferable Vote][]

Multiple-candidate methods may be reduced to simple election by plurality
when there are only two candidates for one position to be filled. No
election is required if there is only one candidate and no objections to
the candidate's election. Elections shall be done within the projects by
the Collaborators active in the project.

The TSC voting members will elect from amongst voting TSC members a TSC
Chairperson to work on building an agenda for TSC meetings and a OpenJS
Cross Project Council (CPC) voting member to represent the TSC in
the OpenJS Foundation for a term of one year. The Chair and voting CPC
member may be (but are not required to be) the same person.
The TSC shall hold annual elections to select a TSC Chairperson and
voting CPC member; there are no limits on the number
of terms a TSC Chairperson or voting CPC member may serve.

## Section 7. Voting

For internal project decisions, Collaborators shall operate under Lazy
Consensus. The TSC shall establish appropriate guidelines for
implementing Lazy Consensus (e.g. expected notification and review time
periods) within the development process.

The TSC follows a [Consensus Seeking][] decision making model among voting members.
When an agenda item has appeared to reach a consensus the moderator will ask
"Does anyone object?" as a final call for dissent from the consensus.

For all votes, the winning candidate option is the one that wins a simple
majority of all TSC voting members in every head-to-head election against each
of the other candidates. A TSC voting member may choose to participate in any
vote through abstention. As long as a vote is open, TSC voting members' choices
must not be disclosed, to avoid influencing other voting members.

All changes to this charter must be approved by the CPC.

## Section 8. Project Roles

The Node.js git repository is maintained by the TSC and
additional Collaborators who are added by the TSC on an ongoing basis.

Individuals making significant and valuable contributions are made Collaborators
and given commit-access to the project. These individuals are identified by the
TSC and their addition as Collaborators is discussed during a TSC meeting.
Modifications of the contents of the git repository are made on a collaborative
basis as defined in the development process.

Collaborators may opt to elevate significant or controversial
modifications, or modifications that have not found consensus to the TSC
for discussion by assigning the `tsc-agenda` tag to a pull request or
issue. When consensus cannot be reached, the TSC voting members should serve as
the final arbiter by casting a vote. The TSC will maintain and publish a list of
current Collaborators, as well as a development process guide for Collaborators
and Contributors looking to participate in the development effort.

## Section 9. Definitions

* **Contributors**: contribute code or other artifacts, but do not have
  the right to commit to the code base. Contributors work with the
  project’s Collaborators to have code committed to the code base. A
  Contributor may be promoted to a Collaborator by the TSC. Contributors should
  rarely be encumbered by the TSC and never by the CPC or OpenJS Foundation Board.

* **Project**: a technical collaboration effort, e.g. a subsystem, that
  is organized through the project creation process and approved by the
  TSC.

[Condorcet]: https://en.wikipedia.org/wiki/Condorcet_method
[Consensus Seeking]: https://en.wikipedia.org/wiki/Consensus-seeking_decision-making
[Single Transferable Vote]: https://en.wikipedia.org/wiki/Single_transferable_vote
