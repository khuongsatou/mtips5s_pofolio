#!/bin/bash
# build-and-push.sh

VERSION=${1:-dev_1}
IMAGE_NAME="khuong123/mtips5s_pofolio"

echo "Building ${IMAGE_NAME}:${VERSION}..."
docker build --platform linux/amd64 -t ${IMAGE_NAME}:${VERSION} .

echo "Tagging as latest..."
docker tag ${IMAGE_NAME}:${VERSION} ${IMAGE_NAME}:latest

echo "Pushing to Docker Hub..."
docker push ${IMAGE_NAME}:${VERSION}
docker push ${IMAGE_NAME}:latest

echo "Done! Image pushed: ${IMAGE_NAME}:${VERSION}"