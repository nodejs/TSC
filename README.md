# The Node.js Technical Steering Committee

The Node.js Technical Steering Committee (TSC) is the technical
governing body of Node.js. It is described in the [TSC Charter][].

## TSC Scope

**The TSC is responsible for the Node.js Core project, a number of projects
depended upon by Node.js Core, and a number of projects adjacent to Node.js
Core.**

The TSC exercises autonomy in managing its responsibilities and seeks agreement
from the OpenJS Foundation Board on any change to the scope of those
responsibilities as defined below.

### Node.js Core

*Node.js Core* is defined as the contents of the repository located at
<https://github.com/nodejs/node> from which the `node` executable and associated
packages are built, excluding the vendored projects included in the codebase
located in the [deps][] and [tools][] directories that are copied in from
externally maintained repositories.

### Dependent Projects

Additional projects fall within the TSC's scope of responsibility which are
dependencies of Node.js Core in that they are **required** to plan, test, build,
document and ship Node.js releases.

These projects are located in the following repositories:

* https://github.com/nodejs/TSC
* https://github.com/nodejs/build — administration delegated to the Build Working Group
* https://github.com/nodejs/citgm — administration delegated to the Release Working Group
* https://github.com/nodejs/docker-node — administration delegated to the Docker Working Group
* https://github.com/nodejs/http-parser — administration delegated to the Core Technical Committee
* https://github.com/nodejs/node-eps — administration delegated to the Core Technical Committee
* https://github.com/nodejs/nodejs-dist-indexer — administration delegated to the Build Working Group
* https://github.com/nodejs/nodejs-latest-linker — administration delegated to the Build Working Group
* https://github.com/nodejs/nodejs-nightly-builder — administration delegated to the Build Working Group
* https://github.com/nodejs/nodejs.org — administration delegated to the Website Working Group
* https://github.com/nodejs/secrets — _private_, administration delegated to the Build Working Group
* https://github.com/nodejs/Release — administration delegated to the Release Working Group
* https://github.com/libuv/libuv — currently under Incubation

### Adjacent Projects

The TSC is responsible for a number of projects that are not strictly required
to plan, test, build, document and ship Node.js releases. Projects that are
_adjacent_ are either created from within the technical organization managed by
the TSC or are adopted into that organization from outside.

In the case of adopting existing projects, once the TSC has decided that
adoption appropriate, it should seek agreement from the OpenJS Foundation Board
for such adoption as it impacts on the scope of technical activities of the
Foundation.

If the OpenJS Foundation Board wishes to adopt an existing project, it must
seek agreement from the TSC that such adoption is appropriate and that any
changes to scope that it entails are acceptable.

Current adjacent projects that are within the TSC's scope of responsibility
include:

* https://github.com/nodejs/abi-stable-node — administration delegated to the API Working Group
* https://github.com/nodejs/abi-stable-node-addon-examples — administration delegated to the API Working Group
* https://github.com/nodejs/api — administration delegated to the API Working Group
* https://github.com/nodejs/code-and-learn
* https://github.com/nodejs/diagnostics — administration delegated to the Diagnostics Working Group
* https://github.com/nodejs/docs
* https://github.com/nodejs/education
* https://github.com/nodejs/email — administration delegated to the Build Working Group
* https://github.com/nodejs/github-bot
* https://github.com/nodejs/help
* https://github.com/nodejs/http
* https://github.com/nodejs/http2
* https://github.com/nodejs/installer
* https://github.com/nodejs/llnode — administration delegated to the Post Mortem Working Group
* https://github.com/nodejs/nan — administration delegated to the Addon API Working Group
* https://github.com/nodejs/node-addon-examples — administration delegated to the Addon API Working Group
* https://github.com/nodejs/node-chakracore
* https://github.com/nodejs/node-gyp
* https://github.com/nodejs/node-inspect — administration delegated to the Diagnostics Working Group
* https://github.com/nodejs/node-report — administration delegated to the Post Mortem Working Group
* https://github.com/nodejs/nodejs.org — administration delegated to the Website Working Group
* https://github.com/nodejs/post-mortem — administration delegated to the Post Mortem Working Group
* https://github.com/nodejs/promises
* https://github.com/nodejs/readable-stream — administration delegated to the Streams Working Group
* https://github.com/nodejs/summit
* https://github.com/nodejs/testing
* _And_ various language and resource translation groups under https://github.com/nodejs/

### List of TSC Responsibilities

The TSC exercises autonomy in setting up and maintaining procedures, policies,
and management and administrative structures as it deems appropriate for the
maintenance and operation of these projects and resources.

Included in the responsibilities of the TSC are:

* Managing code and documentation creation and changes for the listed projects
  and resources
* Setting and maintaining standards covering contributions of code,
  documentation and other materials
* Managing code and binary releases: types, schedules, frequency, delivery
  mechanisms
* Making decisions regarding dependencies of the Node.js Core project,
  including what those dependencies are and how they are bundled with source
  code and releases
* Creating new repositories and projects under the _nodejs_ GitHub organization
  as required
* Setting overall technical direction for the Node.js Core project, including
  high-level goals and low-level specifics regarding features and functionality
* Setting and maintaining appropriate standards for community discourse via the
  various mediums under TSC control
* Setting and maintaining governance rules for the conduct and make-up of the
  TSC, Working Groups and other bodies within the TSC's domain

Many of these responsibilities will be delegated by the TSC to appropriate
bodies such as the Working Groups.

## TSC Members

TSC members are responsible for top level technical community concerns. The role
is mostly administrative and is responsible for admitting new Top Level
Projects, Top Level Working Groups, and advocating for any needs in the
technical side of the project to the OpenJS Foundation Board of Directors.

TSC members can nominate new members at any time. Candidates for membership tend
to be people who have a competancy for community management and a high tolerance
and patience for process minutiae as the TSC delegates most of its responsibilities
to other projects and working groups.

A [current list of TSC members](https://github.com/nodejs/node#tsc-technical-steering-committee)
is maintained in the main Node.js repository.

## YouTube
Many teams/groups post meeting videos to the
[Node.js YouTube channel][].

Any GitHub team maintainer is allowed `Manager` access to the Google Plus
account allowing them to add/manage video content and schedule events
(live broadcasts).

Members of the TSC are allowed `Owner` access to the Google Plus account. This
role can do all `Manager` activities and add/remove other members from the
Google Plus account.

To request access, [open an issue](https://github.com/nodejs/TSC/issues/new).

## Strategic Initiatives

At any one time the Node.js project has a number of strategic initiatives
underway.  The goal of the TSC is to have a champion for each of these
initiatives and to support the initiatives in order to enable their
success.

For more information look here:
[Strategic Initiatives](https://github.com/nodejs/TSC/blob/master/Strategic-Initiatives.md)

## Top-Level WGs and TLPs

* [Working Groups](WORKING_GROUPS.md)
* Top-Level Projects
  * Core TLP
  * Core WGs (for example, streams)

## Policy Change Proposal Process

The Node.js TSC is chartered to oversee the technical governance of all Top
Level Projects and Working Groups under Node.js. The TSC
establishes the default governance, conduct, and licensing policies for all Top
Level Projects. Top Level Projects and Working Groups have broad powers of
self-governance.

To propose a change or addition to policies or processes that are intended to
cover all Top Level Projects and Working Groups in the foundation, a PR should
be opened in the `nodejs/TSC` repository.

The pull request can be labeled `tsc-agenda` to request that it be put on the
agenda for the next TSC meeting.

The OpenJS Foundation Board of Directors retains certain rights (especially
legal considerations). If the TSC endorses a proposal, they will escalate to the
OpenJS Foundation Board of Directors when required to do so.

In some cases, existing individual groups have the right to refuse changes to
their charters. The TSC can not mandate existing working groups alter their
charters. If such a situation arises, the TSC may decide to revoke the group's
charter.

[deps]: https://github.com/nodejs/node/tree/master/deps
[tools]: https://github.com/nodejs/node/tree/master/tools
[TSC Charter]: https://github.com/nodejs/TSC/blob/master/TSC-Charter.md
[Node.js YouTube channel]: https://www.youtube.com/c/nodejs+foundation/
