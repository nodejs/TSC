# A Proposal for the Governance Structure of the Node.js Project

## What problems are being addressed?

* The TSC as it exists today is largely disfunctional.
 
## tl;dr version

This proposal eliminates the TSC as a standing body of individual voting
members and instead distributes the decision making authority previously
held by that standing body to the chartered working groups.

This proposal does not change the CTC in any way other than in terms of how
new working groups are chartered.

## Proposal

What I am proposing is a revised TSC/CTC structure such that:

1. Eliminate the TSC standing membership body. Rather than individual voting
   TSC members, each chartered working group has a single voting seat. It is
   up to each working group to decide on its own process for exercising that
   vote.
2. An Admin team would be created that would be charged with handling the
   more mundane administrative tasks currently handled by the TSC (budget
   allocations, github org management, handling confidential information).
   Tasks like administering the travel fund could be handed off to the
   Community Committee. This admin team would not be a voting body.
3. There would be only one TSC meeting per month.
   * The meeting may be in person or fully remote.
   * The meeting would consist of a public portion only that includes a
     stand up of *working group* activities and issues, and discussion of
     escalated issues.
   * Any working group member may attend.
   * Anyone who is not a working group member may attend on invitation from a
     working group member.
4. The TSC Chair and TSC Director positions remain with an annual election.
   * Any working group member is eligible to run for either seat and all working
     group members would vote.
   * The TSC Chair organizes the agenda for, and conducts, the monthly meeting.
   * The TSC Director sits on the Node.js Board of Directors and chairs the
     Admin team.
5. Any working group member may request to participate in the Admin team, and
   the Admin team may have a process for adding non-working group members.
   All Admin team members are subject to consensus or vote by the working
   groups. 
6. The CTC does not change with the exception that it does not charter its own
   working groups. New working groups are chartered only through consensus or
   vote of all working groups, including the CTC.

## Questions

### Why not simply fold the TSC and CTC back together?

For the simple reason that doing so does not address the cause of the
disfunction.

Also, the reason the TSC and CTC were split in the first place was because the
overwhelming majority of CTC members do not want to deal with the administrative
tasks delegated to the TSC, and I imagine that is still the case. We would still
need an Admin team to handle those tasks.

### Why working group votes?

Currently, the TSC is the final arbiter on contentious decisions. If the CTC
made a decision that a collaborator disagreed with, the issue can be flagged
for TSC review and decision. While this *hardly ever happens*, it is an
important step. The working group votes would only exist to preserve the
ability to escalate issues in the exremely rare case it becommes necessary.
But, rather than having a standing body of individuals decide the matter, it
goes to a consensus of the working groups instead. It should be exceedingly
rare for this to actually happen tho.

### What additional process does this require for Working Groups?

Exceedingly little. Working groups would generally continue to operate as they
do today.

The two additional requirements are that: 

* On the rare occasion that a TSC vote is required, the working group would
  need to determine whether and how to exercise its vote.
* Working groups would need to more formally document their membership

### What additional benefit does this provide to Working Groups?

Working groups would have more direct control over their areas of
responsibility.

For instance, if a working group wanted to bring in a new project that fell
within it's area of responsibility, the only requirement would be to ask if
there are any objections from the other working groups. It would not require
a vote of the individual TSC members as is currently required. Rather, as
long as there are no objections, the working group would just do what it feels
it needs to do.

### Would Working Groups be required to name a chair?

No. Again, working groups would continue to work however the working groups
choose to work.

### Would individuals be forced into participating in particular ways?

For instance, would technical people be forced to do administrative stuff?

No. This proposal does not change, in any way, how individuals paticipate in
the project. Those who care only about the technical side of things can
continue to keep focusing on the technical side.

What this proposal does do, however, is open the opportunity for anyone who
*wants* to participate in the administrative side of things to do so.

### How does this effect the CTC?

It doesn't really. The CTC processes are generally not impacted by this with
exception only to how new working groups are chartered and how issues escalated
to the TSC level are resolved. The proposal does not change how the CTC works
at all.

### Why would working groups nominate someone to the Admin team?

This would be to ensure proper representation among the working groups when key
decisions are made with regards to budget allocation and administrative actions
such as moderation enforcement. It's entirely up to the working group to
decide if this is something they need or want.

### Why is the TSC Director the chair of the Admin team?

This is primarily for logistical reasons. The Admin team will be responsible for
dealing with budget allocations and administrative tasks that involve
interfacing with the Node.js Foundation. The TSC Director will be the primary
touch point for such activities. This also echoes the situation in the
Community Committee where the individual member representatives on the board
share the Community Committee chair responsibilities.

### It will take longer to get things done!

It shouldn't take any longer than it does today.

### This just means we’ll have more Working Groups!

Working groups will carry with them a certain amount of required process.
Chartering a new working group would also require consensus of all the
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

* New working groups would not be chartered solely by the CTC.
* Working groups would be encouraged to nominate one of their members to the
  Admin team. (preferably someone actually willing to do administrative stuff)
* Working groups would be expected to have a bit more process around documenting
  who their members are.
* Several of the existing working groups *could* be restructured *solely for
  the purpose of voting*. This restructuring *does not change* how the teams
  actually get things done or how people participate in them:
  * CTC
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

Each chartered working group would have 1 TSC level vote. Note that the Admin
team is not a working group and would not have a voting seat.

The Evangelism Working Group would be moved to the Community Committee.

### Build, Website and Localization in one working group?!

This is solely for the purpose of voting. These would still be separate teams
that would operate however they choose to operate. This proposal would not
suddenly force working groups to have meetings, or force them to interact in
any particular way. Having Build and Website under the same working group,
for instance, would not mean that people only interested in build stuff would
have to get involved with website stuff, and vice versa. What it means is that,
when the rare occasion for a TSC level vote happens to come up, these teams
vote as a single block. That's it. That's the extent of the requirement.

Likewise with the Release and Support Working Group. Having the Release and
LTS teams under this one working group does not mean that everyone on the
release team has to participate in LTS team meetings and backporting sprints,
etc. In fact, there would really be no reason at all for these teams and the
individuals who participate in them to change anything at all about how they
currently operate. The *only* difference is that when the rare TSC vote comes
up, they vote as a single block.

### What about the current TSC Director and Chair positions?

Following adoption of the new model, the proposal is that a new election would
be held. Any documented member of a chartered working group would be eligible
to run for either position. Self-nominations only, with all nominations being
secret until a week before the ballot opens. Then each candidate would be asked
to post a short summary about what they envision for the role and what they are
looking to accomplish. Vote would be cast by all documented working group
members following a single transferable vote model with the winner announced
at the next TSC meeting.
