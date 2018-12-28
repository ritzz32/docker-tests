FROM envoyproxy/envoy

RUN apt-get update && apt-get -q install -y \
    curl \
    dnsutils
COPY envoy-edge.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml
