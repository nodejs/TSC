# Node.js Security Team

Node.js security team members are expected to keep all information that they have
privileged access to by being on the team completely private to the team. This
includes agreeing to not notify anyone outside the team of issues that have not
yet been disclosed publicly, including the existence of issues, expectations of
upcoming releases, and patching of any issues other than in the process of their
work as a member of the security team.

## Node.js Security Team Membership Policy

The Node.js Security Team has access to security-sensitive issues and patches
that aren't appropriate for public availability.

The policy for inclusion is as follows:

1. All members of @nodejs/TSC have access to private security reports and
   private patches.
2. Members of the @nodejs/releasers team
   have access to private security patches in order to produce releases.
3. On a case-by-case basis, individuals outside the Technical Steering
   Committee are invited by the TSC to have access to private security reports
   or private patches so that their expertise can be applied to an issue or
   patch. This access may be temporary or permanent, as decided by the TSC.

Membership on the security teams can be requested via an issue in the TSC repo.

## Team responsible for Triaging security reports

Initial triage is done by HackerOne staff. Once enough information is gathered
to confirm there is a reproducible issue, triage is assigned to this group.

The responsibility of Triage is to determine whether Node.js must take any
action to mitigate the issue, and if so, to ensure that the action is taken.

Mitigation may take many forms, for example, a Node.js security release that
includes a fix, documentation, an informational CVE or blog post.

<!-- ncu-team-sync.team(nodejs/security-triage) -->

- [@bnoordhuis](https://github.com/bnoordhuis) - Ben Noordhuis
- [@cjihrig](https://github.com/cjihrig) - Colin Ihrig
- [@indutny](https://github.com/indutny) - Fedor Indutny
- [@jasnell](https://github.com/jasnell) - James M Snell
- [@mcollina](https://github.com/mcollina) - Matteo Collina
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@shigeki](https://github.com/shigeki) - Shigeki Ohtsu
- [@vdeturckheim](https://github.com/vdeturckheim) - Vladimir de Turckheim
- [@watson](https://github.com/watson) - Thomas Watson

<!-- ncu-team-sync end -->

## Team with access to private security reports against Node.js

The [TSC](https://github.com/nodejs/node#tsc-technical-steering-committee)
have access.

These non-TSC and TSC Emeriti also have access:
* [bnoordhuis](https://github.com/bnoordhuis) - **Ben Noordhuis**
* [indutny](https://github.com/indutny) - **Fedor Indutny**
* [rvagg](https://github.com/rvagg) - **Rod Vagg**
* [vdeturckheim](https://github.com/vdeturckheim) - **Vladimir de Turckheim**
- [@watson](https://github.com/watson) - **Thomas Watson**

List is from the [member page](https://hackerone.com/nodejs/team_members) for
the Node.js program on HackerOne.

## Team with access to private security patches to Node.js

<!-- ncu-team-sync.team(nodejs-private/security) -->

- [@addaleax](https://github.com/addaleax) - Anna Henningsen
- [@apapirovski](https://github.com/apapirovski) - Anatoli Papirovski
- [@BethGriggs](https://github.com/BethGriggs) - Bethany Nicolle Griggs
- [@bnoordhuis](https://github.com/bnoordhuis) - Ben Noordhuis
- [@BridgeAR](https://github.com/BridgeAR) - Ruben Bridgewater
- [@ChALkeR](https://github.com/ChALkeR) - Сковорода Никита Андреевич
- [@cjihrig](https://github.com/cjihrig) - Colin Ihrig
- [@codebytere](https://github.com/codebytere) - Shelley Vohr
- [@danbev](https://github.com/danbev) - Daniel Bevenius
- [@dougwilson](https://github.com/dougwilson) - Douglas Wilson
- [@evanlucas](https://github.com/evanlucas) - Evan Lucas
- [@evilpacket](https://github.com/evilpacket) - Adam Baldwin
- [@fhinkel](https://github.com/fhinkel) - F. Hinkelmann
- [@Fishrock123](https://github.com/Fishrock123) - Jeremiah Senkpiel
- [@gabrielschulhof](https://github.com/gabrielschulhof) - Gabriel Schulhof
- [@gibfahn](https://github.com/gibfahn) - Gibson Fahnestock
- [@gireeshpunathil](https://github.com/gireeshpunathil) - Gireesh Punathil
- [@indutny](https://github.com/indutny) - Fedor Indutny
- [@jasnell](https://github.com/jasnell) - James M Snell
- [@jbergstroem](https://github.com/jbergstroem) - Johan Bergström
- [@joaocgreis](https://github.com/joaocgreis) - João Reis
- [@joyeecheung](https://github.com/joyeecheung) - Joyee Cheung
- [@mcollina](https://github.com/mcollina) - Matteo Collina
- [@mhdawson](https://github.com/mhdawson) - Michael Dawson
- [@MylesBorins](https://github.com/MylesBorins) - Myles Borins
- [@rvagg](https://github.com/rvagg) - Rod Vagg
- [@saghul](https://github.com/saghul) - Saúl Ibarra Corretgé
- [@sam-github](https://github.com/sam-github) - Sam Roberts
- [@shigeki](https://github.com/shigeki) - Shigeki Ohtsu
- [@targos](https://github.com/targos) - Michaël Zasso
- [@thefourtheye](https://github.com/thefourtheye) - Sakthipriyan Vairamani
- [@tniessen](https://github.com/tniessen) - Tobias Nießen
- [@Trott](https://github.com/Trott) - Rich Trott
- [@vdeturckheim](https://github.com/vdeturckheim) - Vladimir de Turckheim
- [@watson](https://github.com/watson) - Thomas Watson

<!-- ncu-team-sync end -->

## Security Triage Workflow

Security issues are reported via HackerOne, see [nodejs.org](https://nodejs.org/en/security/#reporting-a-bug-in-node-js).

Report states are described in HackerOne [docs](https://docs.hackerone.com/programs/report-states.html).

The expected workflow for issues reported to Node.js is:

1. `NEW`: issue reported (initial state).  Issues in this state are in the
   process of being analyzed with the intention to move them into either
   `TRIAGED`, `NEEDS-MORE-INFO`, or one of the "Closed" states
   (`NOT-APPLICABLE`, `INFORMATIVE`, etc.). Has several sub-states:
   1. `H1 Triage`: Issues start off assigned to the `H1 Triage` team. That team
      does initial triage. They ask for a runnable reproduction, they run it,
      and they verify whether it does in fact appear to demonstrate a
      vulnerability that has not already been reported. Once this is done, they
      assign the issue to the `Node.js Team`.
   2. `Node.js Team`: Issues assigned by `H1 Triage`, or issues that Node.js
      assigns to itself for triage preemptively (perhaps because of priority, or
      because its disposition is obvious, or any other reason we decide to
      skip the `H1 Team`'s reproduction).
   3. `NEEDS-MORE-INFO`: In the state of back-and-forth with reporter.
      When further progress on the issue is blocked on response from the reporter,
      this is the state.
2. `TRIAGED`: State for an issue when it is a non-duplicate and resolvable.
   Issues in this state are waiting for the Node.js team to take some action to
   resolve them. Typically, this would be publishing a Node.js release that
   resolves the issue, but it could also be publishing documentation, or making
   a configuration change to our infrastructure for a https://nodejs.org
   problem. The expected resolution should be described in a comment on the
   issue when it is moved to `TRIAGED`.
   - ...: There are no explicit states for an issue as it is in process of
     getting resolved. Comments on the issue when someone is working on it are
     useful, as is assignment of the issue to a person who agrees to be
     responsible for following it through to resolution and disclosure.
5. `RESOLVED`: State for an issue that has had a fix published. Issues in this
   state should be disclosed.
6. ...: Final states for issues that we will not fix:
   - `NOT-APPLICABLE`: We do not agree this a vulnerability. We can request
     that the reporter close it to preserve their H1 "reputation points".  If
     it is an issue, though not a vulnerability, we can suggest that it be
     reported to the Node.js issue tracker.
   - `INFORMATIVE`: This means we agree that the report contains useful
     information, but we don't intend to publish a fix. This might be because
     it isn't possible, or because its in an unsupported API or version. We
     can consider disclosing it if we  think the information should be
     publicized.
   - `DUPLICATE`: The report is a duplicate of an already reported issue. It
     should not need disclosure, because the original issue will be disclosed
     after it is resolved.
   - `SPAM`: Self-explanatory (and rare).
7. Disclosure: This not a HackerOne report state, but it is the final state
   from our perspective. Disclosure should be considered once an issue is
   closed. See the
   [disclosure docs](https://docs.hackerone.com/programs/disclosure.html).
