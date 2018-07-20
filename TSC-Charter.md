# Technical Steering Committee (TSC) Charter

## Section 1. Guiding Principle.

The Node.js Foundation will operate transparently, openly,
collaboratively, and ethically. Project proposals, timelines, and status
must not merely be open, but also easily visible to outsiders.

## Section 2. Evolution of Node.js Foundation Governance.

Most large, complex open source communities have both a business and a
technical governance model. Node.js Foundation’s technical leadership
is the Technical Steering Committee (“TSC”). Node.js Foundation’s business
leadership is the Board of Directors (the “Board”).

This Technical Steering Committee Charter reflects a carefully
constructed balanced role for the TSC and the Board in the governance of
Node.js Foundation. The charter amendment process is for the TSC to
propose changes using simple majority of the full TSC, the proposed
changes being subject to review and approval by the Board. The Board may
additionally make amendments to the TSC charter at any time, though the
Board will not interfere with day-to-day discussions, votes or meetings
of the TSC.

## Section 3. Board’s Role in Setting Node.js Foundation’s Strategic Direction.  

The Board will set the overall TSC Policy. The policy will describe the
overarching scope of the Node.js Foundation initiative, Node.js
Foundation’s technical vision and direction and project release
expectations in the form of expected cadence and intent. The Board will
use the TSC as a delegate body for governing technical implementation,
individual project scope and direction while they remain within the scope
and direction of the policies as described in the TSC Policy document and
approved by the Board.

## Section 4. Establishment of the TSC.

TSC memberships are not time-limited. There is no maximum size of the TSC.
The size is expected to vary in order to ensure adequate coverage of important
areas of expertise, balanced with the ability to make decisions efficiently.
The TSC must have at least three members.

There is no specific set of requirements or qualifications for TSC
membership beyond these rules. The TSC may add additional members to the
TSC by a standard TSC motion and vote. A TSC member may be removed from the
TSC by voluntary resignation, by a standard TSC motion, or in accordance to the
participation rules described below.

Changes to TSC membership should be posted in the agenda, and may be suggested
as any other agenda item.

No more than one-fourth of the TSC members may be affiliated with the
same employer. If removal or resignation of a TSC member, or a change of
employment by a TSC member, creates a situation where more than
one-fourth of the TSC membership shares an employer, then the situation
must be immediately remedied by the resignation or removal of one or more
TSC members affiliated with the over-represented employer(s).

The TSC may, at its discretion, invite any number of non-voting observers to
participate in the public portion of TSC discussions and meetings.

The TSC shall meet regularly using tools that enable participation by the
community (e.g. weekly on a Google Hangout On Air, or through any other
appropriate means selected by the TSC). The meeting shall be directed by
the TSC Chairperson. Responsibility for directing individual meetings may be
delegated by the TSC Chairperson to any other TSC member. Minutes or an
appropriate recording shall be taken and made available to the community
through accessible public postings.

TSC members are expected to regularly participate in TSC activities.

In the case where an individual TSC member -- within any three month period --
attends fewer than 25% of the regularly scheduled meetings, does not
participate in TSC discussions, *and* does not participate in TSC votes, the
member shall be automatically removed from the TSC. The member may be invited
to continue attending TSC meetings as an observer.

## Section 5. Responsibilities of the TSC.  

Subject to such policies as may be set by the Board, the TSC is
responsible for all technical development within the Node.js Foundation,
including:

* Setting release dates
* Release quality standards
* Technical direction
* Maintaining the list of additional Collaborators
* Development process and any coding standards
* Mediating technical conflicts between Collaborators or Foundation
projects
* Management of the `nodejs-private` GitHub organization

The TSC will define Node.js Foundation’s release vehicles and serve as
Node.js Foundation’s primary technical liaison body with external open
source projects, consortiums and groups.

The TSC shares responsibility with the Node.js Community Committee ("CommComm")
for:

* Management of the `nodejs` GitHub organization
* Project governance and process
* Conduct guidelines

TSC and CommComm will use the `nodejs/admin` GitHub repository to manage shared
responsibilities. In the event the CommComm and TSC are unable to agree on a
decision, the result is _status quo_.

## Section 6. Node.js Foundation Operations.

The TSC will establish and maintain a development process for Node.js
Foundation Projects. The development process will establish guidelines
for how the developers and community will operate. It will, for example,
establish appropriate timelines for TSC review (e.g. agenda items must be
published at least a certain number of hours in advance of a TSC
meeting).

There will be multiple Projects under the Node.js Foundation organized by
modules or subsystems. The TSC is responsible for organizing the Project
structure, including possibly the creation and alignment of sub-Projects.
Each Project must be within such policies as may be set by the Board,
have a well-defined scope and must work within that scope. The
development process will provide for Projects to follow the lifecycle
process as described in the Project Lifecycle document. The development
process will include a process for the TSC to oversee and approve changes
in the lifecycle of a Project, which will include consideration of the
following criteria:

* Cleanliness of code base
* Ample and diverse Contributors and Collaborators to assure vitality of
the project.
* Stability (e.g. presence of test suites, stable APIs and use of an
  appropriate source-code control system).
* Predictability of releases
* Alignment with Node.js Foundation’s goals and priorities.

The TSC and entire technical community will follow any processes as may
be specified by the Board relating to the intake and license compliance
review of contributions, including the Node.js Foundation IP Policy.

## Section 7. Elections

Leadership roles in Node.js Foundation will be peer elected
representatives of the community.

For election of persons (such as the TSC Chairperson), a multiple-candidate
method should be used, such as:

* [Condorcet][] or
* [Single Transferable Vote][]

Multiple-candidate methods may be reduced to simple election by plurality
when there are only two candidates for one position to be filled. No
election is required if there is only one candidate and no objections to
the candidates election. Elections shall be done within the Projects by
the Collaborators active in the Project.

The TSC will elect from amongst voting TSC members a TSC Chairperson to
work on building an agenda for TSC meetings and a TSC Director to represent
the TSC to the Board for a term of one year according to the Node.js Foundation’s
By-laws. The Chair and Director may be (but are not required to be)
the same person. The TSC shall hold annual elections to select a TSC
Chairperson and Director; there are no limits on the number of terms a
TSC Chairperson or Director may serve.

## Section 8. Voting

For internal project decisions, Collaborators shall operate under Lazy
Consensus. The TSC shall establish appropriate guidelines for
implementing Lazy Consensus (e.g. expected notification and review time
periods) within the development process.

The TSC follows a [Consensus Seeking][] decision making model. When an agenda
item has appeared to reach a consensus the moderator will ask "Does anyone
object?" as a final call for dissent from the consensus.

If an agenda item cannot reach a consensus a TSC member can call for
either a closing vote or a vote to table the issue to the next meeting.
The call for a vote must be seconded by a majority of the TSC or else the
discussion will continue.

For all votes, a simple majority of all TSC members for, or against, the issue
wins. A TSC member may choose to participate in any vote through abstention.

Note that, in addition to requiring a simple majority vote of the TSC, all
changes to this charter are also subject to approval from the Node.js
Foundation board.

## Section 9. Project Roles

The Node.js Foundation git repository is maintained by the TSC and
additional Collaborators who are added by the TSC on an ongoing basis.

Individuals making significant and valuable contributions,
“Contributor(s)”, are made Collaborators and given commit-access to the
project. These individuals are identified by the TSC and their addition
as Collaborators is discussed during the weekly TSC meeting.
Modifications of the contents of the git repository are made on a
collaborative basis as defined in the development process.

Collaborators may opt to elevate significant or controversial
modifications, or modifications that have not found consensus to the TSC
for discussion by assigning the `tsc-agenda` tag to a pull request or
issue. The TSC should serve as the final arbiter where required. The TSC
will maintain and publish a list of current Collaborators by Project, as
well as a development process guide for Collaborators and Contributors
looking to participate in the development effort.

## Section 10. Definitions

* **Contributors**: contribute code or other artifacts, but do not have
the right to commit to the code base. Contributors work with the
Project’s Collaborators to have code committed to the code base. A
Contributor may be promoted to a Collaborator by the TSC. Contributors should
rarely be encumbered by the TSC and never by the Board.

* **Project**: a technical collaboration effort, e.g. a subsystem, that
is organized through the project creation process and approved by the
TSC.

[Consensus Seeking]: http://en.wikipedia.org/wiki/Consensus-seeking_decision-making
[Condorcet]: http://en.wikipedia.org/wiki/Condorcet_method
[Single Transferable Vote]: http://en.wikipedia.org/wiki/Single_transferable_vote
