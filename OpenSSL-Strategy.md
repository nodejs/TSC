# Node.js OpenSSL Strategy

The Node.js source tree contains a copy of OpenSSL. By default, Node.js compiles its own copy of OpenSSL and statically links this library into its binary. The `configure` tool allows for dynamic linking against a shared OpenSSL library. Whether this linking is possible is left for the compiler to determine at build and linking time.

## Node.js versions 4 to 9

Identical copies of the latest OpenSSL 1.0.2 version are included in Node.js releases from versions 4 to 9. Aside from some manual configuration that is required in order to support GYP builds (instead of the Python-based Configure script that OpenSSL ships) as described in [deps/openssl/doc/UPGRADING.md](https://github.com/nodejs/node/blob/master/deps/openssl/doc/UPGRADING.md), there are 4 floating patches that are applied on top of the plain OpenSSL 1.0.2 source:

* [c66c3d9fa](https://github.com/nodejs/node/commit/c66c3d9fa3f5bab0bdfe363dd947136cf8a3907f): `deps: fix openssl assembly error on ia32 win32`. A minor tweak to deps/openssl/openssl/crypto/perlasm/x86masm.pl to switch the instruction set referenced in ASM from 486 to 686, only affecting Windows on IA32.
* [42a8de2ac](https://github.com/nodejs/node/commit/42a8de2ac66b6953cbc731fdb0b128b8019643b2): `deps: fix asm build error of openssl in x86_win32`. A fix for deps/openssl/openssl/crypto/perlasm/x86masm.pl for ASM produced for Windows on IA32 as described in https://mta.openssl.org/pipermail/openssl-dev/2015-February/000651.html
* [2eb170874](https://github.com/nodejs/node/commit/2eb170874aa5e84e71b62caab7ac9792fd59c10f): `openssl: fix keypress requirement in apps on win32`. A fix for the `openssl` client application, used by the Node.js test suite, to properly accept stdin without requiring a physical keyboard. As described in <http://openssl.6102.n7.nabble.com/PATCH-s-client-Fix-keypress-requirement-with-redirected-input-on-Windows-td46787.html>.
* [664a65969](https://github.com/nodejs/node/commit/664a6596960655e214fef25e74d3285097703e95): `deps: add -no_rand_screen to openssl s_client`. Adds a `-no_rand_screen` command line option to the `openssl` client applicaiton, used by the Node.js test suite which skips invocation of the `RAND_screen()` call on Windows in order to speed up some of the Node.js TLS tests. Use of this can be found in many of the `test/*/test-{tls,https}-*` test files.

## Node.js binaries in practice

There are different strategies in use for linking Node.js to OpenSSL in the wild. The most notable sources of binaries and the strategies used are as follows:

* **nodejs.org**: Binaries produced by the Node.js Build infrastructure across all supported architectures use the default `configure` configuration for OpenSSL and therefore compile and statically link in the OpenSSL source as it ships with Node.js. It should be noted that nodejs.org is the source of binaries for **nvm** which is in heavy client use and is also used by Travis-CI to fetch and install Node.js.
* **Linux Distributions**: Binaries shipped with Debian, Ubuntu, CentOS, RHEL, Fedora and the majority of other Linux distributions follow a standard policy of separating dependencies and dynamically linking wherever possible. Therefore, the Node.js packages on these systems are linked via the packaging dependency mechanisms to OpenSSL 1.0.2 packages and the `node` binaries that ship by default on these platforms use the shared OpenSSL 1.0.2 library installed on that by those packages. Therefore, the floating patches do not apply and it is possible that a different version of OpenSSL 1.0.2 is in use by Node.js than the version that was shipped in the source tree.
* **NodeSource Linux Distributions**: Binaries shipped by this heavily used source do not follow Linux distribution policy and use the default `configure` configuration for OpenSSL and therefore compile and statically link in the OpenSSL source as it ships with Node.js.
* **Homebrew**: The [formula](https://github.com/Homebrew/homebrew-core/blob/master/Formula/node.rb) for Node.js as distributed on macOS by the popular `brew` command, by default, will compile with using the default `configure` configuration. It is possible to override this using a `with-openssl` option which will compile against the version of OpenSSL that was most recently installed with `brew` but this is not believed to be in common use.

## OpenSSL release lines and LTS

As of writing, there are two officially supported versions of OpenSSL as per the [OpenSSL Release Strategy](https://www.openssl.org/policies/releasestrat.html)

* Version 1.0.2: designated Long-term Support (LTS) which will be supported until 2019-12-31
* Version 1.1.0: supported until 2018-08-31

The [OpenSSL Roadmap](https://www.openssl.org/policies/roadmap.html) does not yet outline a new LTS version, however the OpenSSL team have variously made statements (e.g. [here](https://github.com/nodejs/node/issues/4270#issuecomment-355151355)) that a new LTS release line will be designated at some point in 2018.

As the 1.0.2 support timeframe does not extend for the entirety of what should be the support timeframe for Node.js version 8 (2020-04), the version 8 EOL date has been [contracted](https://github.com/nodejs/release#release-schedule) to coincide with the OpenSSL 1.0.2 EOL date at the end of 2019.

### OpenSSL 1.1.0

https://github.com/nodejs/node/pull/16130

### OpenSSL 1.1.1

As per the OpenSSL Roadmap, the focus of current development on the 1.1.1 release line is TLS 1.3. Unfortunately, the OpenSSL team is not currently prepared to designate 1.1.1 the next TLS line but have made a commitment that it will be both API and ABI compatible with OpenSSL 1.1.0 (see [here](https://www.openssl.org/blog/blog/2017/05/04/tlsv1.3/) and [here](https://github.com/openssl/openssl/issues/5120#issuecomment-359212121)).

## Node.js 10

## FIPS

## OpenSSL forks: LibreSSL and BoringSSL




