# A Proposal for the Governance Structure of the Node.js Project

***This is a work in progress. Comments are definitely quite welcome.***

The effort of the Node.js project since the establishment of the Node.js
Foundation has been to empower a larger collective of contributors bound through
the common goal of making Node.js a strong and stable platform for all uses and
users.

When launching the Foundation, working to bring Node.js and io.js back together,
and working to heal many of the rifts that had emerged among the contributors,
a governance structure was put in place that was modeled almost directly off
that adopted by the io.js project.

Now, two years later, the project has grown significantly in size and scope.
The number of contributors has increased significantly, a number of new vital
and active Working Groups have been chartered, and the Core Technical Committee
has grown to over 20 individual members. It is no stretch of the imagination to
say that our collective efforts over the past two years have been a resounding
success.

That said, it is vital to continually self-evaluate the effectiveness of our
governing structure and evolving when necessary so that it better reflects the
project that we are creating and the community we are supporting. To this end,
I have a proposal.

## Review of Current Structure and Limitations

The vast majority of day-to-day activity and decision making within the Node.js
project occurs through interactions among individual contributors in GitHub
threads. Some of these occur within the context of chartered working groups,
some within informal teams, most just within issues and pull requests in the
various repositories.

When disagreements arise, or when consensus cannot be reached on any particular
issue, the issue is generally escalated to the Core Technical Committee for
resolution. The CTC reviews the issue and attempts to come to consensus on its
own. If it can reach consensus through discussion, a decision will be made.
Otherwise, a vote can be called for to resolve the issue. The key point is that
the CTC is intended to serve only as a backstop for times when consensus cannot
be easily established.

The Technical Steering Committee, on the other hand, is expected to deal with
administrative and business focused details of the project. This includes
interfacing with the Node.js Foundation Board of Directors, using allocated
funds, defining and enforcing governance and participation policies, and overall
management of necessary project resources (e.g. oversight of the GitHub
repositories, etc).

Chartered working groups are formal collections of individual contributors who
share a common interest in a particular area of the Node.js project. These have
an official charter that is approved by either the CTC or TSC and are supposed
to be given full autonomy over specific aspects of the project. Through their
charter, they are empowered to make decisions relevant to the areas of the
project they have been granted authority over, and to refer to the CTC or TSC
only when consensus cannot be reached, or when decisions have impact on areas
beyond their chartered scope.

Teams are informal collections of individual contributors. They are very similar
to Working Groups but are not chartered and are not given full control to make
decisions over any particular area. Teams may be formed at any time but must
defer to either a Working Group, CTC or TSC for authority. 

All Working Groups and teams are free to determine whatever process they wish
to have for membership and decision making so long as those do not run counter
to the basic, fundamental policies established by the TSC or CTC.

The membership of the TSC and CTC are individual based. Members are selected by
the existing members based on fairly arbitrary criteria. Generally, nominated
members are selected based on how the existing members view the newcomers
contributions and commitment to the project, as well as consideration of their
ability to lead and conduct themselves in a manner that helps build consensus.

What is interesting, and most limiting, about the TSC and CTC membership
policies, however, is that (a) there is no time limit associated with individual
membership, (b) there are no guidelines around participation beyond the recently
passed rules for TSC members, and (c) there is no direct link between the
individual contributors selected for participation in the CTC/TSC and the
various Working Groups that are granted authority over key areas of the project.
This is limiting in a number of ways:

* Membership growth is theoretically unbounded in that new individual members
  can be added indefinitely as the project grows.
* There is no incentive for existing members to “rotate out” of their existing
  seats when their personal level of activity in the project declines or when
  there are no issues being discussed that they are interested in.
* Most of the work within the project is being done within the working groups
  but there is no direct representation of the working groups in the CTC or TSC.
  While many of the individual members of the CTC and TSC happen to be members
  of chartered working groups, decision making is still done on an individual
  member basis. This means that it is possible (and likely) for a working group
  member sitting on the TSC or CTC to cast votes that may run counter to the
  consensus of a working group in which the individual is a member.
* The current structures of both the CTC and TSC make it difficult to understand
  what is happening within the chartered working groups.

The proposal that follows is specifically geared towards dealing with these
limitations through what is ultimately a fairly radical restructuring. The goals
of this restructuring are straightforward:

* Empower chartered working groups to take full ownership over their areas of
  responsibility.
* Empower individual working group members to play a more active role in the
  evolution of the Node.js project.
* Lessen the reliance on individual “core” decision makers.
* Ensure that the overall governance model of the project more accurately
  reflects the actual decision making processes followed.

## Proposal

What I am proposing is a revised TSC/CTC structure such that:

1. The TSC/CTC are generally folded back into a single administrative body
   called the TSC.
   * A Core Working Group with responsibility for overseeing the core Node.js
     project (nodejs/node) is chartered (this is essentially what the CTC is
     today)
   * A special Admin team with responsibility over budget allocations and other
     administrative actions would be established.
2. The individual voting member seats in the TSC would be eliminated. Each
   chartered working group would be granted a single voting seat within the TSC.
   When a vote is required, each working group decides for itself the process it
   will follow for exercising its one vote. The only requirement is that when a
   vote is to be registered, there must be public documentation that details how
   the vote was determined (could be meeting minutes, for instance).
3. The TSC meeting schedule would be moved to one TSC meeting per month, on a
   rotating time schedule.
   * The meeting may be in person or fully remote.
   * The meeting would consist of a public portion only.
   * Any documented member of any chartered working group may attend.
   * Anyone who is not a current member of a chartered working group may attend
     on invitation from a chartered Working Group member.
   * The meeting would include a review of working group activities as opposed
     to an individual stand-up.
4. Most decisions are made within the working groups. Any working group member
   may escalate any decision by any working group by tagging it as `tsc-review`
   and at-mentioning the other working groups that should review that decision.
   As much as possible, an attempt should be made to resolve the issue through
   discussion on GitHub. If the tagged issue is not determined to be resolved
   in time for the monthly TSC meeting, the TSC Chair (and only the TSC Chair)
   may escalate it to `tsc-agenda` for discussion at the meeting.
   * If it appears clear that consensus cannot be reached on an issue tagged
     `tsc-agenda` through regular discussion on GitHub or at the TSC meeting,
     any working group member may tag the issue as `tsc-vote`, which must be
     seconded by at least one other working group member.
   * Issues marked `tsc-vote` would go to a vote of chartered working groups.
     Working group votes would be collected via GitHub comments on the issue,
     with links to the documentation describing how the vote was reached. The
     vote will be completed when either enough votes are received to consider
     the matter decided, or by the next TSC meeting (whichever comes first).
     Any votes not registered by the next TSC meeting would be considered to
     be abstentions.
5. New working groups would be chartered only through consensus or vote of all
   other chartered working groups. (The Core Working Group would not charter its
   own working groups)
6. The TSC Chair and TSC Director positions remain with an annual election. Any
   member of a chartered working group is eligible to run for either seat. All
   documented members of the working groups would vote for the candidates.
   * It will be the job of the TSC Chair to organize the agenda for, and
     conduct, the monthly TSC meetings.
   * It will be the job of the TSC Director to sit on the Node.js Board of
     Directors and serve as the interface between the TSC and the Board. The
     TSC Director would serve also as the Chair of the Admin team.
7. As part of the chartered responsibilities, every working group would
   nominate one member for participation in the Admin team. If a working group
   chooses, it may request to opt out of this requirement during the charter
   process. Additional people may be added to the Admin team through consensus
   of the existing members. As with any issue, adding members is subject to
   `tsc-review` and `tsc-vote`.
8. Note that, from time to time, the Node.js Foundation must share confidential
   details about various topics with the TSC. In such cases, this information
   would be shared with the Admin team, which would pass those on to the larger
   TSC only on approval of the Node.js Foundation Board.
9. The Core Working Group would consist of the current members of the CTC and
   would retain oversight over the Node.js core project. While the working
   group would continue to be free to determine it’s own process for
   establishing consensus (including voting if it chooses), decisions that
   affect the areas of responsibility granted to other chartered working groups
   must be made in coordination with those working groups. This means, for
   instance, when the Core Working Group has an issue that affects Streams, the
   Core Working Group must involve the Streams Working Group in the decision,
   and that if consensus cannot be achieved, the issue would go to a discussion
   among the full TSC (e.g. tagged as `tsc-review`).

## Questions

### What additional process does this require for Working Groups?

Very little, in fact. Working groups could continue to operate as they do today.
If the working group wished to do so, it could choose to opt out of
participating in the Admin team. The working group could also choose not to
appoint a chair, and could adopt any process it wanted to determining how to
exercise its votes on the (hopefully) rare occasions when a vote is needed. The
only additional requirement would be that the working group would be required to
publish how it came to consensus on the vote.

### What additional benefit does this provide to Working Groups?

Working groups would actually have more direct control over their areas of
responsibility. The Core Working Group would no longer be in the critical path
for decisions. Only if consensus cannot be reached within the working group
would matters be escalated up to a discussion among all chartered working
groups, among which the Core Working Group would have an equal voice (as
opposed to the sole deciding voice).

### Would Working Groups be required to name a Chair?

No. How a working group conducts its business is entirely up to the working
group. The only requirement is clear, public documentation of any decisions
that are made.

### What happens to the ctc-agenda and ctc-review labels?

Matters that require escalation go to their respective working groups for
consideration. For instance, anything involving Streams would fall under the
Streams Working Group area of responsibility. It would be the responsibility of
the Streams Working Group to resolve the issue and would only be escalated to
consideration by all Working Groups if consensus cannot be reached at that
level.

Any area of core not currently assigned to a chartered working group falls, by
default, to the Core Working Group.

### What about the weekly CTC meetings?

The CTC evolves into the Core Working Group. It would still define it’s own
processes and its own meeting schedule.

### Why are working groups required to have someone on the Admin team?

This is to ensure proper representation among the working groups when key
decisions are made with regards to budget allocation and administrative actions
such as moderation enforcement. Each working group is free to determine how it
chooses the individual to sit on the Admin team, and may choose to opt out of the
responsibility when the working group is chartered. A working group that has
opted out may ask to join the Admin team at any time, and it would be up to the
existing members of that WG to decide the membership policy.

### Why is the TSC Director the chair of the Admin team?

This is primarily for logistical reasons. The Admin team will be responsible for
dealing with budget allocations and administrative tasks that involve
interfacing with the Node.js Foundation. The TSC Director will be the primary
touch point for such activities. This also echoes the situation in the
Community Committee where the individual member representatives on the board
share the Community Committee chair responsibilities.

### This takes some power away from the CTC!

Yes and no. The Core Working Group (or what we call the CTC today) would still
have overall responsibility for nodejs/node for any aspect that is not
specifically delegated to another working group (like Streams, for instance).

For items that are under Core's responsibility, the Working Group would still
retain the ability to make decisions following whatever process it chooses
(likely no different than the process we have today in the CTC). However, for
areas that have been delegated to other working groups, those working groups
make the decisions, with any working group member having the ability to
escalate any discussion/decision to `tsc-review`.

### It will take longer to get things done!

I disagree. I shouldn't take any longer than it does today.

The goal is for working groups to be more empowered to make decisions on their
own as much as possible. There will be less need to push decisions to the CTC
and TSC and therefore less process around making decisions.

### This just means we’ll have more Working Groups!

I disagree. Working groups will carry with them a certain amount of required
process. Chartering a new working group would also require consensus of all the
other working groups, which means that there would be a fairly high bar to
adding a new working group. This would mean that the growth of the number of
voting seats would be much slower and manageable than the current potentially
unbounded growth.

### One monthly TSC meeting in which anyone can participate sounds like chaos!

It will require better logistical planning, yes, but other groups (such as
TC-39 for instance) pull off such meetings with very little difficulty. It
will be the responsibility of the TSC Chair to pull together the agenda, and
to ensure that there is adequate time for each working group to provide an
update on its recent activity and priorities, as well as time to discuss any
open `tsc-agenda` items.

### What would happen to the existing working groups?

Existing working groups would essentially be rechartered under this new process
with a few notable changes. Specifically:

* The working groups would not be chartered by the CTC (or Core Working Group).
  Only the TSC would charter working groups.
* Working groups would be expected to nominate one of their members to the
  Admin team.
* Working groups would be expected to have a bit more process around documenting
  who their members are.
* Several of the existing working groups would be restructured:
  * Core Working Group (current CTC)
  * Infrastructure and Tools Working Group
    * Build Team
    * Website Team
    * Localization Teams (i18n / translation teams)
  * Release and Support Working Group
    * LTS Team
    * Release Team
    * Docker Team
  * Streams API Working Group
  * Intl API Working Group
  * Node.js API Working Group
    * N-API Team
    * NaN Team
  * Diagnostics and Performance Working Group
    * Diagnostics Team
    * Post-Mortem Team
    * Benchmarking Team

Note that the Admin team is not a working group and would not have a voting
seat.

The Evangelism Working Group would be moved to the Community Committee.

### What about the current TSC Director and Chair positions?

Following adoption of the new model, the proposal is that a new election would
be held. Any documented member of a chartered working group would be eligible
to run for either position. Self-nominations only, with all nominations being
secret until a week before the ballot opens. Then each candidate would be asked
to post a short summary about what they envision for the role and what they are
looking to accomplish. Vote would be cast by all documented working group
members following a single transferable vote model with the winner announced
at the next TSC meeting.
