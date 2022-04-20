# Node.js OpenSSL Strategy

This policy document describes for each release line:

* Which versions of OpenSSL Node.js will include.
* Which versions of a "shared" OpenSSL Node.js will support.
* What version of TLS will be supported
  * by default,
  * with run-time configuration.
* Whether FIPS will be supported.

It also gives background on OpenSSL release lifetimes, TLS1.3, and FIPS support,
as they affect Node.js.

## Node.js version-specific strategy

### Node.js version 4.x (EOL 2018-04-30)

No longer maintained.  Not discussed further.

### Node.js versions 6.x (EOL 2019-04-30) and 8.x (EOL 2019-12-31)

Node.js 6.x and 8.x have the same OpenSSL versions and policies.

Node.js 8.x is unusual because it's end-of-life would normally be April, 2020,
but it was moved earlier to conincide with the end-of-life of OpenSSL 1.0.2.

* OpenSSL version: 1.0.2 (kept up-to-date with latest)
* Allowed shared OpenSSL version: 1.0.2x
* Default minimum TLS version is TLSv1, default maximum is TLSv1.2. No other
  TLS versions are supported by this version of OpenSSL or Node.js.
* FIPS: supports being configured to build against OpenSSL FIPS 2.0. FIPS
  configuration is not default, and OpenSSL FIPS 2.0 is not included in
  Node.js.

### Node.js version 10.x (EOL April-2021)

OpenSSL LTS support timing, the lack of OpenSSL LTS planning and the lack of a
clear timeframe for a new FIPS module complicates Node.js 10.

For Node.js < 10.16.0:

* OpenSSL version: 1.1.0
* Allowed shared OpenSSL version: 1.1.0
* Default minimum TLS version is TLSv1, default maximum is TLSv1.2. No other
  TLS versions are supported by this version of OpenSSL or Node.js.
* FIPS: not supported

For Node.js >= 10.16.0:

* OpenSSL version: 1.1.1
* Allowed shared OpenSSL version: 1.1.0 or 1.1.1
* Default minimum TLS version is TLSv1, default maximum is TLSv1.2. It is
  expected that TLS1.3 support will be backported to 10.x, but it will _not_ be
  supported by default, only by explicit run-time configuration.
* FIPS: not supported

The plan described above is to:

* Remain backward-compatible with OpenSSL 1.1.0 via dynamic linking for the
  lifetime of Node.js 10. This will cease being an _official_ policy at the
  OpenSSL 1.1.0 EOL date (2019-09-11), which will occur long before Node.js 10.x
  enters Maintenance LTS (April 2020) or EOL (April 2021). Node.js does _not
  officially support_ EOL versions of OpenSSL, but support for a shared OpenSSL
  1.1.0 will be maintained as long as it does not cause security problems and
  there are contributors available to maintain such support. The lack of a
  passing test suite with Node.js 10 compiled against OpenSSL 1.1.0 past the
  OpenSSL EOL date will not hold up further releases of Node 10.
* Upgrade to OpenSSL 1.1.1 when made generally available and Node.js 10 can
  retain ABI and API compatibility. OpenSSL 1.1.1 is claimed by the OpenSSL
  project to be API and ABI compatible with 1.1.0, and Node.js experiments
  indicates that it is, see
  <https://github.com/nodejs/node/issues/18770#issuecomment-446785733>.
* **No support for FIPS** The latest [OpenSSL 3.0 and FIPS Update][] does not
  predict that an OpenSSL 1.1.1 ABI compatible library with FIPS support will
  ever exist. Without such a library, Node.js 10.x cannot support FIPS.

This plan must be communicated to users of Node.js 10 early and often.  There is
potential for instability and a change in default OpenSSL version is
unprecedented and therefore unexpected. The potential for breaking API and/or
ABI may also cause disruption, potentially requiring an increment of
`NODE_MODULE_VERSION`, which will also be unprecedented within a single release
line. There is no indication yet that this will happen when OpenSSL 1.1.1 is
included in Node.js 10.x, but it is important that users be aware of this
possibility.

### Node.js version 11.x (EOL June-2019)

This release will not be designated LTS. It was updated to include OpenSSL 1.1.1
in [11.9.0](https://nodejs.org/en/blog/release/v11.9.0/).

For Node.js < 11.9.0:

* OpenSSL version: 1.1.0
* Allowed shared OpenSSL version: 1.1.0
* Default minimum TLS version is TLSv1, default maximum is TLSv1.2. No other
  TLS versions are supported by this version of OpenSSL or Node.js.
* FIPS: not supported

For Node.js >= 11.9.0:

* OpenSSL version: 1.1.0
* Allowed shared OpenSSL version: 1.1.0 or 1.1.1
* Default minimum TLS version is TLSv1, default maximum is TLSv1.2. It is
  expected that TLS1.3 support will be backported to 11.x, but it will _not_ be
  supported by default, only by explicit run-time configuration.
* FIPS: not supported

### Node.js version 12.x, 13.x, 14.x

* OpenSSL version: 1.1.1
* Allowed shared OpenSSL version: 1.1.1
* Default minimum TLS version is TLSv1.2, default maximum is TLSv1.3. TLSv1
  and TLSv1.1 are _not_ supported by default, only by explicit run-time
  configuration.
* FIPS: not supported

Node.js EOL dates:

* 12.x: April 2022
* 13.x: June, 2020
* 14.x: April 2023

## Node.js version 15.x (est. Oct 2020) (EOL Jun 2021)

* quictls/OpenSSL version: 1.1.1+quic
  Node.js currently uses a temporary OpenSSL fork, which closely tracks the main
  openssl/openssl releases with the addition of APIs to support the QUIC protocol.
  Details on the fork, as well as the latest sources, can be found at
  <https://github.com/quictls/openssl>.
* Allowed shared OpenSSL version: 1.1.1
* Default minimum TLS version is TLSv1.2, default maximum is TLSv1.3. TLSv1
  and TLSv1.1 are _not_ supported by default, only by explicit run-time
  configuration.
* FIPS: not supported

Note: OpenSSL 3.0.0 is NOT expected until Q4 2020, so unless they are _early_
it won't happen in time for 15.x. Its possible that over the support time
of 15.x (which is only about 8 months), that experimental support for OpenSSL
3.x will be backported to it.

## Node.js version 16.x (est Apr 2021) (EOL Apr 2024)

* quictls/OpenSSL version: openssl-3.0.0+quic
  Node.js currently uses a temporary OpenSSL fork, which closely tracks the main
  openssl/openssl releases with the addition of APIs to support the QUIC protocol.
  This will be used until OpenSSL releases support for the QUIC protocol. Details
  on the fork, as well as the latest sources, can be found at
  <https://github.com/quictls/openssl>.
* Allowed shared OpenSSL version: 3.0.0, 3.0.0+quic, 1.1.1, 1.1.1+quic
* Default minimum TLS version is TLSv1.2, default maximum is TLSv1.3. TLSv1
  and TLSv1.1 are _not_ supported by default, only by explicit run-time
  configuration.

OpenSSL 1.1.1 goes EOL on 2023-09-11, which is before 16.x will go EOL, so is
not an appropriate choice for 16.x

For minimal disruption, it would probably be helpful if Node.js supported
building against OpenSSL 1.1.1 out-of-tree, even if OpenSSL 3.x was in-tree.

The plan described above is to:

* Once OpenSSL has been updated with support for the QUIC protocol replace the
  temporary quictls/openssl depencency with it.

Tracking issue: <https://github.com/nodejs/node/issues/29817>

## Node.js version 18.x (est Apr 2022) (EOL Apr 2025)

* quictls/OpenSSL version: openssl-3.0.2+quic
  Node.js currently uses a temporary OpenSSL fork, which closely tracks the main
  openssl/openssl releases with the addition of APIs to support the QUIC protocol.
  This will be used until OpenSSL releases support for the QUIC protocol. Details
  on the fork, as well as the latest sources, can be found at
  <https://github.com/quictls/openssl>.
* Allowed shared OpenSSL version: 3.0.0, 3.0.0+quic, 1.1.1, 1.1.1+quic

The plan described above is to:

* Once OpenSSL has been updated with support for the QUIC protocol replace the
  temporary quictls/openssl depencency with it.

## Background

The Node.js source tree contains a copy of OpenSSL (as it does all of its
dependencies).

All maintained Node.js release lines are kept up-to-date with the latest OpenSSL
patch release of the OpenSSL version they include.

By default, Node.js compiles and statically links its own copy of OpenSSL. It
can be configured to an external "shared" OpenSSL library, or a non-OpenSSL
library that has a sufficiently OpenSSL-compatible API. See [OpenSSL Forks](#openssl-forks-libressl-and-boringssl)
for more information about OpenSSL-compatible libraries.

Shared OpenSSL libraries will lack our floating patches, and may also not be the
latest OpenSSL patch release. Node.js supports being configured to build against
a shared OpenSSL library. Node.js does _not_ support the resulting Node.js
binaries built with this non-default configuration, doing so is the
responsibility of the distributor.

There are different configurations in use by distributors for linking Node.js to
OpenSSL. The most notable distributors and the configurations used are:

* **nodejs.org**: Binaries produced by the Node.js Build infrastructure across
  all supported architectures use the default configuration for OpenSSL and
  therefore compile and statically link in the OpenSSL source as it ships with
  Node.js. It should be noted that nodejs.org is the source of binaries for
  **nvm** which is in heavy client use and is also used by Travis-CI to fetch
  and install Node.js.
* **Linux Distributions**: Binaries shipped with Debian, Ubuntu, CentOS, RHEL,
  Fedora and the majority of other Linux distributions follow a standard policy
  of separating dependencies and dynamically linking wherever possible.  The
  Node.js packages on these systems are linked via the packaging dependency
  mechanisms to OpenSSL 1.0.2 packages and the `node` binaries that ship by
  default on these platforms use the shared OpenSSL 1.0.2 library installed by
  those packages.  Therefore, the floating patches do not apply and it is
  possible that a different version of OpenSSL 1.0.2 is in use by Node.js than
  the version that was shipped in the source tree.
* **NodeSource Builds**: Binaries
  [distributed](https://github.com/nodesource/distributions) by NodeSource are
  heavily used, and do not follow the Linux distribution policy of dependency
  separation. NodeSource uses the Node.js defaults for `configure` and compile
  and statically link in the OpenSSL source shipped bundled with Node.js.
* **Homebrew**: The
  [formula](https://github.com/Homebrew/homebrew-core/blob/master/Formula/node.rb)
  for Node.js as distributed on macOS by the popular `brew` command, by default,
  will compile using the default `configure` configuration. It is possible to
  override this using a `with-openssl` option which will compile against the
  version of OpenSSL that was most recently installed with `brew` but this is
  not believed to be in common use.

## OpenSSL release lines

Currently, there are three supported versions of OpenSSL as per the
[OpenSSL Release Strategy][].

* Version 1.0.2: supported until 2019-12-31, designated Long-term Support (LTS)
* Version 1.1.0: supported until 2019-09-11, not a LTS release line
* Version 1.1.1: supported until 2023-09-11, designated Long-term Support (LTS)
* Version 3.0.0: supported until 2026-09-07, designated Long-term Support (LTS)

### OpenSSL 1.0.2 and FIPS

OpenSSL 1.0.2 is included with Node.js 6.x and 8.x. Those Node.js versions will
continue to get patch updates to 1.0.2, but will not be updated past 1.0.2.

As the 1.0.2 support timeframe does not extend for the entirety of what should
be the support timeframe for Node.js version 8 (2020-04), the version 8.x EOL
date has been [contracted](https://github.com/nodejs/release#release-schedule)
to coincide with the OpenSSL 1.0.2 EOL date at the end of 2019.

[Federal Information Processing Standard](https://en.wikipedia.org/wiki/FIPS_140-2),
"FIPS", is managed by the NIST.  Publication 140-2 is a US government standard
used to approve cryptographic software.

Various organizations rely on the FIPS standard and mandate that software that
they use conform appropriately. OpenSSL itself is not FIPS "validated", instead
a separate "software component" called the "OpenSSL FIPS Object Module" has
been created for the purpose of validation. It is a drop-in replacement for
OpenSSL such that software using the OpenSSL API can be adapted to use it. In
order to retain FIPS compliance, the OpenSSL FIPS Object Module source code
must be obtained via a secure path as dictated by a security policy and the
source must be compiled according to specific steps without variation.

Node.js compiled against the OpenSSL FIPS Object Module does not make Node.js
itself FIPS validated. Instructions for compiling Node.js against the Object
Module along with links to further documentation are detailed in
[BUILDING.md](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-with-fips-compliant-openssl).

The OpenSSL FIPS Object Module is compatible with OpenSSL 1.0.2 and Node.js has
been able to build with this module since 2015, prior to Node.js 4.x. It
requires some modification of the Node.js internals (see `git grep FIPS -- lib/
src/`) for this to work properly.

OpenSSL 1.0.2 is the only current version of OpenSSL that supports FIPS, which
means that Node.js 6.x and 8.x are the only versions of Node.js that currently
support FIPS.

In particular, note  that Node.js 10.x, the most recent Node.js LTS release
line, does not and _will not_ support FIPS.

Aside from some manual configuration that is
required in order to support GYP builds (instead of the Perl-based Configure
script that OpenSSL ships) as described in
[deps/openssl/doc/UPGRADING.md](https://github.com/nodejs/node/blob/66cb29e64621fdd1aa5e377a395ff107d21a613b/deps/openssl/doc/UPGRADING.md),
there are 4 floating patches that are applied on top of the plain OpenSSL 1.0.2
source:

* [c66c3d9fa](https://github.com/nodejs/node/commit/c66c3d9fa3f5bab0bdfe363dd947136cf8a3907f):
  `deps: fix openssl assembly error on ia32 win32`. A minor tweak to
  deps/openssl/openssl/crypto/perlasm/x86masm.pl to switch the instruction set
  referenced in ASM from 486 to 686, only affecting Windows on IA32.
* [42a8de2ac](https://github.com/nodejs/node/commit/42a8de2ac66b6953cbc731fdb0b128b8019643b2):
  `deps: fix asm build error of openssl in x86_win32`. A fix for
  deps/openssl/openssl/crypto/perlasm/x86masm.pl for ASM produced for Windows on
  IA32 as described in
  <https://mta.openssl.org/pipermail/openssl-dev/2015-February/000651.html>
* [2eb170874](https://github.com/nodejs/node/commit/2eb170874aa5e84e71b62caab7ac9792fd59c10f):
  `openssl: fix keypress requirement in apps on win32`. A fix for the `openssl`
  client application, used by the Node.js test suite, to properly accept stdin
  without requiring a physical keyboard. As described in
  <http://openssl.6102.n7.nabble.com/PATCH-s-client-Fix-keypress-requirement-with-redirected-input-on-Windows-td46787.html>.
* [664a65969](https://github.com/nodejs/node/commit/664a6596960655e214fef25e74d3285097703e95):
  `deps: add -no_rand_screen to openssl s_client`. Adds a `-no_rand_screen`
  command line option to the `openssl` client application, used by the Node.js
  test suite which skips invocation of the `RAND_screen()` call on Windows in
  order to speed up some of the Node.js TLS tests. Use of this can be found in
  many of the `test/*/test-{tls,https}-*` test files.

### OpenSSL 1.1.0

OpenSSL 1.1.0 represents a fairly major rework of the codebase, at least in
comparison to its slow evolution until this point. The external API has some
major departures from 1.0.2. However, support for compiling against an external
OpenSSL 1.1.0 library (dynamically linked) was
[added](https://github.com/nodejs/node/pull/16130) to Node.js' master branch in
late 2017.

Even though OpenSSL 1.1.0 is only supported until 2019-09-11, the API shift was
an important stage in Node.js' adaptation.

Openssl 1.1.0 was included in Node.js 10.x in the past. Node.js was
updated to include OpenSSL 1.1.1 in the 10.16.0 release (see above).

### OpenSSL 1.1.1

The OpenSSL team has designated 1.1.1 the next LTS line and have made a
commitment that it will remain both API and ABI compatible with OpenSSL 1.1.0,
and will be supported until 2023-09-11.  It is the first OpenSSL version to
support TLS 1.3, however Node.js' TLS1.3 support requires at least OpenSSL
1.1.1b.

### OpenSSL 3.0.0 and FIPS

The next release of OpenSSL will be 3.0.0. It is skipping 2.0 because that
version has been used for OpenSSL FIPS. It is a major re-architecting, and while
it is expected to be API compatible with OpenSSL 1.1.1, it is _not_ expected to
be ABI compatible, re-compilation will be necessary to upgrade from OpenSSL
1.1.1 to 3.0.0.

OpenSSL 3.0.0 is expected to support FIPS.

See the [OpenSSL 3.0.0 Design][] for more information.

Beta releases of 3.0.0 are expected in Fall, 2019.

Since OpenSSL 3.0.0 is not expected to be ABI compatible with OpenSSL 1.1.1,
Node.js 12.x cannot be updated to it. Whether Node.js 13.x (a non-LTS release)
will be able to include OpenSSL 3.0.0 is currently unknown.  It depends on
whether 3.0.0 is ABI compatible with 1.1.1 (it is not expected to be), whether
the Node.js project is willing to make an ABI incompatible update to OpenSSL
within a non-LTS release line, the timing of the OpenSSL 3.0.0 release, and the
timing of FIPS support for OpenSSL 3.0.0, most of which is unknown.

Currently, it appears that Node.js 13.x will be the next version of Node.js that
may possibly support FIPS, and that Node.js 14.x, released in April, 2020 will
be the next LTS candidate that may possibly support FIPS. There will be a gap
between Node.js 8.x going end-of-life in December, 2019, and the next LTS
release of Node.js that supports FIPS coming in April, 2020.

At this point, the gap looks unavoidable.

## OpenSSL forks: LibreSSL and BoringSSL

**Node.js does not officially support compiling against OpenSSL-compatible
libraries** aside from the OpenSSL FIPS Object Module. However, Node.js
welcomes contributions which may improve compatibility where those
contributions are relatively unobtrusive.

### [LibreSSL](https://www.libressl.org/)

[Some work](https://github.com/nodejs/node/pull/9376) has been done to enable
compilation against LibreSSL. Some operating system distributions ship LibreSSL
instead of OpenSSL and therefore require patching of software such as Node.js.
This is already done in practice, external to the Node.js codebase and without
any support from the Node.js core team. Due to the close compatibility between
LibreSSL and OpenSSL, full and unobtrusive support for compiling against
LibreSSL could be landed into the Node.js codebase given developers interested
in completing this task.

Even if such support was to land in the Node.js codebase, the Node.js project
will not commit to officially supporting LibreSSL or even maintaining full
compatibility in an ongoing basis. As is the case for some operating systems
that are not officially supported, ongoing compatibility will need to be
monitored by interested parties who will also need to submit fixes as required.

### [BoringSSL](https://boringssl.googlesource.com/boringssl/)

> Although BoringSSL is an open source project, it is not intended for general
> use, as OpenSSL is. We don't recommend that third parties depend upon it.
> Doing so is likely to be frustrating because there are no guarantees of API
> or ABI stability.

Google have made it clear that BoringSSL is not intended for general use
outside of their own internal needs. Node.js will not officially support
BoringSSL and unless trivially unobtrusive, the Node.js core team is
discouraged from accepting changes that support BoringSSL. The appearance of
support for BoringSSL will send the wrong message to users regarding its
suitability as an OpenSSL replacement and Node.js' willingness to maintain
support.

[OpenSSL 3.0 and FIPS Update]: https://www.openssl.org/blog/blog/2019/02/13/FIPS-update/
[OpenSSL 3.0.0 Design]: https://www.openssl.org/docs/OpenSSL300Design.html
[OpenSSL Release Strategy]: https://www.openssl.org/policies/releasestrat.html
