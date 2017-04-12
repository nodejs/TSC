## Moderation policy

If you are not a member of the Node.js GitHub Organization and wish to submit a moderation request, please see [Requesting Moderation](#requesting-moderation)

* [Applicability](#applicability)
* [Terms](#terms)
* [Grounds for Moderation](#grounds-for-moderation)
* [Requesting Moderation](#requesting-moderation)
* [Consideration of Intent](#consideration-of-intent)
* [Guidelines and Requirements](#guidelines-and-requirements)
 * [Collaborator Posts](#collaborator-posts)
 * [Non-Collaborator Posts](#non-collaborator-posts)
* [Escalation to the TSC](#escalation-to-the-tsc)
* [Privacy of the nodejs/moderation Repository](#privacy-of-the-nodejsmoderation-repository)
* [TSC Delegation of Authority to a "Moderation Working Group"](tsc-delegation-of-authority-to-a-moderation-working-group)
* [Modifications to this Policy](#modifications-to-this-policy)

### Applicability

By default, this policy applies to all repositories under the Node.js GitHub Organization, all Node.js Working Groups, as well as all channels of communication officially provided by the Node.js project (including, but not limited to Slack channels, email and IRC).

Individual Working Groups and Top Level Projects chartered by the TSC may adopt an alternative Moderation Policy for any repository under their stewardship so long as:
* The Moderation Policy is openly documented as part of the Working Group or Project Charter and;
* Includes provisions for clearly and openly documenting Moderation actions taken.

If a particular repository or communication channel can be considered to fall under the stewardship of multiple Working Groups (or Top Level Projects) that have adopted different Moderation Policies, they can choose to either:
* Decide between themselves which Moderation Policy will be in effect for the repository in question, or
* Ask the TSC to determine which Moderation Policy should apply.

Any alternative Moderation Policy used for a given repository or communication channel must be included in the root directory of the repository using the `Moderation-Policy.md` filename, or clearly linked to via URL. If a repository does not contain a `Moderation-Policy.md` file, or a link to the alternative policy is not provided, then this default policy applies.

### Terms

* *Collaborator* refers to any individual with configured write (commit) permissions to any Node.js GitHub organization repository *other than the Moderation Repository*. See [GitHub's access permissions documentation](https://help.github.com/articles/what-are-the-different-access-permissions/) for more information.
* *Officially Supported Communication Channel* refers to any forum or technology provided and managed by the Node.js TSC for use by Collaborators for any purpose. Examples include, but are not limited to: Slack and IRC channels, conference calls, in-person meetings (such as conference events), and email.
* *TSC* refers to the [Node.js Technical Steering Committee](https://github.com/nodejs/node#tsc-technical-steering-committee).
* *Post* refers to the content and titles of any issue, pull request, comment or wiki page; or to any interaction occurring within an officially supported communication channel.
* *Moderate* refers to the act of modifying the content and title of, or deleting, any Post for the purpose of correcting or addressing Code of Conduct violations.
* *Remove* refers to the act of removing the configured write (commit) permissions for an individual Collaborator's GitHub account from *all* Node.js GitHub Organization repositories as well as removing the account from the Node.js GitHub Organization membership; or to removing an individuals permissions to add Posts to any officially supported communication channel.
* *Ban* refers to the act of blocking an individual GitHub account from any further participation in the Node.js GitHub Organization or any officially support communication channel.
* *Requester* refers to an individual requesting Moderation on a Post.

### Grounds for Moderation

Any Post considered to be in violation of the [Node.js Code of Conduct](https://GitHub.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md) is subject to Moderation.

The TSC is solely responsible for deciding what constitutes inappropriate behavior that may be subject to Moderation (see: [Escalation to the TSC](#escalation-to-the-tsc)).

### Requesting Moderation

Anyone may request Moderation of a Post. Requesting Moderation of a Post can be accomplished in one of four ways:

* Via the [report@nodejs.org](mailto:report@nodejs.org) email address,
* Via private email to individual TSC members,
* Via a new Post in the same thread as the Post being requested for Moderation,
* Via a new Post in the private nodejs/moderation repository.

Note that Collaborators may Moderate non-Collaborator Posts at any time without submitting an initial request (see: [Non-Collaborator Posts](#non-collaborator-posts)).

Use of the [report@nodejs.org](mailto:report@nodejs.org) email address -- or private email to individual TSC members -- is appropriate when the individual requesting the Moderation does not feel comfortable directly or publicly making the request. All emails sent to the [report@nodejs.org](mailto:report@nodejs.org) address are currently forwarded to all members of the TSC.

When a request is sent by email to the [report@nodejs.org](mailto:report@nodejs.org) (or directly to a TSC member) a new issue detailing the request must be created in the private nodejs/moderation repository. The identity of the individual submitting the request should be omitted from the issue unless permission to include the identity is provided by the reporter.

Requests should contain as much information and context as possible, including the URL and a screenshot of the Post in question. Screenshots may be modified to obscure obscene or offensive content.

External public venues or social media services such as Twitter should never be used to request Moderation.

Collaborators should never discuss the specific details of a Moderation request in any public forum or any social media service outside of the Node.js GitHub Organization.

Note that quoting the original content of a Post within a Moderation request or nodejs/moderation repository issue is not considered a violation of the Code of Conduct. However, discretion is advised when including such quotes in requests posted to public repositories.

Requests for Moderation that do not appear to have been submitted in good faith with intent to address a legitimate Code of Conduct violation, as determined by the TSC, may be ignored.

### Consideration of Intent

Before Moderating a Post, Collaborators should carefully consider the possible intent of the author. It may be that the author has simply made an error or is not yet familiar with the [Code of Conduct](https://GitHub.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md); or it may be that cultural differences exist, or that the author is unaware that certain content is considered inappropriate. In such cases, the author should be given an opportunity to correct any error that may have been made.

Note, however, that unfamiliarity with the [Code of Conduct](https://GitHub.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md) does not excuse a Post from Moderation.

### Guidelines and Requirements

* All Posts are expected to respect the [Node.js Code of Conduct](https://GitHub.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md).
* Within a GitHub repository, Only Collaborators with commit rights to a given repository may Moderate Posts within that repository's issue tracker.
* Within any other officially supported communication channel, the TSC shall select one or more Collaborators to operate as "Operators" who may exercise the right to Moderate Posts within that communication channel.
* The TSC serves as the final arbiter for all Moderation issues (see: [Escalation to the TSC](#escalation-to-the-tsc)).
* Only a TSC member may Remove or Ban an individual from the Node.js GitHub Organization or officially supported communication channels.
* For any Removal or Banning action, an issue describing the reasons for the action, and identifying the Github account being acted upon, must be posted to the Moderation Repository with an explanation provided by the TSC member performing the action.
* Any individual Banned from the Node.js GitHub Organization, or officially support communication channels, will be recommended for exclusion from any Node.js Foundation sponsored event or activity.
* Minor edits to the formatting of a Post or to correct typographical errors are not considered to be "Moderation". Such edits and their intent should still be documented with a short note indicating who made the edit and why.

#### Collaborator Posts

* Collaborators must not Moderate any Post authored by another Collaborator without first giving the author at least 24 hours (from the time of the initial request) to modify, remove or otherwise correct the Post on their own.
* If the author of the Post disagrees that Moderation is required, the matter can be [escalated to the TSC](#escalation-to-the-tsc) for resolution. In such cases, no Moderation action should be taken until a decision by the TSC is made.
* In extreme circumstances involving either obvious gross violations of the [Node.js Code of Conduct](https://GitHub.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md) or possible compromise of a Collaborator's GitHub account, the TSC can be consulted to waive the 24 hour grace period and dispute process.
* When Moderating any Post authored by another Collaborator, the moderating Collaborator must:
 * Explain the justification for Moderating the post,
 * Identify all changes made to the Post or other actions taken, and
 * Identify the steps previously taken to resolve the issue.
* Explanations of Moderation actions on Collaborator Posts must be provided in:
 * A new post within the original thread, or
 * A new issue within the private nodejs/moderation repository.
* Any Collaborator who habitually authors Posts that must be Moderated can be Removed or Banned from further participation in the Node.js GitHub organization and officially support communication channels for an indefinite period of time. Such action can only be taken through normal TSC motion and vote (see: [Escalation to the TSC](#escalation-to-the-tsc)).

#### Non-Collaborator Posts

* Posts authored by non-Collaborators are always subject to immediate Moderation by any Collaborator if the content is intentionally disruptive or in violation of the [Node.js Code of Conduct](https://GitHub.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md).
* When Moderating non-Collaborator Posts, the moderating Collaborator should:
 * Explain the justification for Moderating the post, and
 * Identify all changes made to the Post.
* If an explanation of a Moderation action for a non-Collaborator Post is provided, it should be provided in:
 * The original Post being modified (as replacement or appended content),
 * A new post within the original thread, or
 * A new issue within the private nodejs/moderation repository.
* Moderation of Posts authored by non-Collaborators may result in those non-Collaborators being Banned from further participation in the Node.js GitHub organization for an indefinite period of time.
* In the case where a GitHub Account appears to have been created with no intention to collaborate in good faith, swift actions may be taken without following the above procedures including: removing Posts, Banning, and reporting accounts to GitHub.

Note that Moderating non-Collaborator posts can often lead to retaliation or escalation of inappropriate behavior by the individual whose post is being Moderated. This is true primarily of individuals whose intent is to harass, disrupt or annoy individual members of the community. In such cases, it is best to handle the Moderation as quickly and as quietly as possible without drawing any further undue attention to the Post in question.

### Escalation to the TSC

Any Moderation issue or dispute can be escalated to the TSC by "mentioning" `@nodejs/tsc` in the body of a GitHub issue either in the original thread or in the private nodejs/moderation repository. Optionally, the `tsc-agenda` label may be attached to the issue to request that it be added to the TSC meeting agenda.

(Note that using the `@nodejs/tsc` syntax to mention the TSC in the body of a request only will only work if the author of the Post is currently a member of the Node.js GitHub organization.)

All Moderation-related decisions follow the normal [TSC motion and voting process](https://GitHub.com/nodejs/TSC/blob/master/TSC-Charter.md#section-8-voting).

TSC members directly involved in a Moderation issue -- as either the Requester or author of the Post in question -- are expected to excuse themselves from any decisions required to resolve the issue.

### Privacy of the nodejs/moderation Repository

The nodejs/moderation Repository is used to discuss the potentially sensitive details of any specific moderation issue. The repository is private but accessible to all Collaborators. The details of any issue discussed within the nodejs/moderation repository are expected to remain confidential and are not to be discussed in any public forum or social media service.

Any Collaborator found to be violating the privacy of the nodejs/moderation repository by repeatedly sharing or discussing the details of nodejs/moderation issues in any public forum or social media service risks being removed from the Node.js GitHub organization and officially support communication channels through standard TSC motion and vote.

### TSC Delegation of Authority to a "Moderation Working Group"

For any Moderation issue that does not directly involve a TSC member, the TSC may choose to delegate some or all of it's Moderation-related responsibilities to a "Moderation Working Group". All members of such a Working Group must be Collaborators and the TSC will have responsibility for selecting the membership of that Moderation Working Group.

### Modifications to This Policy

Modifications to this policy are made through normal [TSC motion and vote](https://GitHub.com/nodejs/TSC/blob/master/TSC-Charter.md#section-8-voting). Any Collaborator may submit a PR proposing changes to this policy. Those PRs must be labeled using the `tsc-agenda` label. Including a mention to `@nodejs/tsc` can be used to call the issue to TSC's attention.
