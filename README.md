# The Node.js Foundation TSC

The Node.js Foundation Technical Steering Committee is the technical governing body of the Node.js Foundation. It admits and oversees all top-level Projects in the Node.js Foundation. It also elects a representative to the Node.js Foundation Board of Directors.

For more details read the [TSC Charter](https://github.com/nodejs/TSC/blob/master/TSC-Charter.md) adopted by the Node.js Foundation Board of Directors on June 17th 2015.

If your project is interested in joining the Node.js Foundation please read the [Project Lifecycle.md](./Project-Lifecycle.md) documentation.

## TSC Scope

**The TSC is responsible for Node.js Core project, a number of projects depended upon by Node.js Core, and a number of projects adjacent to Node.js Core.**

The TSC exercises autonomy in managing its responsibilities and seeks agreement from the Node.js Foundation Board on any change to the scope of those responsibilities as defined below.

### Node.js Core

Node.js Core is defined as the code project existing in the repository located at <https://github.com/nodejs/node> which the `node` executable and associated packages are built from, _minus_ the vendored projects included in the codebase, specifically those located in the [deps](https://github.com/nodejs/node/tree/master/deps) and [tools](https://github.com/nodejs/node/tree/master/tools) directories that are copied in from externally maintained repositories.

### Dependent Projects

Additional projects fall within the TSC's scope of responsibility which are dependencies of Node.js Core in that they are **required** to plan, test, build, document and ship Node.js releases.

These projects are located in the following repositories:

* https://github.com/nodejs/TSC
* https://github.com/nodejs/build — administration delegated to the Build Working Group
* https://github.com/nodejs/citgm — administration delegated to the Core Technical Committee, managed by the Smoke Testing Team
* https://github.com/nodejs/CTC — administration delegated to the Core Technical Committee
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

The TSC is responsible for a number of projects that are not strictly required to plan, test, build, document and ship Node.js releases. Projects that are _adjacent_ are either created from within the technical organization managed by the TSC or are adopted into that organization from outside.

In the case of adopting existing projects, once the TSC has decided that adoption appropriate, it should seek agreement from the Node.js Foundation Board for such adoption as it impacts on the scope of technical activities of the Foundation.

If the Node.js Foundation Board wishes to adopt an existing project, it must seek agreement from the TSC that such adoption is appropriate and that any changes to scope that it entails are acceptable.

Current adjacent projects that are within the TSC's scope of responsibility can be found at the following locations:

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

The TSC exercises autonomy in setting up and maintaining procedures, policies, and management and administrative structures as it deems appropriate for the maintenance and operation of these projects and resources.

Included in the responsibilities of the TSC are:

* Managing code and documentation creation and changes for the listed projects and resources
* Setting and maintaining standards covering contributions of code, documentation and other materials
* Managing code and binary releases: types, schedules, frequency, delivery mechanisms
* Making decisions regarding dependencies of the Node.js Core project, including what those dependencies are and how they are bundled with source code and releases
* Creating new repositories and projects under the _nodejs_ GitHub organization as required
* Setting overall technical direction for the Node.js Core project, including high-level goals and low-level specifics regarding features and functionality
* Setting and maintaining appropriate standards for community discourse via the various mediums under TSC control
* Setting and maintaining governance rules for the conduct and make-up of the TSC, CTC, Working Groups and other bodies within the TSC's domain

Many of these responsibilities will be delegated by the TSC to appropriate bodies such as the CTC and Working Groups.

## TSC Members

TSC members are responsible for top level technical community concerns. The role is
mostly administrative and is responsible for admitting new Top Level Projects, Top Level
Working Groups, and advocating for any needs in the technical side of the foundation to
the Node.js Foundation Board of Directors.

TSC members can nominate new members at any time. Candidates for membership tend to be people
who have a competancy for community management and a high tolerance and patience for process
minutiae as the TSC delegates most of its responsibilities to other projects and working groups.

Every Top Level Project not currently incubating can appoint someone to the TSC who they elect
at their own discretion.

### Current Members
| Avatar | Information |
|---|:---|
| <a href="//github.com/rvagg">          <img width=100 src="https://avatars.githubusercontent.com/u/495647?s=100" alt="@rvagg"></a>        | **Rod Vagg**          <br> <a href="//github.com/rvagg">@rvagg</a>                  <br> rod@vagg.org |
| <a href="//github.com/mscdex">         <img width=100 src="https://avatars.githubusercontent.com/u/54666?s=100" alt="@mscdex"></a>        | **Brian White**       <br> <a href="//github.com/mscdex">@mscdex</a>                <br> mscdex@mscdex.net |
| <a href="//github.com/cjihrig">        <img width=100 src="https://avatars.githubusercontent.com/u/2512748?s=100" alt="@cjihrig"></a>     | **Colin Ihrig**       <br> <a href="//github.com/cjihrig">@cjihrig</a>              <br> cjihrig@gmail.com |
| <a href="//github.com/indutny">        <img width=100 src="https://avatars.githubusercontent.com/u/238531?s=100" alt="@indutny"></a>      | **Fedor Indutny**     <br> <a href="//github.com/indutny">@indutny</a>              <br> fedor.indutny@gmail.com |
| <a href="//github.com/jasnell">        <img width=100 src="https://avatars.githubusercontent.com/u/439929?s=100" alt="@jasnell"></a>      | **James Snell**       <br> <a href="//github.com/jasnell">@jasnell</a>              <br> jasnell@gmail.com<br><sup>Board Director</sup> |
| <a href="//github.com/shigeki">        <img width=100 src="https://avatars.githubusercontent.com/u/782880?s=100" alt="@shigeki"></a>      | **Shigeki Ohtsu**     <br> <a href="//github.com/shigeki">@shigeki</a>              <br> ohtsu@iij.ad.jp |
| <a href="//github.com/trevnorris">     <img width=100 src="https://avatars.githubusercontent.com/u/289174?s=100" alt="@trevnorris"></a>   | **Trevor Norris**     <br> <a href="//github.com/trevnorris">@trevnorris</a>        <br> trev.norris@gmail.com |
| <a href="//github.com/joshgav">        <img width=100 src="https://avatars.githubusercontent.com/u/4421720?s=100" alt="@joshgav"></a>     | **Josh Gavant**       <br> <a href="//github.com/joshgav">@joshgav</a>              <br> josh.gavant@gmail.com |
| <a href="//github.com/mhdawson">       <img width=100 src="https://avatars.githubusercontent.com/u/9373002?s=100" alt="@mhdawson"></a>    | **Michael Dawson**    <br> <a href="//github.com/mhdawson">@mhdawson</a>            <br> michael_dawson@ca.ibm.com<br><sub>Committee Chair</sub> |

#### Emeritus Members
| Avatar | Information |
|---|:---|
| <a href="//github.com/addaleax">       <img width=100 src="https://avatars.githubusercontent.com/u/899444?s=100" alt="@addaleax"></a>     | **Anna Henningsen**   <br> <a href="//github.com/addaleax">@addaleax</a>            <br> anna@addaleax.net |
| <a href="//github.com/bnoordhuis">     <img width=100 src="https://avatars.githubusercontent.com/u/275871?s=100" alt="@bnoordhuis"></a>   | **Ben Noordhuis**     <br> <a href="//github.com/bnoordhuis">@bnoordhuis</a>        <br> info@bnoordhuis.nl |
| <a href="//github.com/piscisaureus">   <img width=100 src="https://avatars.githubusercontent.com/u/218257?s=100" alt="@piscisaureus"></a> | **Bert Belder**       <br> <a href="//github.com/piscisaureus">@piscisaureus</a>    <br> bertbelder@gmail.com |
| <a href="//github.com/nebrius">        <img width=100 src="https://avatars.githubusercontent.com/u/1141386?s=100" alt="@nebrius"></a>      | **Bryan Hughes**      <br> <a href="//github.com/nebrius">@nebrius</a>              <br> bryan@nebri.us |
| <a href="//github.com/fishrock123">    <img width=100 src="https://avatars.githubusercontent.com/u/1093990?s=100" alt="@fishrock123"></a> | **Jeremiah Senkpiel** <br> <a href="//github.com/fishrock123">@fishrock123</a>      <br> fishrock123@rocketmail.com |
| <a href="//github.com/mylesborins">    <img width=100 src="https://avatars.githubusercontent.com/u/498775?s=100" alt="@mylesborins"></a>  | **Myles Borins**      <br> <a href="//github.com/mylesborins">@MylesBorins</a>      <br> mylesborins@google.com |

## YouTube
Many teams/groups post meeting videos to the [Node.js Foundation YouTube channel](https://www.youtube.com/c/nodejs+foundation/).

Any GitHub team maintainer is allowed `Manager` access to the Google Plus account allowing
them to add/manage video content and schedule events (live broadcasts).

Members of the TSC and CTC are allowed `Owner` access to the Google Plus account. This role
can do all `Manager` activities and add/remove other members from the Google Plus account.

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
