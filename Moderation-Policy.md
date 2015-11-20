## Moderation policy

If you are not a member of the Node.js Github Organization and wish to submit a moderation request, please see [Requesting Moderation](#requesting-moderation)

* [Applicability](#applicability)
* [Terms](#terms)
* [Requesting Moderation](#requesting-moderation)
* [Consideration of Intent](#consideration-of-intent)
* [Policy](#policy)
 * [Collaborator Posts](#collaborator-posts)
 * [Non-Collaborator Posts](#non-collaborator-posts)
* [Privacy of the nodejs/moderation Repository](#privacy-of-the-nodejsmoderation-repository)
* [TSC Delegation of Authority to a "Moderation Working Group"](tsc-delegation-of-authority-to-a-moderation-working-group)
* [Modifications to this Policy](#modifications-to-this-policy)

### Applicability

By default, this policy applies to all repositories under the Node.js Github Organization and all Node.js Working Groups.

Individual Working Groups and Top Level Projects chartered by the TSC may adopt an alternative Moderation Policy for any repository under their stewardship so long as:
* The Moderation Policy is openly documented as part of the Working Group or Project Charter and;
* Includes provisions for clearly and openly documenting Moderation actions taken.

If a particular repository can be considered to fall under the stewardship of multiple Working Groups (or Top Level Projects) that have adopted different Moderation Policies, they can choose to either:
* Decide between themselves which Moderation Policy will be in effect for the repository in question, or
* Ask the TSC to determine which Moderation Policy should apply.

Any alternative Moderation Policy used for a given repository must be included in the root directory of the repository using the `Moderation-Policy.md` filename. If a repository does not contain a `Moderation-Policy.md` file, then this default policy applies.

### Terms

* "Collaborator" refers to any individual member or "outside collaborator" of the Node.js Github Organization.
* "Post" refers to the content of any issue, pull request, comment or wiki page.
* "Moderate" refers to the act of modifying the content of or deleting any Post.
* "Ban" refers to the act of blocking an individual Github account from any further participation in the Node.js Github Organization.

### Requesting Moderation

Anyone may request Moderation of a Post.

Moderation requests are only necessary when:
 
* The Post in question was authored by a Collaborator, or
* The request is originating from a non-Collaborator.

Requesting Moderation of a Post can be accomplished in one of five ways:

* Via the `report@node.js` email address,
* Via private email to individual TSC members,
* Via a new Post in the same thread as the Post being requested for Moderation,
* Via a new Post in the private nodejs/moderation repository, or
* Private communication between the individuals involved,

Use of the `report@node.js` email address, or private email to individual TSC members, is appropriate when the individual requesting the Moderation does not feel comfortable directly or publicly making the request. All emails sent to the `report@node.js` address are currently forwarded to all members of the TSC. [[ED NOTE: This has not yet been set up]]

Requests should contain as much information and context as possible, including the URL and a screenshot of the Post in question. Screenshots may be modified to obscure obscene or offensive content.

External public venues or social media services such as Twitter should never be used to request Moderation.

Collaborators should never discuss the specific details of a Moderation request in any public forum or any social media service outside of the Node.js Github Organization.

### Consideration of Intent

Before Moderating or a Post, Collaborators should carefully consider the possible intent of the author. It may be that the author has simply made an error or is not familiar with the [Code of Conduct](https://github.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md); or it may be that cultural differences exist or that the author is unaware that certain content is considered inappropriate. Unless the offense or the intent to disrupt, annoy or harass is obvious, an author should be given the benefit of the doubt and be given an opportunity to correct any mistake that may have been made.

### Policy

* All Posts are expected to respect the [Node.js Code of Conduct](https://github.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md).
* Only Collaborators with commit rights to a given repository may Moderate Posts within that repository's issue tracker.
* Only a TSC member may Ban an individual from the Node.js Github Organization.
* Any individual Banned from the Node.js Github Organization will be recommended for exclusion from any Node.js Foundation sponsored event or activity.

#### Collaborator Posts

* Collaborators must not Moderate any Post authored by another Collaborator without first giving the author at least 24 hours (from the time of the initial request) to modify or remove the Post on their own.
* If the author of the Post disagrees that Moderation is required, the matter can be escalated to the TSC by creating a new issue (or using an existing one) within the nodejs/moderation repository with the label `tsc-agenda`. In such cases, the TSC will serve as the final arbiter.
* While Moderation of a Collaborator's Post is in dispute, no Moderation action should be taken until a decision by the TSC is made.
* In extreme circumstances involving either obvious gross violations of the [Node.js Code of Conduct](https://github.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md) or possible compromise of a Collaborator's Github account, the TSC can be consulted to waive the 24 hour grace period and dispute process.
* For Moderation issues involving a TSC member, the member in question is expected to recuse themselves from any decisions required to resolve the issue.
* When Moderating any Post authored by another Collaborator, the moderating Collaborator must:
 * Explain the justification for Moderating the post,
 * Identify all changes made to the Post, and
 * Identify the steps previously taken to resolve the issue.
* Explanations of Moderation actions on Collaborator Posts must be provided in:
 * A new post within the original thread, or
 * A new issue within the private nodejs/moderation repository.
* Any Collaborator who habitually authors Posts that must be Moderated will be subject to possible removal from the Node.js Github Organization. Such action can only be taken through normal TSC motion and vote.

#### Non-Collaborator Posts

* Posts authored by non-Collaborators are always subject to immediate Moderation by any Collaborator if the content is intentionally disruptive or in violation of the [Node.js Code of Conduct](https://github.com/nodejs/node/blob/master/CODE_OF_CONDUCT.md).
* When Moderating non-Collaborator Posts, the moderating Collaborator should:
 * Explain the justification for Moderating the post, and
 * Identify all changes made to the Post.
* If an explanation of a Moderation action for a non-Collaborator Post is provided, it must be provided in:
 * The original Post being modified (as replacement or appended content),
 * A new post within the original thread, or
 * A new issue within the private nodejs/moderation repository.
* Moderation of Posts authored by non-Collaborators may result in those non-Collaborators being Banned from further participation in the Node.js Github Organization for an indefinite period of time.

Note that Moderating non-Collaborator posts can often lead to retaliation or escalation of inappropriate behavior by the individual whose post is being Moderated. This is true primarily of individuals whose intent is to harass, disrupt or annoy individual members of the community. In such cases, it is best to handle the Moderation as quickly and as quietly as possible without drawing any further undue attention to the Post in question.

### Privacy of the nodejs/moderation Repository

The nodejs/moderation Repository is used to discuss the potentially sensitive details of any specific proposed or actual Moderation or Banning action. The repository is private but accessible to all Collaborators. The details of any issue discussed within the nodejs/moderation repository are expected to remain confidential and are not to be discussed in any public forum or social media service.

### TSC Delegation of Authority to a "Moderation Working Group"

For any Moderation action that does not directly involve a TSC member, the TSC may choose to delegate some or all of it's Moderation-related responsibilities to a "Moderation Working Group". All members of such a Working Group must be Collaborators and the TSC will have responsibility for selecting the membership of that Moderation Working Group.

### Modifications to This Policy

Modifications to this policy are made through normal [TSC motion and vote](https://github.com/nodejs/TSC/blob/master/TSC-Charter.md#section-8-voting). Any Collaborator may submit a PR proposing changes to this policy. Those PRs must be labeled using the `tsc-agenda` label. Including a mention to `@nodejs/tsc` can be used to call the issue to TSC's attention.
