# Moderation policy

If you are not a member of the Node.js GitHub Organization and wish to submit a
moderation request, please see [Requesting Moderation][]

* [Applicability][]
* [Terms][]
* [Grounds for Moderation][]
* [Requesting Moderation][]
* [Consideration of Intent][]
* [Guidelines and Requirements][]
  * [Collaborator Posts][]
  * [Non-Collaborator Posts][]
  * [Escalation to the TSC][]
  * [Temporary Interaction Limits][]
  * [Temporary and Indefinite Bans][]
* [Privacy of the nodejs/moderation Repository][]
* [Moderation Team][]
* [Escalation of Issues][]
* [Modifications to This Policy][]

## Applicability

By default, this policy applies to all repositories under all Node.js Foundation
owned GitHub Organizations, all officially recognized Node.js project
communications channels, and all Node.js Working Groups.

Individual Working Groups and Top Level Projects may adopt an alternative
Moderation Policy for any repository under their stewardship so long as:

* The Moderation Policy is openly documented as part of the Working Group or
  Project Charter and;
* Includes provisions for clearly and openly documenting Moderation actions
  taken.

If a particular repository can be considered to fall under the stewardship of
multiple Working Groups (or Top Level Projects) that have adopted different
Moderation Policies, they can choose to either:

* Decide between themselves which Moderation Policy will be in effect for the
  repository in question, or
* Ask the TSC to determine which Moderation Policy should apply.

Any alternative Moderation Policy used for a given repository must be included
in the root directory of the repository using the `Moderation-Policy.md`
filename. If a repository does not contain a `Moderation-Policy.md` file, then
this default policy applies.

## Terms

* *Collaborator* refers to any individual with configured write (commit)
  permissions to any Node.js GitHub organization repository *other than the
  Moderation Repository*. See [GitHub's access permissions documentation][] for
  more information.
* *TSC* refers to the [Node.js Technical Steering Committee][].
* *CommComm* refers to the [Node.js Community Committee][].
* *Post* refers to the content and titles of any issue, pull request, comment
  or wiki page.
* *Moderate* refers to the act of modifying the content and title of, or
  deleting, any Post for the purpose of correcting or addressing Code of Conduct
  violations.
* *Remove* refers to the act of removing the configured write (commit)
  permissions for an individual Collaborator's GitHub account from *all*
  Node.js GitHub Organization repositories as well as removing the account from
  the Node.js GitHub Organization membership.
* *Ban* refers to the act of blocking an individual GitHub account from any
  further participation in the Node.js GitHub Organization. Bans may be
  *temporary* or *indefinite*.
* *Requester* refers to an individual requesting Moderation on a Post.

## Grounds for Moderation

Any Post considered to be in violation of the Node.js [Code of Conduct][] is
subject to Moderation.

The Moderation Team is responsible for deciding what constitutes inappropriate
behavior that may be subject to Moderation.

## Outside Commentary via Social Media

Comments by individuals made in any venue falling outside the explicit scope of
responsibility of the Node.js Foundation, TSC, or Community Committee are
explicitly not covered by this policy unless the individual is explicitly acting
or commenting on behalf of the Node.js Foundation, TSC or Community Committee
in an official capacity. The statements, views, and opinions contained in such
comments are not endorsed by, nor do they necessarily reflect, the opinions and
views of the Node.js Foundation, TSC or Community Committee.

Moderation requests based solely on the content of comments made in any such
venue *may* be ignored.

All Collaborator's are cautioned, however, that any statements made publicly by
members of the Node.js GitHub Organization *will* be interpreted by readers
as reflecting on the project as a whole, despite the statement above. It is
therefore important for Collaborators to remain cognizant of how their
statements will be interpreted and what impact such statements may have on
the project.

## Requesting Moderation

Anyone may request Moderation of a Post. Requesting Moderation of a Post can be
accomplished in one of four ways:

* Via the [report@nodejs.org][] email address,
* Via private email to individual Moderation Team members,
* Via a new Post in the same thread as the Post being requested for Moderation,
* Via a new Post in the private nodejs/moderation repository.

Note that Collaborators may Moderate non-Collaborator Posts at any time without
submitting an initial request (see: [Non-Collaborator Posts][]).

Use of the [report@nodejs.org][] email address -- or private email to individual
Moderation Team members -- is appropriate when the individual requesting the
Moderation does not feel comfortable directly or publicly making the request.
All emails sent to the [report@nodejs.org][] address are currently forwarded
to all members of the Moderation Team.

When a request is sent by email to the [report@nodejs.org][] (or directly to a
Moderation Team member) a new issue detailing the request must be created in
the private nodejs/moderation repository. The identity of the individual
submitting the request should be omitted from the issue unless permission to
include the identity is provided by the reporter.

Requests should contain as much information and context as possible, including
the URL and a screenshot of the Post in question. Screenshots may be modified
to obscure obscene or offensive content.

External public venues or social media services such as Twitter should never be
used to request Moderation.

Collaborators must never discuss the specific details of a Moderation request
in any public forum or any social media service outside of the Node.js GitHub
Organization.

Note that quoting the original content of a Post within a Moderation request or
nodejs/moderation repository issue is not considered a violation of the
[Code of Conduct][]. However, discretion is advised when including such quotes
in requests posted to public repositories.

Requests for Moderation that do not appear to have been submitted in good faith
with intent to address a legitimate [Code of Conduct][] violation will be
ignored.

## Consideration of Intent

Before Moderating a Post, Collaborators should carefully consider the possible
intent of the author. It may be that the author has simply made an error or is
not yet familiar with the [Code of Conduct][]; or it may be that cultural
differences exist, or that the author is unaware that certain content is
considered inappropriate. In such cases, the author should be given an
opportunity to correct any error that may have been made.

Note, however, that unfamiliarity with the [Code of Conduct][] does not excuse
a Post from Moderation.

## Guidelines and Requirements

* All Posts are expected to respect the Node.js [Code of Conduct][].
* Any Collaborator with commit rights to a given repository may Moderate Posts
  within that repository's issue tracker.
* The Moderation Team serves as the final arbiter for all Moderation issues.
* Moderation Team members may Remove or Ban an individual from the Node.js
  GitHub Organization.
* For any Removal or Banning action, an issue describing the reasons for the
  action, and identifying the Github account being acted upon, must be posted
  to the Moderation Repository with an explanation provided by the Moderation
  Team member performing the action.
* Any individual Banned from the Node.js GitHub Organization will be recommended
  for exclusion from any Node.js Foundation sponsored event or activity.
* Minor edits to the formatting of a Post or to correct typographical errors
  are not considered to be "Moderation". Such edits and their intent should
  still be documented with a short note indicating who made the edit and why.

### Collaborator Posts

* Prior to Moderating any Post authored by a Collaborator, the author must be
  given a reasonable opportunity to modify or remove the Post on their own.
* If the author of the Post disagrees that Moderation is required, the matter
  can be escalated to the Moderation Team for resolution. In such cases, no
  Moderation action should be taken until a decision by the Moderation Team is
  made.
* When Moderating any Post authored by another Collaborator, the moderating
  Collaborator must:
  * Explain the justification for Moderating the post,
  * Identify all changes made to the Post, and
  * Identify the steps previously taken to resolve the issue.
  * If the Moderation action included Banning, an indication of whether the Ban
    is permanent or temporary is required, along with an issue posted to the
    moderation repository justifying the action.
* Explanations of Moderation actions on Collaborator Posts must be provided in:
  * A new post within the original thread, or
  * A new issue within the private nodejs/moderation repository.
* Any Collaborator habitually violating the Code of Conduct or this Moderation
  policy may be Banned temporarily or, in extreme cases, Removed and Banned
  permanently.

### Non-Collaborator Posts

* Posts authored by non-Collaborators are always subject to immediate Moderation
by any Collaborator if the content is intentionally disruptive or in violation
of the [Code of Conduct][].
* When Moderating non-Collaborator Posts, the moderating Collaborator should:
  * Explain the justification for Moderating the post, and
  * Identify all changes made to the Post.
  * If the Moderation action included Banning, an indication of whether the Ban
    is permanent or temporary is required, along with a note justifying the
    action.
* If an explanation of a Moderation action for a non-Collaborator Post is
  provided, it should be provided in:
  * The original Post being modified (as replacement or appended content),
  * A new post within the original thread, or
  * A new issue within the private nodejs/moderation repository.
* Moderation of Posts authored by non-Collaborators may result in those
  non-Collaborators being Banned temporarily or permanently from further
  participation in the Node.js GitHub organization.
* In the case where a GitHub Account appears to have been created with no
  intention to collaborate in good faith, swift actions may be taken without
  following the above procedures including: removing Posts, Banning permanently,
  and reporting accounts to GitHub.

Note that Moderating non-Collaborator posts can often lead to retaliation or
escalation of inappropriate behavior by the individual whose post is being
Moderated. This is true primarily of individuals whose intent is to harass,
disrupt or annoy individual members of the community. In such cases, it is best
to handle the Moderation as quickly and as quietly as possible without drawing
any further undue attention to the Post in question.

### Temporary Interaction Limits

The Moderation Team may, at their discretion, choose to enable GitHub's
[Temporary Interaction Limits][] on any GitHub repository in the Node.js GitHub
Organization.

Any Collaborator may request that the Moderation Team enable the Temporary
Interaction Limits by posting an issue to the moderation repository. If the
Moderation Team choose not to do so, then a comment explaining why that
decision was made should be added to the moderation repository thread.

### Temporary and Indefinite Bans

An Indefinite Ban is set for an unspecified period of time and may only be
lifted for an individual through a simple majority vote of the the Moderation
Team.

A Temporary Ban is time limited, with the timeframe decided on by the Moderation
Team at the time of issuing, depending on the severity of the issue. Recommended
default options are 24-hour, 48-hour, and 7-day periods.

## Privacy of the nodejs/moderation Repository

The nodejs/moderation Repository is used to discuss the potentially sensitive
details of any specific moderation issue. The repository is private but
accessible to all Collaborators. The details of any issue discussed within the
nodejs/moderation repository are expected to remain confidential and are not to
be discussed in any public forum or social media service.

Any Collaborator found to be violating the privacy of the nodejs/moderation
repository by repeatedly sharing or discussing the details of nodejs/moderation
issues in any public forum or social media service risks being permanently
removed from the Node.js GitHub organization.

## Moderation Team

The Node.js Moderation Team is tasked with enforcement of this policy.

Moderation team members are Collaborators nominated by either the TSC or
CommComm and must be approved by *both* committees with annual recertification.
If there are no objections after seven days, the nomination is automatically
accepted. If there are objections to a specific nomination, then a simple majority
vote of each the TSC and CommComm members in *favor* of the nomination is required.

An annual recertification vote is required for all moderators. For an individual
to continue as a moderator, a simple majority vote of each the TSC and CommComm
members must vote in *favor* of retaining an individual moderator.

A simple majority vote of each the TSC and CommComm members is required to remove
a moderator.

Once per month, the Moderation Team must provide a report of all Moderation
actions taken by the Moderation Team to both the CommComm and TSC.

## Escalation of Issues

Moderation issue disputes not involving a TSC, CommComm or Moderation Team
member may be escalated to the TSC and CommComm for review by tagging the
original issue, pull request, or associated nodejs/moderation repository
tracking issue with the `moderation-review` label. Any such Moderation action
may be overturned through a simple majority vote of each of the TSC and
CommComm members.

TSC, CommComm or Moderation Team members directly involved in a Moderation
issue -- as either the Requester or author of the Post in question -- are
*required* to recuse themselves from any decisions required to resolve the
issue.

Moderation disputes involving TSC, CommComm or Moderation Team members,
including questions of whether TSC, CommComm or Moderation Team member has
violated the Code of Conduct, *shall* be referred to an Independent Mediator
selected by the Node.js Foundation.

## Modifications to This Policy

Modifications to this policy are subject to approval by both the TSC and
CommComm. When modifications are proposed, if there are no objections after
72 hours, the modification are considered accepted. If there any objections to
any proposed change, a simple majority vote of each of the CommComm and TSC
in *favor* of the change is required.

[Code of Conduct]: https://GitHub.com/nodejs/TSC/blob/master/CODE_OF_CONDUCT.md
[Node.js Technical Steering Committee]: https://github.com/nodejs/node#tsc-technical-steering-committee
[Node.js Community Committee]: https://github.com/nodejs/community-committee
[GitHub's access permissions documentation]: https://help.github.com/articles/what-are-the-different-access-permissions/
[Temporary Interaction Limits]: https://github.com/blog/2370-introducing-temporary-interaction-limits
[Applicability]: #applicability
[Terms]: #terms
[Grounds for Moderation]: #grounds-for-moderation
[Requesting Moderation]: #requesting-moderation
[Consideration of Intent]: #consideration-of-intent
[Guidelines and Requirements]: #guidelines-and-requirements
[Collaborator Posts]: #collaborator-posts
[Non-Collaborator Posts]: #non-collaborator-posts
[Escalation to the TSC]: #escalation-to-the-tsc
[Temporary Interaction Limits]: #temporary-interaction-limits
[Temporary and Indefinite Bans]: #temporary-and-indefinite-bans
[Privacy of the nodejs/moderation Repository]: #privacy-of-the-nodejs-moderation-repository
[Moderation Team]: #moderation-team
[Escalation of Issues]: #escalation-of-issues
[Modifications to This Policy]: #modifications-to-this-policy
[report@nodejs.org]: mailto:report@nodejs.org
