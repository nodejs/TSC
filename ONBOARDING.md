# Onboarding/Offboarding

Please refer to the
[Establishment of the TSC](https://github.com/nodejs/TSC/blob/main/TSC-Charter.md#section-4-establishment-of-the-tsc)
in the TSC Charter. In the event that there is a contradiction between that
document and this document, the contradictory elements in this document are
invalid and are superseded by the TSC Charter.

## Onboarding of voting members

* Confirm that the new member has read, understands, and agrees to uphold the
  [Code of Conduct](https://github.com/nodejs/admin/blob/main/CODE_OF_CONDUCT.md).
* Add the new member to the `@nodejs/tsc` and `@nodejs/security-tsc` teams.
* Change the new member's role in the GitHub `nodejs` organization to `Owner`.
* Add them to the `@nodejs-private` org and with an `Owner` role.
* Add them to the `@nodejs-private/security-tsc` team.
* Add them to the `@pkgjs` org and with an `Owner` role.
* Add them to the `@pkgjs/node-tsc` team.
* Invite them to the HackerOne [Node.js team](https://hackerone.com/organizations/nodejs/settings/users).
  Have them turn on two-factor authentication after they have joined.
* Add them to the `tsc` mailing list: <https://github.com/nodejs/email/edit/main/iojs.org/aliases.json>
* Add them to the [nodejs-tsc](https://groups.google.com/g/nodejs-tsc) Google Group as owners, so they receive Calendar invites for TSC meetings.
* Update the `@nodejs/node` repository README to reflect membership in the TSC.
* Invite them to the project's [1Password account](https://nodejs.1password.com/), once they accept confirm them and add them to the owners group.
* Update <https://github.com/nodejs/create-node-meeting-artifacts/blob/main/templates/invited_tsc> to reflect membership in the TSC.
* Inform them of the TSC meeting password.
* Ask them what is their handle on OpenJS Slack – and ask them to create one if they haven't one already. Add that handle to the `#nodejs-tsc` channel.

## Offboarding of voting members

* Remove the member from the following teams:
  * [`@nodejs/tsc`](https://github.com/orgs/nodejs/teams/tsc/members)
  * [`@nodejs/security-tsc`](https://github.com/orgs/nodejs/teams/security-tsc/members)
  * [`@nodejs-private/security-tsc`](https://github.com/orgs/nodejs-private/teams/security-tsc/members)
  * [`@pkgjs/node-tsc`](https://github.com/orgs/pkgjs/teams/node-tsc/members)
* Change the member's role from `Owner` to `Member`
  (unless they have `Owner` role for a reason other than TSC membership)
  in the following GitHub orgs:
  * [`@nodejs-private`](https://github.com/orgs/nodejs-private/people)
  * [`@nodejs`](https://github.com/orgs/nodejs/people)
* Remove them from the following GitHub orgs unless they are members for a
  reason other than TSC membership:
  * [`@nodejs-private`](https://github.com/orgs/nodejs-private/people)
  * [`@nodejs`](https://github.com/orgs/nodejs/people)
  * [`@pkgjs`](https://github.com/orgs/pkgjs/people)
* Remove them from the HackerOne [Node.js team](https://hackerone.com/organizations/nodejs/settings/users) unless they need access for a
  reason other than TSC membership.
* Remove them from the `tsc` mailing lists: <https://github.com/nodejs/email/edit/main/iojs.org/aliases.json>.
* Remove them from the [nodejs-tsc](https://groups.google.com/g/nodejs-tsc) Google Group.
* Remove them from the owners group in the project's [1Password account](https://nodejs.1password.com/).
* Update the `@nodejs/node` repository README to reflect membership in the TSC.
  In all likelihood, they should be listed as TSC regular members.
* Update <https://github.com/nodejs/create-node-meeting-artifacts/blob/main/templates/invited_tsc> to reflect membership in the TSC.
* Remove them from the `#nodejs-tsc` channel on the OpenJS Slack. If they are a member of the `#nodejs-personnel` channel, remove them from that channel as well.

## Onboarding/offboarding of regular members

* Update <https://github.com/nodejs/create-node-meeting-artifacts/blob/main/templates/invited_tsc> to reflect membership in the TSC.
