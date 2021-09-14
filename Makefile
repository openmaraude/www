DOCKER_IMAGE = openmaraude/www
DOCKER_PORT = 3000:80
RELEASE ?= latest

run: build
	docker run --rm -ti -p ${DOCKER_PORT} ${DOCKER_IMAGE}

build:
	docker build -t ${DOCKER_IMAGE}:${RELEASE} .

shell: build
	docker run --rm -ti -p ${DOCKER_PORT} ${DOCKER_IMAGE}:${RELEASE} bash

release: build
	docker push ${DOCKER_IMAGE}:${RELEASE}

tag:
	git tag $(shell printf "$$(date '+%Y%m%d')-%03d" $$(($$(git tag --list "$$(date '+%Y%m%d')-*" --sort -version:refname | head -1 | awk -F- '{print $$2}')+1)))
