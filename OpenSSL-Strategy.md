# Node.js OpenSSL Strategy

The Node.js source tree contains a copy of OpenSSL. By default, Node.js compiles its own copy of OpenSSL and statically links this library into its binary. The `configure` tool allows for dynamic linking against a shared OpenSSL library. Using a combination of the `--shared-openssl`, `--shared-openssl-includes`, `--shared-openssl-libname` and `--shared-openssl-libpath` arguments to `configure`, compilation of Node.js will skip over its bundled copy of the OpenSSL source and link to dynamic library version of OpenSSL, or a suitably compatible OpenSSL equivalent. Whether this linking is possible is left for the compiler to determine at build and linking time.

## Node.js versions 4 to 9

Identical copies of the latest OpenSSL 1.0.2 version are included in Node.js releases from versions 4 to 9. Aside from some manual configuration that is required in order to support GYP builds (instead of the Perl-based Configure script that OpenSSL ships) as described in [deps/openssl/doc/UPGRADING.md](https://github.com/nodejs/node/blob/master/deps/openssl/doc/UPGRADING.md), there are 4 floating patches that are applied on top of the plain OpenSSL 1.0.2 source:

* [c66c3d9fa](https://github.com/nodejs/node/commit/c66c3d9fa3f5bab0bdfe363dd947136cf8a3907f): `deps: fix openssl assembly error on ia32 win32`. A minor tweak to deps/openssl/openssl/crypto/perlasm/x86masm.pl to switch the instruction set referenced in ASM from 486 to 686, only affecting Windows on IA32.
* [42a8de2ac](https://github.com/nodejs/node/commit/42a8de2ac66b6953cbc731fdb0b128b8019643b2): `deps: fix asm build error of openssl in x86_win32`. A fix for deps/openssl/openssl/crypto/perlasm/x86masm.pl for ASM produced for Windows on IA32 as described in https://mta.openssl.org/pipermail/openssl-dev/2015-February/000651.html
* [2eb170874](https://github.com/nodejs/node/commit/2eb170874aa5e84e71b62caab7ac9792fd59c10f): `openssl: fix keypress requirement in apps on win32`. A fix for the `openssl` client application, used by the Node.js test suite, to properly accept stdin without requiring a physical keyboard. As described in <http://openssl.6102.n7.nabble.com/PATCH-s-client-Fix-keypress-requirement-with-redirected-input-on-Windows-td46787.html>.
* [664a65969](https://github.com/nodejs/node/commit/664a6596960655e214fef25e74d3285097703e95): `deps: add -no_rand_screen to openssl s_client`. Adds a `-no_rand_screen` command line option to the `openssl` client applicaiton, used by the Node.js test suite which skips invocation of the `RAND_screen()` call on Windows in order to speed up some of the Node.js TLS tests. Use of this can be found in many of the `test/*/test-{tls,https}-*` test files.

## Node.js binaries in practice

There are different strategies in use for linking Node.js to OpenSSL in the wild. The most notable sources of binaries and the strategies used are as follows:

* **nodejs.org**: Binaries produced by the Node.js Build infrastructure across all supported architectures use the default `configure` configuration for OpenSSL and therefore compile and statically link in the OpenSSL source as it ships with Node.js. It should be noted that nodejs.org is the source of binaries for **nvm** which is in heavy client use and is also used by Travis-CI to fetch and install Node.js.
* **Linux Distributions**: Binaries shipped with Debian, Ubuntu, CentOS, RHEL, Fedora and the majority of other Linux distributions follow a standard policy of separating dependencies and dynamically linking wherever possible. Therefore, the Node.js packages on these systems are linked via the packaging dependency mechanisms to OpenSSL 1.0.2 packages and the `node` binaries that ship by default on these platforms use the shared OpenSSL 1.0.2 library installed on that by those packages. Therefore, the floating patches do not apply and it is possible that a different version of OpenSSL 1.0.2 is in use by Node.js than the version that was shipped in the source tree.
* **NodeSource Linux Distributions**: Binaries shipped by this heavily used source do not follow Linux distribution policy and use the default `configure` configuration for OpenSSL and therefore compile and statically link in the OpenSSL source as it ships with Node.js.
* **Homebrew**: The [formula](https://github.com/Homebrew/homebrew-core/blob/master/Formula/node.rb) for Node.js as distributed on macOS by the popular `brew` command, by default, will compile using the default `configure` configuration. It is possible to override this using a `with-openssl` option which will compile against the version of OpenSSL that was most recently installed with `brew` but this is not believed to be in common use.

## OpenSSL release lines and LTS

As of writing, there are two officially supported versions of OpenSSL as per the [OpenSSL Release Strategy](https://www.openssl.org/policies/releasestrat.html)

* Version 1.0.2: designated Long-term Support (LTS) which will be supported until 2019-12-31
* Version 1.1.0: supported until 2018-08-31

The [OpenSSL Roadmap](https://www.openssl.org/policies/roadmap.html) does not yet outline a new LTS version, however the OpenSSL team have variously made statements (e.g. [here](https://github.com/nodejs/node/issues/4270#issuecomment-355151355)) that a new LTS release line will be designated at some point in 2018.

As the 1.0.2 support timeframe does not extend for the entirety of what should be the support timeframe for Node.js version 8 (2020-04), the version 8 EOL date has been [contracted](https://github.com/nodejs/release#release-schedule) to coincide with the OpenSSL 1.0.2 EOL date at the end of 2019.

### OpenSSL 1.1.0

OpenSSL 1.1.0 represents a fairly major rework of the codebase, at least in comparison to its slow evolution until this point. The external API has some major departures from 1.0.2. However, support for compiling against an external OpenSSL 1.1.0 library (dynamically linked) was [added](https://github.com/nodejs/node/pull/16130) to Node.js' master branch in late 2017.

Even though OpenSSL 1.1.0 is only supported until August 2018, the API shift is an important stage in Node.js' adaptation.

### OpenSSL 1.1.1

As per the OpenSSL Roadmap, the focus of current development on the 1.1.1 release line is TLS 1.3. Unfortunately, the OpenSSL team is not currently prepared to designate 1.1.1 the next TLS line but have made a commitment that it will be both API and ABI compatible with OpenSSL 1.1.0 (see [here](https://www.openssl.org/blog/blog/2017/05/04/tlsv1.3/) and [here](https://github.com/openssl/openssl/issues/5120#issuecomment-359212121)).

## FIPS

The [Federal Information Processing Standard](https://en.wikipedia.org/wiki/FIPS_140-2) is managed by the NIST. Publication 140-2 is a US government standard used to approve cryptographic software.

Various organizations rely on the FIPS standard and mandate that software that they use conform appropriately. OpenSSL itself is not FIPS "validated", instead a separate "software component" called the "OpenSSL FIPS Object Module" has been created for the purpose of validation. It is a drop-in replacement for OpenSSL such that software using the OpenSSL API can be adapted to use it. In order to retain FIPS compliance, the OpenSSL FIPS Object Module source code must be obtained via a secure path as dictated by a security policy and the source must be compiled according to specific steps without variation.

Node.js compiled against the OpenSSL FIPS Object Module does not make Node.js itself FIPS validated. Instructions for compiling Node.js against the Object Module along with links to further documentation are detailed in [BUILDING.md](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-with-fips-compliant-openssl).

The OpenSSL FIPS Object Module is compatible with OpenSSL 1.0.2 and Node.js has been able to build with this module since 2015, prior to Node.js 4. It requires some modification of the Node.js internals (see `git grep FIPS -- lib/ src/`) for this to work properly.

Development and validation of a FIPS software component is time consuming and expensive. The OpenSSL team have yet to commit to a timeframe for development of the next generation of its FIPS Object Module, however they have stated that it is their next priority ["after 1.1.1"](https://www.openssl.org/policies/roadmap.html). Therefore, any user requiring FIPS validated 

## Node.js 10

OpenSSL LTS support timing, the lack of OpenSSL LTS planning and the lack of a clear timeframe for a new FIPS module complicates Node.js 10.

As of the time of writing, the strategy for OpenSSL with Node.js 10 is:

 * OpenSSL 1.1.0 to initially be the assumed default compile target.
 * Bundle a copy of OpenSSL 1.1.0 in the source tree, along with any floating patches still required for improved Windows support and test-runner speed-ups.
 * Remain backward-compatible with OpenSSL 1.0.2 via dynamic linking for the lifetime of Node.js 10 (including beyond the end of official 1.0.2 support lifetime in order to support extended-life Linux distributions that take on the 1.0.2 support burden such as RHEL), verified by the Node.js CI system.
 * Upgrade to OpenSSL 1.1.1 when made generally available and Node.js 10 can retain ABI and API compatibility.

ABI and API compatibility cannot be guaranteed in a switch from 1.1.0 to 1.1.1 although, as previously mentioned, the OpenSSL team have signaled their intention for this to be the case. The Node.js team should work with the OpenSSL team to ensure this is the case and smooth the upgrade path.

This strategy must be communicated to users of Node.js 10 early and often. There is potential for instability and a change in default OpenSSL version is unprecedented and therefore unexpected. The potential for breaking API and/or ABI may also cause disruption, potentially requiring an increment of `NODE_MODULE_VERISION`, which will also be unprecedented within a single release line. It is important that users be aware of this possibility.

## OpenSSL forks: LibreSSL and BoringSSL

**Node.js does not officially support compiling against OpenSSL-compatible libraries** aside from the OpenSSL FIPS Object Module. However, Node.js welcomes contributions which may improve compatibility where those contributions are relatively unobtrusive.

### [LibreSSL](https://www.libressl.org/)

[Some work](https://github.com/nodejs/node/pull/9376) has been done to enable compilation against LibreSSL. Some operating system distributions ship LibreSSL instead of OpenSSL and therefore require patching of software such as Node.js. This is already done in practice, external to the Node.js codebase and without any support from the Node.js core team. Due to the close compatibility between LibreSSL and OpenSSL, full and unobtrusive support for compiling against LibreSSL could be landed into the Node.js codebase given developers interested in completing this task.

Even if such support was to land in the Node.js codebase, the Node.js project will not commit to officially supporting LibreSSL or even maintaining full compatibility in an ongoing basis. As is the case for some operating systems that are not officially supported, ongoing compatibility will need to be monitored by interested parties who will also need to submit fixes as required.

### [BoringSSL](https://boringssl.googlesource.com/boringssl/)

> Although BoringSSL is an open source project, it is not intended for general use, as OpenSSL is. We don't recommend that third parties depend upon it. Doing so is likely to be frustrating because there are no guarantees of API or ABI stability.

Google have made it clear that BoringSSL is not intended for general use outside of their own internal needs. Node.js will not officially support BoringSSL and unless trivially unobtrusive, the Node.js core team is discouraged from accepting changes that support BoringSSL. The appearance of support for BoringSSL will send the wrong message to users regarding its suitability as an OpenSSL replacement and Node.js' willingness to maintain support.
