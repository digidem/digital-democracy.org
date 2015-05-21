all: \
	_sass/compass \
	_sass/foundation

_sass/compass:
	mkdir -p $@
	curl -L https://github.com/Compass/compass/archive/0.12.7.tar.gz \
	| tar --strip-components=5 -C $@ -xz */frameworks/compass/stylesheets/compass

_sass/foundation:
	mkdir -p $@
	curl -L https://github.com/zurb/foundation/archive/v5.5.2.tar.gz \
	| tar --strip-components=3 -C $@ -xz */scss/foundation

clean:
	rm -rf _sass/compass
	rm -rf _sass/foundation
