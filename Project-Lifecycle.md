# Node.js Foundation Project Lifecycle

## Project Definition

The Node.js Foundation hosts several "Top-Level Projects." These projects
are autonomous from each other and governed by their own TC (Technical
Committee) and chartered by the Node.js Foundation TSC.

Projects are free to create "Working Groups" which are autonomous groups
collaborating to fulfill a set of responsibilities. Working Groups are
eventually chartered by the TC. The TSC also charters its own Working
Groups.

```
 TSC
  |
  |-- Project A TC (Chartered By TSC)
  |       |-- Working Group (Chartered By Project TC)
  |
  |-- Project B TC (Chartered By TSC)
  |       |-- Working Group (Chartered By Project TC)
  |
  |-- Working Group A (Chartered by TSC)
  |-- Working Group B (Chartered by TSC)
```

Both TLPs and TSC WGs may elect a representative to the TSC. TLPs and WGs
with *incubation* status are not granted voting privileges on the TSC.

## Incubation

The purpose of incubation is to support and mentor projects entering the
foundation. The goal is for projects to be:

* Participatory
* Transparent
* Effective

While certain processes are strongly recommended because of the TSC's
experience the goal of incubation is not to enforce a specific set of
processes but to ensure that the processes adopted and accepted by a
project achieve these goals. Therefore, the requirements for graduating
from incubation are based on metrics that demonstrate success in terms of
these values. These metrics are:

* TC is 5 members or greater.
* No more than 1/4 of the TC is affiliated with the same employer.
* Members of the TC live in at least 4 different timezones and
representing no fewer than three countries.
* The decision making and release process is documented and publicly accessible.

A project may apply to graduate from incubation at any time by calling
for a vote in the TSC.

While a project is incubating it is assigned at least 3
[mentors](https://github.com/nodejs/TSC/blob/master/README.md#mentors)
who are responsible for working with the project to adopt policies and
gain the health and contributorship it will need in order to graduate
from incubation. The mentor list is nominated and approved by the TSC and
is expected to be larger than the TSC.

## Lifecycle

The Foundation shall encourage new Projects and innovation in the
community. New Projects enter the Node.js Foundation through a
[Proposal](#Proposal).

The project should be considered mature and have a history of releases
before applying to enter the foundation.

## Top-Level Project and Working Group Requirements

All TLPs and WGs are expected to operate in a transparent manner.
Decisions must be made publicly through a documented public process
managed by each TLP TC or WG.

All TLPs and WGs must use a participatory decision making process. All
TLP TCs must ensure they are accurately representing the WGs in their
TLP.

### Security

All projects in the foundation share the same base security policy. The
foundation's security team triages issues sent to security@nodejs.org.
Top-Level Projects, whether in the incubator or not, are expected to
maintain a private security repository where the security team can bring
project-specific issues.

## Top-Level Projects

All Top-Level Project TCs must follow a [Consensus
Seeking](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making)
process and are responsible for documenting and keeping up to date their
current processes and practices.

Each TLP TC must elect a representative to the Node.js Foundation TSC or
vote to abstain from representation on the TSC.

## Applying to join

The Node.js Foundation only admits projects written in Node.js.

A proposal to join the Node.js Foundation as a top-level Project or
Working Group must include:

* Introduction and project description.
* Project history.
* Any available metrics or even estimates about the user base, ecosystem
and community.
* Project scope.
* Current governance process.
* Current contribution process.
* List of current tools in use by the project (forums, issue trackers,
  GitHub orgs, etc).
* Existing IP Policy and relevant intellectual property (trademarks,
  domain names, etc).
* List of initial TC members.
* List of initial Working Groups.
* Prior to being admitted the project:
 * Must include
 [DCO](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#developers-certificate-of-origin).
 * Must include approved license. If it is not currently under an
 approved license it will need to be cleared by the TSC and the Node.js
 Foundation Legal Committee prior to acceptance in to the incubator.
 * Must include a [Code of Conduct](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#code-of-conduct).

Each proposal should be sent as a pull request to this repository in the
Applications directory. Proposals do not have to be complete to be
submitted, the TSC can work with the authors and their respective
communities in each Pull Request.

### Approved Licenses

At this time the foundation is only accepting projects which use an MIT,
BSD, ISC or Apache2 license.

### Admittance

The Node.js Foundation is quite new and currently has limited resources
available to mentor new projects. As such, projects are chosen for
admission in groups as mentors become available.

You can apply at any time and the TSC and available mentors will help
improve your application while awaiting the next available approval
phase.
