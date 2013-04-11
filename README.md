This is a fork of [Dromaeo](https://github.com/jeresig/dromaeo) that tests the
performance impact of the ShadowDOM polyfill found at:

https://github.com/toolkitchen/ShadowDOM

This uses git submodules so you need to run:

```sh
git submodules init
git submodules update
```

(or `git clone --recursive`)

To build the test you need to run:

```sh
make web
```

To run the tests, start a local web server and point your browser to:

```
http://localhost:8000/web/index.html?dom#polyfill
```

The `#polyfill` hash tells the system to use the polyfill. Remove that to do
the native tests.
