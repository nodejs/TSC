# Node.js Core Working Groups

Node.js Core Working Groups are autonomous projects created by the
[Technical Steering Committee (TSC)][].

Working Groups can be formed at any time but must be ratified by the TSC.
Once formed the work defined in the Working Group charter is the
responsibility of the WG rather than the TSC.

It is important that Working Groups are not formed prematurely. Working
Groups are not formed to begin a set of tasks but instead are formed
once that work is already underway and the contributors
think it would benefit from being done as an autonomous project.

If the work defined in a Working Group's charter is complete, the charter
should be revoked.

A Working Group's charter can be revoked either by consent of the Working
Group's members or by a TSC vote. Once revoked, any future work that arises
becomes the responsibility of the TSC.

## Joining a WG

To find out how to join a working group, consult the GOVERNANCE.md in
the working group's repository.

## Starting A Core Working Group

A Working Group is established by first defining a charter that can be
ratified by the TSC. A charter is a statement of purpose and a
list of responsibilities. When requesting that a working group be chartered, it
is also necessary to provide a list of initial membership.

A working group needs 3 initial members. These should be individuals
already undertaking the work described in the charter.

The list of responsibilities should be specific. Once established, these
responsibilities are no longer governed by the TSC and therefore should
not be broad or subjective. The only recourse the TSC has over the working
group is to revoke the entire charter.

If the responsibilities described in the charter are currently undertaken by
another working group then the charter will additionally have to be ratified by
that working group.

You can submit the working group charter for ratification by sending
a pull request to this document to add the charter it to the
list of current Working Groups. Once ratified, the list of
members should be maintained in the Working Group's
README.

## Bootstrap Governance

Once the TSC ratifies a charter, the working group inherits the following
documentation for governance, contribution, conduct and an MIT
LICENSE. The working group is free to change these documents through their own
governance process, hence the term "bootstrap."

```markdown
### *[insert WG name]* Working Group

The Node.js *[insert WG name]* is governed by a Working Group (WG)
that is responsible for high-level guidance of the project.

The WG has final authority over this project including:

* Technical direction
* Project governance and process (including this policy)
* Contribution policy
* GitHub repository hosting
* Conduct guidelines
* Maintaining the list of additional Collaborators

For the current list of WG members, see the project
[README.md](./README.md#current-project-team-members).

### Collaborators

The *[insert WG name]* GitHub repository is
maintained by the WG and additional Collaborators who are added by the
WG on an ongoing basis.

Individuals making significant and valuable contributions are made
Collaborators and given commit-access to the project. These
individuals are identified by the WG and their addition as
Collaborators is discussed during the weekly WG meeting.

_Note:_ If you make a significant contribution and are not considered
for commit-access log an issue or contact a WG member directly and it
will be brought up in the next WG meeting.

Modifications of the contents of the *[insert WG repo]* repository are made on
a collaborative basis. Anybody with a GitHub account may propose a
modification via pull request and it will be considered by the project
Collaborators. All pull requests must be reviewed and accepted by a
Collaborator with sufficient expertise who is able to take full
responsibility for the change. In the case of pull requests proposed
by an existing Collaborator, an additional Collaborator is required
for sign-off. Consensus should be sought if additional Collaborators
participate and there is disagreement around a particular
modification. See _Consensus Seeking Process_ below for further detail
on the consensus model used for governance.

Collaborators may opt to elevate significant or controversial
modifications, or modifications that have not found consensus to the
WG for discussion by assigning the ***WG-agenda*** tag to a pull
request or issue. The WG should serve as the final arbiter where
required.

For the current list of Collaborators, see the project
[README.md](./README.md#current-project-team-members).

### WG Membership

WG seats are not time-limited.  There is no fixed size of the WG.
However, the expected target is between 6 and 12, to ensure adequate
coverage of important areas of expertise, balanced with the ability to
make decisions efficiently.

There is no specific set of requirements or qualifications for WG
membership beyond these rules.

The WG may add additional members to the WG by unanimous consensus.

A WG member may be removed from the WG by voluntary resignation, or by
unanimous consensus of all other WG members.

Changes to WG membership should be posted in the agenda, and may be
suggested as any other agenda item (see "WG Meetings" below).

If an addition or removal is proposed during a meeting, and the full
WG is not in attendance to participate, then the addition or removal
is added to the agenda for the subsequent meeting.  This is to ensure
that all members are given the opportunity to participate in all
membership decisions.  If a WG member is unable to attend a meeting
where a planned membership decision is being made, then their consent
is assumed.

No more than 1/3 of the WG members may be affiliated with the same
employer.  If removal or resignation of a WG member, or a change of
employment by a WG member, creates a situation where more than 1/3 of
the WG membership shares an employer, then the situation must be
immediately remedied by the resignation or removal of one or more WG
members affiliated with the over-represented employer(s).

### WG Meetings

The WG meets weekly on a Google Hangout On Air. A designated moderator
approved by the WG runs the meeting. Each meeting should be
published to YouTube.

Items are added to the WG agenda that are considered contentious or
are modifications of governance, contribution policy, WG membership,
or release process.

The intention of the agenda is not to approve or review all patches;
that should happen continuously on GitHub and be handled by the larger
group of Collaborators.

Any community member or contributor can ask that something be added to
the next meeting's agenda by logging a GitHub Issue. Any Collaborator,
WG member or the moderator can add the item to the agenda by adding
the ***WG-agenda*** tag to the issue.

Prior to each WG meeting the moderator will share the Agenda with
members of the WG. WG members can add any items they like to the
agenda at the beginning of each meeting. The moderator and the WG
cannot veto or remove items.

The WG may invite persons or representatives from certain projects to
participate in a non-voting capacity.

The moderator is responsible for summarizing the discussion of each
agenda item and sends it as a pull request after the meeting.

### Consensus Seeking Process

The WG follows a [Consensus Seeking][] decision-making model.

When an agenda item has appeared to reach a consensus the moderator
will ask "Does anyone object?" as a final call for dissent from the
consensus.

If an agenda item cannot reach a consensus a WG member can call for
either a closing vote or a vote to table the issue to the next
meeting. The call for a vote must be seconded by a majority of the WG
or else the discussion will continue. Simple majority wins.

Note that changes to WG membership require unanimous consensus.  See
"WG Membership" above.

<a id="developers-certificate-of-origin"></a>
## Developer's Certificate of Origin 1.1

Use of a CLA or DCO is mandatory for all all OpenJS Foundation projects. The Node.js project has chosen to use the DCO 1.1

By making a contribution to this project, I certify that:

* (a) The contribution was created in whole or in part by me and I
  have the right to submit it under the open source license
  indicated in the file; or

* (b) The contribution is based upon previous work that, to the best
  of my knowledge, is covered under an appropriate open source
  license and I have the right under that license to submit that
  work with modifications, whether created in whole or in part
  by me, under the same open source license (unless I am
  permitted to submit under a different license), as indicated
  in the file; or

* (c) The contribution was provided directly to me by some other
  person who certified (a), (b) or (c) and I have not modified
  it.

* (d) I understand and agree that this project and the contribution
  are public and that a record of the contribution (including all
  personal information I submit with it, including my sign-off) is
  maintained indefinitely and may be redistributed consistent with
  this project or the open source license(s) involved.

### Moderation Policy

The [Node.js Moderation Policy] applies to this WG.

### Code of Conduct

The [Node.js Code of Conduct][] applies to this WG.

[Node.js Code of Conduct]: https://github.com/nodejs/TSC/blob/master/CODE_OF_CONDUCT.md
[Node.js Moderation Policy]: https://github.com/nodejs/TSC/blob/master/Moderation-Policy.md
[Consensus Seeking]: https://en.wikipedia.org/wiki/Consensus-seeking_decision-making
```

## Current Working Groups

* [Streams](#streams)
* [Build](#build)
* [Diagnostics](#diagnostics)
* [Docker](#docker)
* [Addon API](#addon-api)
* [Release](#release)
* [Package Maintenance](#package-maintenance)
* [Undici](#undici)

### [Streams](https://github.com/nodejs/readable-stream)

The Streams Working Group is dedicated to the support and improvement of the
Streams API as used in Node.js and the npm ecosystem. We seek to create a
composable API that solves the problem of representing multiple occurrences
of an event over time in a humane, low-overhead fashion. Improvements to the
API will be driven by the needs of the ecosystem; interoperability and
backwards compatibility with other solutions and prior versions are paramount
in importance.

Responsibilities include:

* Addressing stream issues on the Node.js issue tracker.
* Authoring and editing stream documentation within the Node.js project.
* Reviewing changes to stream subclasses within the Node.js project.
* Redirecting changes to streams from the Node.js project to this project.
* Assisting in the implementation of stream providers within Node.js.
* Recommending versions of `readable-stream` to be included in Node.js.
* Messaging about the future of streams to give the community advance notice of
  changes.

### [Build](https://github.com/nodejs/build)

The Build Working Group's purpose is to create and maintain a distributed
automation infrastructure.

Responsibilities include:

* Producing packages for all target platforms.
* Running tests.
* Running performance testing and comparisons.
* Creating and managing build-containers.

### [Diagnostics](https://github.com/nodejs/diagnostics)

The Diagnostics Working Group's purpose is to surface a set of comprehensive,
documented, and extensible diagnostic interfaces for use by Node.js tools and
JavaScript VMs.

Responsibilities include:

* Collaborating with V8 to integrate `v8_inspector` into Node.js.
* Collaborating with V8 to integrate `trace_event` into Node.js.
* Collaborating with Core to refine `async_wrap` and `async_hooks`.
* Maintaining and improving OS trace system integration (e.g. ETW, LTTNG, dtrace).
* Documenting diagnostic capabilities and APIs in Node.js and its components.
* Exploring opportunities and gaps, discussing feature requests, and addressing
  conflicts in Node.js diagnostics.
* Fostering an ecosystem of diagnostics tools for Node.js.
* Defining and adding interfaces/APIs in order to allow dumps to be generated
  when needed.
* Defining and adding common structures to the dumps generated in order to
  support tools that want to introspect those dumps.

### [Docker](https://github.com/nodejs/docker-node)

The Docker Working Group's purpose is to build, maintain, and improve official
Docker images for the Node.js project.

Responsibilities include:

* Keeping the official Docker images updated in line with new Node.js releases.
* Decide and implement image improvements and/or fixes.
* Maintain and improve the images' documentation.

### [Release](https://github.com/nodejs/release)

The Release Working Group manages the release process for Node.js.

Responsibilities include:

* Define the release process.
* Define the content of releases.
* Generate and create releases.
* Test Releases.
* Manage the Long Term Support and Current branches including
  backporting changes to these branches.
* Define the policy for what gets backported to release streams.

### [Package Maintenance](https://github.com/nodejs/package-maintenance)

Responsibilities include:

* Building, documenting and evangelizing guidance, tools and processes that make it easier for maintainers to
  maintain packages and accept help from those who depend on their packages.
* Management of repositories within the [pkgjs](https://github.com/pkgjs)
  GitHub organization including but not limited to:
  * Managing the list of organization owners which supplement the standard
    Node.js organization owners as outlined in:
    <https://github.com/nodejs/admin/blob/master/GITHUB_ORG_MANAGEMENT_POLICY.md#owners>
  * Overseeing new repositories (creating, moving, removing)
  * Managing the maintainer teams for all of the repositories.
  * Contribution policy for repositories
* Technical direction for the projects within
  the [pkgjs](https://github.com/pkgjs)  organization
* Project governance and process (including this policy)
* Managing the maintainer teams and contribution policies for the
  following repositories
  * nodejs/ci-config-travis
  * nodejs/ci-config-github-actions
  * nodejs/package-maintenance repository.

### [Undici](https://github.com/nodejs/undici)

The Undici Working Group is responsible for maintaining and developing the undici http client library.

Responsibilities include:

* Technical direction of the undici project.
* Management of the core undici repository.
* Documenting the undici API, examples, and best practices.
* Development of Node.js HTTP Client APIs such as a WHATWG Fetch implementation.

[Technical Steering Committee (TSC)]: ./TSC-Charter.md
