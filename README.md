# The Node.js Foundation TSC

The Node.js Foundation Technical Steering Committee is the technical governing
body of the Node.js Foundation. It admits and oversees all top-level Projects
in the Node.js Foundation. It also elects a representative to the Node.js
Foundation Board of Directors.

For more details read the [TSC Charter][] adopted by the Node.js Foundation
Board of Directors on June 17th 2015.

If your project is interested in joining the Node.js Foundation please read
the [Project Lifecycle.md](./Project-Lifecycle.md) documentation.

## TSC Scope

**The TSC is responsible for Node.js Core project, a number of projects
depended upon by Node.js Core, and a number of projects adjacent to Node.js
Core.**

The TSC exercises autonomy in managing its responsibilities and seeks agreement
from the Node.js Foundation Board on any change to the scope of those
responsibilities as defined below.

### Node.js Core

*Node.js Core* is defined as the contents of the repository located at
<https://github.com/nodejs/node> from which the `node` executable and associated
packages are built excluding the vendored projects included in the codebase
located in the [deps][] and [tools][] directories that are copied in from
externally maintained repositories.

### Dependent Projects

Additional projects fall within the TSC's scope of responsibility which are
dependencies of Node.js Core in that they are **required** to plan, test, build,
document and ship Node.js releases.

These projects are located in the following repositories:

* https://github.com/nodejs/TSC
* https://github.com/nodejs/build — administration delegated to the Build Working Group
* https://github.com/nodejs/citgm — administration delegated to the Core Technical Committee, managed by the Smoke Testing Team
* https://github.com/nodejs/docker-node — administration delegated to the Docker Working Group
* https://github.com/nodejs/http-parser — administration delegated to the Core Technical Committee
* https://github.com/nodejs/LTS — administration delegated to the Core Technical Committee, managed by the LTS Team
* https://github.com/nodejs/node-eps — administration delegated to the Core Technical Committee
* https://github.com/nodejs/nodejs-dist-indexer — administration delegated to the Build Working Group
* https://github.com/nodejs/nodejs-latest-linker — administration delegated to the Build Working Group
* https://github.com/nodejs/nodejs-nightly-builder — administration delegated to the Build Working Group
* https://github.com/nodejs/nodejs.org — administration delegated to the Website Working Group
* https://github.com/nodejs/secrets — _private_, administration delegated to the Build Working Group
* https://github.com/libuv/libuv — currently under Incubation

### Adjacent Projects

The TSC is responsible for a number of projects that are not strictly required
to plan, test, build, document and ship Node.js releases. Projects that are
_adjacent_ are either created from within the technical organization managed by
the TSC or are adopted into that organization from outside.

In the case of adopting existing projects, once the TSC has decided that
adoption appropriate, it should seek agreement from the Node.js Foundation Board
for such adoption as it impacts on the scope of technical activities of the
Foundation.

If the Node.js Foundation Board wishes to adopt an existing project, it must
seek agreement from the TSC that such adoption is appropriate and that any
changes to scope that it entails are acceptable.

Current adjacent projects that are within the TSC's scope of responsibility can
be found at the following locations:

* https://github.com/nodejs/abi-stable-node — administration delegated to the API Working Group
* https://github.com/nodejs/abi-stable-node-addon-examples — administration delegated to the API Working Group
* https://github.com/nodejs/api — administration delegated to the API Working Group
* https://github.com/nodejs/benchmarking — administration delegated to the Benchmarking Working Group
* https://github.com/nodejs/code-and-learn
* https://github.com/nodejs/diagnostics — administration delegated to the Diagnostics Working Group
* https://github.com/nodejs/docs — administration delegated to the Documentation Working Group
* https://github.com/nodejs/education
* https://github.com/nodejs/email — administration delegated to the Build Working Group
* https://github.com/nodejs/evangelism — administration delegated to the Evangelism Working Group
* https://github.com/nodejs/github-bot — administration delegated to the Core Technical Committee, managed by the GitHub Bot Team
* https://github.com/nodejs/help — administration delegated to the Evangelism Working Group
* https://github.com/nodejs/http — administration delegated to the Core Technical Committee, managed by the HTTP team
* https://github.com/nodejs/http2 — administration delegated to the Core Technical Committee, managed by the HTTP/2 team
* https://github.com/nodejs/iojs.org — administration delegated to the Website Working Group
* https://github.com/nodejs/installer — administration delegated to the Core Technical Committee
* https://github.com/nodejs/Intl — administration delegated to the Intl Working Group
* https://github.com/nodejs/llnode — administration delegated to the Post Mortem Working Group
* https://github.com/nodejs/nan — administration delegated to the Addon API Working Group
* https://github.com/nodejs/node-addon-examples — administration delegated to the Addon API Working Group)
* https://github.com/nodejs/node-chakracore — administration delegated to the Core Technical Committee
* https://github.com/nodejs/node-gyp — administration delegated to the Core Technical Committee
* https://github.com/nodejs/node-inspect — administration delegated to the Diagnostics Working Group
* https://github.com/nodejs/node-report — administration delegated to the Post Mortem Working Group
* https://github.com/nodejs/post-mortem — administration delegated to the Post Mortem Working Group
* https://github.com/nodejs/promises — administration delegated to the Promises Working Group
* https://github.com/nodejs/readable-stream — administration delegated to the Streams Working Group
* https://github.com/nodejs/summit
* https://github.com/nodejs/testing — administration delegated to the Testing Working Group
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
technical side of the foundation to the Node.js Foundation Board of Directors.

Every Top Level Project not currently incubating can appoint someone to the TSC
whom they elect at their own discretion.

### Current Members
* [addaleax](https://github.com/addaleax) -
**Anna Henningsen** &lt;anna@addaleax.net&gt; (she/her)
* [bnoordhuis](https://github.com/bnoordhuis) -
**Ben Noordhuis** &lt;info@bnoordhuis.nl&gt;
* [ChALkeR](https://github.com/ChALkeR) -
**Сковорода Никита Андреевич** &lt;chalkerx@gmail.com&gt; (he/him)
* [cjihrig](https://github.com/cjihrig) -
**Colin Ihrig** &lt;cjihrig@gmail.com&gt;
* [evanlucas](https://github.com/evanlucas) -
**Evan Lucas** &lt;evanlucas@me.com&gt; (he/him)
* [fhinkel](https://github.com/fhinkel) -
**Franziska Hinkelmann** &lt;franziska.hinkelmann@gmail.com&gt;
* [Fishrock123](https://github.com/Fishrock123) -
**Jeremiah Senkpiel** &lt;fishrock123@rocketmail.com&gt;
* [indutny](https://github.com/indutny) -
**Fedor Indutny** &lt;fedor.indutny@gmail.com&gt;
* [jasnell](https://github.com/jasnell) -
**James M Snell** &lt;jasnell@gmail.com&gt; (he/him)
* [joshgav](https://github.com/joshgav) -
**Josh Gavant** &lt;josh.gavant@outlook.com&gt;
* [joyeecheung](https://github.com/joyeecheung) -
**Joyee Cheung** &lt;joyeec9h3@gmail.com&gt; (she/her)
* [mcollina](https://github.com/mcollina) -
**Matteo Collina** &lt;matteo.collina@gmail.com&gt; (he/him)
* [mhdawson](https://github.com/mhdawson) -
**Michael Dawson** &lt;michael_dawson@ca.ibm.com&gt; (he/him)
* [mscdex](https://github.com/mscdex) -
**Brian White** &lt;mscdex@mscdex.net&gt;
* [MylesBorins](https://github.com/MylesBorins) -
**Myles Borins** &lt;myles.borins@gmail.com&gt; (he/him)
* [ofrobots](https://github.com/ofrobots) -
**Ali Ijaz Sheikh** &lt;ofrobots@google.com&gt;
* [rvagg](https://github.com/rvagg) -
**Rod Vagg** &lt;rod@vagg.org&gt;
* [shigeki](https://github.com/shigeki) -
**Shigeki Ohtsu** &lt;ohtsu@ohtsu.org&gt; (he/him)
* [targos](https://github.com/targos) -
**Michaël Zasso** &lt;targos@protonmail.com&gt; (he/him)
* [thefourtheye](https://github.com/thefourtheye) -
**Sakthipriyan Vairamani** &lt;thechargingvolcano@gmail.com&gt; (he/him)
* [trevnorris](https://github.com/trevnorris) -
**Trevor Norris** &lt;trev.norris@gmail.com&gt;
* [Trott](https://github.com/Trott) -
**Rich Trott** &lt;rtrott@gmail.com&gt; (he/him)

### TSC Emeriti

* [chrisdickinson](https://github.com/chrisdickinson) -
**Chris Dickinson** &lt;christopher.s.dickinson@gmail.com&gt;
* [isaacs](https://github.com/isaacs) -
**Isaac Z. Schlueter** &lt;i@izs.me&gt;
* [orangemocha](https://github.com/orangemocha) -
**Alexis Campailla** &lt;orangemocha@nodejs.org&gt;
* [piscisaureus](https://github.com/piscisaureus) -
**Bert Belder** &lt;bertbelder@gmail.com&gt;
* [nebrius](https://github.com/nebrius) -
**Bryan Hughes** &lt;bryan@nebri.us&gt;
* [misterdjules](https://github.com/misterdjules) -
**Julien Gilli** &lt;jgilli@nodejs.org&gt;

## YouTube
Many teams/groups post meeting videos to the
[Node.js Foundation YouTube channel][].

Any GitHub team maintainer is allowed `Manager` access to the Google Plus
account allowing them to add/manage video content and schedule events
(live broadcasts).

Members of the TSC are allowed `Owner` access to the Google Plus account. This
role can do all `Manager` activities and add/remove other members from the
Google Plus account.

To request access, [open an issue](https://github.com/nodejs/TSC/issues/new).


## Top-Level WGs and TLPs

* [Working Groups](WORKING_GROUPS.md)
* Mentors

    Project mentorship is not a technical role. In fact, mentors are
    discouraged from giving technical advice to projects. Instead, the
    purpose of mentorship is to encourage and improve a projects ability
    to be participatory, transparent, and effective. Mentors are there to
    help projects adopt and iterate on policies and processes that achieve
    these goals and eventually allow them to graduate the incubation phase.

      * Mikeal Rogers (@mikeal) Currently assigned to Express.
      * James Snell (@jasnell) Currently assigned to Express.
      * Rod Vagg (@rvagg) Currently assigned to libuv.

* Top-Level Projects
 * Core TLP
  * Core WGs (streams, http, Intl)

## Policy Change Proposal Process

The Node.js TSC is chartered to oversee the technical governance of all Top
Level Projects and Working Groups under the Node.js Foundation. The TSC
establishes the default governance, conduct, and licensing policies for all Top
Level Projects. Top Level Projects and Working Groups have broad powers of
self-governance.

To propose a change or addition to policies or processes that are intended to
cover all Top Level Projects and Working Groups in the foundation, a PR should
be opened in the `nodejs/TSC` repository.

The pull request can be labeled `tsc-agenda` to request that it be put on the
agenda for the next TSC meeting.

The Node.js Foundation Board of Directors retains certain rights (especially
legal considerations). If the TSC endorses a proposal, they will escalate to the
Node.js Foundation Board of Directors when required to do so.

In some cases, existing individual groups have the right to refuse changes to
their charters. The TSC can not mandate existing working groups alter their
charters. If such a situation arises, the TSC may decide to revoke the group's
charter.

[deps]: https://github.com/nodejs/node/tree/master/deps
[tools]: https://github.com/nodejs/node/tree/master/tools
[TSC Charter]: https://github.com/nodejs/TSC/blob/master/TSC-Charter.md
[Project Lifecycle.md]: ./Project-Lifecycle.md
[Node.js Foundation YouTube channel]: https://www.youtube.com/c/nodejs+foundation/